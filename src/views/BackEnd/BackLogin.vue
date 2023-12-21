<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        goFrontEntry(){
            this.$router.push('/')
        },
        goBackManagement(){
            this.$router.push('/BackManagement')
        }
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>後台登錄</p>
        </div>
        <div class="account">
            <p>帳號</p>
            <input type="text" placeholder="請輸入帳號">
        </div>
        <div class="password">
            <p>密碼</p>
            <input type="password" placeholder="請輸入密碼">
        </div>
        <div class="buttonArea">
            <button type="button" @click="goFrontEntry()">取消</button>
            <button type="button" @click="goBackManagement()">登錄</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
        .content{
        width: 20vw;
        margin: auto;
        margin-top: 8vmin;

        input{
            width: 20vw;
            height: 5vh;
            border-radius: 10px;
            border-style: none;
            outline: none;
            background-color: #D9D9D9;
            padding-left: 2vmin;
            margin-bottom: 4vmin;
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
            margin-top: 3vmin;
            button{
                width: 8vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;

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