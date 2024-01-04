<script>
import backSideBar from '../../../components/backSideBar.vue';
export default {
    data(){
        return{
            b1t:"",
            b2t:"",
        }
    },
    methods:{
        goBackBicycle(){
            this.$router.push('/BackBicycle')
        },
        goBackScooter(){
            this.$router.push('/BackScooter')
        },
        goBackCar(){
            this.$router.push('/BackCar')
        }
    },
    components:{
        backSideBar
    }
}
</script>

<template>
    <div class="title">
        <p>腳踏車出租</p>
    </div>
    <div class="content">
        <div class="rentType">
            <button type="button" @click="goBackBicycle()">腳踏車</button>
            <button type="button" @click="goBackScooter()">摩托車</button>
            <button type="button" @click="goBackCar()">轎車</button>
        </div>
        <div class="bicycle">
            <div class="bone">
                <img src="../../../../public/traffic/bicycle.jpg" alt="">
                <div class="rentInfo">
                    <span>b1.腳踏車</span>
                    <p>$100</p>
                    <div class="rentStatus">
                        {{ this.b1t }}
                        <select name="" id="" v-model="b1t">
                            <option value="">出租狀態</option>
                            <option value="出租中">出租中</option>
                            <option value="可租借">可租借</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="btwo">
                <img src="../../../../public/traffic/bicycle1.jpg" alt="">
                <div class="rentInfo">
                    <span>b2.腳踏車</span>
                    <p>$100</p>
                    <div class="rentStatus">
                        {{ this.b2t }}
                        <select name="" id="" v-model="b2t">
                            <option value="">出租狀態</option>
                            <option value="出租中">出租中</option>
                            <option value="可租借">可租借</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
</div>
<backSideBar />
</template>

<style lang="scss" scoped>
    .title{
        font-size: 28pt;
        font-weight: bold;
        color: #82AAE3;
        text-align: center;
        margin-top: 3vmin;
    }
    .content{
        position: relative;
        .rentType{
            position: absolute;
            right: 3%;

            button{
                width: 10vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                margin-right: 5vmin;
                background-color: #F7F2E7;
                color: #797A7E;

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
        .bicycle{
            width: 70vw;
            height: 80vh;
            position: absolute;
            right: 5%;
            margin-top: 10vmin;
            display: flex;
            flex-wrap: wrap;
            gap: 3vmin;
            .bone{
                width: 33vw;
                height: 30vh;
                border-radius: 10px;
                border: 3px solid #D9D9D9;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: #797A7E;
                font-weight: bold;

                img{
                        width: 15vw;
                        height: 25vh;
                        border-radius: 5px;
                    }
                .rentInfo{
                    span{
                        font-size: 16pt;
                    }
                    p{
                        text-align: center;
                        font-size: 14pt;
                    }
                    .rentStatus{
                        select{
                            width: 6vw;
                            height: 4vh;
                            border-radius: 5px;
                            border-style: none;
                            outline: none;
                            color: #797A7E;
                            text-align: center;
                        }
                    }
                }
            }
            .btwo{
                width: 33vw;
                height: 30vh;
                border-radius: 10px;
                border: 3px solid #D9D9D9;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: #797A7E;
                font-weight: bold;

                img{
                        width: 15vw;
                        height: 25vh;
                        border-radius: 5px;
                    }
                .rentInfo{
                    span{
                        font-size: 16pt;
                    }
                    p{
                        text-align: center;
                        font-size: 14pt;
                    }
                    .rentStatus{
                        select{
                            width: 6vw;
                            height: 4vh;
                            border-radius: 5px;
                            border-style: none;
                            outline: none;
                            color: #797A7E;
                            text-align: center;
                        }
                    }
                }
            }
        }
}
</style>