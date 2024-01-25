<script>
import Footer from '../../components/Footer.vue';
import axios from 'axios';
import * as imageConversion from 'image-conversion';
export default {
    data() {
        return {
            //更新會員資訊
            newName: "",
            newPhone: "",
            newEmail: "",
            //會員圖片
            useravatar: "",

            //更改密碼
            oldPwd: "",
            newPwd: "",
            checkNewPwd: "",

            //貼文
            topic: "",
            text: "",

            msgavatar: "",

            //頁面切換
            personInfoPage: true,
            orderPage: false,
            messagePage: false,

            cookie: "",
            memberInfo: "",
        }
    },
    methods: {
        uploadImg(e) {
            let files = e.target.files || e.dataTransfer.files
            let id = e.target.id
            if (!files.length) return
            this.picavalue = files[0]
            console.log(this.picavalue.size / 1024)
            if (this.picavalue.size / 1024 > 10240) {
                this.$vux.alert.show({
                    title: '溫馨提示',
                    content: '圖片過大，請重新上傳'
                })
            } else {
                this.text1 = '正在獲取圖片'
                this.imgPreview(this.picavalue, id)

                this.file = event.target.files[0]
                let filereader = new FileReader();
                filereader.readAsDataURL(this.file)
                filereader.addEventListener("load", () => {
                    this.useravatar = filereader.result;
                    console.warn(this.useravatar)
                })
            }
        },
        //獲取圖片
        imgPreview(file, id) {
            let self = this
            //判斷支不支持FileReader
            if (!file || !window.FileReader) return false
            if (/^image/.test(file.type)) {
                //創建一個reader
                let reader = new FileReader()
                //將圖片轉成base64格式
                reader.readAsDataURL(file)
                //讀取成功後的回調
                reader.onloadend = function () {
                    let result = this.result
                    let img = new Image()
                    img.src = result
                    console.log('********未壓縮前的圖片大小********')
                    console.log(result.length / 1024)
                    img.onload = function () {
                        let data = self.compress(img, 0.3)
                        self.uploadImg(data, id)
                    }
                }
            }
        },
        // 壓縮圖片
        compress(img, size) {
            let canvas = document.createElement('canvas')
            let ctx = canvas.getContext('2d')
            let initSize = img.src.length
            let width = img.width
            let height = img.height
            canvas.width = width
            canvas.height = height
            // 鋪底色
            ctx.fillStyle = '#fff'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0, width, height)
            //進行最小壓縮
            let ndata = canvas.toDataURL('image/jpeg', size)
            console.log('*******壓縮後的圖片大小*******')
            // console.log(ndata)
            console.log(ndata.length / 1024)
            return ndata
        },
        // uploadImg(base64, id) {   
        //     console.log('得到壓縮後的base64傳入後臺') 
        // },
        //使用者照片上傳
        onfileuser(event) {
            this.file = event.target.files[0]
            let filereader = new FileReader();
            filereader.readAsDataURL(this.file)

            filereader.addEventListener("load", () => {
                this.useravatar = filereader.result;
                console.warn(this.useravatar)
            })
        },
        test(event) {
            var fileInput = document.getElementById('fileInput');

            // 检查是否有选中文件
            if (fileInput.files.length > 0) {
                var filePath = URL.createObjectURL(fileInput.files[0]);
                console.log("文件路径:", filePath);
            } else {
                console.log("没有选中文件");
            }
        },
        //貼文照片上傳
        onfilemsg(event) {
            this.file = event.target.files[0]
            let filereader = new FileReader();
            filereader.readAsDataURL(this.file)
            filereader.addEventListener("load", () => {
                this.msgavatar = filereader.result;
                console.warn(this.msgavatar)
            })
        },
        test() {
            let arr = document.querySelectorAll(".img");
            Promise.all(Array.from(arr).map((item) => {
                if (item.files[0] != undefined) {
                    this.imgConvert((item.className.split("")[0], (item.files[0])))
                }
                return Promise.resolve();
            }))
        },
        //圖片轉換
        imgConvert(key, data) {
            return new Promise((resolve) => {
                imageConversion.compressAccurately(data, 80).then((res) => {
                    let reader = new FileReader();
                    if (res) {
                        reader.readAsDataURL(res)
                    }
                    reader.onload = () => {
                        let base64 = reader.result;
                        this.map.set(key, base64);
                        resolve(base64);
                    }
                })
            })
        },
        //貼文取消清除輸入
        cancle() {
            this.topic = "",
                this.text = ""

        },
        //頁面切換
        personInfoShow() {
            this.personInfoPage = true
            this.orderPage = false,
                this.messagePage = false
        },
        orderPageShow() {
            this.orderPage = true
            this.personInfoPage = false,
                this.messagePage = false
        },
        messagePageShow() {
            this.messagePage = true
            this.personInfoPage = false,
                this.orderPage = false
        },
        //留言板
        messageCreate() {
            axios({
                url: 'http://localhost:8080/message/messageCreate',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                data: {
                    memberName: this.memberInfo.memberName,
                    roomId: this.topic,
                    roomMessageBoardDescription: this.text,
                },
            }).then(res => {
                console.log(res.data)
                if (res.data.message == "Successful!!") {
                    swal("成功", "發佈完成", "success")
                        .then((willRefresh) => {
                            if (willRefresh) {
                                // 在这里可以执行页面刷新的操作

                            }
                        });
                } else {
                    swal("失敗", "發生未知錯誤", "error");
                }
            })
        },
        //更新會員資訊
        updateMemberInfo() {
            axios({
                url: 'http://localhost:8080/member/upDate',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    memberId: this.memberInfo.memberId
                },
                data: {
                    memberName: this.newName,
                    memberPhone: this.newPhone,
                    memberEmail: this.newEmail,
                    memberPhoto: this.useravatar
                },
            }).then(res => {
                console.log(res.data)
                if (res.data.message == "Successful!!") {
                    swal("成功", "更新完成", "success")
                        .then((willRefresh) => {
                            if (willRefresh) {
                                // 在这里可以执行页面刷新的操作
                            }
                        });
                } else {
                    swal("失敗", "發生未知錯誤", "error");
                }
            })
            this.newName = "",
                this.newPhone = "",
                this.newEmail = ""
        },
        //變更密碼
        updatePwd() {
            axios({
                url: 'http://localhost:8080/member/pwdUpDate',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    memberId: this.memberInfo.memberId
                },
                data: {
                    pwd: this.oldPwd,
                    newPwd: this.newPwd,
                    confirmPwd: this.checkNewPwd
                },
            }).then(res => {
                console.log(res)
                console.log(res.data)
                if (res.data.message == "Successful!!") {
                    swal("成功", "變更完成", "success")
                        .then((willRefresh) => {
                            if (willRefresh) {
                                // 在这里可以执行页面刷新的操作
                            }
                        });
                } else {
                    swal("失敗", "發生未知錯誤", "error");
                }
            })
            this.oldPwd = "",
                this.newPwd = "",
                this.checkNewPwd = ""
        }
    },
    mounted() {
        this.cookie = document.cookie.split("=")[1];

        // console.log(this.cookie);

        axios({
            url: 'http://localhost:8080/member/member',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                account: this.cookie
            },
            data: {

            },
        }).then(res => {
            res.data.memberList.forEach(element => {
                this.memberInfo = element
                console.log(this.memberInfo);
            });
            // this.memberInfo=
            // console.log(this.memberInfo);
        })
    },
    components: {
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="buttonArea">
            <button type=button @click="personInfoShow()"><i class="fa-solid fa-user"></i>會員資料</button>
            <button type=button @click="orderPageShow()"><i class="fa-solid fa-list"></i>訂單資訊</button>
            <button type=button @click="messagePageShow()"><i class="fa-solid fa-message"></i>發表貼文</button>
        </div>
        <!-- 會員資料頁面 -->
        <div class="personInfo" v-if="personInfoPage">
            <p id="location"><i class="fa-solid fa-map-pin"></i>會員資訊</p>
            <hr>
            <div class="user">
                <label>
                    <!-- <input id="upload_input" type="file" @change="onfileuser">
                    <img :src="useravatar" class="upload_cover" alt=""> -->
                    <!-- <img :src="IDc1" alt="" class="upload_cover">
                    <input class="upload_cover" id="IDc1" name="IDc1" type="file"
                    @change="uploadIMG"> -->
                    <input id="upload_input" type="file" @change="onfileuser">
                    <!-- <img src="../../../public/userimg.png" class="upload_cover" alt=""> -->
                    <img :src="useravatar" class="upload_cover" alt="">
                </label>
            </div>
            <div class="name">
                <p>姓名 : {{ this.memberInfo.memberName }}</p>
            </div>
            <div class="phone">
                <p>電話 : 0{{ this.memberInfo.memberPhone }}</p>
            </div>
            <div class="email">
                <p>E-mail : {{ this.memberInfo.memberEmail }}</p>
                
            </div>
            <div class="personInfoBtn">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">修改資料
                </button>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalPwd">修改密碼
                </button>
                <button type="button" @click="updateMemberInfo()">儲存</button>
            </div>
        </div>
        <!-- 更改資料modal視窗 -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">更改資料</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">更改姓名 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newName">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">更改電話 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newPhone">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">更改e-mail :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newEmail">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal"
                            @click="updateMemberInfo()">確認更改</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 更改密碼modal視窗 -->
        <div class="modal fade" id="exampleModalPwd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">更改密碼</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">請輸入舊密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.oldPwd">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">請輸入新密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newPwd">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">請確認新密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.checkNewPwd">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal"
                            @click="updatePwd()">確認更改</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 訂單資訊頁面 -->
        <div class="order" v-if="orderPage">
            <p id="location"><i class="fa-solid fa-map-pin"></i>訂單資訊</p>
            <hr>
            <div class="orderNum">
                <p>訂單編號 : S01</p>
            </div>
            <div class="orderItem">
                <p>訂單內容 : 舒適雙人房</p>
            </div>
            <div class="extra">
                <p>加購項目 : 早餐,摩托車,sup,來回船票</p>
            </div>
            <div class="start">
                <p>入住時間 : 2024/02/14</p>
            </div>
            <div class="end">
                <p>退房時間 : 2024/02/15</p>
            </div>
            <div class="pay">
                <p>付款期限 : 2024/02/10</p>
            </div>
        </div>
        <!-- 發表回饋頁面 -->
        <div class="message" v-if="messagePage">
            <p id="location"><i class="fa-solid fa-map-pin"></i>貼文</p>
            <hr>
            <div class="topic">
                <p>標題</p>
                <input type="text" placeholder="請輸入標題" v-model="this.topic">
            </div>
            <div class="text">
                <p>內容</p>
                <textarea placeholder="請輸入內容" v-model="this.text"></textarea>
            </div>
            <div class="img">
                <p>新增相片</p>
                <label>
                    <i class="fa-solid fa-images" id="addicon"></i>
                    <input type="file" class="addimg" @change="onfilemsg">
                </label>
            </div>
            <div class="msgBtnArea">
                <button type="button" @click="cancle()">取消</button>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalmsg">預覽
                </button>
            </div>
        </div>
        <!-- 貼文預覽視窗 -->
        <div class="modal fade" id="exampleModalmsg" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">貼文預覽</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">標題 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.topic">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">內容 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.text">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">照片 :</label>
                                <br>
                                <div class="imgArea">
                                    <img :src="msgavatar" class="msgimg" alt="">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal"
                            @click="messageCreate()">發佈</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
.content {
    width: 63vw;
    height: 65vh;
    margin: auto;
    margin-top: 6vmin;
    display: flex;
    padding-top: 2vmin;
    position: relative;

    i {
        margin-right: 2vmin;
    }

    .buttonArea {
        width: 15vw;
        height: 30vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin-top: 8vmin;
        margin-right: 18vmin;

        button {
            width: 13vw;
            height: 7vh;
            border: none;
            border-radius: 5px;
            color: #797A7E;
            font-size: 16pt;

            &:hover {
                background-color: #797A7E;
                color: white;
            }

            &:active {
                background-color: #F7F2E7;
                color: #797A7E;
            }
        }
    }

    .personInfo {
        width: 38vw;
        height: 35vh;
        margin-top: 1%;

        #location {
            font-size: 24pt;
            font-weight: bold;
            color: #82AAE3;
            margin: 0;
        }

        .user {
            .upload_cover {
                width: 20vmin;
                height: 20vmin;
                cursor: pointer;
                border-radius: 50%;
                position: absolute;
                right: 6%;
                top: -3%;
                border: 1px solid#797A7E;
                background-image: url('../../../public/userimg.png');
                background-size: contain;
            }

            #upload_input {
                display: none;
            }
        }

        p {
            font-size: 16pt;
            color: #797A7E;
            margin-bottom: 3vmin;
        }

        .personInfoBtn {
            width: 30vw;
            height: 5vh;
            display: flex;
            justify-content: space-around;
            position: absolute;
            right: 6%;
            bottom: 10%;

            button {
                width: 8vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
                font-size: 13pt;

                &:hover {
                    background-color: #797A7E;
                    color: white;
                }

                &:active {
                    background-color: #F7F2E7;
                    color: #797A7E;
                }
            }
        }
    }

    .order {
        width: 30vw;

        #location {
            font-size: 24pt;
            font-weight: bold;
            color: #82AAE3;
            margin: 0;
        }

        p {
            font-size: 16pt;
            color: #797A7E;
            margin-bottom: 3vmin;
        }
    }

    .message {
        width: 30vw;
        height: 57vh;
        position: relative;

        #location {
            font-size: 24pt;
            font-weight: bold;
            color: #82AAE3;
            margin: 0;
        }

        .topic {
            p {
                margin: 0;
                font-size: 16pt;
                color: #797A7E;
            }

            input {
                width: 30vw;
                height: 5vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: #D9D9D9;
                padding-left: 2vmin;
                margin-bottom: 2vmin;
            }
        }

        .text {
            p {
                margin: 0;
                font-size: 16pt;
                color: #797A7E;
            }

            textarea {
                width: 30vw;
                height: 15vh;
                border-radius: 5px;
                outline: none;
                margin-bottom: 1vmin;
                padding: 1vmin;
            }
        }

        .img {
            display: flex;

            p {
                margin: 0;
                font-size: 16pt;
                color: #797A7E;
            }

            #addicon {
                font-size: 22pt;
                color: #797A7E;
                margin-left: 1vmin;
            }

            .addimg {
                display: none;
            }
        }

        .msgBtnArea {
            width: 20vw;
            height: 6vh;
            display: flex;
            justify-content: space-around;
            position: absolute;
            right: 0;
            bottom: -7%;

            button {
                width: 8vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
                font-size: 13pt;

                &:hover {
                    background-color: #797A7E;
                    color: white;
                }

                &:active {
                    background-color: #F7F2E7;
                    color: #797A7E;
                }
            }
        }
    }

    .modal-content {
        .modal-body {
            .mb-3 {
                .msgimg {
                    width: 15vw;
                    height: 20vh;
                    border-radius: 5px;
                }
            }
        }
    }
}

