<script>
import Footer from '../../components/Footer.vue';
export default{
    data(){
        return{

        }
    },
    methods:{

    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="personInfo">
            <div class="title">
                <p>會員資訊</p>
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
            <div class="buttonArea">
                <button type="button">修改資料</button>
                <button type="button">儲存</button>
            </div>
        </div>
        <div class="order">
            <div class="title">
                <p>我的訂單</p>
            </div>
            <div class="show">
                <p>入住日期 : 2023-12-25</p>
                <p>退房日期 : 2023-12-31</p>
                <p>房間類型 : 濃情密意雙人房</p>
                <p>加購項目 : 早餐、潛水套票</p>
            </div>


        </div>
 

    </div>
    <Footer/>
</template>

<style lang="scss" scoped>
        .content{
        width: 50vw;
        height: 62vh;
        margin: auto;
        margin-top: 8vmin;
        display: flex;
        justify-content: space-around;
        .personInfo{
            .title{
                p{
                    font-size: 28pt;
                    font-weight: bold;
                    color: #82AAE3;
                    text-align: center;
                    margin-bottom: 3vmin;
                }
            }
        }
        .order{
            .title{
                p{
                    font-size: 28pt;
                    font-weight: bold;
                    color: #82AAE3;
                    text-align: center;
                    margin-bottom: 3vmin;
                }
            }
        }

        p{
            font-size: 16pt;
            color: #797A7E;
            margin-bottom: 3vmin;
        }
        .buttonArea{
            width: 20vw;
            display: flex;
            justify-content: space-around;
            margin-top: 5vmin;
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