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
                swal("登錄成功", "歡迎回來", "success");
                this.$router.push('FrontPersonInfo')
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
        }
    },
    components: {
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>登錄<i class="fa-solid fa-user-lock"></i></p>
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
            <button type="button" @click="login()">登錄</button>
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
            width: 8vw;
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
</style>