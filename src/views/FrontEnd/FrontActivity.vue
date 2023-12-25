<script>
import Footer from '../../components/Footer.vue';
export default{
    data(){
        return{

        }
    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>租車</p>
        </div>
        <div class="rentCar">
            <img src="../../../public/Rent/b1.jpg" alt="">
            <img src="../../../public/Rent/s1.jpg" alt="">
            <img src="../../../public/Rent/c1.jpg" alt="">
        </div>
        <div class="title">
            <p>套票</p>
        </div>
        <div class="tickect">
            <img src="../../../public/Activity/s1.jpg" alt="">
            <img src="../../../public/Activity/sc1.jpg" alt="">
            <img src="../../../public/Activity/d1.jpg" alt="">
        </div>
        <div class="title">
            <p>優惠消息</p>
        </div>
        <div class="news">
            <ul>
                <li>國旅 85 折起</li>
                <li>出示外國護照，即享精美小禮物一份</li>
                <li>平日住宿 8 折起，再贈送下午茶</li>
                <li>使用 Line Pay 回饋 50%</li>
                <li>當日壽星我最大 ! 兩人同行，壽星免費</li>
            </ul>
        </div>
    </div>
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 150vh;
        margin: auto;
        margin-top: 6vmin;
        position: relative;
        .title{
            p{
                font-size: 28pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
                margin-bottom: 3vmin;
            }
        }
        .rentCar{
            width: 60vw;
            display: flex;
            justify-content: space-around;
            margin: auto;
            margin-bottom: 8vmin;
            img{
                width: 15vw;
                height: 30vh;
                border-radius: 50%;
                transition: 0.3s;
                &:hover{
                    opacity: 0.5;
                }
                &:active{
                    opacity: 1.0;
                }
            }
        }
        .tickect{
            width: 60vw;
            display: flex;
            justify-content: space-around;
            margin: auto;
            margin-bottom: 10vmin;
            img{
                width: 15vw;
                height: 30vh;
                border-radius: 50%;
                transition: 0.3s;
                &:hover{
                    opacity: 0.5;
                }
                &:active{
                    opacity: 1.0;
                }
            }
        }
        .news{
            position: absolute;
            left: 20%;
            ul{
                li{
                    font-size: 16pt;
                    color: #797A7E;
                }
            }
        }
    }
</style>