@media(max-width:1200px) {
    .content {
        width: 80vw;
        height: 78vh;
        display: block;

        .buttonArea {
            width: 80vw;
            height: 10vh;
            margin-top: 0;
            margin-bottom: 12vmin;
            flex-direction: row;

            button {
                width: 20vw;
                height: 5vh;
                font-size: 18pt;
            }
        }

        .personInfo {
            width: 75vw;
            margin: auto;

            #location {
                font-size: 30pt;
            }

            .user {
                .upload_cover {
                    width: 17vmin;
                    height: 17vmin;
                    right: 4%;
                    top: 20%;
                }
            }

            p {
                font-size: 25pt;
            }

            .personInfoBtn {
                width: 60vw;

                button {
                    width: 18vw;
                    height: 5vh;
                    font-size: 18pt;
                }
            }
        }

        .order {
            width: 75vw;
            margin: auto;

            #location {
                font-size: 30pt;
            }

            p {
                font-size: 24pt;
            }
        }

        .message {
            width: 75vw;
            height: 50vh;
            margin: auto;

            #location {
                font-size: 30pt;
            }

            .topic {
                p {
                    font-size: 25pt;
                }

                input {
                    width: 75vw;
                    height: 4vh;
                    margin-bottom: 3vmin;
                }
            }

            .text {
                p {
                    font-size: 25pt;
                }

                textarea {
                    width: 75vw;
                    height: 13vh;
                    margin-bottom: 3vmin;
                }
            }

            .img {
                p {
                    font-size: 25pt;
                }

                #addicon {
                    margin-top: 1vmin;
                    font-size: 26pt;
                }
            }

            .msgBtnArea {
                width: 40vw;

                button {
                    width: 18vw;
                    height: 4vh;
                    font-size: 20pt;
                }
            }
        }
    }
}

