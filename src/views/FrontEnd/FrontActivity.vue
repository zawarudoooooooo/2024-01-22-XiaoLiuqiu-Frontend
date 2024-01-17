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
            <p>交通</p>
        </div>
        <hr>
        <div class="traffic">
            <div class="card" style="width: 22rem;">
                <img src="../../../public/ticket/ferry.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">渡輪</h5>
                    <p class="card-text">多元取票方式，隨到隨上船。
                        <br>免去排隊時間，讓您輕鬆出遊。
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">全票 $400</li>
                    <li class="list-group-item">半票 $200 (未滿12歲)</li>
                </ul>
            </div>
            <div class="card" style="width: 22rem;">
                <img src="../../../public/ticket/scooter.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">摩托車</h5>
                    <p class="card-text">全系列125cc的新車。
                        <br>附贈安全帽和雨衣，讓您騎車免煩惱。
                    </p>
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
            <div class="card" style="width: 22rem;">
                <img src="../../../public/ticket/diving.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">浮潛</h5>
                    <p class="card-text">由專業的潛水教練帶領前往安全海域，
                        <br>並提供全套完善的浮潛裝備，
                        <br>讓您玩得更加輕鬆盡興，安全也更有保障。
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">$400</li>
                </ul>
            </div>
            <div class="card" style="width: 22rem;">
                <img src="../../../public/ticket/canoe.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">獨木舟</h5>
                    <p class="card-text">在湛藍大海中自在划槳，享受悠閒獨木舟之旅
                        <br>專業教練操舟教學，航程中跟拍紀念照片，
                        <br>美好回憶永久留存。
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">一般獨木舟 $600</li>
                    <li class="list-group-item">透明獨木舟 $800</li>
                </ul>
            </div>
            <div class="card" style="width: 22rem;">
                <img src="../../../public/ticket/sup.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">SUP 立式划槳</h5>
                    <p class="card-text">挑戰最夯的SUP立槳，體驗乘風破浪的樂趣。
                        <br>專業教練細心示範、全程指導，
                        <br>輕鬆上手無負擔。
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">兩人一板 $1000</li>
                    <li class="list-group-item">一人一板 $1200</li>
                </ul>
            </div>
        </div>
        <div class="title">
            <p>景點</p>
        </div>
        <hr>
        <div class="ticket">
            <div class="card" style="width: 22rem;">
                <img src="../../../public/ticket/ticket.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">三大風景區門票</h5>
                    <p class="card-text">小琉球三大風景區，美人洞、山豬溝、烏鬼洞的名字都有特別的故事由來。
                        <br>沿途有各種珊瑚礁及石灰岩穴，
                        <br>除了探索大自然的神秘感也多了一種尋寶收集的意味。
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">$100</li>
                </ul>
            </div>
            <div class="card" style="width: 22rem;">
                <img src="../../../public/ticket/t8-ticket.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">鹿粼梅花鹿園區</h5>
                    <p class="card-text">園區養殖了許多品種的梅花鹿，是台灣目前少數的梅花鹿主題園區
                        ，可以與這些「小鹿斑比們」近距離互動餵食及拍照。
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">全票 $220</li>
                    <li class="list-group-item">半票 $50 (3-12歲)</li>
                </ul>
            </div>
        </div>
    </div>
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 75vw;
        height: 245vh;
        margin: auto;
        margin-top: 4vmin;
        position: relative;
        .title{
            p{
                font-size: 27pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
            }
        }
        hr{
            margin-bottom: 4vmin;
        }
        .traffic{
            width: 60vw;
            margin: auto;
            display: flex;
            justify-content: space-around;
            margin-bottom: 5vmin;
        }
        .activity{
            width: 75vw;
            justify-content: space-around;
            display: flex;
            margin: auto;
            margin-bottom: 5vmin;
        }
        .ticket{
            width: 60vw;
            margin: auto;
            display: flex;
            justify-content: space-around;
            margin-bottom: 5vmin;;
        }
        .card{
            border-radius: 6px;
            box-shadow: 1px 1px 1px lightgray;
            img{
                transition: all ease 0.5s;
                border-radius: 6px;
                scale: 0.9;
                &:hover{
                    opacity: 0.6;
                    rotate: 3deg;
                    scale: 0.9;
                }
                &:active{
                    opacity: 1.0;
                }
            }
        }
        .card-text{
            font-size: 11.5pt;
        }
    }
</style>