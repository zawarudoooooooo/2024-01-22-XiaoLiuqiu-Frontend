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
            <p>交通</p>
        </div>
        <div class="location">
            <p>小琉球位置資訊</p>
            <img src="" alt="">
        </div>
        <div class="method">
            <p>交通方式</p>
            <table>
                <tr>
                    <th>台灣高鐵、台灣鐵路</th>
                    <th>搭乘高鐵於高雄新左營站下車，轉搭至東港後搭交通船到小琉球。</th>
                </tr>
                <tr>
                    <th>火車</th>
                    <th>搭乘火車至高雄火車站下車，轉搭客運至東港後搭交通船到小琉球。</th>
                </tr>
                <tr>
                    <th>客運</th>
                    <th>高雄出發：於舊高雄火車站高市願景館對面搭乘國光客運、高雄客運、屏東客運【9117 高雄>墾丁(台17線)、】路線，東港下車，再步行至東港碼頭搭乘交通船。</th>
                    <th>屏東出發：於屏東火車站旁屏東客運總站搭乘屏東客運【8202 屏東>東港、8203 屏東>東港】路線，東港下車，再步行至東港碼頭搭乘交通船。</th>
                </tr>
                <tr>
                    <th>自行開車</th>
                    <th>南下：北部及中南部遊客，可經由國道一號高速公路南下，由小港機場出口沿省道十七號公路，往東港行駛即可抵達東港碼頭，再搭交通船到小琉球。</th>
                    <th>北上：自墾丁沿26號省道至枋寮、水底寮，再沿17號省道至林邊、東港，抵達東港後再至東港碼頭，搭交通船到小琉球。</th>
                </tr>
            </table>

            <p>渡輪</p>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </table>


        </div>

    </div>
    <Footer />
</template>

<style lang="scss" scoped>
        .content{
            width: 20vw;
            height: 150vh;
            margin: auto;
            margin-top: 4vmin;
        .title{
            p{
                font-size: 28pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
                margin-bottom: 3vmin;
            }
        }
        .method{
            table{
                tr{
                    th{
                        border: 1px solid black;
                    }
                }
            }
        }
    }
</style>