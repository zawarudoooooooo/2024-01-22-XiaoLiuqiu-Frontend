<script>
import Footer from '../../components/Footer.vue';
export default{
    data(){
        return{
            name:"",
            phone:"",
            email:"",

            //頁面切換
            personInfoPage:true,
            orderPage:false,
            messagePage:false
        }
    },
    methods:{
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
            <button type=button @click="messagePageShow()"><i class="fa-solid fa-message"></i>發表回饋</button>
        </div>
<!-- 會員資料頁面 -->
        <div class="personInfo" v-if="personInfoPage">
            <p id="location"><i class="fa-solid fa-map-pin"></i>會員資訊</p>
            <hr>
            <div class="user">
                <label class="upload_cover">
                    <input id="upload_input" type="file">       
                    <i class="fa-regular fa-circle-user" id="usericon"></i>
                    <img id="demo"/>
                </label>
            </div>
            <div class="name">
                <p>姓名 : 海龜王子</p>
            </div>
            <div class="phone">
                <p>電話 : 09-12345678</p>
            </div>
            <div class="email">
                <p>E-mail : kameprince@gmail.com</p>
            </div>
            <div class="password">
                <p>密碼 : **********</p>
            
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
            <div class="modal-dialog">
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
            <div class="modal-dialog">
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
                <p>相片</p>
                <input type="file">
            </div>
            <button type="button">發布</button>
        </div>
    </div>
    <Footer/>
</template>

<style lang="scss" scoped>
        .content{
        width: 63vw;
        height: 63vh;
        margin: auto;
        margin-top: 8vmin;
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
                    width: 17vmin;
                    height: 17vmin;
                    cursor: pointer;
                    border-radius: 50%;
                    position: absolute;
                    right: 10%;
                    top: -3%;
                }
                #upload_input{
                    display: none;
                }
                #usericon{
                    font-size: 105pt;
                    color: #BFEAF5;
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
                }
            }
            .img{
                p{
                    margin: 0;
                    font-size: 16pt;
                    color: #797A7E;
                }
            }
            button{
                width: 6vw;
                height: 4.5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
                font-size: 13pt;
                position: absolute;
                right: 0;
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
</style>