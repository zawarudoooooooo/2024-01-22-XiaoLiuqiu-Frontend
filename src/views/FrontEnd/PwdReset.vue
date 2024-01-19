<script>
import axios from 'axios';
import Footer from '../../components/Footer.vue';
import swal from 'sweetalert';
export default {
    data() {
        return {
            account: "",
            newPassword: "",
            confirmPassword: ""    
        }
    },
    mounted(){
    },
    methods:{
        resetPassword(){
            const account = this.$route.query.account
            const resetCode = this.$route.query.resetCode

            console.log(account);
            console.log(resetCode);

            axios({
                url:'http://localhost:8080/member/reset_password',
                method: "POST",
                headers:{"Content-Type": "application/json",},
                params:{
                    account: account,
                    resetCode: resetCode,
                },
                data: {
                    new_password: this.newPassword,
                    confirm_password: this.confirmPassword
                }
            })
            .then(res => {
                console.log(res)
                setTimeout(() =>{
                    this.$router.push('/')
                }, 2000)
            })
           . catch(error => console.error(error))
        },
        goEntry(){
            this.$router.push('/')
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
            <p>重設密碼<i class="fa-solid fa-unlock-keyhole"></i></p>
        </div>
        <div class="password">
            <p>新密碼</p>
            <input type="password" v-model="this.newPassword" placeholder="請設定新密碼">
        </div>
        <div class="repassword">
            <div class="notice">
                <p >確認密碼</p>
                <p id=checkpwd v-if="this.confirmPassword != this.newPassword">*請輸入相同密碼</p>
            </div>
            <input type="password" v-model="this.confirmPassword" placeholder="請再次輸入密碼">
        </div>
        <div class="buttonArea">
            <button type="button" @click="goEntry">取消</button>
            <button type="button" @click="resetPassword">確認</button>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
    .content {
        width: 20vw;
        height: 63vh;
        margin: auto;
        margin-top: 8vmin;
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
            margin-bottom: 1vmin;
        }
        .title {
            font-size: 28pt;
            font-weight: bold;
            color: #82AAE3;
            text-align: center;
            p {
                margin-bottom: 0.5vmin;
            }
        }
        .account {
            p {
                margin: 0;
                font-size: 14pt;
                color: #797A7E;
            }
        }
        .password {
            p {
                margin: 0;
                font-size: 14pt;
                color: #797A7E;
            }
        }
        .repassword {
            .notice{
                width: 20vw;
                justify-content: space-between;
                display: flex;
            }
            p {
                margin: 0;
                font-size: 14pt;
                color: #797A7E;
            }
            #checkpwd{
                font-weight: bold;
                color: #d65d6b;
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
</style>