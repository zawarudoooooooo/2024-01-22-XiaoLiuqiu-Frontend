<script>
import axios from 'axios';
import Footer from '../../components/Footer.vue';
import swal from 'sweetalert';
import { RouterLink, RouterView } from 'vue-router'
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
            <!-- <RouterLink to="/reset" class="routerItem">重設密碼</RouterLink> -->
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
                                <label for="recipient-name" class="col-form-label">請輸入帳號名稱 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="account">
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
        height: 63vh;
        margin: auto;
        margin-top: 8vmin;
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
            background-color: #D9D9D9;
            padding-left: 2vmin;
            margin-bottom: 4vmin;
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
                color: #797A7E;
            }
        }
        .password {
            p {
                margin: 0;
                font-size: 16pt;
                color: #797A7E;
            }
        }
        .buttonArea {
            width: 20vw;
            display: flex;
            justify-content: space-around;
            margin-top: 3vmin;
            button {
                width: 6vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
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
            width: 50vw;
            height: 76vh;
            input{
                width: 50vw;
                height: 4vh;
                margin-bottom: 8vmin;
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
                width: 50vw;
                button{
                    width: 15vw;
                    height: 4vh;
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 77vh;
        }
    }
    @media(max-width:576px){
        .content{
            width: 60vw;
            height: 79vh;
            input{
                width: 60vw;
                margin-bottom: 12vmin;
            }
            .title{
                font-size: 28pt;
                margin-bottom: 10vmin;
            }
            .account{
                p{
                    font-size: 19pt;
                }
            }
            .password{
                p{
                    font-size: 19pt;
                }
            }
            .buttonArea{
                width: 60vw;
                button{
                    width: 35vw;
                    height: 5vh;
                }
            }
        }
    }
</style>