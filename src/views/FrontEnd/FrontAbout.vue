<script>
import Footer from '../../components/Footer.vue';
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
        <div class="introduce">
            <div class="card">
                <img src="../../../public/about.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">關於 Sea.Life</h5>
                    <p class="card-text">2023 年底新成立，全小琉球最靠近海的飯店，步行5分鐘即可抵達海邊。步行3分鐘就有便利商店和餐廳，十分熱鬧。</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <!-- <div class="title">
                <p>關於 Sea.Life</p>
            </div>
            <div class="about">
                <img src="../../../public/about.jpeg" alt="">
                <p>2023 年底新成立，全小琉球最靠近海的飯店，步行5分鐘即可抵達海邊。步行3分鐘就有便利商店和餐廳，十分熱鬧。</p>
            </div> -->

        </div>


    </div>

<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 90vw;
        height: 85vh;
        margin: auto;
        .introduce{
            margin-top: 5vmin;
            .card{
                width: 25vw;
                height: 60vh;
            }
        }
        
        .title{
            p{
                font-size: 28pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
                margin-bottom: 3vmin;
            }
        }
        .about{
            width: 40vw;
            position: absolute;
            left: 30%;
            img{
                width: 40vw;
                height: 45vh;
                border-radius: 5px;
                margin-bottom: 3vmin;
                &:hover{
                    opacity: 0.5;
                }
                &:active{
                    opacity: 1.0;
                }
            }
            p{
                font-size: 18pt
            }
        }
    }
</style>