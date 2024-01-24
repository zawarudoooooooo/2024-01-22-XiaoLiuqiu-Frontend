<script>
import axios from 'axios';
import backSideBar from '../../components/backSideBar.vue';
export default {
    data(){
        return{
            orders:[],
            roomId:"",
            orderItem:"",
        }
    },
    methods:{
        roomIdF(index){
            this.roomId=""
            this.orders.forEach((item,ordersIndex)=>{
                if(ordersIndex!=index){
                    return
                }
                this.roomId= item.roomId
                console.log(this.roomId);
            })
        },
        orderItemF(index){
            this.roomId=""
            this.orders.forEach((item,ordersIndex)=>{
                if(ordersIndex!=index){
                    return
                }
                this.orderItem= item.orderItem
                console.log(this.orderItem);
            })
        }
    },
    mounted(){
        axios({
            url:'http://localhost:8080/order/searchRoomId',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            data:{
                
            },
            }).then(res=>{
            // console.log(res.data.orderList);
            res.data.orderList.forEach(element => {
                let dayTime=new Date(element.orderDateTime)
                console.log(element.orderDateTime);
                
                element.orderDateTime=dayTime.getFullYear()+"年"+(dayTime.getMonth()+1)+"月"+dayTime.getDate()+"日"+" "+dayTime.getHours()+":"+dayTime.getMinutes()+":"+dayTime.getSeconds()
                this.orders.push({orderId:element.orderId,memberName:element.memberName,orderItem:JSON.parse(element.orderItem),
                    roomId:element.roomId,startDate:element.startDate,endDate:element.endDate,orderDateTime:element.orderDateTime,orderPayment:element.orderPayment,payOrNot:element.payOrNot})
                });
                console.log(this.orders);
            })
    },
    components:{
        backSideBar
    }
}
</script>

<template>
    <div class="title">
        <p>訂單管理<i class="fa-solid fa-list-check"></i></p>
    </div>
    <div class="content">
        <div class="list">
            <div class="side">
                <backSideBar />
            </div>
        </div>
        <div class="show">
            <table>
                <thead>
                <tr>
                    <td>訂單編號</td>
                    <td>會員名稱</td>
                    <td>入住時間</td>
                    <td>退房時間</td>
                    <td>訂購房間</td>
                    <td>加購項目</td>
                    <td>訂單時間</td>
                    <td>付款方式</td>
                    <td>訂單狀態</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in orders">
                    <td>{{ item.orderId }}</td>
                    <td>{{ item.memberName }}</td>
                    <td>{{ item.startDate }}</td>
                    <td>{{ item.endDate }}</td>
                    <td>{{ item.roomId }}</td>
                    <td><button type="button" data-bs-toggle="modal" data-bs-target="#roomId" @click="orderItemF(index)" data-bs-whatever="@mdo">查看</button></td>
                    <td>{{ item.orderDateTime }}</td>
                    <td v-if="item.orderPayment">到場支付</td>
                    <td v-if="!item.orderPayment">線上支付</td>
                    <td v-if="!item.payOrNot">未支付</td>
                    <td v-if="item.payOrNot">已支付</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
<!-- 訂購項目model -->
    <div class="modal fade" id="orderItem" tabindex="-1" aria-labelledby="orderItem" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="orderItem">訂購項目</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-for="item in roomId">
                        <div class="mb-3" >
                            <label for="recipient-name" class="col-form-label">房間ID :</label>
                            <p>{{ item.roomId }}</p>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">房間名稱 :</label>
                            <p>{{ item.roomName }}</p>
                        </div>
                        <hr>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-light">更改</button>
                </div>
            </div>
        </div>
    </div>
<!-- 加購項目model -->
    <div class="modal fade" id="roomId" tabindex="-1" aria-labelledby="orderItem" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="orderItem">加購項目</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-for="item in orderItem">
                        <div class="mb-3" >
                            <label for="recipient-name" class="col-form-label">加購項目 :</label>
                            <p>{{ item.extraName }}</p>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">加購價格 :</label>
                            <p>{{ item.extraPrice }}</p>
                        </div>
                        <hr>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-light">更改</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .title{
        font-size: 28pt;
        font-weight: bold;
        color: #82AAE3;
        text-align: center;
        margin-top: 4vmin;
        i{
            margin-left: 1vmin;
        }
    }
    .content{
        width: 90vw;
        height: 50vh;
        margin: auto;
        display: flex;
        margin-top: 5vmin;
        position: relative;
        //border: 1px solid black;
        .list{
            width: 80vw;
            height: 50vh;
            display: flex;
            justify-content: space-between;
            margin: auto;
            //border: 1px solid black;
        }
        .show{
            table{
                width:55vw;
                font-size: 12pt;
                color: #797A7E;
                position: absolute;
                text-align: center;
                right: 10%;
                thead{
                    tr{
                        td{
                            border: 2px solid #797A7E;
                            font-weight: bold;
                        }
                    }
                }
                tr{
                    td{
                        border: 2px solid #797A7E;
                        button{
                            background-color: transparent;
                            color: #797A7E;
                            outline: none;
                            border: none;
                        }
                    }
                }
            }
        }
    }
</style>