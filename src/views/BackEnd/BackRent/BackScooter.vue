<script>
import backSideBar from '../../../components/backSideBar.vue';
export default {
    data(){
        return{
            s1:"",
            s2:"",
            s3:"",
            s4:"",
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
        <p>摩托車出租</p>
    </div>
    <div class="content">
        <div class="rentType">
            <button type="button" @click="goBackBicycle()">腳踏車</button>
            <button type="button" @click="goBackScooter()">摩托車</button>
            <button type="button" @click="goBackCar()">轎車</button>
        </div>
        <div class="scooter">
            <div class="sone">
                <img src="../../../../public/traffic/scooter.jpg" alt="">
                <div class="rentInfo">
                    <span>s1.摩托車</span>
                    <p>$200</p>
                    <div class="rentStatus">
                        {{ this.s1 }}
                        <select name="" id="" v-model="s1">
                            <option value="">出租狀態</option>
                            <option value="出租中">出租中</option>
                            <option value="可租借">可租借</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="stwo">
                <img src="../../../../public/traffic/scooter1.jpg" alt="">
                <div class="rentInfo">
                    <span>s2.摩托車</span>
                    <p>$200</p>
                    <div class="rentStatus">
                        {{ this.s2 }}
                        <select name="" id="" v-model="s2">
                            <option value="">出租狀態</option>
                            <option value="出租中">出租中</option>
                            <option value="可租借">可租借</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sthree">
                <img src="../../../../public/traffic/scooter2.jpg" alt="">
                <div class="rentInfo">
                    <span>s3.摩托車</span>
                    <p>$200</p>
                    <div class="rentStatus">
                        {{ this.s3 }}
                        <select name="" id="" v-model="s3">
                            <option value="">出租狀態</option>
                            <option value="出租中">出租中</option>
                            <option value="可租借">可租借</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sfour">
                <img src="../../../../public/traffic/scooter3.jpg" alt="">
                <div class="rentInfo">
                    <span>s4.摩托車</span>
                    <p>$200</p>
                    <div class="rentStatus">
                        {{ this.s4 }}
                        <select name="" id="" v-model="s4">
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
        .scooter{
            width: 70vw;
            height: 80vh;
            position: absolute;
            right: 5%;
            margin-top: 10vmin;
            display: flex;
            flex-wrap: wrap;
            gap: 3vmin;
            .sone{
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
            .stwo{
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
            .sthree{
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
            .sfour{
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