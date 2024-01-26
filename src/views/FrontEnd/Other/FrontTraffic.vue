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
            <p>交通資訊</p>
        </div>
        <hr>
        <div class="location">
            <img src="../../../../public/map.jpg" alt="">
            <div class="traffic">
                <ul>
                    <li>
                        火車 : 搭乘火車至高雄火車站，轉搭客運至東港後搭交通船到小琉球。
                    </li>
                    <br>
                    <li>
                        客運 : 搭乘客運至高雄火車站＆屏東火車站
                    </li>
                    <ul>
                        <li>
                            高雄出發：於舊高雄火車站高市願景館對面搭乘國光客運、高雄客運、屏東客運
                        【9117 高雄>墾丁(台17線)、】路線，東港下車，再步行至東港碼頭搭乘交通船。
                        </li>
                        <li>
                            屏東出發：於屏東火車站旁屏東客運總站搭乘屏東客運
                            【8202 屏東>東港、8203 屏東>東港】路線，
                            東港下車，再步行至東港碼頭搭乘交通船。
                        </li>
                    </ul>
                    <br>
                    <li>
                        自行開車 : 機車及自行車可隨人運至小琉球，汽車則須停靠於東港。
                    </li>
                    <ul>
                        <li>
                            南下：可經由國道一號高速公路南下，由小港機場出口沿省道十七號公路，
                            往東港行駛即可抵達東港碼頭，再搭交通船到小琉球。
                        </li>
                        <li>
                            北上：自墾丁沿26號省道至枋寮、水底寮，再沿17號省道至林邊、東港，
                            抵達東港後再至東港碼頭，搭交通船到小琉球。
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
        <div class="title">
            <p>渡輪航班</p>
        </div>
        <hr>
        <div class="ferry">
            <div class="time">
                <p id="ferrytime">航班時刻表-東琉聯營航運</p>
                <div class="schedule">
                    <div class="come">
                        <p>東港->小琉球</p>
                        <p>
                            07:00
                            <br>
                            07:30 (經鹽埔)
                            <br>
                            08:00
                            <br>
                            09:00
                            <br>
                            10:00
                            <br>
                            10:45
                            <br>
                            11:30
                            <br>
                            12:36
                            <br>
                            14:00
                            <br>
                            15:00
                            <br>
                            16:30
                        </p>
                    </div>
                    <div class="back">
                        <p>小琉球->東港</p>
                        <p>
                            07:40
                            <br>
                            09:00
                            <br>
                            10:30
                            <br>
                            12:00
                            <br>
                            13:00
                            <br>
                            14:00
                            <br>
                            15:00
                            <br>
                            16:00
                            <br>
                            16:30 (經鹽埔)
                            <br>
                            17:00
                            <br>
                            17:20
                        </p>
                    </div>
                </div>
            </div>
            <div class="imgArea">
                <img src="../../../../public/ferry/IMG_1430.JPG" alt="">
                <img src="../../../../public/ferry/IMG_1413.JPG" alt="">
                <img src="../../../../public/ferry/IMG_1150.JPG" alt="">
                <img src="../../../../public/ferry/IMG_1143.JPG" alt="">
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 90vw;
        height: 165vh;
        margin: auto;
        margin-top: 4vmin;
        hr{
            margin-bottom: 4vmin;
        }
        .title{
            p{
                font-size: 27pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
            }
        }
        .location{
            width: 90vw;
            display: flex;
            justify-content: space-between;
            margin-bottom: 5vmin;
            img{
                width: 55vw;
                height: 53vh;
                border-radius: 10px;
                transition: all ease 0.5s;
                box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
                &:hover{
                    opacity: 0.6;
                }
                &:active{
                    opacity: 1.0;
                }
            }
            .traffic{
                margin-left: 2vmin;
                background-color: white;
                border: 1px solid lightgray;
                box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
                border-radius: 5px;
                padding: 1.5vmin;
                ul{
                    li{
                        color: #797A7E;
                        font-size: 15pt;
                    }
                }
            }
        }
        .ferry{
            width: 90vw;
            height: 63vh;
            display: flex;
            justify-content: space-around;
            .time{
                width: 28vw;
                border: 1px solid lightgray;
                box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
                border-radius: 5px;
                padding-top: 1.5vmin;
                background-color: white;
                #ferrytime{
                    color: #797A7E;
                    font-size: 18pt;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 0.5vmin;
                }
                .schedule{
                    display: flex;
                    justify-content: space-around;
                    p{
                        color: #797A7E;
                        font-size: 15pt;
                        text-align: center;
                    }
                }
            }
            .imgArea{
                width: 45vw;
                height: 57vh;
                display: flex;
                flex-wrap: wrap;
                gap: 1vmin;
                margin-top: 3vmin;
                img{
                    width: 22vw;
                    height: 27vh;
                    border-radius: 5px;
                    transition: all ease 0.5s;
                    box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
                    &:hover{
                        opacity: 0.6;
                    }
                    &:active{
                        opacity: 1.0;
                    }
                }
            }
        }
    }
    @media(max-width:1200px){
        .content{
            height: 87vh;
            margin-top: 2vmin;
            hr{
                margin-bottom: 2vmin;
                margin-top: 0;
            }
            .location{
                height: 39vh;
                margin-bottom: 1vmin;
                img{
                    width: 40vw;
                    height: 20vh;
                    margin-top: 8vmin;
                }
                .traffic{
                    ul{
                        li{
                            font-size: 13pt;
                        }
                    }
                }
            }
            .ferry{
                height: 32vh;
                .imgArea{
                    height: 25vh;
                    margin-top: 3vmin;
                    img{
                        height: 14vh;
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 90vh;
            margin-top: 2vmin;
            .location{
                margin-bottom: 3vmin;
                img{
                    margin-top: 10vmin;
                }
                .traffic{
                    ul{
                        li{
                            font-size: 10pt;
                            padding-top: 0.5vmin;
                        }
                    }
                }
            }
            .ferry{
                .time{
                    width: 35vw;
                    #ferrytime{
                        font-size: 16pt;
                    }
                    .schedule{
                        p{
                            font-size: 13pt;
                        }
                    }
                }
                .imgArea{
                    margin-top: 6vmin;
                    img{
                        height: 12vh;
                    }
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 91vh;
            .title{
                p{
                    font-size: 20pt;
                    margin-bottom: 1vmin;
                }
            }
            .location{
                display: block;
                height: 55vh;
                img{
                    width: 70vw;
                    height: 20vh;
                    margin-top: 0;
                    margin-left: 9vmin;
                    margin-bottom: 3vmin;
                }
                .traffic{
                    ul{
                        padding-left: 1vmin;
                        li{
                            font-size: 9pt;
                        }
                    }
                }
            }
            .ferry{
                height: 21.5vh;
                .time{
                    width: 33vw;
                    #ferrytime{
                        font-size: 7pt;
                    }
                    .schedule{
                        p{
                            font-size: 7pt;
                            margin-bottom: 0;
                        } 
                    }
                }
                .imgArea{
                    height: 17vh;
                    img{
                        height: 8vh;
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            height: 89vh;
            .title{
                p{
                    font-size: 15pt;
                    margin-bottom: 1vmin;
                }
            }
            .location{
                margin-bottom: 1vmin;
                .traffic{
                    ul{
                        li{
                            font-size: 8pt;
                        }
                    }
                }
            }
            .ferry{
                .time{
                    #ferrytime{
                        margin-top: 1vmin;
                    }
                    .schedule{
                        p{
                            font-size: 6pt;
                        }
                    }
                }
            }
        }
    }
</style>