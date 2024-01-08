<script>
import backSideBar from '../../../components/backSideBar.vue';
export default{
    data(){
        return{
            a01:"",
            a02:"",
            a03:"",
            a04:"",
            a05:"",
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
                <img src="../../../../public/room/simpledouble.jpg" alt="">
                <div class="roomInfo">
                    <span>a01.小資雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.a01 }}
                        <select name="" id="" v-model="a01">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sdtwo">
                <img src="../../../../public/room/simpledouble1.jpg" alt="">
                <div class="roomInfo">
                    <span>a02.現代雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.a02 }}
                        <select name="" id="" v-model="a02">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sdthree">
                <img src="../../../../public/room/simpledouble2.jpg" alt="">
                <div class="roomInfo">
                    <span>a03.簡約雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.a03 }}
                        <select name="" id="" v-model="a03">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sdfour">
                <img src="../../../../public/room/simpledouble3.jpg" alt="">
                <div class="roomInfo">
                    <span>a04.輕奢雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.a04 }}
                        <select name="" id="" v-model="a04">
                            <option value="">房間狀態</option>
                            <option value="入住中">入住中</option>
                            <option value="空房">空房</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="sdfive">
                <img src="../../../../public/room/simpledouble4.jpg" alt="">
                <div class="roomInfo">
                    <span>a05.溫馨雙人房</span>
                    <p>$1500</p>
                    <div class="roomStatus">
                        {{ this.a05 }}
                        <select name="" id="" v-model="a05">
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
            width: 70vw;
            height: 80vh;
            position: absolute;
            right: 5%;
            margin-top: 10vmin;
            display: flex;
            flex-wrap: wrap;
            gap: 3vmin;
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