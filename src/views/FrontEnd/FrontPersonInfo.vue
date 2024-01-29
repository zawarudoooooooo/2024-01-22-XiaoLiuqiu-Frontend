<script>
import Footer from '../../components/Footer.vue';
import axios from 'axios';
import swal from 'sweetalert';
import * as imageConversion from 'image-conversion';
export default{
    data(){
        return{
            //更新會員資訊
            newName:"",
            newPhone:"",
            newEmail:"",
            //會員圖片
            useravatar:"",
            img:"",
            ImgPhoto:"",
            memberImg:"",

            //更改密碼
            oldPwd:"",
            newPwd:"",
            checkNewPwd:"",

            //貼文
            topic:"",
            text:"",
            messageImg:"",

            msgavatar:"",

            //頁面切換
            personInfoPage:true,
            orderPage:false,
            messagePage:false,

            cookie:"",
            memberInfo:"",

            memberName:"",
            memberOrderArr:""
        }
    },
    methods:{
//貼文取消清除輸入
        cancle(){
            this.topic="",
            this.text=""
        },
//付款成功
        success(){
            swal("付款成功", "感謝您的訂購", "success");
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
        test10(){
            console.log(this.ImgPhoto);
        },
//留言板
        messageCreate(){
            axios({
            url:'http://localhost:8080/message/messageCreate',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },  
            
            data:{
                memberName:this.memberInfo.memberName,
                roomId:this.topic,
                roomMessageBoardDescription:this.text,
                messageImg:this.messageImg,
                memberImg:this.ImgPhoto
            },
        }).then(res => {
            console.log(res.data)
            if(res.data.message=="Successful!!"){
                swal("成功","發佈完成","success")
                .then((willRefresh) => {
                    if (willRefresh) {
                        // 在这里可以执行页面刷新的操作
                            
                        } 
                    });
                }else{
                    swal("失敗","發生未知錯誤","error");
                }
                this.cancle();
            })
        },
//更新會員資訊
        updateMemberInfo(){
            axios({
            url:'http://localhost:8080/member/upDate',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                memberId:this.memberInfo.memberId
            },             
            data:{
                memberName:this.newName,
                memberPhone:this.newPhone,
                memberEmail:this.newEmail,
            },
        }).then(res => {     
            console.log(res.data)
            if(res.data.message=="Successful!!"){
                swal("成功","更新完成","success")
                .then((willRefresh) => {
                    if (willRefresh) {  
                        // 在这里可以执行页面刷新的操作
                        } 
                    });
                }else{
                    swal("失敗","發生未知錯誤","error");
                }
            })
            this.newName="",
            this.newPhone="",
            this.newEmail=""
        },
        upDateMemberImg(){
            axios({
            url:'http://localhost:8080/member/imgUpDate',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                memberId:this.memberInfo.memberId
            },             
            data:{
                memberImg:this.img
            },
        }).then(res => {     
            console.log(res.data)
            
            })
        
        },
