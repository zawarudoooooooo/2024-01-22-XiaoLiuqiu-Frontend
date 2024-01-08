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
        <h4>熱門景點</h4>
        <div class="flip">
            <div class="front" style="background-image: url(../../../public/tourist/t01/tm1.jpg)">
                <h1 class="text-shadow">Beauty Cave</h1>
            </div>
            <div class="back">
                <h2>美人洞</h2>
                <p>小琉球西北角的美人洞背山面海，擁有許多奇岩怪石及天然形成的珊瑚礁岩洞。</p>
            </div>
        </div>
        <div class="flip">
            <div class="front" style="background-image: url(../../../public/tourist/t03/tm3.JPG)">
                <h1 class="text-shadow">Wild Boar Ditch</h1>
            </div>
            <div class="back">
                <h2>山豬溝</h2>
                <p>依山而建，是一座斷崖形成的山溝，沿途可看見許多藏在礁石內的珊瑚礁及貝殼化石。</p>
            </div>
        </div>
        <div class="flip">
            <div class="front" style="background-image: url(../../../public/tourist/t02/tm2.JPG)">
                <h1 class="text-shadow">Black Devil Cave</h1>
            </div>
            <div class="back">
                <h2>烏鬼洞</h2>
                <p>名字為「烏鬼洞（又稱鬼界厝）」，是一座天然的珊瑚礁岩洞。是座自然與歷史故事結合的觀光景點。</p>
            </div>
        </div>
        <div class="allSpot">
            <h4>所有景點</h4>
            <div class="cardArea">
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t04/t4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">龍蝦洞</h5>
                        <p class="card-text">龍蝦洞顧名思義就是有很多龍蝦存在，不過現在的龍蝦洞已經不可見太多龍蝦，反而是一座座被海水侵蝕後所形成的珊瑚洞穴。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t05/t5.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">白燈塔</h5>
                        <p class="card-text">與鵝鑾鼻燈塔共同負責台灣海峽與巴士海峽船隻通行的安全，擁有相當重要的地位。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t06/t6.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">花瓶岩</h5>
                        <p class="card-text">花瓶岩是一大塊隆起的珊瑚礁岩，是小琉球島上的重要地標。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t07/t7.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">落日亭</h5>
                        <p class="card-text">島上看夕陽最棒的地點。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t08/t8.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">鹿粼梅花鹿園區</h5>
                        <p class="card-text">2020年全新開幕的一間讓旅客可以近距離與梅花鹿互動、拍照的「鹿粼梅花鹿園區」。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t10/t10.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">中澳沙灘</h5>
                        <p class="card-text">擁有潔白的沙灘、蔚藍的海水少有遊客前往，是一座鬧中取靜的小小秘境。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t11/t11.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">美人沙灘</h5>
                        <p class="card-text">位於美人洞附近的「美人沙灘」擁有潔白的海灣和碧藍的海水，因為純淨無污染，是很棒的浮潛地點。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t12/t12.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">蛤板灣</h5>
                        <p class="card-text">小琉球西南側，面向台灣海峽的一個「蛤板灣」因為沙灘潔淨無比、海水蔚藍，素有「威尼斯沙灘」的美名。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t14/t14-4.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">厚石裙礁</h5>
                        <p class="card-text">主要分布於小琉球東南沿海一帶。因礁岩長年受到海水侵蝕作用，呈現一條一條的海溝狀。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t14/t14.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">厚石澳神秘沙灘</h5>
                        <p class="card-text">厚石群礁的珊瑚礁岩延伸在小琉球的東南海岸上，在沿岸剛好出現一個小缺口形成了白色的小港灣沙灘。</p>
                        <a href="#" class="btn btn-light">詳細</a>
                    </div>
                </div>
                <div class="card" style="width: 23rem;">
                    <img src="../../../public/tourist/t17/t17.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">肚仔坪潮間帶</h5>
                        <p class="card-text">平坦的珊瑚礁海蝕平台中佈滿了大大小小的潮池，退潮後成為潮間帶生物展示區。</p>
                        <a href="#" class="btn btn-light">詳細</a>
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
        height: 300vh;
        text-align: center;
        margin-top: 6vmin;
        h4{
            color: #82AAE3;
            font-size: 28pt;
            font-weight: bold;
            margin-bottom: 3vmin;
        }
        * {
            box-sizing: border-box;
            font-weight: normal;
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
            margin-bottom: 1em;
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
            width: 80vw;
            margin: auto;

            h4{
                color: #82AAE3;
                font-size: 28pt;
                font-weight: bold;
                margin-top: 10vmin;
            }
            .cardArea{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                .card{
                    margin-bottom: 6vmin;
                }
            }
        }
    }
</style>