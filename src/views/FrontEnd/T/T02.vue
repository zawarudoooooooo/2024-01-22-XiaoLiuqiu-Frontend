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
                        <img src="../../../../public/tourist/t03/t3-1.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t03/t3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t03/t3-2.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t03/t3-3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t03/t3-4.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t03/t3-5.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t03/t3-6.JPG" class="d-block w-100" alt="...">
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
            <span>山豬溝</span>
            <hr>
            <h4>開放時間 : 08:00-18:00</h4>
            <p>一座斷崖形成的山溝，步道全程走完約三十分鐘。
                <br>
                地名之由來其一，為早期養豬人家認為豬隻腳蹄若為「五爪蹄」代表不吉祥，
                因此會將「五爪蹄」豬隻野放山上，因而得名山豬溝。
                <br>
                沿途可看見許多藏在礁石內的珊瑚礁及貝殼化石，
                <br>
                也有指標引導旅客前往尋覓園區中的小景點。</p>
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
            img{
                border-radius: 10px;
            }
        }
        .introduce{
            span{
                font-size: 28pt;
                color: #797A7E;
                font-weight: bold;
            }
            h4{
                color: #797A7E;
                font-weight: bold;
            }            
            p{
                width: 30vw;
                color: #797A7E;
                font-size: 16pt;
            }
        }
    }
</style>