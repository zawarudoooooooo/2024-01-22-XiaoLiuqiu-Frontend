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
        <div class="title">
            <p>關於 Sea.Life</p>
        </div>
        <div class="about">
            <img src="../../../public/about.jpeg" alt="">
            <p>2023 年底新成立，全小琉球最靠近海的飯店，步行5分鐘即可抵達海邊。步行3分鐘就有便利商店和餐廳，十分熱鬧。</p>
        </div>

    </div>

<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 85vh;
        margin-top: 6vmin;
        position: relative;
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