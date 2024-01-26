<script>
import Footer from '../../components/Footer.vue';
import swal from 'sweetalert';
import axios from 'axios';
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
            test:"",
            order:"",
            total:0,
            total1:0,
            Price:0,
            startDate:"",
            endDate:"",
            today:new Date(),
            paymentMethod:"請選擇",
            cookie:"",
            name:"",
            roomId:"",
            arr:[],
            exArr:[]
        }
    },
    mounted() {
        if(document.cookie!=""){
            this.cookie=document.cookie.split("=")[1];
            axios({
                url:'http://localhost:8080/member/member',
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                params:{
                    account:this.cookie
                },
                data:{
                },
                }).then(res=>{
                    res.data.memberList.forEach(item=>{
                        this.name=item.memberName
                    })
                })
        }

        this.order=this.info
        console.log(this.order);
        this.order.forEach(element => {
            this.roomId=element.roomId
            this.total1=element.roomPrice
            this.total=element.roomPrice
        });
        this.startDate=this.StartDate
        this.endDate=this.EndDate

        if(this.StartDate==""){
            let currentYear = this.today.getFullYear();
            let currentMonth = String(this.today.getMonth() + 1).padStart(2, '0');
            let currentDay = String(this.today.getDate()).padStart(2, '0');
            let currentDateStr = `${currentYear}-${currentMonth}-${currentDay}`;
            this.startDate=currentDateStr
        }

        setInterval(() => {
            this.exxtraClick();
        }, 100); 
        // setInterval(() => {
        //     this.test3()
        // }, 1000); 

    },
    props:[
        "info",
        "StartDate",
        "EndDate"
    ],
    methods:{
        booking(){
            // console.log(this.paymentMethod);
            this.exArr=[]
            this.exxtra.forEach(item=>{
                this.exArr.push(item.split("(+")[0])
            })
            this.arr.push({extraName:JSON.stringify(this.exArr),extraPrice:this.Price})
            // const test=this.arr
            console.log(JSON.stringify(this.arr));
            if(this.paymentMethod=="請選擇"){
                swal("錯誤", "請選擇付款方式", "error");
                return
            }
            if(this.startDate==0||this.endDate==0){
                swal("錯誤", "請選擇入住日期或者退房日期", "error");
                return
            }
            axios({
            url:'http://localhost:8080/order/ordersCreate',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },  
            data:{
                memberName:this.name,
                room_id:this.roomId,
                order_item: this.arr,
                start_date:this.startDate,
                end_date:this.endDate,
                order_payment:this.paymentMethod
            },
            }).then(res=>{
                console.log(res.data);
            }).catch(error => {
                console.error( error);
            })

            swal("訂購成功", "請至信箱查看明細", "success");
            this.$router.push('/')
        },
        cancle(){
            this.$router.push('/')
        },
        exxtraClick(){
            // this.total=0
            // // console.log(this.order);
            // this.order.forEach(element => {
            // this.total+=element.roomPrice
            // });
            let start=new Date(this.startDate)
            let end=new Date(this.endDate)
            let timeDifference=end-start;
            let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.order.forEach(order=>{
                this.Price=0
                // console.log(order.roomName);
                let roomName=order.roomName.slice(-3)
                // console.log(roomName);
                if(this.exxtra.length!==0){
                    if(roomName==="雙人房"){
                        this.exxtra.forEach(item=>{
                            let breakfast = item.split("(+")[0];
                            let breakfast1 = item.split("(+")[1];
                            let price = parseFloat(breakfast1.split("/")[0]);
                            if(breakfast==='摩托車'){
                                if(this.endDate!=''){
                                    this.Price+=(price*days)
                                }
                                this.Price+=price

                                return
                            }
                            if(breakfast==='早餐'){
                                if(this.endDate!=''){
                                    // console.log(13);
                                    // console.log(days);
                                    this.Price+=(price*days)*2
                                    
                                    // console.log(this.Pric+(price*2));
                                    
                                    // console.log(this.Price*days+(price*2));
                                    return
                                }
                            }
                            this.Price+=(price*2)
                                // console.log(price*2);

                            
                            // console.log(item);
                        })
                    }
                    if(roomName==="家庭房"){
                        this.exxtra.forEach(item=>{
                            let breakfast = item.split("(+")[0];
                            let breakfast1 = item.split("(+")[1];
                            let price = parseFloat(breakfast1.split("/")[0]);
                            if(breakfast==='摩托車'){
                                this.Price+=(price*2)
                                return
                            }
                                // console.log(price*2);
                                this.Price+=(price*4)

                            // console.log(price);
                            // console.log(item);
                        })
                    }
                    return
                }
                // console.log(this.total);
            })
            this.total=this.total1
            if(this.endDate!=''){
                this.total = (this.total*days) +this.Price
                // console.log(this.Price);
                return
            }
            this.total += this.Price
        },
        Click(){
            if(this.startDate==0||this.endDate==0){
                swal("錯誤", "請選擇入住日期或者退房日期", "error");
                return
            }
            this.exxtraClick()
        },

        clicked(){
            this.ischecked=!this.ischecked
            // this.exxtra.push(this.value)
            // showExtra.innerText=this.exxtra
        },
        test3(){
            
            console.log(this.total);
            // console.log(this.endDate);
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
            <input type="date" v-model="this.startDate" v-if="this.StartDate!=''"  disabled>
            <input type="date" v-model="this.startDate"  v-else disabled>
        </div>
        <div class="checkout">
            <p>退房日期</p>
            <input type="date" v-model="this.endDate" v-if="this.EndDate!=''" disabled>
            <input type="date" v-model="this.endDate" v-else>
        </div>
        </div>
    <div class="content" v-for="item in this.order">
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
            <div class="text">
                <div class="name">
                    <p>{{item.roomName}}</p>
                    <p>${{item.roomPrice}}</p>
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
                <p><i class="fa-solid fa-dollar-sign"></i>總計 : {{this.total}} 元</p>
            </div>
            <div class="buttonArea">
                <button type="button" @click="cancle()">取消</button>
                <button type="button" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal" @click="exxtraClick()">預覽
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
                        <form v-for="item in this.order">
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">訂購項目 :</label>
                                <span>{{item.roomName}}</span>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">入住日期 :</label>
                                <span>{{this.startDate}}</span>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">退房日期 :</label>
                                <span>{{this.endDate}}</span>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">加購項目 :</label>
                                <span v-for="exxItem in exxtra">{{ exxItem.split("(+")[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">總金額 :</label>
                                <span>${{ this.total }}元</span>
                            </div>
                            <div class="mb-3">
                                <!-- <input type="checkbox" value="true"> -->
                                <label for="recipient-name" class="col-form-label">支付方式 :</label>
                                <select v-model="this.paymentMethod">
                                    <option >請選擇</option>
                                    <option value="true">現場支付</option>
                                    <option value="false">線上支付</option>
                                </select>
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
    <!-- <Footer /> -->
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
    .modal-body{
        span{
            margin-left: 1vmin;
        }
        select{
            width: 6vw;
            border-radius: 5px;
            margin-left: 1vmin;
            text-align: center;
        }
    }
</style>