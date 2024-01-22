<script>
import axios from 'axios';
import swal from 'sweetalert';
export default{
    data(){
        return{
            account:"",
            pwd:"",
        }
    },
    methods:{
        goFrontEntry(){
            this.$router.push('/')
        },
        goBack(){
        if(this.account==""||this.pwd==""){
            swal("資料有誤", "帳號或密碼不能為空", "error");
            return
        }
            axios({
                url: 'http://localhost:8080/employee/login',
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

                if(res.data.rtncode!= "SUCCESSFUL"){
                    swal("資料有誤", "帳號或密碼有誤，請再次確認", "error");
                    return
                }
                
                swal({
                        title: '登入成功',
                        text: '歡迎回來',
                        icon: 'success',
                        buttons: '確認',
                        dangerMode: true,
                    })
                    .then((willRefresh) => {
                        if (willRefresh) {
                            this.$router.push('/BackOrder')
                          // 在这里可以执行页面刷新的操作
                            setTimeout(function() {
                                window.location.reload();
                            },100)
                        } 
                    });
                console.log(res.data.rtncode);
                
            });
        }
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>員工登入<i class="fa-solid fa-user-gear"></i></p>
        </div>
        <div class="account">
            <p>帳號</p>
            <input type="text" v-model="this.account" placeholder="請輸入員工帳號">
        </div>
        <div class="password">
            <p>密碼</p>
            <input type="password" v-model="this.pwd" placeholder="請輸入密碼">
        </div>
        <div class="buttonArea">
            <button type="button" @click="goFrontEntry()">取消</button>
            <button type="button" @click="goBack()">登入</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
        .content{
        width: 20vw;
        margin: auto;
        margin-top: 8vmin;
        i{
            margin-left: 2vmin;
        }
        input{
            width: 20vw;
            height: 5vh;
            border-radius: 10px;
            border-style: none;
            outline: none;
            background-color: #e3f6f5;
            padding-left: 2vmin;
            margin-bottom: 4vmin;
            box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
        }
        .title{
            font-size: 28pt;
            font-weight: bold;
            color: #82AAE3;
            text-align: center;
        }
        .account{
            p{
                margin: 0;
                font-size: 16pt;
                color: #797A7E;
            }
        }
        .password{
            p{
                margin: 0;
                font-size: 16pt;
                color: #797A7E;
            }
        }
        .buttonArea{
            width: 20vw;
            display: flex;
            justify-content: space-around;
            margin-top: 6vmin;
            button{
                width: 8vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
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
</style>