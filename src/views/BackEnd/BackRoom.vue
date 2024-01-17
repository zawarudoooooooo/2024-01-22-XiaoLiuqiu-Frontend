<script>
import axios from 'axios';
import swal from 'sweetalert';
import backSideBar from '../../components/backSideBar.vue';
export default{
    data(){
        return{
            roomId:"",
            roomTypeId:"",
            simple:false,
            double:false,
            family:false,
            roomName:"",
            roomPrice:"",
            roomIntroduce:"",
            roomSearch:""
        }
    },
    methods:{
        createRoom() {

            console.log(this.roomPrice);
            const roomtype=document.querySelectorAll(".roomtype")

            roomtype.forEach(room=>{
                if(room.checked){
                    this.roomName=room.value
                }
            })

            if (this.roomId && !/^[A-Ca-c]/.test(this.roomId)||this.roomId=="") {
                swal("錯誤", "編號請依照房間類型的A,B,C為第一字", "error");
                return
            }
            if(this.roomPrice<=0){
                swal("錯誤", "金額有誤", "error");
                return
            }
            axios({
            url:'http://localhost:8080/room/create',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            params:{
            },
            data:{
                room_id:this.roomId,
                room_introduce:this.roomIntroduce,
                room_name:this.roomName,
                room_price:this.roomPrice
            },
          }).then(res=>{
            console.log(res.data);
            if(res.data.rtnCode==200){
                swal("成功", "房間以新增", "success");
            }
            })
           
        },
//頁面切換
        simpleOpen(){
            this.simple=true
            this.double=false
            this.family=false

            axios({
            url:'http://localhost:8080/room/search',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            params:{
                roomName:"小資"
            },
            data:{

            },
          }).then(res=>{
            this.roomSearch=""
            this.roomSearch=res.data.roomList
            console.log(this.roomSearch);
            })
        },
        doubleOpen(){
            this.simple=false,
            this.double=true,
            this.family=false
            axios({
            url:'http://localhost:8080/room/search',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            params:{
                roomName:"舒適"
            },
            data:{

            },
          }).then(res=>{
            this.roomSearch=""
            this.roomSearch=res.data.roomList
            })
        },
        familyOpen(){
            this.simple=false,
            this.double=false,
            this.family=true
            axios({
            url:'http://localhost:8080/room/search',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            params:{
                roomName:"豪華"
            },
            data:{

            },
          }).then(res=>{
            this.roomSearch=""
            this.roomSearch=res.data.roomList
            })
        }
    },
    components:{
        backSideBar
    },
    mounted(){

    }
}
</script>

<template>
    <div class="title">
        <p>房型管理<i class="fa-solid fa-bed"></i></p>
    </div>
    <div class="content">
        <div class="side">
            <backSideBar />
        </div>
        <div class="buttonArea">
            <button type="button" data-bs-toggle="modal" 
                data-bs-target="#exampleModal">新增房間</button>
            <button type="button" @click="simpleOpen()">小資雙人房</button>
            <button type="button" @click="doubleOpen()">舒適雙人房</button>
            <button type="button" @click="familyOpen()">豪華家庭房</button>
        </div>
<!-- 小資雙人房 -->
        <div class="simple" v-if="simple" >
            <div class="info">
                <p><i class="fa-solid fa-map-pin"></i>小資雙人房</p>
            </div>
            <div class="room" v-for="item in this.roomSearch">
                <img src="../../../../public/room/simpledouble.jpg" alt="" style="width: 23vw;height: 28vh;">
                <div class="text">
                    <div class="name">
                        <p>{{item.roomName}}</p>
                        <p>編號 : {{item.roomId}}</p>
                    </div>
                    <hr>
                    <div class="description">
                        <p>
                            {{ item.roomIntroduce }}
                        </p>
                    </div>
                    <div class="price">
                        <p>價格 : ${{ item.roomPrice}}</p>
                    </div>
                    <div class="status">
                        <p>狀態 : 空房</p>
                    </div>
                </div>
            </div>
        </div>
