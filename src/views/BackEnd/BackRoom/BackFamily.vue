<script>
import backSideBar from '../../../components/backSideBar.vue';
export default{
    data(){
        return{
            f1t:"",
            f2t:"",
            f3t:"",
            f4t:"",
            f5t:"",
        }
    },
    methods:{
        goBackSimpleDouble(){
            this.$router.push('/BackSimpleDouble')
        },
        goBackDouble(){
            this.$router.push('/BackDouble')
        },
        goBackFamily(){
            this.$router.push('/BackFamily')
        }
    },
    components:{
        backSideBar
    }
}
</script>

<template>
    <div class="title">
        <p>豪華家庭房</p>
    </div>
    <div class="content">
        <div class="roomType">
            <button type="button" @click="goBackSimpleDouble()">小資雙人房</button>
            <button type="button" @click="goBackDouble()">舒適雙人房</button>
            <button type="button" @click="goBackFamily()">豪華家庭房</button>
        </div>
        <div class="family">
            <div class="fone">
                <img src="../../../../public/room/family.jpg" alt="">
                <div class="roomInfo">
                    <span>F1.海景家庭房</span>
                    <p>$5500</p>
                    <div class="roomStatus">
                        {{ this.f1t }}
                        <select name="" id="" v-model="f1t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="ftwo">
                <img src="../../../../public/room/family1.jpg" alt="">
                <div class="roomInfo">
                    <span>F2.溫馨家庭房</span>
                    <p>$5000</p>
                    <div class="roomStatus">
                        {{ this.f2t }}
                        <select name="" id="" v-model="f2t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="fthree">
                <img src="../../../../public/room/family2.jpg" alt="">
                <div class="roomInfo">
                    <span>F3.復古家庭房</span>
                    <p>$5000</p>
                    <div class="roomStatus">
                        {{ this.f3t }}
                        <select name="" id="" v-model="f3t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="ffour">
                <img src="../../../../public/room/family3.jpg" alt="">
                <div class="roomInfo">
                    <span>F4.頂級家庭房</span>
                    <p>$5000</p>
                    <div class="roomStatus">
                        {{ this.f4t }}
                        <select name="" id="" v-model="f4t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="ffive">
                <img src="../../../../public/room/family4.jpg" alt="">
                <div class="roomInfo">
                    <span>F5.簡約家庭房</span>
                    <p>$5000</p>
                    <div class="roomStatus">
                        {{ this.f5t }}
                        <select name="" id="" v-model="f5t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>    
    </div>
<backSideBar/>
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
        .roomType{
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
        .family{
            width: 70vw;
            height: 80vh;
            position: absolute;
            right: 5%;
            margin-top: 10vmin;
            display: flex;
            flex-wrap: wrap;
            gap: 3vmin;
            .fone{
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
                .roomInfo{
                    span{
                        font-size: 16pt;
                    }
                    p{
                        text-align: center;
                        font-size: 14pt;
                    }
                    .roomStatus{
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
            .ftwo{
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
                .roomInfo{
                    span{
                        font-size: 16pt;
                    }
                    p{
                        text-align: center;
                        font-size: 14pt;
                    }
                    .roomStatus{
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
            .fthree{
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
                .roomInfo{
                    span{
                        font-size: 16pt;
                    }
                    p{
                        text-align: center;
                        font-size: 14pt;
                    }
                    .roomStatus{
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
            .ffour{
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
                .roomInfo{
                    span{
                        font-size: 16pt;
                    }
                    p{
                        text-align: center;
                        font-size: 14pt;
                    }
                    .roomStatus{
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
            .ffive{
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
                .roomInfo{
                    span{
                        font-size: 16pt;
                    }
                    p{
                        text-align: center;
                        font-size: 14pt;
                    }
                    .roomStatus{
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