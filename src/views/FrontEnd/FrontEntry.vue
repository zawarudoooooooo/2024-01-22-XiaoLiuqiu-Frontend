<script>
import Footer from '../../components/Footer.vue';
export default{
    data(){
        return{

        }
    },
    methods:{
        goBackLogin(){
            this.$router.push('/BackLogin')
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
                        <img src="../../../public/other/main.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/other/main1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/other/main2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/other/main3.jpg" class="d-block w-100" alt="...">
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
                    <i class="fa-solid fa-seedling"></i>
                    <p>環保再生</p>
                </div>
                <div class="icon">
                    <i class="fa-regular fa-clock"></i>
                    <p>24小時櫃台</p>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-ticket"></i>
                    <p>超值套票</p>
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
                        <img src="../../../public/other/welcomedrink.jpg" style="height: 24vh;" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">WelcomeDrink<br/>入住即享有<br/>讓您體驗離島微醺假期</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="activity">
            <div class="title">
                <p>Precious Moment</p>
            </div>
            <div class="new">
                <div class="card bg-dark text-white">
                    <img src="../../../public/other/other4.jpg" class="card-img" alt="...">
                    <!-- <img src="../../../public/other/meal.jpg" class="card-img" alt="..."> -->
                    <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 5 mins ago</p>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="../../../public/other/other2.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 20 mins ago</p>
                    </div>
                </div>

            </div>
                
        </div>

        <i class="fa-solid fa-gear" @click="goBackLogin()" id="back"></i>
    </div>
    
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 215vh;
        position: relative;

        .slideShow{
            width: 90vw;
            height: 80.5vh;
            //border: 1px solid black;
            margin: auto;
            margin-top: 5vmin;
            .carousel-inner{
                //width: 90vw;
                .carousel-item{
                    img{
                        height: 80vh;
                        border-radius: 10px;
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
                    box-shadow: 2px 2px 2px gray;
                    &:hover{
                        opacity: 0.6;
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
                        box-shadow: 2px 2px 2px gray;
                        &:hover{
                            opacity: 0.6;
                        }
                        &:active{
                            opacity: 1.0;
                        }
                        .card-body{
                            p{
                                text-align: center;
                            }
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
                    &:hover{
                        opacity: 0.6;
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
        #back{
            font-size: 16pt;
            color:#F7F2E7;
            position: absolute;
            right: 1%;
            bottom: -2%;
            &:hover{
                color: #797A7E;
            }
            &:active{
                color:#F7F2E7;
            }
        }
    }
</style>