@media(max-width:992px) {
    .content {
        .personInfo {
            .user {
                .upload_cover {
                    width: 20vmin;
                    height: 20vmin;
                }
            }
        }

        .order {
            p {
                font-size: 22pt;
            }
        }

        .message {
            .msgBtnArea {
                button {
                    font-size: 18pt;
                }
            }
        }
    }
}

@media(max-width:576px) {
    .content {
        height: 79.5vh;

        .buttonArea {
            margin-bottom: 17vmin;

            button {
                width: 24vw;
                font-size: 12pt;
            }
        }

        .personInfo {
            #location {
                font-size: 22pt;
            }

            .user {
                height: 1vmin;

                .upload_cover {
                    width: 23vmin;
                    height: 23vmin;
                    top: 20%;
                }
            }

            p {
                font-size: 20pt;
            }

            .personInfoBtn {
                width: 75vw;
                right: 3%;
                bottom: 9%;

                button {
                    width: 20vw;
                    font-size: 13pt;
                }
            }
        }

        .order {
            #location {
                font-size: 22pt;
            }

            p {
                font-size: 17pt;
            }
        }

        .message {
            #location {
                font-size: 22pt;
            }

            .topic {
                p {
                    font-size: 17pt;
                }

                input {
                    margin-bottom: 5vmin;
                }
            }

            .text {
                p {
                    font-size: 17pt;
                }

                textarea {
                    margin-bottom: 5vmin;
                }
            }

            .img {
                p {
                    font-size: 17pt;
                }

                #addicon {
                    font-size: 24pt;
                }
            }

            .msgBtnArea {
                button {
                    bottom: -9%;
                }
            }
        }
    }
}

@media(max-width:414px) {
    .content {
        .buttonArea {
            button {
                font-size: 11pt;
            }
        }

        .personInfo {
            #location {
                font-size: 20pt;
            }

            .user {
                .upload_cover {
                    width: 25vmin;
                    height: 25vmin;
                    top: 18%;
                }
            }

            p {
                font-size: 16pt;
            }

            .personInfoBtn {
                button {
                    font-size: 12pt;
                }
            }
        }

        .order {
            #location {
                font-size: 20pt;
            }

            p {
                font-size: 16pt;
            }
        }

        .message {
            #location {
                font-size: 20pt;
            }

            .topic {
                p {
                    font-size: 16pt;
                }
            }

            .text {
                p {
                    font-size: 16pt;
                }
            }

            .img {
                p {
                    font-size: 16pt;
                }

                #addicon {
                    font-size: 22pt;
                }
            }

            .msgBtnArea {
                width: 50vw;
                bottom: -12%;

                button {
                    width: 22vw;
                    font-size: 14pt;
                }
            }
        }
    }
}</style>