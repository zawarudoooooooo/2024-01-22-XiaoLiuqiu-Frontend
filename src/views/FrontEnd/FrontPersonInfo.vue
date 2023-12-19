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
        <div class="buttonArea">
            <button type="button">修改</button>
            <button type="button">儲存</button>
        </div>
    </div>
    <Footer/>
</template>

<style lang="scss" scoped>
        .content{
        width: 20vw;
        height: 66vh;
        margin: auto;
        margin-top: 4vmin;
        .title{
            p{
                font-size: 28pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
                margin-bottom: 5vmin;
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
            margin-top: 10vmin;
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