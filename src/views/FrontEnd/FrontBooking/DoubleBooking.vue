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
            test:""
        }
    },
    mounted() {
        let originalString = "早餐(+200/人)";
let breakfast = originalString.split("(+")[0];
let breakfast1 = originalString.split("(+")[1];
let price = breakfast1.split("/")[0];
console.log(breakfast);
console.log(price);

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
    <div class="date">
        <div class="checkin">
            <p>入住日期</p>
            <input type="date" v-model="this.mStartDate">
        </div>
        <div class="checkout">
            <p>退房日期</p>
            <input type="date" v-model="this.mEndDate">
        </div>
        </div>
    <div class="content">
        <div class="show">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../../../public/room/D/double1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/room/D/double1-1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/room/D/double1-2.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <!-- <img src="../../../../public/room/double.jpg" alt=""> -->
            <div class="text">
                <div class="name">
                    <p>舒適雙人房</p>
                    <p>$2500</p>
                </div>
                <hr>
                <div class="extra">
                    <p>加購項目</p>
                    <input type="checkbox" id="uno" value="早餐(+200/人)" v-model="exxtra">
                    <label for="uno">早餐(+200/人)</label>
                    <input type="checkbox" id="dos" value="來回船票(+400/全票)" v-model="exxtra">
                    <label for="dos">來回船票(+400/全票)</label>
                    <br>
                    <!-- <input type="checkbox" id="tres" value="來回船票(+200/半票)" v-model="exxtra">
                    <label for="tres">來回船票(+200/半票)</label> -->
                    <input type="checkbox" id="cuatro" value="摩托車(+300/天)" v-model="exxtra">
                    <label for="cuatro">摩托車(+300/天)</label>
                    <input type="checkbox" id="cinco" value="三大風景區門票(+100/人)" v-model="exxtra">
                    <label for="cinco">三大風景區門票(+100/人)</label>
                    <!-- <br>
                    <input type="checkbox" id="seis" value="鹿粼梅花鹿園區門票(+220/全票)" v-model="exxtra">
                    <label for="seis">鹿粼梅花鹿園區門票(+220/全票)</label>
                    <br>
                    <input type="checkbox" id="siete" value="鹿粼梅花鹿園區門票(+50/半票)" v-model="exxtra">
                    <label for="siete">鹿粼梅花鹿園區門票(+50/半票)</label>
                    <br> -->
                    <br>
                    <input type="checkbox" id="ocho" value="浮潛(+400/人)" v-model="exxtra">
                    <label for="ocho">浮潛(+400/人)</label>
                    <br>
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
            <div class="total">
                <p><i class="fa-solid fa-dollar-sign"></i>總計 : 1500 元</p>
            </div>
            <div class="buttonArea">
                <button type="button" @click="cancle()">取消</button>
                <button type="button" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">預覽
                </button>
            </div>
        </div>
    </div>
<!-- 訂購預覽視窗 -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">訂購預覽</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">訂購項目 :</label>
                                <p>小資雙人房</p>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">入住日期 :</label>
                                <p>2024/02/14</p>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">退房日期 :</label>
                                <p>2024/02/115</p>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">加購項目 :</label>
                                <p>早餐、機車、浮潛</p>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">總金額 :</label>
                                <p>3200元</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="booking()">確認訂購</button>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
</template>

<style lang="scss" scoped> 
    .date{
        width: 60vw;
        display: flex;
        justify-content: space-around;
        align-content: center;
        margin-top: 7vmin;
        margin-left: 5vmin;
        input{
            width: 20vw;
            height: 5vh;
            border-radius: 10px;
            border-style: none;
            outline: none;
            background-color: #e3f6f5;
            padding-left: 2vmin;
            padding-right: 2vmin;
            color: #797A7E;
            box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
        }
        p{
            margin: 0;
            font-size: 16pt;
            color: #797A7E;
            text-align: center;
            margin-right: 2vmin;
        }
        .checkin{
            display: flex;
            align-items: center;
        }
        .checkout{
            display: flex;
            align-items: center;
        }
    }
    .content{
        width: 95vw;
        height: 66vh;
        margin: auto;
        display: flex;
        position: relative;
        .show{
            width: 68vw;
            height: 50vh;
            display: flex;
            justify-content: space-around;
            border-radius: 10px;
            margin-top: 8vmin;
            position: relative;
            #carouselExample{
                width: 23vw;
                height: 33vh;
                margin-top: 6vmin;
                border-radius: 5px;
                box-shadow: 8px 8px 2px 1px rgba(2, 40, 63, 0.2);
                .carousel-inner{
                    width: 23vw;
                    border-radius: 5px;
                    .carousel-item{
                        width: 23vw;
                        border-radius: 5px;
                        img{
                            width: 23vw;
                            height: 33vh;
                            border-radius: 5px;
                            transition: all linear 0.3s;
                            &:hover{
                                opacity: 0.7;
                            }
                            &:active{
                                opacity: 1.0;
                            }
                        }
                    }
                }
                .carousel-control-prev-icon{
                    width: 1.5rem;
                }
                .carousel-control-next-icon{
                    width: 1.5rem;
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
                        font-size: 15.5pt;
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
            height: 70vh;
            color: #797A7E;
            font-size: 13pt;
            position: relative;
            top: -8%;
            right: -3%;
            #ul{
                list-style: none;
                padding-left: 1vmin;
            }
            li{
                margin-bottom: 0.5vmin;
                font-size: 14.5pt;
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
            .total{
                color: #82AAE3;
                position: absolute;
                bottom: 16%;
                left: 5%;
                p{
                    font-size: 16pt;
                    font-weight: bold;
                }
            }
            .buttonArea{
                width: 15vw;
                height: 6vh;
                display: flex;
                justify-content: space-between;
                position: absolute;
                right: 18%;
                bottom: 3%;
                button {
                    width: 5vw;
                    height: 5vh;
                    border: none;
                    border-radius: 5px;
                    color: #797A7E;
                    box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
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