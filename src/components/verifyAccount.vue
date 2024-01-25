<template>
    <div class="content">
        <div>
            <h1>✨驗證成功✨</h1>
            <br>
            <h2>🐢歡迎來到 Sea．Life🌊</h2>
            <br>
            <br>
            <h4>您已成為正式會員，能夠享有完整功能</h4>
            <h4>快來跟我們一起探究小琉球的美☀️</h4>
            <br>
            <br>
            <div class="wait">
                <h2>請稍等</h2>
                <div class="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <br>
            <br>
            <h4 id="wait"><a href="" @click="goHome" style="color: #797A7E;">若5秒後仍未跳轉，請點此🔜</a></h4>
        </div>
    </div>
    <Footer />
</template>

<script>
import axios from 'axios';
import Footer from './Footer.vue';
export default {
    mounted(){
        const email = this.$route.query.memberEmail
        const verify = this.$route.query.verificationCode

        console.log(email);
        console.log(verify);

        axios({
                url:'http://localhost:8080/member/verify',
                method: "POST",
                params: {
                    memberEmail: email,
                    verificationCode: verify,
                }
                
            })
            .then(res => {
                console.log(res)
                setTimeout(() =>{
                    this.$router.push('/')
                }, 5000)
            })
            
            .catch(error => console.error(error))
    },
    methods:{
        goHome(){
            this.$router.push('/')
        }
    },
    components:{
        Footer
    }
}
</script>
<style lang="scss" scoped>
    .content{
        width: 90vw;
        height: 66vh;
        margin: auto;
        margin-top: 5vmin;
        text-align: center;
        h1{
            font-weight: bold;
            color: #82AAE3;
        }
        h2{
            color: #797A7E;
        }
        h4{
            color: #797A7E;
        }
        a{
            text-decoration: none;
        }
        .wait{
            display: flex;
            align-items: center;
            justify-content: center;
            h2{
                text-align: center;
            }
            .loading,
            .loading > div {
                position: relative;
                box-sizing: border-box;
            }
            .loading {
                font-size: 0pt;
                color: #797A7E;
            }
            .loading.la-dark {
                color: #797A7E;
            } 
            .loading > div {
                display: inline-block;
                float: none;
                background-color: currentColor;
                border: 0 solid currentColor;
            }
            .loading {
                width: 10vw;
                height: 3vh;
            }
            .loading > div {
                width: 10px;
                height: 10px;
                margin: 4px;
                border-radius: 100%;
                animation: ball-beat 0.7s -0.15s infinite linear;
            }
            .loading > div:nth-child(2n-1) {
                animation-delay: -0.5s;
            }
            @keyframes ball-beat {
                50% {
                    opacity: 0.2;
                    transform: scale(0.75);
                } 
                100% {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }
</style>