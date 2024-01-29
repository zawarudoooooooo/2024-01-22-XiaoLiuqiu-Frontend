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
            roomSearch:"",
            orderRoomIdList:"",
            orderRoomId:[],
            today:new Date(),
            startDate:"",
            endDate:"",
            forRoomId:"",
            editstatus:false,
            upDateRoomPrice:"",
            upDateIntroduce:"",
            upRoomId:"",
            upRoomName:"",
            upDateImg:"",
            upImg:"",
            upDateImgArr:[],
            isChecked: false,
            introduce:[],
            access: 0,
            imgArr:"",
            arr:[]
        }
    },
    mounted(){
        this.access = this.getAccess();
        console.log(this.access);
    },
    methods:{
        createRoom() {
            console.log(this.roomPrice);
            const roomtype=document.querySelectorAll(".roomtype")

            const cookieValue = this.getCookie("employee");
            console.log(cookieValue);
            console.log(this.access);
            const [account] = cookieValue.split(":");

            if(!/^[C]/.test(account) || this.access != 50){
                swal("錯誤", "權限不足", "error");
                return
            }

            roomtype.forEach(room=>{
                if(room.checked){
                    this.roomName=room.value
                }
            })

            if (this.roomId && !/^[A-Ca-c]/.test(this.roomId)||this.roomId=="") {
                swal("錯誤", "編號請依照房間類型的A、B、C為第一字", "error");
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
                room_introduce:JSON.stringify(this.introduce),
                room_name:this.roomName,
                room_price:this.roomPrice,
                room_img:JSON.stringify(this.arr) 
            },
            }).then(res=>{
            console.log(res.data);
            if(res.data.rtnCode==200){
                swal("成功", "已新增房間", "success");
            }
            this.clearAdd()
            })
        },
        test(){
            console.log(this.upDateIntroduce);
        },
        upDateRoom(index){
                this.upRoomId=""
                this.upRoomName=""
                this.upDateRoomPrice=""
                this.upDateIntroduce="" 
                this.upImg=""
                this.editstatus=false
            this.roomSearch.forEach((item,roomIndex)=>{
                if(index!=roomIndex){
                    return
                }
                console.log(item);
                this.upRoomId=item.roomId
                this.upRoomName=item.roomName
                this.upDateRoomPrice=item.roomPrice
                this.upDateIntroduce=JSON.parse(item.roomIntroduce) 
                this.upDateIntroduce=JSON.parse(item.roomIntroduce) 
                this.upImg=item.roomImg
                this.editstatus=item.open
            })
            // console.log(this.upRoomId);
            // console.log(this.upRoomName);
            // console.log(this.upDateRoomPrice);
            console.log(this.upDateIntroduce);
            // console.log(this.editstatus);
            // console.log(this.roomSearch);
        },
        upDate(){
            axios({
            url:'http://localhost:8080/room/update',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
            },
            data:{
                room_id:this.upRoomId,
                room_introduce:JSON.stringify(this.upDateIntroduce),
                room_name:this.upRoomName,
                room_price: this.upDateRoomPrice,
                room_img:"",
                is_open:this.editstatus
            },
            }).then(res=>{
            console.log(res.data);
            if(res.data.rtnCode==200){
                swal("成功", "編輯房間成功", "success");
            }
            })
        },
        upDateFileChange(event){
            console.log(event);
            const file = event.target.files;
            this.upDateImg = [...file];
            this.upDateImg.forEach(item=>{
                this.upDateImgArr.push(item.name)
            })
            console.log(this.upDateImgArr);
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
            this.roomSearch.forEach(item=>{
                item.roomImg=JSON.parse(item.roomImg)
            })
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
            this.roomSearch.forEach(item=>{
                item.roomImg=JSON.parse(item.roomImg)
            })
            console.log(this.roomSearch);
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
            this.roomSearch.forEach(item=>{
                item.roomImg=JSON.parse(item.roomImg)
            })
            console.log(this.roomSearch);
            })
        },
        roomIsoren(open,roomId){
            // console.log(roomId);    
            let date=this.today.getUTCFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate()
            // console.log(date);   
            this.forRoomId=""
            this.startDate="" 
                
            // console.log(this.orderRoomId);
            this.orderRoomId.forEach(item=>{
                // console.log(item);
                if(roomId!=item.roomId){
                    return
                }
                this.forRoomId=item.roomId
                let sDate=new Date(item.startDate)
                let eDate=new Date(item.endDate)
                this.startDate=sDate.getUTCFullYear()+'-'+(sDate.getMonth()+1)+'-'+sDate.getDate()
                this.endDate=eDate.getUTCFullYear()+'-'+(eDate.getMonth()+1)+'-'+eDate.getDate()

                // console.log(item.roomId);
                // console.log(startDate);
                // console.log(startDate==date);
                // console.log(endDate>date);
            })
            // if(this.forRoomId==roomId){
            //     if(this.endDate>date||this.startDate<=date){
            //         return'已有人訂房';
            //     }
            // }
            if(open){
                return "開放中"
            }
            return "未開放"
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
        handleFileChange(event) {
            console.log(event);
            const file = event.target.files;
            this.imgArr = [...file];
            this.imgArr.forEach(item=>{
                this.arr.push(item.name)
            })
            console.log(this.arr);
            // console.log(this.imgArr);
            // this.img=file
            // console.log(img);
            // this.uploadFile(file);
        },
        clearAdd(){
            const file = document.getElementById("inputfile")
            this.roomId="",
            this.introduce="",
            this.roomPrice="",
            file.value=""
        },
    },
    components:{
        backSideBar
    },
    mounted(){
        
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>房型管理<i class="fa-solid fa-bed"></i></p>
        </div>
        <div class="list">
            <div class="side">
                <backSideBar />
            </div>
            <div class="roominfo">
                <div class="buttonArea">
                    <button type="button" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">新增房間
                    </button>
                    <button type="button" @click="simpleOpen()">小資雙人房</button>
                    <button type="button" @click="doubleOpen()">舒適雙人房</button>
                    <button type="button" @click="familyOpen()">豪華家庭房</button>
                </div>
<!-- 小資雙人房 -->
                <div class="simple" v-if="simple" >
                    <div class="info">
                        <p><i class="fa-solid fa-map-pin"></i>小資雙人房</p>
                    </div>
                    <div class="room" v-for="(item,index) in this.roomSearch" :key="index">
                        <div :id="'carouselExample' + index" class="carousel slide" data-bs-ride="carousel" style="width: 20vw;height: 28vh;border-radius: 5px;">
                            <div class="carousel-inner" style="width: 20vw;height: 28vh;border-radius: 5px;">
                                <div  v-for=" (img,imgIndex) in item.roomImg" :key="imgIndex" :class="{ 'carousel-item': true, 'active': imgIndex === 0 }">
                                    <img :src="'public/room/SP/'+img" alt="" style="width: 20vw;height: 28vh;border-radius: 5px;">
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
                        <div class="text">
                            <div class="name">
                                <p>{{item.roomName}}</p>
                                <p>編號 : {{item.roomId}}</p>
                            </div>
                            <hr>
                            <div class="description">
                                <p>
                                    <i class="fa-solid fa-shower"></i>獨立衛浴
                                    <i class="fa-solid fa-snowflake"></i>空調
                                    <i class="fa-solid fa-tv"></i>平面電視
                                    <i class="fa-solid fa-wifi"></i>Wifi
                                </p>
                            </div>
                            <div class="price">
                                <p>價格 : ${{ item.roomPrice}}</p>
                            </div>
                            <div class="status">
                                <p>狀態 : {{ roomIsoren(item.open,item.roomId) }}</p>
                            </div>
                            <div class="edit">
                                <i class="fa-solid fa-paint-roller"></i>
                                <p data-bs-toggle="modal" 
                                    data-bs-target="#edit" @click="upDateRoom(index)">編輯
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
<!-- 舒適雙人房 -->
                <div class="double" v-if="double" >
                    <div class="info">
                        <p><i class="fa-solid fa-map-pin"></i>舒適雙人房</p>
                    </div>
                    <div class="room" v-for="(item,index) in this.roomSearch" :key="index">
                        <div :id="'carouselExample' + index" class="carousel slide" data-bs-ride="carousel" style="width: 20vw;height: 28vh;border-radius: 5px;">
                            <div class="carousel-inner" style="width: 20vw;height: 28vh;border-radius: 5px;">
                                <div  v-for=" (img,imgIndex) in item.roomImg" :key="imgIndex" :class="{ 'carousel-item': true, 'active': imgIndex === 0 }">
                                    <img :src="'public/room/D/'+img" alt="" style="width: 20vw;height: 28vh;border-radius: 5px;">
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
                        <div class="text">
                            <div class="name">
                                <p>{{item.roomName}}</p>
                                <p>編號 : {{item.roomId}}</p>
                            </div>
                            <hr>
                            <div class="description">
                                <p>
                                    <i class="fa-solid fa-snowflake"></i>空調
                                    <i class="fa-solid fa-tv"></i>平面電視
                                    <i class="fa-solid fa-wifi"></i>Wifi
                                    <i class="fa-solid fa-bath"></i>浴缸
                                    <i class="fa-solid fa-gamepad"></i>遊戲機
                                </p>
                            </div>
                            <div class="price">
                                <p>價格 : ${{ item.roomPrice}}</p>
                            </div>
                            <div class="status">
                                <p>狀態 : {{ roomIsoren(item.open,item.roomId) }}</p>
                            </div>
                            <div class="edit">
                                <i class="fa-solid fa-paint-roller"></i>
                                <p data-bs-toggle="modal" 
                                    data-bs-target="#edit" @click="upDateRoom(index)">編輯
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
<!-- 豪華家庭房 -->
                <div class="family" v-if="family" >
                    <div class="info">
                        <p><i class="fa-solid fa-map-pin"></i>豪華家庭房</p>
                    </div>
                    <div class="room" v-for="(item,index) in this.roomSearch" :key="index">
                        <div :id="'carouselExample' + index" class="carousel slide" data-bs-ride="carousel"  style="width: 20vw;height: 28vh;border-radius: 5px;">
                            <div class="carousel-inner"  style="width: 20vw;height: 28vh;border-radius: 5px;">
                                <div  v-for=" (img,imgIndex) in item.roomImg" :key="imgIndex" :class="{ 'carousel-item': true, 'active': imgIndex === 0 }">
                                    <img :src="'public/room/F/'+img" alt="" style="width: 20vw;height: 28vh;border-radius: 5px;">
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
                        <div class="text">
                            <div class="name">
                                <p>{{item.roomName}}</p>
                                <p>編號 : {{item.roomId}}</p>
                            </div>
                            <hr>
                            <div class="description">
                                <p>
                                    <i class="fa-solid fa-snowflake"></i>空調
                                    <i class="fa-solid fa-tv"></i>平面電視
                                    <i class="fa-solid fa-wifi"></i>Wifi
                                    <i class="fa-solid fa-bath"></i>浴缸
                                    <i class="fa-solid fa-plug"></i>床頭插座
                                    <i class="fa-solid fa-mountain-sun"></i>景觀
                                </p>
                            </div>
                            <div class="price">
                                <p>價格 : ${{ item.roomPrice}}</p>
                            </div>
                            <div class="status">
                                <p>狀態 : {{ roomIsoren(item.open,item.roomId) }}</p>
                            </div>
                            <div class="edit">
                                <i class="fa-solid fa-paint-roller"></i>
                                <p data-bs-toggle="modal" 
                                    data-bs-target="#edit" @click="upDateRoom(index)">編輯
                                </p>
                        </div>
                    </div>
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
                            <label for="recipient-name" class="col-form-label">類型 :</label>
                            <br>
                            <input type="radio" value="小資雙人房" class="roomtype" name="roomtype">
                            <label for="">A : 小資雙人房</label>
                            <input type="radio" value="舒適雙人房" class="roomtype" name="roomtype">
                            <label for="">B : 舒適雙人房</label>
                            <input type="radio" value="豪華家庭房" class="roomtype" name="roomtype">
                            <label for="">C : 豪華家庭房</label>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">編號 :</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="this.roomId" placeholder="請從編號01依序新增">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">說明 :</label>
                            <br>
                            <input type="checkbox" id="uno1" value="獨立衛浴" v-model="this.introduce">
                            <label for="uno">獨立衛浴</label>
                            <input type="checkbox" id="uno2" value="空調" v-model="this.introduce">
                            <label for="uno">空調 </label>
                            <input type="checkbox" id="uno3" value="平面電視 " v-model="this.introduce">
                            <label for="uno">平面電視 </label>
                            <input type="checkbox" id="uno4" value="Wifi" v-model="this.introduce">
                            <label for="uno">Wifi</label>
                            <br>
                            <input type="checkbox" id="uno5" value="浴缸" v-model="this.introduce">
                            <label for="uno">浴缸</label>
                            <input type="checkbox" id="uno6" value="遊戲機" v-model="this.introduce">
                            <label for="uno">遊戲機</label>
                            <input type="checkbox" id="uno7" value="床頭插座" v-model="this.introduce">
                            <label for="uno">床頭插座</label>
                            <input type="checkbox" id="uno8" value="景觀" v-model="this.introduce">
                            <label for="uno">景觀</label>
                            <!-- <button type="button" @click="test()">測試</button> -->
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">價格 :</label>
                            <input type="number" class="form-control" id="recipient-name" v-model="this.roomPrice" placeholder="請輸入價格">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">圖片 :</label>
                            <input type="file" class="form-control" id="inputfile" @change="handleFileChange" multiple>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal"  @click="createRoom()">確認新增</button>
                </div>
            </div>
        </div>
    </div>
<!-- 編輯房間modal -->
    <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">編輯房間</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">更改金額 :</label>
                            <input type="number" class="form-control" id="recipient-name" v-model="this.upDateRoomPrice">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">更改說明 :</label>
                            <br>
                            <!-- <input type="text" name="" id="" v-model="this.upDateIntroduce"> -->
                            <input type="checkbox" id="uno1" value="獨立衛浴" v-model="this.upDateIntroduce">
                            <label for="uno">獨立衛浴</label>
                            <input type="checkbox" id="uno2" value="空調" v-model="this.upDateIntroduce">
                            <label for="uno">空調 </label>
                            <input type="checkbox" id="uno3" value="平面電視 " v-model="this.upDateIntroduce">
                            <label for="uno">平面電視 </label>
                            <input type="checkbox" id="uno4" value="Wifi" v-model="this.upDateIntroduce">
                            <label for="uno">Wifi</label>
                            <br>
                            <input type="checkbox" id="uno5" value="浴缸" v-model="this.upDateIntroduce">
                            <label for="uno">浴缸</label>
                            <input type="checkbox" id="uno6" value="遊戲機" v-model="this.upDateIntroduce">
                            <label for="uno">遊戲機</label>
                            <input type="checkbox" id="uno7" value="床頭插座" v-model="this.upDateIntroduce">
                            <label for="uno">床頭插座</label>
                            <input type="checkbox" id="uno8" value="景觀" v-model="this.upDateIntroduce">
                            <label for="uno">景觀</label>
                            <!-- <button type="button" @click="test()">測試</button> -->
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">更改狀態 :</label>
                            <input type="checkbox" value="false" v-model="this.editstatus">
                            <label for="">已開放</label>
                        </div>
                       <div class="mb-3">
                            <label for="message-text" class="col-form-label">更改圖片 :</label>
                            <input type="file" class="form-control" id="recipient-name" @change="upDateFileChange">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="upDate()">更改</button>
                </div>
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
            .roominfo{
                .buttonArea{
                    width: 35vw;
                    display: flex;
                    justify-content: space-between;
                    position: absolute;
                    right: 0%;
                    button {
                        width: 8vw;
                        height: 5vh;
                        border: none;
                        border-radius: 5px;
                        color: #797A7E;
                        font-size: 14pt;
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
                .info{
                    p{
                        color: #797A7E;
                        font-size: 24pt;
                    }
                    i{
                        margin-right: 2vmin;
                    } 
                }
                .room{
                    width: 70vw;
                    height: 35vh;
                    margin: auto;
                    display: flex;
                    justify-content: space-around;
                    border: 1px solid lightgray;
                    border-radius: 10px;
                    margin-top: 5vmin;
                    box-shadow: 1px 1px 1px gray;
                    padding: 3vmin 2vmin 0vmin;
                    position: relative;
                    background-color: white;
                    .text{
                        height: 23vh;
                        hr{
                            margin-top: 1vmin;
                        }
                        .name{
                            width: 40vw;
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
                                font-size: 14pt;
                                width: 35vw;
                            }
                            i{
                                margin-right: 1vmin;
                                margin-left: 1vmin;
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
                        .edit{
                            display: flex;
                            align-items: center;
                            width: 5vw;
                            position: absolute;
                            right: 4%;
                            bottom: 8%;
                            i{
                                font-size: 14pt;
                                color: #797A7E;
                            }
                            p{
                                font-size: 15pt;
                                color: #797A7E;
                                margin: 0;
                            }
                        }
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
        margin-top: 1vmin;
        outline: none;
    }
    label{
        margin-right: 1vmin;
        margin-left: 1vmin;
    }
</style>