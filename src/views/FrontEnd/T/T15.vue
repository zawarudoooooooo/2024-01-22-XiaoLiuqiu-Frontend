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
                        <img src="../../../../public/tourist/t15/t15-1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t15/t15-2.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t15/t15-3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t15/t15-4.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t15/t15.JPG" class="d-block w-100" alt="...">
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
            <span>厚石裙礁</span>
            <hr>
            <p>
                主要分布於小琉球東南沿海一帶。
                <br>
                因礁岩長年受到海水侵蝕作用，裙礁呈現一條一條的海溝狀。
                從空中往下看，就像小琉球穿上了一片一片的百摺裙。
                <br>
                這裡礁岩的長相都十分奇特，包括著名的紅番石、觀音石，另外還有爬山虎石、白熊石、鷹嘴石、老鼠石等。
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
                    font-size: 35pt;
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
            .introduce{
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
                    font-size: 23pt;
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
                    font-size: 18pt;

                }
                p{
                    font-size: 13.5pt;
                }
            }
        }
    }
</style>