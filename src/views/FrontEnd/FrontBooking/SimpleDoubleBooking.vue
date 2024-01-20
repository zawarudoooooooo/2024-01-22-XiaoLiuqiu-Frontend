<script>
import Footer from '../../../components/Footer.vue';
import swal from 'sweetalert';
export default{
    data(){
        return{
            ischecked:false,
            ischecked1:false,
            ischecked2:false,
            ischecked3:false,
            ischecked4:false,
            ischecked5:false,
            ischecked6:false,
            ischecked7:false,
            ischecked8:false,
            ischecked9:false,
            ischecked10:false,
            ischecked11:false,
            exxtra:[],
        }
    },
    methods:{
        booking(){
            swal("訂購成功", "請至信箱查看明細", "success");
            this.$router.push('/')
        },
        cancle(){
            this.$router.push('/FrontSearch')
        },
        clicked(){
            this.ischecked=!this.ischecked
        },
        clicked1(){
            this.ischecked1=!this.ischecked1
        },
        clicked2(){
            this.ischecked2=!this.ischecked2
        },
        clicked3(){
            this.ischecked3=!this.ischecked3
        },
        clicked4(){
            this.ischecked4=!this.ischecked4
        },
        clicked5(){
            this.ischecked5=!this.ischecked5
        },
        clicked6(){
            this.ischecked6=!this.ischecked6
        },
        clicked7(){
            this.ischecked7=!this.ischecked7
        },
        clicked8(){
            this.ischecked8=!this.ischecked8
        },
        clicked9(){
            this.ischecked9=!this.ischecked9
        },
        clicked10(){
            this.ischecked10=!this.ischecked10
        },
        clicked11(){
            this.ischecked11=!this.ischecked11
        },
    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="show">
            <img src="../../../../public/room/simpledouble.jpg" alt="">
            <div class="text">
                <div class="name">
                    <p>小資雙人房</p>
                    <p>$1500</p>
                </div>
                <hr>
                <div class="extra">
                    <p>加購項目</p>
                    <input type="checkbox" id="uno" value="早餐(+200/人)" v-model="exxtra">
                    <label for="uno">早餐(+200/人)</label>
                    <input type="checkbox" id="dos" value="來回船票(+400/全票)" v-model="exxtra">
                    <label for="dos">來回船票(+400/全票)</label>
                    <input type="checkbox" id="tres" value="來回船票(+200/半票)" v-model="exxtra">
                    <label for="tres">來回船票(+200/半票)</label>
                    <input type="checkbox" id="cuatro" value="摩托車(+300/天)" v-model="exxtra">
                    <label for="cuatro">摩托車(+300/天)</label>
                    <input type="checkbox" id="cinco" value="三大風景區門票(+100/人)" v-model="exxtra">
                    <label for="cinco">三大風景區門票(+100/人)</label>
                    <br>
                    <input type="checkbox" id="seis" value="鹿粼梅花鹿園區門票(+220/全票)" v-model="exxtra">
                    <label for="seis">鹿粼梅花鹿園區門票(+220/全票)</label>
                    <br>
                    <input type="checkbox" id="siete" value="鹿粼梅花鹿園區門票(+50/半票)" v-model="exxtra">
                    <label for="siete">鹿粼梅花鹿園區門票(+50/半票)</label>
                    <br>
                    <input type="checkbox" id="ocho" value="浮潛(+400/人)" v-model="exxtra">
                    <label for="ocho">浮潛(+400/人)</label>
                    <input type="checkbox" id="nueve" value="獨木舟(+600/人)" v-model="exxtra">
                    <label for="nueve">獨木舟(+600/人)</label>
                    <input type="checkbox" id="dies" value="透明獨木舟(+800/人)" v-model="exxtra">
                    <label for="dies">透明獨木舟(+800/人)</label>
                    <br>
                    <input type="checkbox" id="once" value="SUP立槳(+1000/兩人一板)" v-model="exxtra">
                    <label for="once">SUP立槳(+1000/兩人一板)</label>
                    <input type="checkbox" id="doce" value="SUP立槳(+1200/一人一板)" v-model="exxtra">
                    <label for="doce">SUP立槳(+1200/一人一板)</label>
                </div>
            </div>
        </div>
        <div class="cart">
            <ul id="ul">
                <li>
                    <span><i class="fa-solid fa-cart-plus"></i>選取項目</span>
                </li>
                <ul>
                    <li v-for="item in exxtra">{{ item }}
                    </li>
                </ul>
            </ul>
            <div class="buttonArea">
                <button type="button" @click="cancle()">取消</button>
                <button type="button" @click="booking()">確認</button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 90vw;
        height: 68vh;
        margin: auto;
        margin-top: 3vmin;
        display: flex;
        position: relative;
        .show{
            width: 60vw;
            height: 50vh;
            display: flex;
            border-radius: 10px;
            margin-top: 7vmin;
            padding: 3vmin;
            position: relative;
            img{
                width: 23vw;
                height: 28vh;
                border-radius: 5px;
                margin-right: 10vmin;
                transition: all linear 0.3s;
                box-shadow: 8px 8px 2px 1px rgba(2, 40, 63, 0.2);
                &:hover{
                    opacity: 0.7;
                    box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                }
                &:active{
                    opacity: 1.0;
                }
            }
            .text{
                height: 23vh;
                hr{
                    margin: 0;
                }
                .name{
                    width: 30vw;
                    margin: auto;
                    display: flex;
                    align-content: center;
                    justify-content: space-between;
                    p{
                        color: #797A7E;
                        font-size: 24pt;
                        margin: 0;
                    }
                }
                .extra{
                    width: 36vw;
                    p{
                        color: #797A7E;
                        font-size: 16pt;
                        font-weight: bold;
                        margin-top: 1vmin;
                    }
                    label{
                        color: #797A7E;
                        font-size: 14pt;
                        margin-right: 1.1vmin;
                        margin-bottom: 1vmin;
                    }
                    input{
                        margin-right: 1vmin;
                    }
                }
            }
        }
        .cart{
            width: 20vw;
            height: 65vh;
            margin: auto;
            color: #797A7E;
            font-size: 13pt;
            #ul{
                list-style: none;
                padding-left: 1vmin;
            }
            li{
                margin-bottom: 0.5vmin;
            }
            span{
                font-size: 18pt;
                font-weight: bold;
                color: #82AAE3;
            }
            i{
                font-size: 20pt;
                color: #82AAE3;
                margin-right: 1vmin;
            }
            .buttonArea{
                width: 15vw;
                height: 6vh;
                display: flex;
                justify-content: space-between;
                position: absolute;
                right: 0;
                bottom: 3%;
                button {
                    width: 5vw;
                    height: 5vh;
                    border: none;
                    border-radius: 5px;
                    color: #797A7E;
                    &:hover {
                        background-color: #797A7E;
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
</style>