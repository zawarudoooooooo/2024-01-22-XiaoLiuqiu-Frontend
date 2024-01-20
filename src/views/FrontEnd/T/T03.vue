<script>
import Footer from '../../../components/Footer.vue';
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
        <div class="pictureArea">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../../../public/tourist/t02/t2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t02/t2-1.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t02/t2-2.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t02/t2-3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t02/t2-4.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t02/t2-5.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t02/t2-6.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t02/t2-7.JPG" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="introduce">
            <div class="info">
                <span>烏鬼洞</span>
                <span id="time">開放時間 : 08:00-18:00</span>
            </div>
            <hr>
            <p>
                烏鬼洞步道，是一座天然的珊瑚礁岩洞。穿越石洞、高低起伏之間，烏鬼洞有一段歷史故事。
                <br>
                西元1636年拉美島事件中，是小琉球社人的躲藏處，曾發現石床、石桌、石鑼、石鼓、銀器、珠寶等等。
                <br>
                傳言當年躲藏於洞穴中的是荷蘭帶來的黑人奴隸，才得名烏鬼洞，是座自然與歷史故事結合的觀光景點。
            </p>
        </div>
    </div>
    <Footer />
</template>


<style lang="scss" scoped>
    .content{
        width: 90vw;
        height: 69vh;
        margin: auto;
        margin-top: 2vmin;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .pictureArea{
            width: 35vw;
            border-radius: 10px;
            .carousel-inner{
                border-radius: 10px;
                box-shadow: 8px 8px 2px 1px rgba(2, 40, 63, 0.2);
            }
            img{
                border-radius: 10px;
            }
        }
        .introduce{
            width: 45vw;
            .info{
                display: flex;
                justify-content: space-around;
                align-items: center;
                span{
                    font-size: 27pt;
                    color: #797A7E;
                    font-weight: bold;
                }
                #time{
                    color: #797A7E;
                    font-weight: bold;
                    font-size: 18pt;
                    margin-top: 2vmin;
                }  
            }
            hr{
                margin-top: 0;
            }
            p{
                width: 40vw;
                color: #797A7E;
                font-size: 15pt;
                margin: auto;
            }
        }
    }
    @media(max-width:1200px){
        .content{
            height: 76vh;
            margin-top: 8vmin;
            display: block;
            .pictureArea{
                width: 70vw;
                height: 42vh;
                margin: auto;
            }
            .introduce{
                width: 75vw;
                margin: auto;
                .info{
                    span{
                        font-size: 30pt;
                    }
                    #time{
                        font-size: 20pt;
                    }
                }
                p{
                    width: 75vw;
                    font-size: 23pt;
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 77vh;
            .introduce{
                p{
                    font-size: 18pt;
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 75vh;
            margin-top: 15vmin;
            .pictureArea{
                height: 30vh;
            }
            .introduce{
                .info{
                    span{
                        font-size: 20pt;
                    }
                    #time{
                        font-size: 12pt;
                    }
                }
                p{
                    font-size: 15pt;
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            .introduce{
                p{
                    font-size: 13.5pt;
                }
            }
        }
    }
</style>