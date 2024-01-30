<script>
import axios from 'axios';
import Footer from '../../components/Footer.vue';
import swal from 'sweetalert';
export default {
    data() {
        return {
            account: "",
            pwd: "",
        }
    },
    methods: {
        goSignUp() {
            this.$router.push('/FrontSignUp')
        },
        goPersonInfo(){
            this.$router.push('/FrontPersonInfo')
        },
        goBackLogin(){
            this.$router.push('/BackLogin')
        },
        login() {
            axios({
                url: 'http://localhost:8080/member/login',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials:true,
                data: {
                    account:this.account,
                    password:this.pwd,
                },
            }).then(res => {
                
                console.log(res.data)
                if(res.data.message=="Successful!!"){
                    swal({
                        title: '登入成功',
                        text: '歡迎回來',
                        icon: 'success',
                        buttons: '確認',
                        dangerMode: true,
                    })
                    .then((willRefresh) => {
                        if (willRefresh) {
                            this.$router.push('/')
                          // 在这里可以执行页面刷新的操作
                            setTimeout(function() {
                                window.location.reload();
                            },100)
                        } 
                    });
            }else{
                swal("錯誤", "請輸入帳號或密碼", "error");
            }
            }).catch(error => {
                if (error.response) {
                    // 這裡可以取得伺服器回應的詳細信息
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                console.error('Error:', error);
            });
        },
        forgotPassword(){
            axios({
                url:'http://localhost:8080/member/send_email',
                method: "POST",
                headers:{"Content-Type": "application/json",},
                data: {
                    account: this.account
                }
            })
            .then(res => console.log(res))
            .catch(error => console.error(error))
            this.account=""
            swal("已寄出通知","請至信箱查看","success")
        },
    },
    components: {
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>登入<i class="fa-solid fa-user-lock"></i></p>
        </div>
        <div class="account">
            <p>帳號</p>
            <input type="text" v-model="account" placeholder="請輸入帳號">
        </div>
        <div class="password">
            <p>密碼</p>
            <input type="password" v-model="pwd" placeholder="請輸入密碼">
        </div>
        <div class="buttonArea">
            <button type="button" @click="goSignUp()">註冊</button>
            <button type="button" @click="login()">登入</button>
            <button type="button"  data-bs-toggle="modal"
                    data-bs-target="#exampleModal">忘記密碼
            </button>
        </div>
    </div>  
<!-- 忘記密碼modal視窗 -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">忘記密碼</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">帳號名稱 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="account" placeholder="請輸入您的帳號">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="forgotPassword">送出</button>
                    </div>
                </div>
            </div>
        </div>
    <i class="fa-solid fa-gear" @click="goBackLogin()" id="back"></i>
    <Footer />
</template>

<style lang="scss" scoped>
    .content {
        width: 20vw;
        height: 64vh;
        margin: auto;
        margin-top: 7vmin;
        position: relative;
        i{
            margin-left: 2vmin;
        }
        input {
            width: 20vw;
            height: 5vh;
            border-radius: 10px;
            border-style: none;
            outline: none;
            background-color: white;
            padding-left: 2vmin;
            margin-bottom: 4vmin;
            box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
        }
        .title {
            font-size: 28pt;
            font-weight: bold;
            color: #82AAE3;
            text-align: center;
        }
        .account {
            p {
                margin: 0;
                font-size: 16pt;
                color: #4d4327;
            }
        }
        .password {
            p {
                margin: 0;
                font-size: 16pt;
                color: #4d4327;
            }
        }
        .buttonArea {
            width: 20vw;
            height: 15vh;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 5vmin;
            button {
                width: 9vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                color: #4d4327;
                box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
                &:hover {
                    background-color: #797A7E;
                    color: white;
                }
                &:active {
                    background-color: #F7F2E7;
                    color: #797A7E;
                }
            }
            #forget{
                width: 7vw;
                height: 4.5vh;
                font-size: 10pt;
                margin-top: 5vmin;
            }
        }
    }
    #back{
        font-size: 16pt;
        color:#F7F2E7;
        position: absolute;
        right: 1%;
        bottom: 2%;
        &:hover{
            color: #797A7E;
        }
        &:active{
            color:#F7F2E7;
        }
    }
    @media(max-width:1200px){
        .content{
            width: 60vw;
            height: 70vh;
            margin-top: 16vmin;
            input{
                width: 60vw;
                height: 5vh;
                margin-bottom: 8vmin;
                font-size: 20pt;
            }
            .title{
                font-size: 35pt;
                margin-bottom: 5vmin;
            }
            .account{
                p{
                    font-size: 25pt;
                }
            }
            .password{
                p{
                    font-size: 25pt;
                }
            }
            .buttonArea{
                width: 60vw;
                display: flex;
                flex-wrap: wrap;
                margin-top: 8vmin;
                button{
                    width: 15vw;
                    height: 4vh;
                    font-size: 20pt;
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 71vh;
            input{
                margin-bottom: 10vmin;
            }
            .account{
                p{
                    font-size: 23pt;
                }
            }
            .password{
                p{
                    font-size: 23pt;
                }
            }
            .buttonArea{
                button{
                    width: 17vw;
                    height: 5vh;
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            width: 70vw;
            height: 74.5vh;
            margin-top: 17vmin;
            input{
                width: 70vw;
                margin-bottom: 16vmin;
                font-size: 16pt;
            }
            .title{
                font-size: 28pt;
                margin-bottom: 10vmin;
            }
            .account{
                p{
                    font-size: 17pt;
                }
            }
            .password{
                p{
                    font-size: 17pt;
                }
            }
            .buttonArea{
                width: 65vw;
                button{
                    width: 28vw;
                    height: 5vh;
                    font-size: 17pt;
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            input{
                font-size: 13pt;
            }
            .title{
                font-size: 25pt;
            }   
            .account{
                p{
                    font-size: 16pt;
                }
            }
            .password{
                p{
                    font-size: 16pt;
                }
            }
            .buttonArea{
                button{
                    font-size: 15pt;
                }
            }
        }
    }
</style>