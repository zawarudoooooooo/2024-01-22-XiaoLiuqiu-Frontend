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
                        <img src="../../../../public/tourist/t11/t11-1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t11/t11-2.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t11/t11-3.JPG" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/tourist/t11/t11-4.JPG" class="d-block w-100" alt="...">
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
            <span>美人沙灘</span>
            <hr>
            <p>
                位於美人洞風景區第二售票亭旁邊，屬於免費景點。
                <br>
                擁有潔白的海灣和碧藍的海水，因為純淨無污染，
                <br>是很棒的浮潛地點。
                很容易可以看到海膽、海參、海星。
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
                    font-size: 35pt;
                }
                p{
                    width: 75vw;
                    font-size: 25pt;
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 75vh;
            .introduce{
                p{
                    font-size: 20pt;
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 75vh;
            margin-top: 15vmin;
            .pictureArea{
                height: 32vh;
            }
            .introduce{
                span{
                    font-size: 23pt;
                }
                p{
                    font-size: 17pt;
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            .introduce{
                p{
                    font-size: 15.5pt;
                }
            }
        }
    }
</style>