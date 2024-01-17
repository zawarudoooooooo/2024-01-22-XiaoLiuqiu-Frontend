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
                        <img src="../../../../public/tourist/t06/t6.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t06/t6-2.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t06/t6-3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t06/t6-4.JPG" class="d-block w-100" alt="...">
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
            <span>花瓶岩</span>
            <hr>
            <p>
                花瓶岩(又稱花瓶石)是一塊珊瑚礁岩，因地殼隆起作用而抬升於海面上，
                因長期受海水差異性侵蝕，而形成頭大身小的外觀，類似花瓶的特殊造型。
                <br>
                加上岩頂上長滿了臭娘子與盒果藤等植物，看起來如同插著花草的花瓶，因此取名為「花瓶岩」。
                <br>
                在花瓶岩周圍，還可以看見海面下新形成的珊瑚裙礁，證明琉球嶼目前仍受到地殼隆起作用影響中。
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
                color: #797A7E;
                font-weight: bold;
            }
            hr{
                margin-top: 0;
            }        
            p{
                width: 35vw;
                color: #797A7E;
                font-size: 15pt;
            }
        }
    }
</style>