//變更密碼
        updatePwd(){
            axios({
            url:'http://localhost:8080/member/pwdUpDate',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                memberId:this.memberInfo.memberId
            },             
            data:{
                pwd:this.oldPwd,
                newPwd:this.newPwd,
                confirmPwd:this.checkNewPwd
            },
        }).then(res => { 
            console.log(res)
            console.log(res.data)
            if(res.data.message=="Successful!!"){
                swal("成功","變更完成","success")
                .then((willRefresh) => {
                    if (willRefresh) {  
                        // 在这里可以执行页面刷新的操作
                        } 
                    });
                }else{
                    swal("失敗","發生未知錯誤","error");
                }
            })
            this.oldPwd="",
            this.newPwd="",
            this.checkNewPwd=""
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            this.img=file.name
            console.log(this.img);
        },
        messageFileChange(event) {
            const file = event.target.files[0];
            this.messageImg=file.name
            console.log(this.messageImg);
        },
    },
    mounted(){
        this.cookie=document.cookie.split("=")[1];
        // console.log(this.cookie);
//會員資訊
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
                
                console.log(this.memberInfo);
                this.memberName=this.memberInfo.memberName
                // this.ImgPhoto="public\" +JSON.parse(this.memberInfo.memberImgPhoto)
                // console.log(   );
            });
            this.memberInfo.memberImgPhoto=JSON.parse(this.memberInfo.memberImgPhoto)
            // console.log(this.memberInfo.memberImgPhoto.memberImg);
            this.ImgPhoto=this.memberInfo.memberImgPhoto.memberImg
            // this.memberInfo=
            console.log(this.ImgPhoto);

            //會員訂單
            axios({
                url:'http://localhost:8080/order/searchMemberName',
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                params:{
                    memberName:this.memberName
                },
                data:{

                },
                }).then(res=>{
                    let order=[]
                    this.memberOrderArr=res.data.orderList
                    console.log(this.memberOrderArr);
                    this.memberOrderArr.forEach(item=>{
                        // console.log(item.orderItem);
                        order.push(JSON.parse(item.orderItem))
                        order.forEach(order1=>{
                            order1.forEach(order2=>{
                                item.orderItem=JSON.parse(order2.extraName)
                            })
                        })
                    })

                })
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
                    <input id="upload_input" type="file" @change="handleFileChange">
                    <img :src="'public/demo/' +this.ImgPhoto" class="upload_cover" alt="">
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
                
                <button type="button" @click="upDateMemberImg()">儲存</button>
            </div>
        </div>
<!-- 更改資料modal視窗 -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">修改資料</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">姓名 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newName" placeholder="請輸入欲更改姓名">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">電話 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newPhone" placeholder="請輸入欲更改電話">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">E-mail :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newEmail" placeholder="請輸入欲更改E-mail">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="updateMemberInfo()">確認更改</button>
                    </div>
                </div>
            </div>
        </div>
<!-- 更改密碼modal視窗 -->
        <div class="modal fade" id="exampleModalPwd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">修改密碼</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">舊密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.oldPwd" placeholder="請輸入舊密碼">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">新密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newPwd" placeholder="請輸入新密碼">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">確認新密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.checkNewPwd" placeholder="請再次輸入新密碼">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="updatePwd()">確認更改</button>
                    </div>
                </div>
            </div>
        </div>
