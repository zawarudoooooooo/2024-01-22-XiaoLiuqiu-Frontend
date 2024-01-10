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
            <p>交通套票</p>
        </div>
        <hr>
        <div class="traffic">
            <div class="card" style="width: 23rem;">
                <img src="../../../public/ticket/ferry.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">渡輪</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">全票 $400</li>
                    <li class="list-group-item">半票 $200</li>
                </ul>
            </div>
            <!-- <div class="card" style="width: 23rem;">
                <img src="../../../public/ticket/bicycle.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">腳踏車</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">全天 $150</li>
                </ul>
            </div> -->
            <div class="card" style="width: 23rem;">
                <img src="../../../public/ticket/scooter.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">摩托車</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">全天 $300</li>
                </ul>
            </div>
        </div>
        <div class="title">
            <p>水上活動</p>
        </div>
        <hr>
        <div class="activity">
            <div class="card" style="width: 23rem;">
                <img src="../../../public/ticket/diving.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">浮潛</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">$400</li>
                </ul>
            </div>
            <div class="card" style="width: 23rem;">
                <img src="../../../public/ticket/canoe.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">獨木舟</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">一般獨木舟 $600</li>
                    <li class="list-group-item">透明獨木舟 $800</li>
                </ul>
            </div>
            <div class="card" style="width: 23rem;">
                <img src="../../../public/ticket/sup.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">SUP 立槳</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">兩人一板 $1000</li>
                    <li class="list-group-item">一人一板 $1200</li>
                </ul>
            </div>
        </div>
        <div class="title">
            <p>景點套票</p>
        </div>
        <hr>
        <div class="ticket">
            <div class="card" style="width: 23rem;">
                <img src="../../../public/ticket/ticket.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">三大風景區門票</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">美人洞、山豬溝、烏鬼島</li>
                    <li class="list-group-item">$100</li>
                </ul>
            </div>
            <div class="card" style="width: 23rem;">
                <img src="../../../public/tourist/t08/t8.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">鹿粼梅花鹿園區</h5>
                    <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">全票 $220</li>
                    <li class="list-group-item">半票 $50</li>
                </ul>
            </div>
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
        width: 90vw;
        height: 250vh;
        margin: auto;
        margin-top: 6vmin;
        position: relative;
        .title{
            p{
                font-size: 28pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
                //margin-bottom: 3vmin;
            }
        }
        hr{
            margin-bottom: 3vmin;
        }
        .traffic{
            width: 60vw;
            margin: auto;
            display: flex;
            justify-content: space-around;
            margin-bottom: 5vmin;
        }
        .activity{
            width: 70vw;
            justify-content: space-around;
            display: flex;
            margin: auto;
            margin-bottom: 5vmin;
        }
        .ticket{
            width: 70vw;
            margin: auto;
            display: flex;
            justify-content: space-around;
            margin-bottom: 5vmin;;
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