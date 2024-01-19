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
                <div class="icon">
                    <i class="fa-solid fa-leaf"></i>
                    <p>永續經營</p>
                </div>
                <div class="icon">
                    <i class="fa-regular fa-lightbulb"></i>
                    <p>節能設備</p>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-wheat-awn"></i>
                    <p>有機食材</p>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-paw"></i>
                    <p>寵物友善</p>
                </div>
            </div>
            <div class="news">
                <div class="title">
                    <p>Special Offer</p>
                </div>
                <div class="offer">
                    <div class="card" style="width: 18rem;">
                        <img src="../../../public/other/breakfast.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Morning<br/>美好的一天<br/>從多樣早餐開始</p>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img src="../../../public/other/coffeelounge.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">24hr Lounge<br/>無時無刻<br/>讓您盡情享用</p>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img src="../../../public/other/welcomedrink.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">WelcomeDrink<br/>入住即享有<br/>體驗離島微醺假期</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="activity">
            <div class="title">
                <p>Liuqiu</p>
            </div>
            <div class="scenery">
                <div class="card bg-dark text-white">
                    <img src="../../../public/other/other3.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">綠蠵龜</h5>
                        <p class="card-text" id="text">由於小琉球海溫較為平穩，海龜們常駐小琉球。
                            <br>即使沒有從事水上活動，也能在岸邊看到海龜抬頭換氣的模樣。</p>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="../../../public/tourist/t02/t2-7.JPG" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">烏鬼洞</h5>
                        <p class="card-text">島上石灰岩洞穴遍布最出名的區域，<br>內部結構錯綜複雜，宛如迷宮陣一般。</p>
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
        height: 215vh;
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
            height: 67vh;
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
                .card{
                    width: 40vw;
                    border-style: none;
                    box-shadow: 2px 2px 2px gray;
                    transition: all linear 0.3s;
                    &:hover{
                        opacity: 0.6;
                        box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                    }
                    &:active{
                        opacity: 1.0;
                    }
                }
                img{
                    width: 40vw;
                    height: 55vh;
                    border-radius: 5px;
                }
            }
        }
    }

    @media(max-width:1200px){
        .content{
            height: 85vh;
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
                height: 26vh;
                margin-top: 3vmin;
                .title{
                    p{
                        margin-bottom: 1vmin;
                    }
                }
                .scenery{
                    .card{
                        height: 20vh;
                    }
                    img{
                        height: 20vh;
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 83vh;
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
                margin-top: 3vmin;
                .title{
                    p{
                        font-size: 24pt;
                    }
                }
                .scenery{
                    .card{
                        height: 15vh;
                        img{
                            height: 18vh;
                        }
                        .card-img-overlay{
                            font-size: 10pt;
                        }
                    }
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 80vh;
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
                height: 21vh;
                .title{
                    p{
                        font-size: 18pt;
                    }
                }
                .scenery{
                    .card{
                        height: 15vh;
                        img{
                            height: 15vh;
                        }
                        .card-img-overlay{
                            font-size: 6pt;
                            h5{
                                font-size: 11pt;
                            }
                        }
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
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
        }
    }
</style>