<!-- 舒適雙人房 -->
        <div class="double" v-if="double" >
            <div class="info">
                <p><i class="fa-solid fa-map-pin"></i>舒適雙人房</p>
            </div>
            <div class="room" v-for="item in this.roomSearch">
                <img src="../../../../public/room/double.jpg" alt="" style="width: 23vw;height: 28vh;">
                <div class="text">
                    <div class="name">
                        <p>{{item.roomName}}</p>
                        <p>編號 : {{item.roomId}}</p>
                    </div>
                    <hr>
                    <div class="description">
                        <p>
                            {{ item.roomIntroduce }}
                        </p>
                    </div>
                    <div class="price">
                        <p>價格 : ${{ item.roomPrice}}</p>
                    </div>
                    <div class="status">
                        <p>狀態 : 空房</p>
                    </div>
                </div>
            </div>
        </div>
<!-- 豪華家庭房 -->
        <div class="family" v-if="family" >
            <div class="info">
                <p><i class="fa-solid fa-map-pin"></i>豪華家庭房</p>
            </div>
            <div class="room" v-for="item in this.roomSearch">
                <img src="../../../../public/room/family.jpg" alt="" style="width: 23vw;height: 28vh;">
                <div class="text">
                    <div class="name">
                        <p>{{item.roomName}}</p>
                        <p>編號 : {{item.roomId}}</p>
                    </div>
                    <hr>
                    <div class="description">
                        <p>
                            {{ item.roomIntroduce }}
                        </p>
                    </div>
                    <div class="price">
                        <p>價格 : ${{ item.roomPrice}}</p>
                    </div>
                    <div class="status">
                        <p>狀態 : 空房</p>
                    </div>
                </div>
            </div>
        </div>
<!-- 新增房間modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">新增房間</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">房間類型 :</label>
                                <br>
                                <input type="radio" value="小資雙人房" class="roomtype" name="roomtype">
                                <label for="">A : 小資雙人房</label>
                                <input type="radio" value="舒適雙人房" class="roomtype" name="roomtype">
                                <label for="">B : 舒適雙人房</label>
                                <input type="radio" value="豪華家庭房" class="roomtype" name="roomtype">
                                <label for="">C : 豪華家庭房</label>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">房間編號 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.roomId" placeholder="請從編號01依序新增">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">房間價格 :</label>
                                <input type="number" class="form-control" id="recipient-name" v-model="this.roomPrice" placeholder="請輸入價格">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">房間說明 :</label>
                                <br>
                                <textarea  v-model="this.roomIntroduce" placeholder="請新增房間說明"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">房間圖片 :</label>
                                <input type="file" class="form-control" id="recipient-name">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal"  @click="createRoom()">確認新增</button>
                    </div>
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
        margin-top: 3vmin;
        i{
            margin-left: 1vmin;
        }
    }
    .content{
        width: 80vw;
        height: 50vh;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 5vmin;
        position: relative;
        //border: 1px solid black;
        .buttonArea{
            width: 35vw;
            //border: 1px solid black;
            display: flex;
            justify-content: space-between;
            position: absolute;
            right: 0;
            button {
                width: 8vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
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
        p{
            color: #797A7E;
            font-size: 20pt;
        }
        i{
            margin-right: 2vmin;
        }
        .room{
            width: 60vw;
            height: 35vh;
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
                &:hover{
                    opacity: 0.6;
                }
                &:active{
                    opacity: 1.0;
                }
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
                .price{
                    p{
                        color: #797A7E;
                        font-size: 16pt;
                        width: 35vw;
                    }
                }
                .status{
                    width: 30vw;
                    display: flex;
                    p{
                        color: #797A7E;
                        font-size: 16pt;
                        width: 35vw;
                    }
                    i{
                        color: #797A7E;
                        font-size: 25pt;
                    }
                }
            }
        }
    }
    textarea{
        width: 20vw;
        height: 15vh;
        border-radius: 5px;
        padding-left: 1vmin;
    }
    label{
        margin-right: 1vmin;
        margin-left: 1vmin;
    }
</style>