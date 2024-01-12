<script>
import axios from 'axios';
import Footer from '../../components/Footer.vue';
import swal from 'sweetalert';
export default {
    data() {
        return {
            account: "",
            pwd: "",
            pwdd:"",
            memberName: "",
            memberPhone: "",
            memberEmail: "",
            aaa:"",
        }
    },
    methods: {
        login() {
            axios({
                url: 'http://localhost:8080/member/signUp',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    account: this.account,
                    password: this.pwd,
                    memberName: this.memberName,
                    memberPhone: this.memberPhone,
                    memberEmail: this.memberEmail,
                },
            }).then(res => {
                console.log(res.data)
                if(this.account&&this.pwd&& this.memberName&&this.memberPhone&&this.memberEmail==""){
                    swal("必填欄位", "不得為空白", "error");
                }else{
                    swal("註冊成功", "請重新登入", "success");
                    this.$router.push('/FrontLogin')
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
        goEntry(){
            this.$router.push('/')
        },
        // test(){
        //     console.log(this.account);
        //     console.log(this.pwd);
        //     console.log(this.memberName);
        //     console.log(this.memberPhone);
        //     console.log(this.memberEmail);
        //     this.$router.push('/')
        // }
    },
    components: {
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>註冊</p>
        </div>
        <div class="account">
            <p>帳號</p>
            <input type="text" v-model="this.account" placeholder="請設定帳號">
        </div>
        <div class="name">
            <p>姓名</p>
            <input type="text" v-model="this.memberName" placeholder="請輸入姓名">
        </div>
        <div class="password">
            <p>密碼</p>
            <input type="password" v-model="this.pwdd" placeholder="請設定密碼">
        </div>
        <div class="password">
            <p >確認密碼</p>
            <p  id=checkpwd v-if="this.pwdd!=this.pwd">請輸入相同密碼</p>
            <input type="password" v-model="this.pwd" placeholder="請再次輸入密碼">
        </div>
        <div class="phone">
            <p>電話</p>
            <input type="number" v-model="this.memberPhone" placeholder="請輸入電話">
        </div>
        <div class="email">
            <p>E-mail</p>
            <input type="text" v-model="this.memberEmail" placeholder="請輸入email">
        </div>
        <div class="buttonArea">
            <button type="button" @click="goEntry()">取消</button>
            <button type="button" @click="login()">註冊</button>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
.content {
    width: 20vw;
    height: 77vh;
    margin: auto;
    margin-top: 3vmin;
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
    .name {
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
        #checkpwd{
            font-weight: bold;
            color: brown;
        }
    }
    .phone {
        p {
            margin: 0;
            font-size: 14pt;
            color: #797A7E;
        }
    }
    .email {
        p {
            margin: 0;
            font-size: 14pt;
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
</style>