<script>
import Footer from '../../../components/Footer.vue';
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
            test:""
        }
    },
    methods:{
        clicked(){
            this.ischecked=!this.ischecked
            // this.exxtra.push(this.value)
            // showExtra.innerText=this.exxtra

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
        <p id="showExtra">{{ this.exxtra }}</p>
        <div class="show">
            
            <img src="../../../../public/room/double.jpg" alt="">
            <div class="text">
                
                <div class="name">
                    <p>舒適雙人房</p>
                    <p>$2500</p>
                </div>
                <hr>
                <div class="extra">
                    <p>加購項目</p>
                    <!-- <button type="button" @click="clicked()" :class="{check:ischecked}" >早餐(+200/人)</button>
                    <br>
                    <button type="button" @click="clicked1()" :class="{check1:ischecked1}">來回船票(+400/全票)</button>
                    <button type="button" @click="clicked2()" :class="{check2:ischecked2}">來回船票(+200/半票)</button>
                    <button type="button" @click="clicked3()" :class="{check3:ischecked3}">摩托車(+300/天)</button>
                    <button type="button" @click="clicked4()" :class="{check4:ischecked4}">三大風景區門票(+100/人)</button>
                    <button type="button" @click="clicked5()" :class="{check5:ischecked5}">鹿粼梅花鹿園區門票(+220/全票)</button>
                    <button type="button" @click="clicked6()" :class="{check6:ischecked6}">鹿粼梅花鹿園區門票(+50/半票)</button>
                    <br>
                    <button type="button" @click="clicked7()" :class="{check7:ischecked7}">浮潛(+400/人)</button>
                    <button type="button" @click="clicked8()" :class="{check8:ischecked8}">獨木舟(+600/人)</button>
                    <button type="button" @click="clicked9()" :class="{check9:ischecked9}">透明獨木舟(+800/人)</button>
                    <button type="button" @click="clicked10()" :class="{check10:ischecked10}">SUP立槳(+1000/兩人一板)</button>
                    <button type="button" @click="clicked11()" :class="{check11:ischecked11}">SUP立槳(+1200/一人一板)</button> -->
                    <input type="checkbox" id="pp" value="早餐(+200/人)" v-model="exxtra">
                    <label for="pp">早餐(+200/人)</label>
                    <input type="checkbox" id="aa" value="來回船票(+400/全票)" v-model="exxtra">
                    <label for="aa">來回船票(+400/全票)</label>
                    <input type="checkbox" id="an" value="來回船票(+200/半票)" v-model="exxtra">
                    <label for="an">來回船票(+200/半票)</label>
                    <input type="checkbox" id="anb" value="摩托車(+300/天)" v-model="exxtra">
                    <label for="anb">摩托車(+300/天)</label>
                    <input type="checkbox" id="anb" value="摩托車(+300/天)" v-model="exxtra">
                    <label for="anb">摩托車(+300/天)</label>
                    
                </div>
                <button type="button" id="buyBtn">確認</button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped> 
    .content{
        width: 90vw;
        height: 65vh;
        margin: auto;
        margin-top: 6vmin;
        .check{
            background-color: #BFEAF5;
            color: white;
        }
        .check1{
            background-color: #BFEAF5;
            color: white;
        }
        .check2{
            background-color: #BFEAF5;
            color: white;
        }
        .check3{
            background-color: #BFEAF5;
            color: white;
        }
        .check4{
            background-color: #BFEAF5;
            color: white;
        }
        .check5{
            background-color: #BFEAF5;
            color: white;
        }
        .check6{
            background-color: #BFEAF5;
            color: white;
        }
        .check7{
            background-color: #BFEAF5;
            color: white;
        }
        .check8{
            background-color: #BFEAF5;
            color: white;
        }
        .check9{
            background-color: #BFEAF5;
            color: white;
        }
        .check10{
            background-color: #BFEAF5;
            color: white;
        }
        .check11{
            background-color: #BFEAF5;
            color: white;
        }
        .show{
            width: 60vw;
            height: 70vh;
            margin: auto;
            display: flex;
            border-radius: 10px;
            margin-top: 5vmin;
            padding: 3vmin;
            position: relative;
            img{
                width: 23vw;
                height: 28vh;
                border-radius: 5px;
                margin-right: 5vmin;
                transition: all linear 0.3s;
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
                    p{
                        color: #797A7E;
                        font-size: 16pt;
                        font-weight: bold;
                        margin-top: 1vmin;
                    }
                    button{
                        height: 5vh;
                        border-radius: 5px;
                        color: #797A7E;
                        border: 1px dotted #797A7E;
                        margin-right: 2vmin;
                        margin-bottom: 1vmin;
                        &:hover{
                            background-color: #797A7E;
                            color: white;
                        }
                        &:active{
                            background-color: #F7F2E7;
                            color: #797A7E;
                        }
                    }
                }
            }
        }
        #buyBtn{
            width: 4vw;
            height: 4.5vh;
            border: none;
            border-radius: 5px;
            color: #797A7E;
            position: absolute;
            right: 4%;
            bottom: 15%;
            &:hover{
                background-color: #797A7E;
                color: white;
            }
            &:active{
                background-color: #F7F2E7;
                color: #797A7E;
            }
        }
    }
</style>