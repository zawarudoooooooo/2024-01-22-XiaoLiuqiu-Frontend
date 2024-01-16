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
                            <p class="card-text">WelcomeDrink<br/>入住即享有<br/>讓您體驗離島微醺假期</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="activity">
            <div class="title">
                <p>Liuqiu</p>
            </div>
            <div class="new">
                <div class="card bg-dark text-white">
                    <img src="../../../public/other/other3.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">綠蠵龜</h5>
                        <p class="card-text">由於小琉球海溫較為平穩，海龜們常駐小琉球。
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
            //border: 1px solid black;
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
            //border: 1px solid black;
            height: 50vh;
            margin-top: 5vmin;
            display: flex;
            justify-content: space-around;
            .iconArea{
                width: 25vw;
                height: 50vh;
                //border: 1px black solid;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                margin-top: 3vmin;
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
                height: 50vh;
                //border: 1px solid black;
                .title{
                    p{
                        font-size: 28pt;
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
            //border: 1px black solid;
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
            .new{
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
                height: 20vh;
                margin-top: 3vmin;
                .iconArea{
                    height: 18vh;
                    margin-top: 5.5vmin;
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
                    .title{
                        p{
                            font-size: 26pt;
                            margin-bottom: 1vmin;
                        }
                    }
                    .offer{
                        .card{
                            height: 17.5vh;
                        }
                    }
                }
            }
            .activity{
                height: 25vh;
                .new{
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
</style>