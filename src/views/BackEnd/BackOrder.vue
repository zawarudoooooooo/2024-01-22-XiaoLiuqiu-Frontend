<script>
import axios from 'axios';
import backSideBar from '../../components/backSideBar.vue';
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            orders:[],
            roomId:"",
            orderItem:[],
            isAdmin: false,
            account: "",
            access: 0,
            orderItems:"",
            department: "",
            active: false,
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
            this.orderItem=[]
            this.orders.forEach((item,ordersIndex)=>{
                if(ordersIndex!=index){
                    return
                }
                // console.log(item);
                this.orderItem= item
                this.orderItems=item.orderItem
                this.orderItems.forEach(order=>{
                    order.extraName=JSON.parse(order.extraName)
                })
                console.log(this.orderItems);
            })
        },
        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) {
                const [account, access, active] = parts.pop().split(';').shift().split(":");
                this.access = parseInt(access);
                this.active = active === "true";  
                return account;
            }
        return "";
        },
        getAccess(){
            const cookieValue = this.getCookie("employee")
            console.log(cookieValue);
            if(cookieValue){
                const parts = cookieValue.split(":")
                console.log("Cookie parts:", parts);
                return parts.length === 3 ? parseInt(parts[1]) : 0
            }
            return 0
        },
        getActive() {
            const cookie = document.cookie;
                if (cookie) {
                    return cookie.includes(":true:");
                }
                    return false;
            },
        orderFinished(orderId){

            axios({
            url:'http://localhost:8080/order/order_finished',
            method:'POST',
            withCredentials: true,
            headers:{
                'Content-Type':'application/json',
            },
            params:{
                orderId: orderId
            },
            }).then(res=>{
                console.log(res);
                if(res.data.message == "Successful!!"){
                    this.refresh();
                    swal("成功","已完成結單", "success");
                }else if(res.data.message == "Order already finished"){
                    swal("提示", "訂單已結案", "warning")
                }else{
                    swal("錯誤", "尚未完成結單", "error");
                }
            })
            this.orders = []
        },
        confirmFinished(orderId){
            Swal.fire({
                title: '是否確認結單?',
                text: '請確認是否收到款項才執行此動作',
                showCancelButton: true,
                confirmButtonText: '確定',
                cancelButtonText: '取消',
                preConfirm: () => {
                    return this.orderFinished(orderId)
                },
            })
        },
        refresh(){
            axios({
            url:'http://localhost:8080/order/searchMemberName',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                memberName:""
            },
            data:{
                
            },
            }).then(res=>{
            // console.log(res.data.orderList);
            res.data.orderList.forEach(element => {
                let dayTime=new Date(element.orderDateTime)
                // console.log(element);
                
                element.orderDateTime=dayTime.getFullYear()+"年"+(dayTime.getMonth()+1)+"月"+dayTime.getDate()+"日"+" "+dayTime.getHours()+":"+dayTime.getMinutes()+":"+dayTime.getSeconds()
                this.orders.push({orderId:element.orderId,memberName:element.memberName,orderItem:JSON.parse(element.orderItem),
                    roomId:element.roomId,startDate:element.startDate,endDate:element.endDate,orderDateTime:element.orderDateTime,
                    orderPayment:element.orderPayment,payOrNot:element.payOrNot,total:element.total})
                });
                console.log(this.orders);
            })
        },
    },
    mounted(){
            this.refresh();
            this.access = this.getAccess();
            this.account = this.getCookie("employee")
            this.active = this.getActive();
            console.log(this.account);
            console.log(this.access);
            console.log(this.active);
            console.log(this.getCookie("active"));

            const employeeCookie = document.cookie.split('; ')
            .find(row => row.startsWith('employee='));

            if (employeeCookie) {
                const employeeValue = employeeCookie.split('=')[1];
                const values = employeeValue.split(":");
                const department = values[3]
                this.department = department;
                console.log('Employee value:', department);
            } else {
                console.log('Cookie not found.');
            }
            console.log(this.department);
            this.isAdmin = this.department === "OPERATIONS" && this.access === 50;

            console.log(this.isAdmin);

    },
    components:{
        backSideBar
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>訂單管理<i class="fa-solid fa-list-check"></i></p>
        </div>
        <div class="list">
            <div class="side">
                <backSideBar />
            </div>
            
        <h1 v-if="this.active === false">⚠️該帳號為非驗證狀態，驗證後才可閱覽⛔</h1>
            <table v-if="this.active === true">
                <thead>
                <tr>
                    <td>訂單編號</td>
                    <td>會員名稱</td>
                    <td>入住時間</td>
                    <td>退房時間</td>
                    <td>訂購項目</td>
                    <td>訂單時間</td>
                    <td>付款方式</td>
                    <td>訂單狀態</td>
                    <td v-if="isAdmin">確認結單</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in orders">
                    <td>{{ item.orderId }}</td>
                    <td>{{ item.memberName }}</td>
                    <td>{{ item.startDate }}</td>
                    <td>{{ item.endDate }}</td>
                    <td><button type="button" data-bs-toggle="modal" data-bs-target="#roomId" @click="orderItemF(index)" data-bs-whatever="@mdo">查看</button></td>
                    <td>{{ item.orderDateTime }}</td>
                    <td v-if="item.orderPayment">到場支付</td>
                    <td v-if="!item.orderPayment">線上支付</td>
                    <td v-if="!item.payOrNot">未支付</td>
                    <td v-if="item.payOrNot">已支付</td>
                    <td v-if="isAdmin">
                        <button @click="confirmFinished(item.orderId)">確定</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
<!-- 訂單明細model -->
    <div class="modal fade" id="roomId" tabindex="-1" aria-labelledby="orderItem" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="orderItem">訂購項目</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- v-for="item in orderItem" -->
                    <form >
                        <div class="mb-3" >
                            <label for="recipient-name" class="col-form-label">房間編號 :</label>
                            <span>{{ this.orderItem.roomId }}</span>
                        </div>
                        <div class="mb-3" v-for="order in this.orderItems">
                            <label for="recipient-name" class="col-form-label" >加購項目 :</label>
                            <span v-for="item in order.extraName">{{ item }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">總金額 :</label>
                            <span>${{  this.orderItem.total }}元</span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-light">確認</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content{
        width: 90vw;
        margin: auto;
        margin-top: 4vmin;
        .title{
            font-size: 28pt;
            font-weight: bold;
            color: #82AAE3;
            text-align: center;
            i{
                margin-left: 2vmin;
            }
        }
        .list{
            display: flex;
            justify-content: space-between;
            position: relative;
            table{
                width: 70vw;
                height: 13vh;
                font-size: 14pt;
                color: #4d4327;
                text-align: center;
                thead{
                    tr{
                        td{
                            border: 2px solid #4d4327;
                            font-weight: bold;
                        }
                    }
                }
                tr{
                    td{
                        border: 2px solid #4d4327;
                        }
                        button{
                            background-color: transparent;
                            color: #82AAE3;
                            outline: none;
                            border: none;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        h1{
            color: #e76d87;
            position: absolute;
            right: 15%;
            top: 35%;
        }
    .modal-body{
        .mb-3{
            span{
                margin-left: 1vmin;
            }
        }
    }
</style>