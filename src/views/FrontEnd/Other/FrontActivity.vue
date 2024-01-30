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
            <p>體驗活動</p>
        </div>
        <hr>
        <div class="wrap">
            <ul class="list">
                <li class="show">
                    <div class="item">
                        <div class="img">
                            <img src="../../../../public/news/activity3.jpg" alt="">
                        </div>
                        <div class="text">
                            <div class="info">
                                <div class="date">
                                    <span class="day">22</span>
                                    <span class="ym">24 Jan</span>
                                </div>
                                <div class="topic">
                                    <h3>多肉三角玻璃屋</h3>
                                </div>
                            </div>
                            <hr>
                            <div class="detail">
                                <div class="time">
                                    <span>活動時間 : </span>
                                    <span>2024.01.29-2024.02.04</span>
                                </div>
                                <p>
                                    要如何拆根、脫盆才不會傷害到植物呢？
                                    <br>
                                    組盆的搭配組合如何才能創造出美感體驗呢，
                                    透過多肉植物，從體驗的機會學習，獲得新的生活感受。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img">
                            <img src="../../../../public/news/activity4.jpg" alt="">
                        </div>
                        <div class="text">
                            <div class="info">
                                <div class="date">
                                    <span class="day">15</span>
                                    <span class="ym">24 Jan</span>
                                </div>
                                <div class="topic">
                                    <h3>Mandala Art</h3>
                                </div>
                            </div>
                            <hr>
                            <div class="detail">
                                <div class="time">
                                    <span>活動時間 : </span>
                                    <span>2024.01.22-2024.01.28</span>
                                </div>
                                <p>
                                    無需任何繪畫基礎，曼陀羅畫上的圖案可以自己隨機創作。
                                    <br>
                                    曼陀羅彩繪，融合了藝術治療的元素，能一邊繪畫，一邊沉澱心靈。
                                    當身心開始平靜，就能從畫作中看見真正的自己。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img">
                            <img src="../../../../public/news/activity1.jpg" alt="">
                        </div>
                        <div class="text">
                            <div class="info">
                                <div class="date">
                                    <span class="day">08</span>
                                    <span class="ym">24 Jan</span>
                                </div>
                                <div class="topic">
                                    <h3>香氛蠟燭</h3>
                                </div>
                            </div>
                            <hr>
                            <div class="detail">
                                <div class="time">
                                    <span>活動時間 : </span>
                                    <span>2024.01.15-2024.01.21</span>
                                </div>
                                <p>
                                    香味是一種記憶，是一種你一閉上眼睛就彷彿身置在其中，
                                    有的人喜歡在花海，有的人喜歡在森林，更有的人喜歡徜徉大海裡。
                                    透過持久的香味，讓整個空間帶到另一個維度，快來手作屬於你的香氛蠟燭吧!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img">
                            <img src="../../../../public/news/activity2.jpg" alt="">
                        </div>
                        <div class="text">
                            <div class="info">
                                <div class="date">
                                    <span class="day">01</span>
                                    <span class="ym">24 Jan</span>
                                </div>
                                <div class="topic">
                                    <h3>Macrame 編織</h3>
                                </div>
                            </div>
                            <hr>
                            <div class="detail">
                                <div class="time">
                                    <span>活動時間 : </span>
                                    <span>2024.01.08-2024.01.14</span>
                                </div>
                                <p>
                                    Macrame 是指不用勾針、棒針（knitting）、梭織機（Weaving）等工具，
                                    單純用雙手將繩子自由編織成美麗圖案的一種藝術。
                                    <br>透過緩慢的編織過程，放慢腳步、親手完成一個屬於自己的繩結編織品。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img">
                            <img src="../../../../public/news/activity.jpg" alt="">
                        </div>
                        <div class="text">
                            <div class="info">
                                <div class="date">
                                    <span class="day">25</span>
                                    <span class="ym">23 Dec</span>
                                </div>
                                <div class="topic">
                                    <h3>絢彩串珠</h3>
                                </div>
                            </div>
                            <hr>
                            <div class="detail">
                                <div class="time">
                                    <span>活動時間 : </span>
                                    <span>2024.01.01-2024.01.07</span>
                                </div>
                                <p>
                                    飾品，可以凸顯出個人魅力與風格。
                                    <br>
                                    串出獨有的你，讓我們舉手投足間更增添了幾分的魅力，
                                    就讓我們手作屬於自己獨特意義的飾品吧!
                                </p>
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
        height: 238vh;
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
        .wrap{
            width: 75vw;
            height: 50vh;
            margin: auto;
            .list{
                list-style: none;
                .show{
                    .item{
                        height: 40vh;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        padding: 2vmin 0.5vmin 2vmin;
                        background-color: white;
                        border-radius: 5px;
                        margin-bottom: 5vmin;
                        border: 1px solid lightgray;
                        box-shadow: 1px 1px 1px gray;
                        .img{
                            img{
                                width: 25vw;
                                height: 32vh;
                                border-radius: 5px;
                                transition: all linear 0.3s;
                                box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
                                &:hover{
                                    opacity: 0.8;
                                    box-shadow: 8px 8px 2px 1px rgba(2, 40, 63, 0.2);
                                }
                                &:active{
                                    opacity: 1.0;
                                }
                            }
                        }
                        .text{
                            width: 40vw;
                            height: 30vh;
                            margin-top: 2.5vmin;
                            .info{
                                display: flex;
                                align-items: center;
                                .date{
                                    width: 5vw;
                                    height: 9vh;
                                    display: flex;
                                    align-items: center;
                                    flex-direction: column;
                                    color: #4d4327;
                                    position: relative;
                                    &:before{
                                        content: "";
                                        width: 0.3vw;
                                        height: 6vh;
                                        background-color: #82AAE3;
                                        position: absolute;
                                        right: 0;
                                        top: 15%;
                                    }
                                    .day{
                                        letter-spacing: 2px;
                                        font-weight: 700;
                                        font-size: 26pt;
                                        line-height: 1;
                                    }
                                    .ym{
                                        font-size: 13pt;
                                    }
                                }
                                h3{
                                    color: #4d4327;
                                    margin-top: 1vmin;
                                    margin-left: 1vmin;
                                }
                            }
                            hr{
                                margin-top: 0;
                            }
                            .detail{
                                position: relative;
                                .time{
                                    height: 5vh;
                                    padding-left: 2.5vmin;
                                    &:before{
                                        content: "";
                                        width: 0.8vw;
                                        height: 0.5vh;
                                        background-color: #e1dac7;
                                        position: absolute;
                                        left: -0.3%;
                                        top: 7.5%;
                                    }
                                    span{
                                        color: #4d4327;
                                        font-size: 12pt;
                                    }
                                }
                                p{
                                    color: #4d4327;
                                    font-size: 14pt;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>