<!-- 訂單資訊頁面 -->
        <div class="order" v-if="orderPage" >
            <p id="location"><i class="fa-solid fa-map-pin"></i>訂單資訊</p>
            <hr>
            <div class="orderMemberArr">
                <div v-for="(item, index) in memberOrderArr" :key="index">
                    <button>
                        <a class="ordernumbtn" data-bs-toggle="collapse" :href="'#multiCollapseExample1' + index" role="button" aria-expanded="false" :aria-controls="'multiCollapseExample1' + index">訂單編號：{{item.orderId}}</a>
                    </button>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" :id="'multiCollapseExample1' + index">
                                <div class="card-body">
                                    <div class="orderItem">
                                        <ul>
                                            <li>
                                                <p>訂單內容 : {{item.roomId}}</p>
                                            </li>
                                            <li>
                                                <p>加購項目 : <span v-for="order in item.orderItem">{{ order }}.</span></p>
                                            </li>
                                            <li>
                                                <p>入住時間 : {{item.startDate}}</p>
                                            </li>
                                            <li>
                                                <p>退房時間 : {{item.endDate}}</p>
                                            </li>
                                            <li>
                                                <p>總金額 : ${{item.total}} 元</p>
                                            </li>
                                            <li>
                                                <p v-if="item.orderPayment==true">付款方式 : 現場支付</p>
                                                <p v-else>付款方式 : 線上支付
                                                    <i class="fa-regular fa-credit-card" data-bs-toggle="modal" 
                                                    data-bs-target="#exampleModalPay"></i>
                                                </p>
                                            </li>
                                            <li>
                                                <p>付款期限 : {{item.startDate}}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- 線上付款modal視窗 -->
        <div class="modal fade" id="exampleModalPay" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">線上付款</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">持卡人姓名 :</label>
                                <input type="text" class="form-control" id="recipient-name" placeholder="請輸入持卡人姓名">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">手機號碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" placeholder="請輸入手機號碼">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">信用卡卡號 :</label>
                                <input type="text" class="form-control" id="recipient-name" placeholder="請輸入16碼數字">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">有效年月 :</label>
                                <input type="date" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">信用卡背面末三碼 :</label>
                                <input type="number" class="form-control" id="recipient-name" placeholder="請輸入背面末三碼">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="success()">付款</button>
                    </div>
                </div>
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
                    <input type="file" class="addimg" @change="messageFileChange">
                </label>
            </div>
            <div class="msgBtnArea">
                <button type="button"  data-bs-toggle="modal" 
                        data-bs-target="#exampleModalmsg">預覽
                </button>
                <button type="button" @click="test10()">測試</button>
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
                                <input type="text" class="form-control" id="recipient-name" v-model="this.topic" disabled>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">內容 :</label>
                                <textarea  class="form-control" id="recipient-name" v-model="this.text" disabled></textarea>
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
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="cancle()">取消</button>
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="messageCreate()">發佈</button>
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
        height: 66vh;
        margin: auto;
        margin-top: 5vmin;
        display: flex;
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
            margin-top: 8vmin;
            margin-right: 18vmin;
            button{
                width: 13vw;
                height: 7vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
                font-size: 16pt;
                box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
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
            width: 38vw;
            height: 35vh;
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
                    top: -2%;
                    border: 1px solid#797A7E;
                    background-image: url('../../../public/demo/userimg.png');
                    background-size: contain;
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
                width: 30vw;
                height: 5vh;
                display: flex;
                justify-content: space-around;
                position: absolute;
                right: 6%;
                bottom: 10%;
                button{
                    width: 8vw;
                    height: 5vh;
                    border: none;
                    border-radius: 5px;
                    color: #797A7E;
                    font-size: 13pt;
                    box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
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
            #location{
                font-size: 24pt;
                font-weight: bold;
                color: #82AAE3;
                margin: 0;
            } 
            .orderMemberArr{
                .card-body{
                    background-color: white;
                    border-radius: 5px;
                    height: 40vh;
                    overflow: scroll;
                    li{
                        i{
                            margin-left: 0.5vmin;
                            color: #82AAE3;
                            cursor: pointer;
                        }
                    }
                }
                a{
                    text-decoration: none;
                    color: #797A7E;
                    font-size: 15pt;
                }
                button{
                    width: 30vw;
                    height: 5vh;
                    border: none;
                    border-radius: 5px;
                    background-color: #e3f6f5;
                    margin-bottom: 1.5vmin;
                    box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
                    &:hover {
                        background-color: #F7F2E7;;
                    }
                    &:active {
                        background-color: #e3f6f5;
                    }
                }
            }
        }
        .message{
            width: 30vw;
            height: 57vh;
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
                    background-color: #e3f6f5;
                    padding-left: 2vmin;
                    margin-bottom: 2vmin;
                    box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
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
                width: 9vw;
                height: 6vh;
                display: flex;
                justify-content: space-around;
                position: absolute;
                right: 0;
                bottom: -2%;
                button{
                    width: 8vw;
                    height: 5vh;
                    border: none;
                    border-radius: 5px;
                    color: #797A7E;
                    font-size: 13pt;
                    box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
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
                    textarea{
                        width: 30vw;
                        height: 15vh;
                        border-radius: 5px;
                        outline: none;
                        padding: 1vmin;
                    }    
                    .msgimg{
                        width: 15vw;
                        height: 20vh;
                    }
                }
            }
        }
    }
    @media(max-width:1200px){
        .content{
            width: 80vw;
            height: 78.5vh;
            display: block;
            .buttonArea{
                width: 80vw;
                height: 10vh;
                margin-top: 0;
                margin-bottom: 15vmin;
                flex-direction: row;
                button{
                    width: 20vw;
                    height: 5vh;
                    font-size: 20pt;
                }
            }
            .personInfo{
                width: 75vw;
                margin: auto;
                #location{
                    font-size: 30pt;
                }
                .user{
                    .upload_cover{
                        width: 18vmin;
                        height: 18vmin;
                        right: 4%;
                        top: 21%;
                    }
                }
                p{
                    font-size: 25pt;
                }
                .personInfoBtn{
                    width: 70vw;
                    button{
                        width: 18vw;
                        height: 5vh;
                        font-size: 18pt;
                    }
                }
            }
            .order{
                width: 75vw;
                margin: auto;
                #location{
                    font-size: 30pt;
                }
                p{
                    font-size: 24pt;
                }
            }
            .message{
                width: 75vw;
                height: 50vh;
                margin: auto;
                #location{
                    font-size: 30pt;
                }
                .topic{
                    p{
                        font-size: 25pt;
                    }
                    input{
                        width: 75vw;
                        height: 4vh;
                        margin-bottom: 3vmin;
                        font-size: 20pt;
                    }
                }
                .text{
                    p{
                        font-size: 25pt;
                    }
                    textarea{
                        width: 75vw;
                        height: 13vh;
                        margin-bottom: 3vmin;
                        font-size: 20pt;
                    }
                }
                .img{
                    p{
                        font-size: 25pt;
                    }
                    #addicon{
                        margin-top: 1vmin;
                        font-size: 26pt;
                    }
                }
                .msgBtnArea{
                    width: 40vw;
                    right: -10%;
                    button{
                        width: 18vw;
                        height: 4vh;
                        font-size: 22pt;
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            .personInfo{
                .user{
                    .upload_cover{
                        width: 20vmin;
                        height: 20vmin;
                    }
                }
            }
            .order{
                p{
                    font-size: 22pt;
                }
            }
            .message{
                .msgBtnArea{
                    button{
                        font-size: 18pt;
                    }
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 80vh;
            .buttonArea{
                height: 13vh;
                margin-bottom: 17vmin;
                button{
                    width: 24vw;
                    font-size: 12pt;
                }
            }
            .personInfo{
                #location{
                    font-size: 22pt;
                }
                .user{
                    height: 1vmin;
                    .upload_cover{
                        width: 23vmin;
                        height: 23vmin;
                        top: 24%;
                    }
                }
                p{
                    font-size: 20pt;
                }
                .personInfoBtn{
                    width: 75vw;
                    right: 3%;
                    bottom: 13%;
                    button{
                        width: 20vw;
                        font-size: 13pt;
                    }
                }
            }
            .order{
                #location{
                    font-size: 22pt;
                }
                p{
                    font-size: 15pt;
                }
                .orderMemberArr{
                    button{
                        width: 73vw;
                    }
                }
            }
            .message{
                #location{
                    font-size: 22pt;
                }
                .topic{
                    p{
                        font-size: 17pt;
                    }
                    input{
                        margin-bottom: 5vmin;
                        font-size: 17pt;
                    }
                }
                .text{
                    p{
                        font-size: 17pt;
                    }
                    textarea{
                        margin-bottom: 5vmin;
                        font-size: 17pt;
                    }
                }
                .img{
                    p{
                        font-size: 17pt;
                    }
                    #addicon{
                        font-size: 24pt;
                    }
                }
                .msgBtnArea{
                    button{
                        bottom: -9%;
                        font-size: 17pt;
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            .buttonArea{
                button{
                    font-size: 11pt;
                }
            }
            .personInfo{
                #location{
                    font-size: 20pt;
                }
                .user{
                    .upload_cover{
                        width: 25vmin;
                        height: 25vmin;
                        top: 22%;
                    }
                }
                p{
                    font-size: 16pt;
                }
                .personInfoBtn{
                    button{
                        font-size: 12pt;
                    }
                }
            }
            .order{
                #location{
                    font-size: 20pt;
                }
                p{
                    font-size: 13pt;
                }
            }
            .message{
                #location{
                    font-size: 20pt;
                }
                .topic{
                    p{
                        font-size: 16pt;
                    }
                    input{
                        font-size: 13pt;
                    }
                }
                .text{
                    p{
                        font-size: 16pt;
                    }
                    textarea{
                        font-size: 13pt;
                    }
                }
                .img{
                    p{
                        font-size: 16pt;
                    }
                    #addicon{
                        font-size: 22pt;
                    }
                }
                .msgBtnArea{
                    width: 50vw;
                    bottom: -9%;
                    right: -16%;
                    button{
                        width: 22vw;
                        font-size: 14pt;
                    }
                }
            }
        }
    }
</style>