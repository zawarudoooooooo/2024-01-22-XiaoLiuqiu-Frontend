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
                <img src="../../../../public/about.jpeg" alt="">
            </div>
        </div>
        <div class="title">
            <p>推播</p>
        </div>
        <hr>
        <div class="event">
            <div class="img">
                <img src="../../../../public/news/nm.jpg" alt="">
                <img src="../../../../public/news/nm1.jpg" alt="">
                <img src="../../../../public/news/nm2.jpg" alt="">
                <img src="../../../../public/news/nm3.jpg" alt="">
                <img src="../../../../public/news/nm4.jpg" alt="">
            </div>
            <ul>
                <li
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModalActivity">
                    免費手作體驗活動，多種類型，大人小孩都適合
                </li>
                <li
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModalPassport">
                    出示外國護照，即享精美小禮物一份
                </li>
                <li
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModalBirthday">
                    當日壽星我最大 ! 兩人同行，壽星半價
                </li>
                <li
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModalCashless">
                    非實體支付享10%回饋
                </li>
                <li
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModalMember">
                    成為Sea．Life會員，訂房即享有超值套票加購
                </li>
            </ul>
        </div>
    </div>
<!-- 手作體驗活動 modal視窗 -->
    <div class="modal fade" id="exampleModalActivity" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">免費手作體驗</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <ul>
                                <li>
                                    每日下午3點開始
                                </li>
                                <li>
                                    欲參加活動請至櫃檯報到
                                </li>
                                <li>
                                    <a href="http://localhost:5173/FrontActivity">
                                        詳情請至活動頁面<i class="fa-solid fa-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<!-- 出示護照 modal視窗 -->
    <div class="modal fade" id="exampleModalPassport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">精美小禮物</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <ul>
                                <li>
                                    活動期間 : 2024/01/01-2024/06/30
                                </li>
                                <li>
                                    請於 check in 時，至櫃台兌換
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<!-- 壽星我最大 modal視窗 -->
    <div class="modal fade" id="exampleModalBirthday" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">壽星我最大</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <ul>
                                <li>
                                    生日當日，兩人同行，壽星半價
                                </li>
                                <li>
                                    請於 check in 時，出示證件以供查驗，再進行折扣 
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<!--  非實體支付 modal視窗 -->
    <div class="modal fade" id="exampleModalCashless" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">超值回饋</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <ul>
                                <li>
                                    非實體支付享10%回饋
                                </li>
                                <li>
                                    減少現金交易
                                </li>
                                <li>
                                    節省排隊時間
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<!--  Sea．Life 會員福利 modal視窗 -->
    <div class="modal fade" id="exampleModalMember" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sea．Life 會員福利</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <ul>
                                <li>
                                    超值加購活動套票
                                </li>
                                <li>
                                    特約商家折扣
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 80vw;
        height: 124vh;
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
            height: 47vh;
            display: flex;
            justify-content: space-between;
            margin-top: 3vmin;
            .text{
                width: 40vw;
                p{
                    color: #4d4327;
                    font-size: 18pt;
                }
                ul{
                    li{
                        color: #4d4327;
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
            position: relative;
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
                    color: #4d4327;
                    font-size: 17pt;
                    cursor: pointer;
                    &:hover{
                        color: #82AAE3;
                    }
                }
                button{
                    width: 7vw;
                    height: 5vh;
                    border: none;
                    color: #4d4327;
                    border-radius: 5px;
                    position: absolute;
                    right: 4%;
                    bottom: 1%;
                    box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
                    &:hover {
                        background-color: #4d4327;
                        color: white;
                    }
                    &:active {
                        background-color: #F7F2E7;
                        color: #797A7E;
                    }
                }
            }
        }
    }
    .modal-body{
        .mb-3{
            ul{
                li{
                    i{
                        transform:rotate(-40deg);
                        font-size: 9pt;
                        margin-left: 0.5vmin;
                    }
                    a{
                        text-decoration: none;
                        color: #82AAE3;
                        font-weight: bold;
                    }
                }
            }
        }
    }
    @media(max-width:1200px){
        .content{
            height: 79vh;
            .introduce{
                height: 22vh;
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
                height: 21vh;
                .text{
                    p{
                        font-size: 16pt;
                    }
                    ul{
                        li{
                            font-size: 11.5pt;
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
                    height: 26vh;
                    margin-top: 3vmin;
                }
            }
            ul{
                margin-top: 3vmin;
                li{
                    font-size: 15pt;
                }
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
                height: 23vh;
                .text{
                    width: 60vw;
                    p{
                        font-size: 11pt;
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
                    img{
                        width: 25vw;
                        height: 9vh;
                    }
                }
                ul{
                    li{
                        font-size: 11pt;
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
                height: 24vh;
                .text{
                    p{
                        font-size: 10pt;
                    }
                }
            }
            .event{
                ul{
                    padding-left: 2vmin;
                    li{
                        font-size: 10.5pt;
                    }
                }
            }
        }
    }
</style>