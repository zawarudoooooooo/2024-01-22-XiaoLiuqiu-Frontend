<script>
import axios from 'axios';
import Footer from '../../components/Footer.vue';
import FrontBooking from './FrontBooking.vue'
import swal from 'sweetalert';
export default{
    data(){
        return{
            roomList:[],
            roomList1:[],
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
        console.log(this.list)

    // // 設定開始時間和結束時間
    //     var startTime = new Date('2024-01-22T00:00:00');
    //     var endTime = new Date('2024-01-23T23:59:59'); // 將結束時間設置到當天的最後一秒

    // // 取得今天的日期和時間
    //     var currentTime = new Date();

    // // 判斷是否在範圍內
    //     if (startTime <= currentTime && currentTime <= endTime) {
    //         console.log("今天的日期在開始時間和結束時間之間。");
    //     } else {
    //         console.log("今天的日期不在範圍內。");
    //     }

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

                    res.data.roomList.forEach(item=>{
                        if(!item.open){
                            return
                        }
                        item.roomImg=JSON.parse(item.roomImg)
                        console.log(item);
                        this.roomList1.push(item)
                        this.roomList.push(item)
                        // console.log(item);
                    })

                    // console.log(this.roomList1);
                    
                    // console.log(this.roomList);

                    const availableRooms = [];
                    this.roomList.forEach(room => {
                        console.log(room.roomIntroduce);
                        room.roomIntroduce= JSON.parse(room.roomIntroduce)
                        // console.log(room);
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
            if(document.cookie==""){
                swal({
                        title: '錯誤',
                        text: '請先登入',
                        icon: 'error',
                        buttons: '確認',
                        dangerMode: true,
                    })
                    .then((willRefresh) => {
                        if (willRefresh) {
                            this.$router.push('/FrontLogin')
                        } 
                    });
                return
            }
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
        FrontBooking
    }
}
</script>

<template>
    <div class="content" v-if="!bookingData">
        <div class="search">
            <div class="checkin">
                <p>入住日期</p>
                <input type="date" v-model="this.mStartDate">
            </div>
            <div class="checkout">
                <p>退房日期</p>
                <input type="date" v-model="this.mEndDate">
            </div>
            <button type="button" @click="search()" id="searchbtn">搜尋</button>
        </div>
        <div v-for="(item,index) in this.roomList" :key="index">
        <div class="show" >
            <div :id="'carouselExample' + index" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" style="width: 20vw;height: 28vh;border-radius: 5px;">
                    <div v-for=" (img,imgIndex) in item.roomImg" :key="imgIndex" :class="{ 'carousel-item': true, 'active': imgIndex === 0 }">
                        <img v-if="item.roomName=='小資雙人房'" :src="'public/room/SP/'+img" alt="" style="width: 20vw;height: 28vh;border-radius: 5px;">
                        <img v-if="item.roomName=='舒適雙人房'" :src="'public/room/D/'+img" alt="" style="width: 20vw;height: 28vh;border-radius: 5px;">
                        <img v-if="item.roomName=='豪華家庭房'" :src="'public/room/F/'+img" alt="" style="width: 20vw;height: 28vh;border-radius: 5px;">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExample' + index" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExample' + index" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="text" v-if="item.open">
                <div class="name" >
                    <span>{{ item.roomId }}</span>
                    <p>{{ item.roomName }}</p>
                    <p>$ {{ item.roomPrice }}</p>
                </div>
                <hr>
                <div class="description" >
                    <span v-for="introduce in item.roomIntroduce">
                        <!-- {{introduce}} -->
                            <span v-if="introduce=='獨立衛浴'"><i class="fa-solid fa-shower"></i>獨立衛浴</span>
                            <span v-if="introduce=='空調'"><i class="fa-solid fa-snowflake" ></i>空調</span>
                            <span v-if="introduce=='平面電視 '"> <i class="fa-solid fa-tv" ></i> 平面電視</span>
                            <span v-if="introduce=='Wifi'"><i class="fa-solid fa-wifi" ></i>Wifi</span>
                            <span v-if="introduce=='浴缸'"><i class="fa-solid fa-bath" ></i>浴缸</span>
                            <span v-if="introduce=='遊戲機'"><i class="fa-solid fa-gamepad" ></i>遊戲機</span>
                            <span v-if="introduce=='床頭插座'"><i class="fa-solid fa-plug"></i>床頭插座</span>
                            <span v-if="introduce=='景觀'"><i class="fa-solid fa-mountain-sun"></i>景觀</span>
                        <!-- {{ introduce }} , -->
                    </span>
                </div>
                <button type="button" @click="booking(item.roomId)">訂購</button>
            </div>
            
        </div>
    </div>
        <button type="button" id="backbtn" @click="goback()"><i class="fa-solid fa-arrow-right-to-bracket"></i>返回</button>
    </div>
    <FrontBooking v-if="bookingData" :info="this.bookingInfo" :StartDate="this.mStartDate" :EndDate="this.mEndDate"/>
</template>

<style lang="scss" scoped> 
    .content{
        width: 90vw;
        height: 66vh;
        margin: auto;
        margin-top: 6vmin;
        position: relative;
        overflow: auto;
        .search{
            width: 65vw;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 7vmin;
            margin: auto;
            input{
                width: 20vw;
                height: 5vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: white;
                padding-left: 2vmin;
                padding-right: 2vmin;
                color: #4d4327;
                font-size: 15pt;
                box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
            }
            p{
                margin: 0;
                font-size: 16pt;
                color: #4d4327;
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
            #searchbtn{
                width: 4vw;
                height: 4.5vh;
                border: none;
                border-radius: 5px;
                color: #4d4327;
                box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
                &:hover{
                    background-color: #4d4327;
                    color: white;
                }
                &:active{
                    background-color: #F7F2E7;
                    color: #4d4327;
                }
            }
        }
        .show{
            width: 60vw;
            height: 34vh;
            margin: auto;
            justify-content: space-between;
            display: flex;
            border: 1px solid lightgray;
            border-radius: 10px;
            margin-top: 5vmin;
            box-shadow: 1px 1px 1px gray;
            padding: 3vmin;
            position: relative;
            background-color: white;
            #carouselExample{
                width: 20vw;
                height: 27vh;
                border-radius: 5px;
                .carousel-inner{
                    width: 20vw;
                    border-radius: 5px;
                    .carousel-item{
                        width: 20vw;
                        border-radius: 5px;
                        img{
                            width: 20vw;
                            height: 27vh;
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
                width: 33.5vw;
                height: 23vh;
                hr{
                    margin-top: 1vmin;
                    margin-bottom: 1vmin;
                }
                .name{
                    width: 33vw;
                    margin: auto;
                    display: flex;
                    align-content: center;
                    justify-content: space-around;
                    p{
                        color: #4d4327;
                        font-size: 24pt;
                        margin: 0;
                    }
                }
                .description{
                    span{
                        color: #4d4327;
                        font-size: 15pt;
                        width: 35vw;
                        i{
                            margin-right: 1vmin;
                            margin-left: 1.5vmin;
                        }
                    }
                }
                button{
                    width: 4vw;
                    height: 4.5vh;
                    border: none;
                    border-radius: 5px;
                    color: #4d4327;
                    position: absolute;
                    right: 5%;
                    bottom: 12%;
                    box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
                    &:hover{
                        background-color: #4d4327;
                        color: white;
                    }
                    &:active{
                        background-color: #F7F2E7;
                        color: #4d4327;
                    }
                }
            }
        }
        #backbtn{
            width: 5vw;
            height: 4.5vh;
            border: none;
            border-radius: 5px;
            color: #4d4327;
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: fixed;
            right:10%;
            bottom: 18%;
            box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
            i{
                scale: -1;
            }
        }
        
    }
    @media(max-width:1200px){
        .content{
            height: 78vh;
            .search{
                width: 85vw;
                input{
                    width: 25vw;
                    height: 3vh;
                }
                #searchbtn{
                    width: 6vw;
                    height: 3vh;
                }
            }
            .show{
                width: 75vw;
                height: 18vh;
                #carouselExample{
                    width: 26vw;
                    height: 13vh;
                    .carousel-inner{
                        width: 26vw;
                        .carousel-item{
                            width: 26vw;
                            img{
                                width: 26vw;
                                height: 13vh;
                            }
                        }
                    }
                }
                .text{
                    width: 40.5vw;
                    height: 10vh;
                    .description{
                        span{
                            font-size: 14pt;
                        }
                    }
                    button{
                        width: 6vw;
                        height: 3vh;
                        font-size: 14pt;
                    }
                }
            }
            #backbtn{
                width: 7vw;
                height: 3vh;
                bottom: 11%;
            }
        }
    }
    @media(max-width:992px){
        .content{
            .show{
                .text{
                    .name{
                        p{
                            font-size: 20pt;
                        }
                        
                    }
                    .description{
                        span{
                            font-size: 13pt;
                        }
                    }
                    button{
                        width: 8vw;
                    }
                }
            }
            #backbtn{
                width: 10vw;
                bottom: 13%;
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 80vh;
            .search{
                flex-wrap: wrap;
                input{
                    width: 62vw;
                }
                .checkin{
                    margin-bottom: 9vmin;
                }
                .checkout{
                    margin-bottom: 7vmin;
                }
                #searchbtn{
                    width: 14vw;
                }
            }
            .show{
                width: 85vw;
                height: 14vh;
                #carouselExample{
                    width: 30vw;
                    height: 11vh;
                    .carousel-inner{
                        width: 30vw;
                        .carousel-item{
                            width: 30vw;
                            img{
                                width: 30vw;
                                height: 11vh;
                            }
                        }
                    }
                }
                .text{
                    height: 10vh;
                    .name{
                        width: 40vw;
                        p{
                            font-size: 12pt;
                        }
                    }
                    .description{
                        span{
                            font-size: 8.5pt;
                        }
                    }
                    button{
                        width: 8vw;
                        height: 2vh;
                        font-size: 8pt;
                        bottom: 7%;
                    }
                }
            }
            #backbtn{
                width: 17vw;
                bottom: 11%;
            }
        }
    }
    @media(max-width:414px){
        .content{
            .search{
                p{
                    font-size: 14pt;
                }
            }
            .show{
                .text{
                    hr{
                        margin-bottom: 0;
                    }
                    .description{
                        span{
                            font-size: 8pt;
                        }
                    }
                    button{
                        width: 9vw;
                        bottom: 5%;
                    }
                }   
            }
            #backbtn{
                bottom: 10%;
            }
        }
    }
</style>