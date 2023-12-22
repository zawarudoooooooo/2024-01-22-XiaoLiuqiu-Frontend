<script>
import backSideBar from '../../../components/backSideBar.vue';
export default{
    data(){
        return{
            d1t:"",
            d2t:"",
            d3t:"",
            d4t:"",
            d5t:"",
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
        <p>舒適雙人房</p>
    </div>
    <div class="content">
        <div class="roomType">
            <button type="button" @click="goBackSimpleDouble()">小資雙人房</button>
            <button type="button" @click="goBackDouble()">舒適雙人房</button>
            <button type="button" @click="goBackFamily()">豪華家庭房</button>
        </div>
        <div class="double">
            <div class="done">
                <img src="../../../../public/DoubleRoom/d1.jpg" alt="">
                <div class="roomInfo">
                    <span>D1.輕奢雙人房</span>
                    <p>$2500</p>
                    <div class="roomStatus">
                        {{ this.d1t }}
                        <select name="" id="" v-model="d1t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="dtwo">
                <img src="../../../../public/DoubleRoom/d2.jpg" alt="">
                <div class="roomInfo">
                    <span>D2.景觀雙人房</span>
                    <p>$2500</p>
                    <div class="roomStatus">
                        {{ this.d2t }}
                        <select name="" id="" v-model="d2t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="dthree">
                <img src="../../../../public/DoubleRoom/d3.jpg" alt="">
                <div class="roomInfo">
                    <span>D3.簡約雙人房</span>
                    <p>$2500</p>
                    <div class="roomStatus">
                        {{ this.d3t }}
                        <select name="" id="" v-model="d3t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="dfour">
                <img src="../../../../public/DoubleRoom/d4.jpg" alt="">
                <div class="roomInfo">
                    <span>D4.溫馨雙人房</span>
                    <p>$2500</p>
                    <div class="roomStatus">
                        {{ this.d4t }}
                        <select name="" id="" v-model="d4t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="dfive">
                <img src="../../../../public/DoubleRoom/d5.jpg" alt="">
                <div class="roomInfo">
                    <span>D5.復刻雙人房</span>
                    <p>$2500</p>
                    <div class="roomStatus">
                        {{ this.d5t }}
                        <select name="" id="" v-model="d5t">
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
        .double{
            width: 70vw;
            height: 80vh;
            position: absolute;
            right: 5%;
            margin-top: 10vmin;
            display: flex;
            flex-wrap: wrap;
            gap: 3vmin;
            .done{
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
            .dtwo{
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
            .dthree{
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
            .dfour{
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
            .dfive{
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