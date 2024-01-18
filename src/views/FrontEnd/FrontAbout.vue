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
            <p>關於 Sea．Life</p>
        </div>
        <hr>
        <div class="introduce">
            <div class="text">
                <p>由一群熱愛小琉球的年輕人所建，主要提倡環保和永續。</p>
                <ul>
                    <li>
                        全館採用節能設備和省水設施
                    </li>
                    <li>
                        配有飲水機，不提供瓶裝水
                    </li>
                    <li>
                        提供環保容器和餐具租借
                    </li>
                    <li>
                        續住不提供床單和毛巾更換
                    </li>
                    <li>
                        寵物友善，毛小孩也是一家人
                    </li>
                    <li>
                        使用天然分解產品，及友善環境沐浴用品
                    </li>
                </ul>
            </div>
            <div class="img">
                <img src="../../../public/about.jpeg" alt="">
            </div>
        </div>
        <div class="title">
            <p>消息</p>
        </div>
        <hr>
        <div class="event">
            <div class="img">
                <img src="../../../public/activity/activity4.jpg" alt="">
                <img src="../../../public/activity/activity2.jpg" alt="">
                <img src="../../../public/activity/activity.jpg" alt="">
                <img src="../../../public/activity/activity1.jpg" alt="">
                <img src="../../../public/activity/activity3.jpg" alt="">
            </div>
            <ul>
                <li>
                    不定期免費手作體驗活動，多種類型，大人小孩都適合
                </li>
                <li>
                    出示外國護照，即享精美小禮物一份
                </li>
                <li>
                    當日壽星我最大 ! 兩人同行，壽星免費
                </li>
                <li>
                    使用 Line Pay 回饋 8%
                </li>
                <li>
                    特約美食店家，凡出示Sea．Life房卡，即享有用餐折扣
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
        .title{
            p{
                font-size: 27pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
            }
        }
        .introduce{
            height: 48vh;
            display: flex;
            justify-content: space-between;
            margin-top: 3vmin;
            .text{
                width: 40vw;
                p{
                    color: #797A7E;
                    font-size: 18pt;
                }
                ul{
                    li{
                        color: #797A7E;
                        font-size: 18pt;
                    }
                }
            }
            .img{
                width: 35vw;
                img{
                    width: 35vw;
                    height: 40vh;
                    border-radius: 5px;
                    box-shadow: 1px 1px 1px gray;
                    transition: all linear 0.3s;
                    &:hover{
                        opacity: 0.6;
                        box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                    }
                    &:active{
                        opacity: 1.0;
                    }
                }
            }
        }
        .event{
            margin-top: 3vmin;
            .img{
                display: flex;
                justify-content: space-around;
                gap: 1vmin;
                margin: auto;
                margin-bottom: 2vmin;
                img{
                    width: 15vw;
                    height: 21vh;
                    border-radius: 5px;
                    box-shadow: 1px 1px 1px gray;
                    transition: all linear 0.3s;
                    &:hover{
                        opacity: 0.6;
                        box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                    }
                    &:active{
                        opacity: 1.0;
                    }
                }
            }
            ul{
                li{
                    color: #797A7E;
                    font-size: 17pt;
                }
            }
        }
    }
    @media(max-width:1200px){
        .content{
            height: 79vh;
            .title{
                p{
                    margin: 0;
                }
            }
            hr{
                margin-top: 0;
            }
            .introduce{
                height: 24vh;
                margin-top: 0;
                .text{
                    p{
                        font-size: 20pt;
                    }
                    ul{
                        li{
                            font-size: 15pt;
                        }
                    }
                }
                .img{
                    img{
                        height: 20vh;
                    }
                }
            }
            .event{
                margin-top: 0;
                .img{
                    width: 78vw;
                    height: 26vh;
                    flex-wrap: wrap;
                    img{
                        width: 25vw;
                        height: 12vh;
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 79.5vh;
            .title{
                p{
                    font-size: 24pt;
                }
            }
            .introduce{
                height: 22vh;
                .text{
                    p{
                        font-size: 16pt;
                    }
                    ul{
                        li{
                            font-size: 13.5pt;
                        }
                    }
                }
                .img{
                    img{
                        height: 17vh;
                        margin-top: 2vmin;
                    }
                }
            }
            .event{
                .img{
                    height: 27vh;
                    margin-top: 3vmin;
                }
            }
            ul{
                margin-top: 3vmin;

            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 80.5vh;
            .title{
                p{
                    font-size: 18pt;
                }
            }
            .introduce{
                width: 80vw;
                height: 29vh;
                .text{
                    width: 60vw;
                    p{
                        font-size: 15pt;
                    }
                    ul{
                        padding: 2%;
                        li{
                            font-size: 9.5pt;
                        }
                    }
                }
                .img{
                    img{
                        height: 13vh;
                        margin-top: 6vmin;
                    }
                }
            }
            .event{
                .img{
                    height: 20vh;
                    margin-bottom: 5vmin;
                    margin-top: 6vmin;
                    img{
                        width: 25vw;
                        height: 9vh;
                    }
                }
                ul{
                    li{
                        font-size: 9pt;
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            .title{
                p{
                    font-size: 16pt;
                }
            }
            .introduce{
                height: 25vh;
                .text{
                    p{
                        font-size: 9pt;
                    }
                }
            }
            .event{
                ul{
                    padding-left: 2vmin;
                    li{
                        font-size: 11pt;
                    }
                }
            }
        }
    }
</style>