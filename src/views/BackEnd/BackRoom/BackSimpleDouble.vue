<script>
import backSideBar from '../../../components/backSideBar.vue';
export default{
    data(){
        return{
            sd1t:"",
            sd2t:"",
            sd3t:"",
            sd4t:"",
            sd5t:"",
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
        <p>小資雙人房</p>
    </div>
    <div class="content">
        <div class="roomType">
            <button type="button" @click="goBackSimpleDouble()">小資雙人房</button>
            <button type="button" @click="goBackDouble()">舒適雙人房</button>
            <button type="button" @click="goBackFamily()">豪華家庭房</button>
        </div>
        <div class="simpleDouble">
            <div class="sdone">
                <img src="../../../../public/SimpleDoubleRoom/sd1.jpg" alt="">
                <div class="roomInfo">
                    <span>SD1.小資雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.sd1t }}
                        <select name="" id="" v-model="sd1t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sdtwo">
                <img src="../../../../public/SimpleDoubleRoom/sd2.jpg" alt="">
                <div class="roomInfo">
                    <span>SD2.小資雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.sd2t }}
                        <select name="" id="" v-model="sd2t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sdthree">
                <img src="../../../../public/SimpleDoubleRoom/sd3.jpg" alt="">
                <div class="roomInfo">
                    <span>SD3.小資雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.sd3t }}
                        <select name="sd3" id="" v-model="sd3t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sdfour">
                <img src="../../../../public/SimpleDoubleRoom/sd4.jpg" alt="">
                <div class="roomInfo">
                    <span>SD4.小資雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.sd4t }}
                        <select name="sd4" id="" v-model="sd4t">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sdfive">
                <img src="../../../../public/SimpleDoubleRoom/sd5.jpg" alt="">
                <div class="roomInfo">
                    <span>SD4.小資雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.sd5t }}
                        <select name="sd4" id="" v-model="sd5t">
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
        .simpleDouble{
            //border: 1px solid black;
            width: 70vw;
            height: 80vh;
            position: absolute;
            right: 5%;
            margin-top: 10vmin;
            display: flex;
            flex-wrap: wrap;
            gap: 3vmin;
            // justify-content: space-around;
            .sdone{
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
            .sdtwo{
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
            .sdthree{
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
            .sdfour{
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
            .sdfive{
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