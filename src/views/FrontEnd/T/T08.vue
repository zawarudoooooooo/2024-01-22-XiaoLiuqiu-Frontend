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
                        <img src="../../../../public/tourist/t08/t8.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t08/t8-1.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t08/t8-2.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t08/t8-3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t08/t8-4.JPG" class="d-block w-100" alt="...">
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
                <span>鹿粼梅花鹿園區</span>
                <span id="time">開放時間 : 09:00-17:00</span>
            </div>
            <hr>
            <p>
                2020年全新開幕的「鹿粼梅花鹿園區」，
                <br>
                可以近距離與梅花鹿互動、拍照。
                <br>
                園區佔地1260坪，三個互動區，養殖台灣梅花鹿，還有罕見的的白鹿及水鹿。
                <br>
                園區中的梅花鹿都是館方自己繁殖的，因此每一隻都有自己的名字、也都非常親近人。
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
            width: 40vw;
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
                width: 35vw;
                color: #797A7E;
                font-size: 15pt;
                margin: auto;
            }
        }
    }
</style>