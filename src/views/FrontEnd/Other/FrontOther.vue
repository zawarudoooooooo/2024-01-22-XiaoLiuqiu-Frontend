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
            <p>小琉球知多少 ?</p>
        </div>
        <hr>
        <div class="show">
            <div class="list">
                <div class="topic">
                    <h2>Q : 小琉球天氣 ?</h2>
                </div>
                <div class="answer">
                    <p>
                        小琉球四季炎熱， 平均海溫終年都維持在 25℃ 以上，較台灣其他地區高，
                        除了颱風之外，風浪也較為平靜。
                        因緯度較低又位於台灣西半部外島，較不受東北季風影響，
                        四季溫度變化較小，屬於熱帶季風氣候。
                    </p>
                </div>
            </div>

            <div class="list">
                <div class="topic">
                    <h2>Q : 冬天適合去小琉球嗎 ?</h2>
                </div>
                <div class="answer">
                    <p>
                        當地四季及海溫較為平穩，推薦大家可以在冬季前往小琉球遊玩。
                        人潮也比較少，不像夏季的酷熱，較舒適宜人。
                        甚至可以選擇每三年舉辦一次的迎王祭，時間約農曆10月，為期一週的慶典活動。
                        小琉球人多會在時間返鄉，居民總動員參與幫忙，旅客也可以一睹小琉球這場宗教盛事。
                    </p>
                </div>
            </div>

            <div class="list">
                <div class="topic">
                    <h2>Q : 小琉球有雨季嗎 ?</h2>
                </div>
                <div class="answer">
                    <p>
                        雖然小琉球氣候較穩定，但5-9月為本地的雨季，天氣仍有變化莫測的時候。
                        推薦出發前做好功課，避免向隅。
                    </p>
                </div>
            </div>

            <div class="list">
                <div class="topic">
                    <h2>Q : 不會游泳，能夠玩水上活動嗎 ?</h2>
                </div>
                <div class="answer">
                    <p>
                        SUP和獨木舟都會穿救生衣。所以即使不會游泳，也能盡情享受。
                    </p>
                </div>
            </div>

            <div class="list">
                <div class="topic">
                    <h2>Q : 水上活動的準備 ?</h2>
                </div>
                <div class="answer">
                    <p>
                        建議穿著輕便舒適、透氣快乾的衣物。
                        亦可內穿泳衣，減少需要更衣的時間。
                        潛水時，即可直接換上潛水服，或穿上蛙鞋即可下海。
                        另外應準備替換衣物、毛巾、收納袋等用品。
                        可以帶著瓶裝水、小點心、水果零食等，隨時補充水分與體力。 
                        容易暈車、暈船的朋友，建議於活動開始前半小時服用暈船藥，並於活動前一晚保持充足睡眠，以免暈浪產生不適。
                    </p>
                </div>
            </div>

            <div class="list">
                <div class="topic">
                    <h2>Q : 浮潛需要證照嗎 ?</h2>
                </div>
                <div class="answer">
                    <p>
                        浮潛雖然不需要取得潛水證照即可進行，但還是有一定的專業性與危險性。
                        建議尋找專業的店家和教練提供服務，讓您玩得盡興，安全也有保障。
                        浮潛沒有特別的年齡限制，從老到小都可以參加。不過需要一定的體力，不建議行動不便者參加，患有高血壓、癲癇等病況者亦不適合。
                    </p>
                </div>
            </div>

            <div class="list">
                <div class="topic">
                    <h2>水上活動守則</h2>
                </div>
                <div class="answer">
                    <p>
                        浮潛雖然不需要取得潛水證照即可進行，但還是有一定的專業性與危險性。
                        建議尋找專業的店家和教練提供服務，讓您玩得盡興，安全也有保障。
                        浮潛沒有特別的年齡限制，從老到小都可以參加。不過需要一定的體力，不建議行動不便者參加，患有高血壓、癲癇等病況者亦不適合。
                    </p>
                </div>
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
        .show{
            .list{
                background-color: white;
                border-radius: 10px;
                .topic{
                    text-align: center;
                }
                .answer{
                    p{
                        font-size: 15pt;
                        color: #4d4327;
                    }
                }
            }
        }
    }

</style>