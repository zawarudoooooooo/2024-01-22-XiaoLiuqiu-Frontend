<script>
import Footer from '../../../components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router'
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
            <p>熱門景點</p>
        </div>
        <div class="flip">
            <div class="front" style="background-image: url(../../../public/tourist/t01/tm1.jpg)">
            </div>
            <div class="back">
                <RouterLink to="/FrontT01" class="routerItem">美人洞</RouterLink>
                <p>小琉球西北角的美人洞背山面海，擁有許多奇岩怪石及天然形成的珊瑚礁岩洞。</p>
            </div>
        </div>
        <div class="flip">
            <div class="front" style="background-image: url(../../../public/tourist/t03/tm3.JPG)">
            </div>
            <div class="back">
                <RouterLink to="/FrontT02" class="routerItem">山豬溝</RouterLink>
                <p>依山而建，是一座斷崖形成的山溝，沿途可看見許多藏在礁石內的珊瑚礁及貝殼化石。</p>
            </div>
        </div>
        <div class="flip">
            <div class="front" style="background-image: url(../../../public/tourist/t02/tm2.JPG)">
            </div>
            <div class="back">
                <RouterLink to="/FrontT03" class="routerItem">烏鬼洞</RouterLink>
                <p>名字為「烏鬼洞（又稱鬼界厝）」，是一座天然的珊瑚礁岩洞。是座自然與歷史故事結合的觀光景點。</p>
            </div>
        </div>
        <div class="allSpot">
            <div class="title">
                <p>所有景點</p>
            </div>
            <hr>
            <div class="cardArea">
                <div class="card">
                    <img src="../../../..//tourist/t04/t4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT04" class="routerItemCard">龍蝦洞</RouterLink>
                        <p class="card-text">
                            <br>
                            被海水侵蝕後，<br>所形成的珊瑚洞穴。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../public/tourist/t05/t5.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT05" class="routerItemCard">白燈塔</RouterLink>
                        <p class="card-text">
                            <br>
                            與鵝鑾鼻燈塔共同負責船隻通行的安全，<br>擁有相當重要的地位。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../..//public/tourist/t06/t6-1.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT06" class="routerItemCard">花瓶岩</RouterLink>
                        <p class="card-text">
                            <br>
                            為小琉球最顯眼、最著名的地標。<br>成為觀光客必遊與攝影留念的景點。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../public/tourist/t07/t7.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT07" class="routerItemCard">落日亭</RouterLink>
                        <p class="card-text">
                            <br>
                            海景第一排，無任何遮蔽物，<br>是賞夕陽的最佳景點。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../public/tourist/t08/t8.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT08" class="routerItemCard">鹿粼梅花鹿園區</RouterLink>
                        <p class="card-text">
                            <br>
                            能與梅花鹿拍照、餵食、玩樂，<br>並盡情的享受與鹿零距離的互動。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../public/tourist/t10/t10.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT10" class="routerItemCard">中澳沙灘</RouterLink>
                        <p class="card-text">
                            <br>
                            少有遊客前往，<br>是一座鬧中取靜的小小秘境。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../public/tourist/t11/t11.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT11" class="routerItemCard">美人沙灘</RouterLink>
                        <p class="card-text">
                            <br>
                            純淨無污染，<br>是很棒的浮潛地點。</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../..//public/tourist/t12/t12.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT12" class="routerItemCard">蛤板灣</RouterLink>
                        <p class="card-text">
                            <br>
                            沙灘潔淨無比、海水蔚藍，<br>素有「威尼斯沙灘」的美名。</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../public/tourist/t14/t14.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT14" class="routerItemCard">厚石澳神秘沙灘</RouterLink>
                        <p class="card-text">
                            <br>
                            珊瑚礁岩延伸海岸上，在沿岸出現一個缺口形成白色的小港灣沙灘。</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../..//public/tourist/t15/t15.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT15" class="routerItemCard">厚石裙礁</RouterLink>
                        <p class="card-text">
                            <br>
                            因礁岩長年受到海水侵蝕作用，<br>呈現一條一條的海溝狀。</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../public/tourist/t17/t17.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <RouterLink to="/FrontT17" class="routerItemCard">肚仔坪潮間帶</RouterLink>
                        <p class="card-text">
                            <br>
                            平坦的珊瑚礁海蝕平台佈滿了大大小小的潮池，退潮後成為潮間帶生物展示區。</p>
                    </div>
                </div>
            </div>
        </div>
