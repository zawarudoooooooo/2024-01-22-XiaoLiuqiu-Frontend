<script>
import Footer from '../../components/Footer.vue';
export default{
    data(){
        return{

        }
    },
    methods:{
        goTourist(){
            this.$router.push('/FrontTourist')
        }
    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="slideShow">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../../public/other/main.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/other/main1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/other/main2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/other/main3.JPG" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="about">
            <div class="iconArea">
                <div class="icon" data-bs-toggle="modal" 
                        data-bs-target="#exampleModaloperation">
                    <i class="fa-solid fa-leaf"></i>
                    <p>永續經營</p>
                </div>
                <div class="icon" data-bs-toggle="modal" 
                        data-bs-target="#exampleModalenergy">
                    <i class="fa-regular fa-lightbulb"></i>
                    <p>節能設備</p>
                </div>
                <div class="icon"  data-bs-toggle="modal" 
                        data-bs-target="#exampleModalfood">
                    <i class="fa-solid fa-wheat-awn"></i>
                    <p>有機食材</p>
                </div>
                <div class="icon" data-bs-toggle="modal" 
                        data-bs-target="#exampleModalpet">
                    <i class="fa-solid fa-paw"></i>
                    <p>寵物友善</p>
                </div>
            </div>
<!-- 永續經營視窗 -->
            <div class="modal fade" id="exampleModaloperation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">永續經營</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <ul>
                                        <li>
                                            使用天然分解產品，及友善環境沐浴用品
                                        </li>
                                        <li>
                                            配有飲水機，不提供瓶裝水
                                        </li>
                                        <li>
                                            提供環保容器和餐具租借
                                        </li>
                                        <li>
                                            續住不提供床單和毛巾更換
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
<!-- 節能設備視窗 -->
            <div class="modal fade" id="exampleModalenergy" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">節能設備</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <ul>
                                        <li>
                                            LED 照明設備
                                        </li>
                                        <li>
                                            變頻冷氣
                                        </li>
                                        <li>
                                            省水馬桶
                                        </li>
                                        <li>
                                            太陽能熱水器
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
<!-- 有機食材視窗 -->
            <div class="modal fade" id="exampleModalfood" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">有機食材</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <ul>
                                        <li>
                                            小農嚴選食材
                                        </li>
                                        <li>
                                            種植及生產加工過程均不使用農藥化肥、防腐劑<br>等人工合成化學物質
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
<!-- 寵物友善視窗 -->
            <div class="modal fade" id="exampleModalpet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">寵物友善</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <ul>
                                        <li>
                                            要有牽繩或是寵物推車才可入內
                                        </li>
                                        <li>
                                            勿讓毛孩上床，自備寵物床、毯子
                                        </li>
                                        <li>
                                            請自備寵物餐具，勿使用餐廳提供給人的餐具
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news">
                <div class="title">
                    <p>Special Offer</p>
                </div>
                <div class="offer">
                    <div class="card" style="width: 18rem;" data-bs-toggle="modal" 
                        data-bs-target="#exampleModalmoring">
                        <img src="../../../public/other/breakfast.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Morning<br/>美好的一天<br/>從多樣早餐開始</p>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;" data-bs-toggle="modal" 
                        data-bs-target="#exampleModallounge">
                        <img src="../../../public/other/lounge.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">24hr Lounge<br/>無時無刻<br/>讓您盡情享用</p>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;" data-bs-toggle="modal" 
                        data-bs-target="#exampleModaldrink">
                        <img src="../../../public/other/welcomedrink.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">WelcomeDrink<br/>入住即享有<br/>體驗離島微醺假期</p>
                        </div>
                    </div>
                </div>
            </div>
<!-- Morning視窗 -->
            <div class="modal fade" id="exampleModalmoring" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Morning</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <ul>
                                        <li>
                                            低糖飲食
                                        </li>
                                        <li>
                                            現打果汁
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
<!-- 24hrlounge視窗 -->
            <div class="modal fade" id="exampleModallounge" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">24hr Lounge</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <ul>
                                        <li>
                                            24小時開放公共空間
                                        </li>
                                        <li>
                                            飲料和零食無限拿
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
<!-- welcome drink視窗 -->
            <div class="modal fade" id="exampleModaldrink" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Welcome drink</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <ul>
                                        <li>
                                            入住時告知櫃台，即可享有免費調酒一杯
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- 景點輪播 -->
        <div class="activity">
            <div class="title">
                <p>Xiaoliuqiu Island</p>
            </div>
            <div class="scenery">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../../public/other/turtle.jpg" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h4>綠蠵龜</h4>
                                    <p>由於小琉球海溫較為平穩，海龜們常駐小琉球。
                                        <br>即使沒有從事水上活動，也能在岸邊看到海龜抬頭換氣的模樣。</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../../../public/tourist/t10/t10-2.JPG" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h4>中澳沙灘</h4>
                                    <p>擁有潔白的沙灘、蔚藍的海水。少有遊客前往，是一座鬧中取靜的小小秘境。</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../../../public/tourist/t06/t6-1.JPG" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h4>花瓶岩</h4>
                                    <p>花瓶石是一塊珊瑚礁，隨著時間發生抬升，加上頸部長時間受海水侵蝕，逐漸形成現在的樣子。</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div id="carouselExampleCaptions1" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../../public/tourist/t01/t1-8.jpg" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h4>美人洞</h4>
                                    <p>時而看見海景、時而看見巨大怪石，每一景都是大自然用成千上萬年時間慢慢雕刻出來，充滿驚奇！</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../../../public/tourist/t03/t3-1.JPG" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h4>山豬溝</h4>
                                    <p>沿途可看見許多藏在礁石內的珊瑚礁及貝殼化石，也有指標引導旅客前往園區中的小景點。</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../../../public/tourist/t02/t2-7.JPG" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h4>烏鬼洞</h4>
                                    <p>一座天然的珊瑚礁岩洞。穿越石洞、高低起伏之間，有一段歷史故事。</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="buttonArea">
            <button type="button" @click="goTourist()">前往更多景點</button>
        </div>
    </div>
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 220vh;
        .slideShow{
            width: 90vw;
            height: 80.5vh;
            margin: auto;
            margin-top: 5vmin;
            .carousel-inner{
                .carousel-item{
                    img{
                        height: 80vh;
                        border-radius: 10px;
                        transition: all linear 0.3s;
                        &:hover{
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
        .about{
            width: 90vw;
            margin: auto;
            height: 52vh;
            margin-top: 5vmin;
            display: flex;
            justify-content: space-around;
            .iconArea{
                width: 25vw;
                height: 50vh;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                margin-top: 5.5vmin;
                .icon{
                    width: 10vw;
                    height: 20vh;
                    background-color: #BFEAF5;
                    border-radius: 10px;
                    padding: 4vmin;
                    box-shadow: 1px 1px 1px gray;
                    transition: all linear 0.3s;
                    &:hover{
                        opacity: 0.8;
                        box-shadow: 8px 8px 2px 1px rgba(2, 40, 63, 0.2);
                    }
                    &:active{
                        opacity: 1.0;
                    }
                    i{
                        font-size: 38pt;
                        color: #797A7E;
                        display: flex;
                        justify-content: center;
                    }
                    p{
                        text-align: center;
                        color: #797A7E;
                        font-size: 14pt;
                        font-weight: bold;
                        margin-top: 1.5vmin;
                    }
                }
            }
            .news{
                width: 60vw;
                height: 52vh;
                .title{
                    p{
                        font-size: 27pt;
                        font-weight: bold;
                        color: #82AAE3;
                        text-align: center;
                        margin-bottom: 3vmin;
                    }
                }
                .offer{
                    display: flex;
                    justify-content: space-around;
                    .card{
                        border-radius: 10px;
                        box-shadow: 1px 1px 1px gray;
                        transition: all linear 0.3s;
                        &:hover{
                            opacity: 0.6;
                            box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                        }
                        &:active{
                            opacity: 1.0;
                        }
                        .card-body{
                            p{
                                text-align: center;
                            }
                        }
                        .card-img-top{
                            height: 25vh;
                        }
                    }
                }
            }
        }
        .activity{
            width: 90vw;
            height: 70vh;
            margin: auto;
            margin-top: 5vmin;
            .title{
                p{
                    font-size: 28pt;
                    font-weight: bold;
                    color: #82AAE3;
                    text-align: center;
                    margin-bottom: 3vmin;
                }
            }
            .scenery{
                display: flex;
                justify-content: space-around;
                .carousel-inner{
                    width: 40vw;
                    border-radius: 5px;
                    box-shadow: 2px 2px 2px gray;
                    transition: all linear 0.3s;
                    &:hover{
                        opacity: 0.6;
                        box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                    }
                    &:active{
                        opacity: 1.0;
                    }
                    .carousel-item{
                        width: 40vw;
                        img{
                            width: 40vw;
                            height: 55vh;
                            border-radius: 5px;
                        }
                        p{
                            font-size: 14pt;
                            text-align: center;
                            text-shadow: 2px 2px 2px #797A7E;
                        }
                        h4{
                            text-shadow: 3px 3px 3px #797A7E;
                        }
                    }
                }
            }
        }
        .buttonArea{
            width: 90vw;
            margin: auto;
            text-align: center;
            button{
                width: 8vw;
                height: 5vh;
                border: none;
                color: #797A7E;
                border-radius: 5px;
                box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
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

    @media(max-width:1200px){
        .content{
            height: 93vh;
            .slideShow{
                height: 30vh;
                .carousel-inner{
                    .carousel-item{
                        img{
                            height: 30vh;
                        }
                    }
                }
            }
            .about{
                height: 23vh;
                margin-top: 3vmin;
                .iconArea{
                    height: 18vh;
                    margin-top: 6vmin;
                    .icon{
                        height: 7vh;
                        padding: 2vmin;
                        i{
                            font-size: 26pt;
                        }
                        p{
                            font-size: 11pt;
                            margin-top: 0.5vmin;
                        }
                    }
                }
                .news{
                    height: 24vh;
                    .title{
                        p{
                            font-size: 26pt;
                            margin-bottom: 1vmin;
                        }
                    }
                    .offer{
                        gap: 1.5vmin;
                        .card{
                            height: 17.5vh;
                        }
                    }
                }
            }
            .activity{
                height: 27vh;
                margin-top: 3vmin;
                .title{
                    p{
                        margin-bottom: 1vmin;
                    }
                }
                .scenery{
                    .carousel-inner{
                        height: 20vh;
                        .carousel-item{
                            height: 20vh;
                            img{
                                height: 20vh;
                            }
                            p{
                                font-size: 10pt;
                            }
                        }
                    }
                }
            }
            .buttonArea{
                button{
                    width: 12vw;
                    height: 3vh;
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 90vh;
            .about{
                height: 22vh;
                .iconArea{
                    height: 17svh;
                    .icon{
                        i{
                            font-size: 20pt;
                        }
                        p{
                            font-size: 9pt;
                            margin-top: 1vmin;
                        }
                    }
                }
                .news{
                    height: 22vh;
                    .title{
                        p{
                            font-size: 24pt;
                        }
                    }
                    .offer{
                        .card{
                            height: 16vh;
                            .card-body{
                                p{
                                    font-size: 9pt;
                                }
                            }
                        }
                    }
                }
            }
            .activity{
                height: 26vh;
                margin-top: 3vmin;
                .title{
                    p{
                        font-size: 24pt;
                    }
                }
                .scenery{
                    .carousel-inner{
                        .carousel-item{
                            p{
                                font-size: 8pt;
                            }
                        }
                    }

                }
            }
            .buttonArea{
                button{
                    width: 14vw;
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 82vh;
            .slideShow{
                height: 20vh;
                .carousel-inner{
                    .carousel-item{
                        img{
                            height: 20vh;
                        }
                    }
                }
            }
            .about{
                width: 90vw;
                height: 35vh;
                display: flex;
                flex-wrap: wrap;
                .iconArea{
                    width: 90vw;
                    height: 10vh;
                    display: flex;
                    .icon{
                        width: 18vw;
                        height: 8vh;
                        padding: 3vmin;
                        i{
                            font-size: 20pt;
                        }
                        p{
                            font-size: 8pt;
                        }
                    }
                }
                .news{
                    width: 85vw;
                    height: 21vh;
                    .title{
                        p{
                            font-size: 18pt;
                            text-align: center;
                        }
                    }
                    .offer{
                        .card{
                            width: 20vw;
                            height: 16vh;
                            .card-body{
                                p{
                                    font-size: 6pt;
                                }
                            }
                            .card-img-top{
                                height: 16vh;
                            }
                        }
                    }
                }
            }
            .activity{
                height: 17.5vh;
                .title{
                    p{
                        font-size: 18pt;
                    }
                }
                .scenery{
                    .carousel-inner{
                        height: 11vh;
                        .carousel-item{
                            height: 11vh;
                            img{
                                height: 11vh;
                            }
                        }
                    }
                }
            }
            .buttonArea{
                button{
                    width: 26vw;
                    height: 3vh;
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            height: 80vh;
            .about{
                .news{
                    height: 20vh;
                    .title{
                        p{
                            font-size: 16pt;
                        }
                    }
                    .offer{
                        .card{
                            .card-body{
                                p{
                                    font-size: 6.5pt;
                                }
                            }
                        }
                    }
                }
            }
            .activity{
                .title{
                    p{
                        font-size: 16pt;
                    }
                }
                .scenery{
                    .card{
                        .card-img-overlay{
                            font-size: 5.5pt;
                        }
                    }
                }
            }
            .buttonArea{
                button{
                    width: 29vw;
                }
            }
        }
    }
</style>