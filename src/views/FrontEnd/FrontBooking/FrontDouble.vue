<script>
import axios from 'axios';
import Footer from '../../../components/Footer.vue';
import { info } from 'sass';
export default{
    data(){
        return{
            roomList:"",
            roomId:"",
            // roomTypeId: "",
            // roomIntroduce:"",
            // roomTypeId2:"",
            roomName:"",
            roomPrice:"",
            orderRoomId:[],
            today:new Date,
            startDate:"",
            endDate:"",
            mStartDate:"",
            mEndDate:"",
            searchInfo:[],
            searchBo:false,
            Info:[],
            c:false,
        }
    },
    mounted() {
        // this.search();
        this.List.forEach(element => {
                this.roomName=element.roomName
            });
            // console.log(this.roomName);

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
            this.roomList=res.data.roomList
            console.log(this.roomList);
            
            })
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
            //   console.log(res.data.orderList);
            //   console.log("查看陣列-------");
            res.data.orderList.forEach(item=>{
                this.orderRoomIdList=JSON.parse(item.roomId);
                this.orderRoomIdList.forEach(roomId=>{
                    this.orderRoomId.push({roomId:roomId.roomId,startDate:item.startDate,endDate:item.endDate})
                })
            })
            // console.log(this.orderRoomId);
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
        booking(){
            this.$router.push('/DoubleBooking')
        },
        roomIsopren(open,roomId){
            // console.log(open);
            // console.log(roomId);
            let date=this.today.getUTCFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate()
            this.roomId=""
            this.startDate="" 
            this.endDate=""
            this.orderRoomId.forEach(item=>{
                if(roomId!=item.roomId){
                    return
                }
                this.roomId=item.roomId
                let sDate=new Date(item.startDate)
                let eDate=new Date(item.endDate)
                this.startDate=sDate.getUTCFullYear()+'-'+(sDate.getMonth()+1)+'-'+sDate.getDate()
                this.endDate=eDate.getUTCFullYear()+'-'+(eDate.getMonth()+1)+'-'+eDate.getDate()
            })
            // console.log(this.roomId);
            // if(this.roomId==roomId){
            //     if(this.endDate<=date||this.startDate<=date){
            //         return'已有人訂房';
            //     }
            // }
            if(open){
                return "空房"
            }
            return "尚未開放"
        },
        search(){
            axios({
            url:'http://localhost:8080/order/search',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
            },
            data:{
                start_date:this.mStartDate,
                end_date:this.mEndDate
            },
            }).then(res=>{
            // console.log(res.data.orderList);
            let date=this.today.getUTCFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate()
            this.startDate="" 
            this.endDate=""

                let mEndDate=new Date(this.mEndDate)
                let mStartDate=new Date(this.mStartDate)
                let enDate=mEndDate.getUTCFullYear()+'-'+(mEndDate.getMonth()+1)+'-'+mEndDate.getDate()
                let stDate=mStartDate.getUTCFullYear()+'-'+(mStartDate.getMonth()+1)+'-'+mStartDate.getDate()
                res.data.orderList.forEach(item=>{
                    // console.log(item);
                    let sDate=new Date(item.startDate)
                    let eDate=new Date(item.endDate)
                    
                    this.startDate=sDate.getUTCFullYear()+'-'+(sDate.getMonth()+1)+'-'+sDate.getDate()
                    this.endDate=eDate.getUTCFullYear()+'-'+(eDate.getMonth()+1)+'-'+eDate.getDate()
                    JSON.parse(item.roomId).forEach(itemRoom=>{
                        // console.log(itemRoom);
                            this.searchInfo=[]
                        
                        this.roomList.forEach(list=>{
                            // console.log(list);
                            // if(itemRoom.roomId.charAt(0) === 'A'){
                                // console.log(itemRoom);
                                // console.log(list);
                                
                                if(this.mStartDate==""||this.mStartDate==""){
                                    
                                    this.searchInfo.push(list)
                                    return
                                }
                                
                                if(itemRoom.roomId==list.roomId){
                                    
                                    if(enDate<=this.endDate&&stDate>=this.startDate){
                                        console.log(list);  
                                    }
                                    
                                    return
                                }
                                
                                this.searchInfo.push(list)
                                // console.log(this.searchInfo);
                                
                            // }
                        })
                        
                        // console.log(this.Info);
                    });
                })
                console.log(this.searchInfo);
                this.roomList=this.searchInfo;
            })
        },
        goback(){
            this.$emit("goback",this.goback)
            console.log(this.goback);
        }
    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">
        <!-- <div class="date">
            
            <div class="checkin">
                <p>入住日期</p>
                <input type="date" v-model="this.mStartDate">
            </div>
            <div class="checkout">
                <p>退房日期</p>
                <input type="date" v-model="this.mEndDate">
            </div>
            <div>
            </div>
            <button type="button">回上頁</button>
            <button type="button" @click="search()" >搜尋</button>
        </div> -->
        <!-- <button type="button">回上頁</button> -->
        <div class="show" v-for="item in this.roomList">
            <img src="../../../../room/double.jpg" alt="">
            <div class="text">
                <div class="name" >
                    <p>{{ item.roomName }}</p>
                    <p>$ {{ item.roomPrice }}</p>
                </div>
                <hr>
                <div class="description" >
                    <p>{{ item.roomIntroduce }}</p>
                </div>
                <div class="description" >
                    <p>{{ roomIsopren(item.open,item.roomId) }}</p>
                </div>
                <button type="button" @click="booking()">訂購</button>
            </div>
        </div>
        <button type="button" id="backbtn" @click="goback()">返回</button>
    </div>
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