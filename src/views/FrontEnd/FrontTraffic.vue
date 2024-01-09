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
        

    </div>
    <Footer />
</template>

<style lang="scss" scoped>
    .content{
            width: 90vw;
            height: 200vh;
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
    }
</style>