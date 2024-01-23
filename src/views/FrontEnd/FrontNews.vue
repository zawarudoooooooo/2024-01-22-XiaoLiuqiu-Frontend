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
            <p>消息</p>
        </div>
        <hr>
        <div class="wrap">
            <ul class="list">
                <li class="show">
                    <div class="item">
                        <div class="img">
                            <img src="../../../public/news/activity3.jpg" alt="">
                        </div>
                        <div class="text">
                            <div class="info">
                                <div class="date">
                                    <span class="day">01</span>
                                    <span class="ym">20 Jan</span>
                                </div>
                                <div class="topic">
                                    <h3>多肉體驗課程</h3>
                                </div>
                            </div>
                            <hr>
                            <div class="detail">
                                <div class="time">
                                    <span>活動時間 : </span>
                                    <span>2024.01.29-2024.02.04</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque labore tenetur accusantium, incidunt recusandae.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 80vw;
        height: 128vh;
        margin: auto;
        margin-top: 4vmin;
        border: 1px solid black;
        .title{
            p{
                font-size: 27pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
            }
        }
        .wrap{
            width: 75vw;
            height: 50vh;
            margin: auto;
            .list{
                .show{
                    .item{
                        display: flex;
                        justify-content: space-around;
                        //border: 1px solid red;
                        .img{
                            img{
                                width: 25vw;
                                height: 35vh;
                            }
                        }
                        .text{
                            width: 40vw;
                            .info{
                                display: flex;
                                align-items: center;
                                .date{
                                    width: 5vw;
                                    //border: 1px solid orange;
                                    display: flex;
                                    align-items: center;
                                    flex-direction: column;
                                    color: #797A7E;
                                    .day{
                                        letter-spacing: 2px;
                                        font-weight: 700;
                                        font-size: 26pt;
                                    }
                                    .ym{
                                        font-size: 14pt;
                                    }
                                }
                                h3{
                                    color: #797A7E;
                                }
                            }
                            .detail{
                                .time{
                                    span{
                                        color: #797A7E;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>