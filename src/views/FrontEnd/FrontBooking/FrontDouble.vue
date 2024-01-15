<script>
import axios from 'axios';
import Footer from '../../../components/Footer.vue';
export default{
    data(){
        return{
            roomList:[],
            roomId:"",
            roomTypeId: "",
            roomIntroduce:"",
            roomTypeId2:"",
            roomName:"",
            roomPrice:"",
        }
    },
    mounted() {
        this.search();
    },
    methods:{
        booking(){
            this.$router.push('/DoubleBooking')
        },
        search(){
            this.roomList = []

            axios({
                url:'http://localhost:8080/room/search',
                method: "POST",
                headers:{"Content-Type": "application/json",},
                data: ({
                    room_id: this.roomId,
                    room_type_id: this.roomTypeId,
                    room_introduce: this.roomIntroduce,
                    room_name: this.roomName,
                    room_price: this.roomPrice
                })
                
            })
            .then(res => {
                this.roomList = res.data.roomList
                console.log(this.roomList);

                this.roomList = this.roomList.filter(item => item.roomName.includes('雙人房'))

                this.roomList = this.roomList.filter(item => item.roomPrice >= 2000);
            })
            .catch(error => console.error(error))
            
        },
    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="date">
            <div class="checkin">
                <p>入住日期</p>
                <input type="date">
            </div>
            <div class="checkout">
                <p>退房日期</p>
                <input type="date">
            </div>
        </div>
        <div class="show" v-for="item in roomList" >
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
                <button type="button" @click="booking()">訂購</button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped> 
    .content{
        width: 90vw;
        height: 100vh;
        margin: auto;
        margin-top: 6vmin;
        .date{
            width: 60vw;
            //border: 1px solid black;
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
            }
            .text{
                height: 23vh;
                //border: 1px solid black;
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
    }
</style>