</div>
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 293vh;
        text-align: center;
        margin-top: 4vmin;
        .title{
            p{
                color: #82AAE3;
                font-size: 27pt;
                font-weight: bold;
            }
        }
        * {
            box-sizing: border-box;
            font-weight: normal;
        }
        .routerItem{
            text-decoration: none;
            color: white;
            font-size: 24pt;
        }
        .routerItemCard{
            text-decoration: none;
            color: black;
            font-size: 18pt;
        }
        .flip {
            position: relative;
            >.front,
            >.back {
                display: block;
                transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
                transition-duration: .9s;
                transition-property: transform, opacity;
            }
            >.front {
                transform: rotateY(0deg);
            }
            >.back {
                position: absolute;
                opacity: 0;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                transform: rotateY(-180deg);
            }
            &:hover {
                >.front {
                    transform: rotateY(180deg);
                }
                >.back {
                    opacity: 1;
                    transform: rotateY(0deg);
                }
            }
        }
        .flip {
            position: relative;
            display: inline-block;
            margin-right: 2px;
            margin-bottom: 3em;
            width: 400px;
            >.front,
            >.back {
                display: block;
                color: white;
                width: inherit;
                background-size: cover!important;
                background-position: center!important;
                height: 220px;
                padding: 1em 2em;
                background: #313131;
                border-radius: 10px;
                p {
                    font-size: 0.9125rem;
                    line-height: 160%;
                    color: #999;
                }
            }
        }
        .text-shadow {
            text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
        }
        .allSpot{
            width: 70vw;
            margin: auto;
            hr{
                margin-bottom: 3vmin;
            }
            .cardArea{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                .card{
                    width: 21rem; 
                    height: 23rem;
                    margin-bottom: 6vmin;
                    border-radius: 6px;
                    box-shadow: 1px 1px 1px lightgray;
                    img{
                        transition: all ease 0.5s;
                        border-radius: 6px;
                        &:hover{
                            opacity: 0.6;
                            scale: 0.9;

                        }
                        &:active{
                            opacity: 1.0;
                        }
                    }
                    .card-body{
                        .routerItemCard{
                            color: #4d4327;
                        }
                        .card-text{
                            color: #4d4327;
                        }
                    }
                }
            }
        }
    }
    @media(max-width:1200px){
        .content{
            height: 242vh;
            .allSpot{
                width: 85vw;
                height: 195vh;
                .cardArea{
                    .card{
                        width: 24rem;
                        height: 25rem;
                        margin-bottom: 3vmin;
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 258vh;
            .flip{
                width: 370px;
                margin-bottom: 2rem;
            }
            .allSpot{
                width: 85vw;
                height: 207vh;
                .cardArea{
                    .card{
                        width: 21rem;
                        height: 23rem;
                    }
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 238vh;
            .title{
                p{
                    font-size: 24pt;
                }
            }
            .flip{
                margin-bottom: 1rem;
            }
            .allSpot{
                height: 153vh;
                .cardArea{
                    .card{
                        width: 10rem;
                        height: 13rem;
                        margin-bottom: 4vmin;
                        .routerItemCard{
                            font-size: 13pt;
                        }
                        .card-text{
                            font-size: 6pt;
                        }
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            height: 242vh;
            .title{
                p{
                    font-size: 20pt;
                }
            }
            .flip{
                width: 80vw;
                height: 23vh;
                margin-bottom: 2rem;
            }
            .allSpot{
                .cardArea{
                    .card{
                        height: 12rem;
                        margin-bottom: 3vmin;
                        .routerItemCard{
                            font-size: 11pt;
                        }
                        .card-text{
                            font-size: 5pt;
                        }
                    }
                }
            }
        }
    }
</style>