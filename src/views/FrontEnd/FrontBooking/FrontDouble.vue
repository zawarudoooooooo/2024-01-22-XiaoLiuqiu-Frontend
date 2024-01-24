<script>
import axios from 'axios';
import Footer from '../../../components/Footer.vue';
import DoubleBooking from './DoubleBooking.vue'
export default{
    data(){
        return{
            roomList:"",
            roomList1:"",
            roomId:"",
            // roomTypeId: "",
            // roomIntroduce:"",
            // roomTypeId2:"",
            roomName:"",
            roomPrice:"",
            orderRoomId:"",
            today:new Date,
            startDate:"",
            endDate:"",
            mStartDate:"",
            mEndDate:"",
            searchInfo:[],
            searchBo:false,
            Info:[],
            c:false,
            bookingInfo:[],
            bookingData:false
        }
    },
    mounted() {

        // 設定開始時間和結束時間
var startTime = new Date('2024-01-22T00:00:00');
var endTime = new Date('2024-01-23T23:59:59'); // 將結束時間設置到當天的最後一秒

// 取得今天的日期和時間
var currentTime = new Date();

// 判斷是否在範圍內
if (startTime <= currentTime && currentTime <= endTime) {
    console.log("今天的日期在開始時間和結束時間之間。");
} else {
    console.log("今天的日期不在範圍內。");
}


        // this.search();
        this.List.forEach(element => {
                this.roomName=element.roomName
            });
            // console.log(this.roomName);
            axios({
            url:'http://localhost:8080/order/search',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
            },
            data:{
                
            },
            }).then(res=>{
                this.orderRoomId=res.data.orderList
                console.log(this.orderRoomId);
                axios({
            url:'http://localhost:8080/room/search',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                roomName:this.roomName
            },
            data:{

            },
                }).then(res=>{
                    this.roomList1=res.data.roomList
                    // console.log(this.roomList1);
                    this.roomList=res.data.roomList
                    // console.log(this.roomList);
                    
                    const availableRooms = [];
                    this.roomList.forEach(room => {
                        // 檢查房間是否已經被訂購
                        const isBooked = this.orderRoomId.some(order => {
                            const nStartDate = new Date(order.startDate);
                            const nEndDate = new Date(order.endDate);
                            return order.roomId === room.roomId && nStartDate <= this.today && nEndDate >= this.today;
                        });
                    
                        // 如果沒有被訂購，加入可用房間列表
                        if (!isBooked) {
                            availableRooms.push(room);
                        }
                    });
                    this.roomList = availableRooms;
                    console.log(this.roomList);
                })
            })

        
            
        console.log(this.List);
    },
    props:[
        "List"
    ],
    methods:{
        back(){
            this.$router.push('/FrontSearch')
        },
        booking(roomId){
            this.bookingData=true
            this.roomList.forEach(item=>{
                if(roomId!=item.roomId){
                    return
                }
                this.bookingInfo.push(item)
                console.log(this.bookingInfo);
            })
            // this.$router.push('/DoubleBooking')
        },
        search(){

                let mEndDate=new Date(this.mEndDate)
                let mStartDate=new Date(this.mStartDate)
                let enDate=mEndDate.getUTCFullYear()+'-'+(mEndDate.getMonth()+1)+'-'+mEndDate.getDate()
                let stDate=mStartDate.getUTCFullYear()+'-'+(mStartDate.getMonth()+1)+'-'+mStartDate.getDate()

                this.roomList=[]
                this.roomList1.forEach(room=>{
                    let isMatched = false;
                    for (let order of this.orderRoomId) {
                    if (room.roomId != order.roomId) {
                        
                            this.roomList.push(room)
                            console.log(this.roomList);
                            isMatched = true;
                            return
                        }
                        let nStartDate = new Date(order.startDate);
                        let nEndDate = new Date(order.endDate);
                        let startDate = nStartDate.getUTCFullYear() + '-' + (nStartDate.getMonth() + 1) + '-' + nStartDate.getDate();
                        let endDate = nEndDate.getUTCFullYear() + '-' + (nEndDate.getMonth() + 1) + '-' + nEndDate.getDate();
                        
                        
                        if(this.mStartDate!=""){
                            if(stDate<endDate){
                                isMatched = true;
                                return
                            }
                        }
                        if(this.mEndDate!=""){
                            if(enDate<endDate){
                                isMatched = true;
                                return
                            }
                        }
                        // this.roomList.push(room)
                        
                        
                    }
                    if (!isMatched) {
                        this.roomList.push(room);
                    }
                })
                console.log(this.roomList);
                
        },
        goback(){
            this.$emit("goback",this.goback)
            console.log(this.goback);
        }
    },
    components:{
        Footer,
        DoubleBooking
    }
}
</script>

<template>
    <div class="content" v-if="!bookingData">
        <div class="date">
            <div class="checkin">
                <p>入住日期</p>
                <input type="date" v-model="this.mStartDate">
            </div>
            <div class="checkout">
                <p>退房日期</p>
                <input type="date" v-model="this.mEndDate">
                <button type="button"   @click="search()" >搜尋</button>
            </div>
        </div>
        <!-- <button type="button">回上頁</button> -->
        <div class="show" v-for="(item,index) in this.roomList" >
            <img src="../../../../room/double.jpg" alt="">
            <div class="text" >
                <div class="name" >
                    <p>{{ item.roomName }}</p>
                    <p>$ {{ item.roomPrice }}</p>
                </div>
                <hr>
                <div class="description" >
                    <p>{{ item.roomIntroduce }}</p>
                </div>
                <button type="button" @click="booking(item.roomId)">訂購</button>
            </div>
        
        </div>
        
        <button type="button" id="backbtn" @click="goback()">返回</button>
    </div>
    <DoubleBooking v-if="bookingData" :info="this.bookingInfo" :StartDate="this.mStartDate" :EndDate="this.mEndDate"/>
</template>

<style lang="scss" scoped> 
    .content{
        width: 90vw;
        height: 69svh;
        margin: auto;
        margin-top: 6vmin;
        //border: 1px solid black;
        position: relative;
        overflow: auto;
        .date{
            width: 60vw;
            display: flex;
            justify-content: space-around;
            align-content: center;
            margin: auto;
            input{
                width: 20vw;
                height: 5vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: #D9D9D9;
                padding-left: 2vmin;
                padding-right: 2vmin;
                color: #797A7E;
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
            }
            .checkout{
                display: flex;
            }
        }
        .show{
            width: 60vw;
            height: 34vh;
            margin: auto;
            display: flex;
            border: 1px solid lightgray;
            border-radius: 10px;
            margin-top: 5vmin;
            box-shadow: 1px 1px 1px gray;
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
                .description{
                    p{
                        color: #797A7E;
                        font-size: 16pt;
                        width: 35vw;
                    }
                }
            }
        }
        button{
            width: 4vw;
            height: 4.5vh;
            border: none;
            border-radius: 5px;
            color: #797A7E;
            position: absolute;
            right: 5%;
            bottom: 11%;

            &:hover{
                background-color: #797A7E;
                color: white;
            }
            &:active{
                background-color: #F7F2E7;
                color: #797A7E;
            }
        }
        #backbtn{
            position: fixed;
            right:10%;
            bottom: 16%;
        }
        
    }
</style>