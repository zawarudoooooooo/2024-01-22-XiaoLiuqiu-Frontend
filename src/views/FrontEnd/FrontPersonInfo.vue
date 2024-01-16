<script>
import Footer from '../../components/Footer.vue';
import axios from 'axios';
import * as imageConversion from 'image-conversion';
export default{
    data(){
        return{
            name:"",
            phone:"",
            email:"",

            useravatar:"",
            msgavatar:"",
            //頁面切換
            personInfoPage:true,
            orderPage:false,
            messagePage:false,

            cookie:"",
            memberInfo:"",
        }
    },
    methods:{
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

            this.file=event.target.files[0]
            let filereader=new FileReader();
            filereader.readAsDataURL(this.file)
            filereader.addEventListener("load",()=>{
                this.useravatar=filereader.result;
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
            reader.onloadend = function() {
            let result = this.result
            let img = new Image()
            img.src = result
            console.log('********未壓縮前的圖片大小********')
            console.log(result.length / 1024)
            img.onload = function() {
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
    //   uploadImg(base64, id) {
    //   		console.log('得到壓縮後的base64傳入後臺') 
    //   },
//使用者照片上傳
        onfileuser(event){
            this.file=event.target.files[0]
            let filereader=new FileReader();
            // imageConversion.compress(filereader,0.3).then(res=>{
            //     resolve(res);
            //     console.log("壓縮成功")
            // })
            filereader.readAsDataURL(this.file)
            filereader.addEventListener("load",()=>{
                this.useravatar=filereader.result;
                console.warn(this.useravatar)
            })
        },
//貼文照片上傳
        onfilemsg(event){
            this.file=event.target.files[0]
            let filereader=new FileReader();
            filereader.readAsDataURL(this.file)
            filereader.addEventListener("load",()=>{
                this.msgavatar=filereader.result;
                console.warn(this.msgavatar)
            })
        },
        test(){
            let arr = document.querySelectorAll(".img");
            Promise.all(Array.from(arr).map((item)=>{
                if(item.files[0] != undefined ){
                    this.imgConvert((item.className.split("")[0], (item.files[0])))
                }
                return Promise.resolve();
            }))
        },
//圖片轉換
        imgConvert(key, data){
            return new Promise((resolve) =>{
                imageConversion.compressAccurately(data, 80).then((res) =>{
                    let reader = new FileReader();
                    if(res){
                        reader.readAsDataURL(res)
                    }
                    reader.onload = () =>{
                        let base64 = reader.result;
                        this.map.set(key, base64);
                        resolve(base64);
                    }
                })
            })
        },
//頁面切換
        personInfoShow(){
            this.personInfoPage=true
            this.orderPage=false,
            this.messagePage=false
        },
        orderPageShow(){
            this.orderPage=true
            this.personInfoPage=false,
            this.messagePage=false
        },
        messagePageShow(){
            this.messagePage=true
            this.personInfoPage=false,
            this.orderPage=false
        },
    },
    mounted(){
        this.cookie=document.cookie.split("=")[1];

        // console.log(this.cookie);

        axios({
            url:'http://localhost:8080/member/member',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },  
            params:{
                account:this.cookie
            },
            data:{

            },
        }).then(res=>{
            res.data.memberList.forEach(element => {
                this.memberInfo=element
                // console.log(this.memberInfo);

            });
            // this.memberInfo=
            // console.log(this.memberInfo);
            })
    },
    components:{
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
                    <input id="upload_input" type="file" @change="uploadImg($event)">
                    <img :src="useravatar" class="upload_cover" alt="">
                </label>
            </div>
            <div class="name">
                <p>姓名 : {{this.memberInfo.memberName}}</p>
            </div>
            <div class="phone">
                <p>電話 : 0{{this.memberInfo.memberPhone}}</p>
            </div>
            <div class="email">
                <p>E-mail : {{this.memberInfo.memberEmail}}</p>
            </div>
            <div class="personInfoBtn">
                <button type="button"  data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">修改資料
                </button>
                <button type="button"  data-bs-toggle="modal" 
                        data-bs-target="#exampleModalPwd">修改密碼
                </button>
                <button type="button">儲存</button>
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
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">更改電話 :</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">更改e-mail :</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">確認更改</button>
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
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">請輸入新密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">請確認新密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">確認更改</button>
                    </div>
                </div>
            </div>
        </div>
<!-- 訂單資訊頁面 -->
        <div class="order" v-if="orderPage">
            <p id="location"><i class="fa-solid fa-map-pin"></i>訂單資訊</p>
            <hr>
            <div class="orderNum">
                <p>訂單編號 : A01</p>
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
                <p>付款期限 : </p>
            </div>
        </div>
<!-- 發表回饋頁面 -->
        <div class="message" v-if="messagePage">
            <p id="location"><i class="fa-solid fa-map-pin"></i>貼文</p>
            <hr>
            <div class="topic">
                <p>標題</p>
                <input type="text" placeholder="請輸入標題">
            </div>
            <div class="text">
                <p>內容</p>
                <textarea placeholder="請輸入內容"></textarea>
            </div>
            <div class="img">
                <p>新增相片</p>
                <label>
                    <i class="fa-solid fa-images" id="addicon"></i>
                    <input type="file" multiple="multiple" class="addimg" @change="onfilemsg">
                </label>
            </div>
            <div class="msgBtnArea">
                <button type="button"  data-bs-toggle="modal" 
                        data-bs-target="#exampleModalmsg">預覽
                </button>
                <button type="button">發布</button>
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
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">內容 :</label>
                                <input type="text" class="form-control" id="recipient-name">
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
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">確認</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<style lang="scss" scoped>
        .content{
        width: 63vw;
        height: 65vh;
        margin: auto;
        margin-top: 6vmin;
        display: flex;
        //border: 1px solid black;
        padding-top: 2vmin;
        position: relative;
        i{
            margin-right: 2vmin;
        }
        .buttonArea{
            width: 15vw;
            height: 30vh;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            //border: 1px solid black;
            margin-top: 8vmin;
            margin-right: 18vmin;
            button{
                width: 13vw;
                height: 7vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
                font-size: 16pt;
                &:hover{
                    background-color: #797A7E;
                    color: white;
                }
                &:active{
                    background-color: #F7F2E7;
                    color: #797A7E;
                }
            }
        }
        .personInfo{
            width: 25vw;
            height: 35vh;
            //border: 1px solid black;
            margin-top: 1%;
            #location{
                font-size: 24pt;
                font-weight: bold;
                color: #82AAE3;
                margin: 0;
            }           
            .user{
                .upload_cover{
                    width: 20vmin;
                    height: 20vmin;
                    cursor: pointer;
                    border-radius: 50%;
                    position: absolute;
                    right: 6%;
                    top: -3%;
                    border: 1px solid#797A7E;
                }
                #upload_input{
                    display: none;
                }
            }
            p{
                font-size: 16pt;
                color: #797A7E;
                margin-bottom: 3vmin;
            }
            .personInfoBtn{
                width: 20vw;
                height: 5vh;
                display: flex;
                justify-content: space-around;
                position: absolute;
                right: 6%;
                bottom: 10%;
                //border: 1px solid black;
                button{
                    width: 6vw;
                    height: 4.5vh;
                    border: none;
                    border-radius: 5px;
                    color: #797A7E;
                    font-size: 13pt;
                    &:hover{
                        background-color: #797A7E;
                        color: white;
                    }
                    &:active{
                        background-color: #F7F2E7;
                        color: #797A7E;
                    }
                }
            }
        }
        .order{
            width: 30vw;
            height: 40vh;
            //border: 1px solid black;
            #location{
                font-size: 24pt;
                font-weight: bold;
                color: #82AAE3;
                margin: 0;
            } 
            p{
                font-size: 16pt;
                color: #797A7E;
                margin-bottom: 3vmin;
            }
        }
        .message{
            width: 30vw;
            height: 58vh;
            //border: 1px solid black;
            position: relative;
            #location{
                font-size: 24pt;
                font-weight: bold;
                color: #82AAE3;
                margin: 0;
            } 
            .topic{
                p{
                    margin: 0;
                    font-size: 16pt;
                    color: #797A7E;
                }
                input{
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
            .text{
                p{
                    margin: 0;
                    font-size: 16pt;
                    color: #797A7E;
                }
                textarea{
                    width: 30vw;
                    height: 15vh;
                    border-radius: 5px;
                    outline: none;
                    margin-bottom: 1vmin;
                    padding: 1vmin;
                }
            }
            .img{
                display: flex;
                p{
                    margin: 0;
                    font-size: 16pt;
                    color: #797A7E;
                }
                #addicon{
                    font-size: 22pt;
                    color: #797A7E;
                    margin-left: 1vmin;
                }
                .addimg{
                    display: none;
                }
            }
            .msgBtnArea{
                width: 15vw;
                height: 10vh;
                //border: 1px solid black;
                display: flex;
                justify-content: space-around;
                position: absolute;
                right: 0;
                //top: 3%;
                bottom: -7%;
                button{
                    width: 6vw;
                    height: 4.5vh;
                    border: none;
                    border-radius: 5px;
                    color: #797A7E;
                    font-size: 13pt;
                    &:hover{
                        background-color: #797A7E;
                        color: white;
                    }
                    &:active{
                        background-color: #F7F2E7;
                        color: #797A7E;
                    }   
                }
            }
        }
        .modal-content{
            .modal-body{
                .mb-3{
                    .imgArea{
                        width: 25vw;
                        border: 1px solid black;
                        display: flex;
                        flex-wrap: wrap;
                        .msgimg{
                            width: 10vw;
                            height: 15vh;
                        }
                    }
                }
            }
        }
    }
</style>