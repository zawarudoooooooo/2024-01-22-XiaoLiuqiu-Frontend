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
                        <img src="../../../../public/tourist/t01/t1-8.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-1.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-2.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-4.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-5.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-6.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-7.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-9.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t01/t1-10.JPG" class="d-block w-100" alt="...">
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
                <span>美人洞</span>
                <span id="time">開放時間 : 07:30-17:00</span>
            </div>
            <hr>
            <p>
                小琉球西北角的美人洞背山面海，
                <br>
                擁有許多奇岩怪石及天然形成的珊瑚礁岩洞。
                <br>
                琉球鄉公所在西元1975年以公共造產方式闢建成美人洞步道，
                <br>
                並在沿途打造美人洞十三景。
                <br>
                時而看見海景、時而看見巨大怪石，每一景都是大自然用成千上萬年時間慢慢雕刻出來，充滿驚奇！
                <br>
                全程走完約三十至四十分鐘，沿途有綠樹遮蔽、加上有海風吹撫，即便是炎炎夏日走起來也是相當舒服。
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
        //border: 1px black solid;
        .pictureArea{
            width: 35vw;
            border-radius: 10px;
            //border: 1px red solid;
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
            //border: 1px green solid;
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
                font-size: 14.5pt;
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
                height: 40vh;
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
                    font-size: 20pt;
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 77vh;
            .introduce{
                p{
                    font-size: 16pt;
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
                    font-size: 12pt;
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            .introduce{
                p{
                    font-size: 11.5pt;
                }
            }
        }
    }
</style>