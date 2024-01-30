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
                        <img src="../../../../public/tourist/t17/t17-1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t17/t17-2.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t17/t17-3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t17/t17-4.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t17/t17.JPG" class="d-block w-100" alt="...">
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
            <span>肚仔坪潮間帶</span>
            <hr>
            <p>
                肚仔坪潮間帶全長約1600公尺。
                <br>
                較平坦的珊瑚礁海蝕平台中佈滿了大大小小的潮池，
                <br>
                退潮後便成為潮間帶生物展示區。
                <br>
                為兼顧觀光發展與生態保育， 
                <br>
                小琉球的幾個潮間帶都屬於管制區。
                <br>
                每年只在4月1日到11月30日開放， 且必須在領有許可證的解說員帶領下遊客方能進入。
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
            width: 35vw;
            span{
                font-size: 27pt;
                color: #4d4327;
                font-weight: bold;
            }
            hr{
                margin-top: 0;
            }        
            p{
                width: 35vw;
                color: #4d4327;
                font-size: 15pt;
            }
        }
    }
    @media(max-width:1200px){
        .content{
            height: 75vh;
            margin-top: 10vmin;
            display: block;
            .pictureArea{
                width: 70vw;
                height: 42vh;
                margin: auto;
            }
            .introduce{
                width: 75vw;
                margin: auto;
                span{
                    font-size: 33pt;
                }
                p{
                    width: 75vw;
                    font-size: 21pt;
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 75vh;
            .pictureArea{
                height: 41vh;
            }
            .introduce{
                span{
                    font-size: 30pt;
                }
                p{
                    font-size: 17pt;
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 75vh;
            margin-top: 15vmin;
            .pictureArea{
                height: 31vh;
            }
            .introduce{
                span{
                    font-size: 21pt;
                }
                p{
                    font-size: 15pt;
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            .pictureArea{
                height: 32vh;
            }
            .introduce{
                span{
                    font-size: 17pt;

                }
                p{
                    font-size: 13.5pt;
                }
            }
        }
    }
</style>