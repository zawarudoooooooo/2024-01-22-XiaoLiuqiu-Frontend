<script>
import Footer from '../../components/Footer.vue';
export default{
    data(){
        return{

        }
    },
    methods:{

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
            <img src="../../../public/map.jpg" alt="">
            <div class="traffic">
                <p>．火車 : 搭乘火車至高雄火車站，轉搭客運至東港後搭交通船到小琉球。</p>
                <p> ．客運 : 搭乘客運至高雄火車站＆屏東火車站</p>
                <p>
                    高雄出發：於舊高雄火車站高市願景館對面搭乘國光客運、高雄客運、屏東客運
                    <br>【9117 高雄>墾丁(台17線)、】路線，東港下車，再步行至東港碼頭搭乘交通船。
                </p>
                <p>
                    屏東出發：於屏東火車站旁屏東客運總站搭乘屏東客運
                    <br>【8202 屏東>東港、8203 屏東>東港】路線，
                    東港下車，再步行至東港碼頭搭乘交通船。
                </p>
                <p>．自行開車 : 機車及自行車可隨人運至小琉球，汽車則須停靠於東港。</p>
                <p>
                    南下：可經由國道一號高速公路南下，由小港機場出口沿省道十七號公路，
                    <br>往東港行駛即可抵達東港碼頭，再搭交通船到小琉球。
                </p>
                <p>
                    北上：自墾丁沿26號省道至枋寮、水底寮，再沿17號省道至林邊、東港，
                    <br>抵達東港後再至東港碼頭，搭交通船到小琉球。
                </p>
            </div>
        </div>
        <div class="title">
            <p>渡輪航班</p>
        </div>
        <hr>
        <div class="ferry">
            <div class="time">
                <p id="ferrytime">航班時刻表-東琉聯營航運</p>
                <!-- <p>東琉聯營航運</p> -->
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
                <img src="../../../public/ferry/IMG_1430.JPG" alt="">
                <img src="../../../public/ferry/IMG_1413.JPG" alt="">
                <img src="../../../public/ferry/IMG_1150.JPG" alt="">
                <img src="../../../public/ferry/IMG_1143.JPG" alt="">
            </div>
        </div>


        

    </div>
    <Footer />
</template>

<style lang="scss" scoped>
    .content{
            width: 90vw;
            height: 160vh;
            margin: auto;
            margin-top: 4vmin;
        hr{
            margin-bottom: 3vmin;
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
        .location{
            width: 90vw;
            display: flex;
            justify-content: space-between;
            //border: 1px solid black;
            margin-bottom: 5vmin;
            img{
                width: 55vw;
                height: 60vh;
                border-radius: 10px;
            }
            .traffic{
                margin-left: 2vmin;
                p{
                    font-size: 14.5pt;
                    color: #797A7E;
                }
            }
        }
        .ferry{
            width: 90vw;
            display: flex;
            justify-content: space-around;
            .time{
                width: 30vw;
                border: 1px solid lightgray;
                box-shadow: 1px 1px 1px gray;
                border-radius: 5px;
                #ferrytime{
                    color: #797A7E;
                    font-size: 18pt;
                    font-weight: bold;
                    text-align: center;
                }
                .schedule{
                    display: flex;
                    justify-content: space-around;
                    p{
                        color: #797A7E;
                        font-size: 16pt;
                        text-align: center;
                    }
                }
            }
            .imgArea{
                width: 45vw;
                display: flex;
                flex-wrap: wrap;
                gap: 2vmin;
                img{
                    width: 22vw;
                    height: 27vh;
                    border-radius: 5px;
                }
            }
        }
    }
</style>