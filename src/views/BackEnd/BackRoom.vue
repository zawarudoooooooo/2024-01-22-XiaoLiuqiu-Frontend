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
            isChecked: false,
            introduce:[],
            access: 0,
            imgArr:"",
            arr:[],
            department: "",
            active: false,
            counter: 1,
            selectedRoomType: "",
            roomCounter: {
                A: 1,
                B: 1,
                C: 1,
            },
            list:[],
            roomTypeName:[],
            roomTypeNameId:[],
            selectedValue:"",
            radioChange:"",
            createRoomTypeName:""
        }
    },
    mounted(){
        this.access = this.getAccess();
        console.log(this.access);
        this.department = this.getCookie("department");
        console.log(this.department);
        this.active = this.getActive();
        console.log(this.active);
        this.roomtype();
    },
    methods:{
        createRoom() {
            console.log(this.roomPrice);
            const roomtype=document.querySelectorAll(".roomtype")

            const cookieValue = this.getCookie("employee");
            console.log(cookieValue);
            console.log(this.access);
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
            console.log(this.access);

            if(this.department != "HOUSEKEEPING" || this.access != 50){
                swal("錯誤", "權限不足", "error");
                return
            }

            roomtype.forEach(room=>{
                if(room.checked){
                    this.roomName=room.value
                }
            })

            if (this.roomId=="") {
                swal("錯誤", "資料不能為空", "error");
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
                room_id:this.selectedValue+this.roomId,
                room_introduce:JSON.stringify(this.introduce),
                room_name:this.radioChange.split(":")[1],
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
        //房間類別查詢
        roomtype(){
            axios({
                    url:'http://localhost:8080/roomtype/search',
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },  
                    params:{
                        roomTypeName:""
                    },
                    data:{
                    },
                    }).then(res=>{
                        res.data.roomTypeList.forEach(item=>{
                            this.list.push(item.roomTypeName)
                        })
                        this.list=this.list.map((roomType, index) => String.fromCharCode(65 + index)+":"+roomType);
                        this.list.forEach(item=>{
                            console.log(item);
                            let [code, type] = item.split(":");
                            // // console.log(code);
                            this.roomTypeName.push(type)
                            this.roomTypeNameId.push(code)
                            // console.log(type);
                        })
                        console.log(this.roomTypeName);
                        console.log(this.roomTypeNameId);
                        console.log(this.list);
                    })
        },
        //radio的切換
        handleRadioChange(){
            this.selectedValue=this.radioChange.split(":")[0]
            console.log(this.selectedValue);
        },
        createRoomType(){
            axios({
            url:'http://localhost:8080/roomtype/createroomtype',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },  
            params:{
                roomTypeName:this.createRoomTypeName
            },
            data:{
            },
            }).then(res=>{
                if(res.data.rtnCode==200){

                    console.log(res.data);
                    
                    swal({
                        title: '成功',
                        text: '新增房型成功',
                        icon: 'success',
                        buttons: '確認',
                        dangerMode: true,
                    })
                    .then((willRefresh) => {
                        if (willRefresh) {
                            window.location.reload();
                        } 
                    });

                    return
                }
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
                is_open:this.editstatus
            },
            }).then(res=>{
            console.log(res.data);
            if(res.data.rtnCode==200){
                swal("成功", "已新增房間", "success");
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
            this.roomSearch.forEach(item=>{
                item.roomImg=JSON.parse(item.roomImg)
                // console.log();
                item.roomIntroduce=JSON.parse(item.roomIntroduce)
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
                item.roomIntroduce=JSON.parse(item.roomIntroduce)
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
                item.roomIntroduce=JSON.parse(item.roomIntroduce)
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
        getActive() {
            const cookie = document.cookie;
                if (cookie) {
                    return cookie.includes(":true:");
                }
                    return false;
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
            <h1 v-if="this.active === false">⚠️該帳號為非驗證狀態，驗證後才可閱覽⛔</h1>
            <div class="roominfo" v-if="this.active === true">
                <div class="buttonArea">
                    <button type="button" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">新增房間
                    </button>
                    <button type="button" data-bs-toggle="modal" 
                        data-bs-target="#roomTypeModal">新增房型
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
                                <span v-for="introduce in item.roomIntroduce">
                                    
                                    <!-- <span>{{ introduce }}</span> -->
                                    <span v-if="introduce=='空調'"><i class="fa-solid fa-snowflake"></i>空調</span>
                                    <span v-if="introduce=='平面電視 '"><i class="fa-solid fa-tv"></i>平面電視</span>
                                    <span v-if="introduce=='Wifi'"><i class="fa-solid fa-wifi"></i>Wifi</span>
                                    <span v-if="introduce=='浴缸'"><i class="fa-solid fa-bath"></i>浴缸</span>
                                    <span v-if="introduce=='床頭插座'"><i class="fa-solid fa-plug"></i>床頭插座</span>
                                    <span v-if="introduce=='景觀'"><i class="fa-solid fa-mountain-sun"></i>景觀</span>
                                    <span v-if="introduce=='酒水'"><i class="fa-solid fa-wine-glass"></i>酒水</span>
                                    <span v-if="introduce=='免治馬桶'"><i class="fa-solid fa-toilet"></i>免治馬桶</span>
                                    <span v-if="introduce=='香氛噴物'"><i class="fa-solid fa-spray-can-sparkles"></i>香氛噴物</span>
                                    <span v-if="introduce=='沙發'"><i class="fa-solid fa-couch"></i>沙發</span>
                                    <span v-if="introduce=='孩童專區'"><i class="fa-solid fa-children"></i>孩童專區</span>
                                    <span v-if="introduce=='遊戲機'"><i class="fa-solid fa-gamepad"></i>遊戲機</span>
                                    <span v-if="introduce=='咖啡機'"><i class="fa-solid fa-mug-hot"></i>咖啡機</span>
                                    <span v-if="introduce=='體重機'"><i class="fa-solid fa-weight-scale"></i>體重機</span>
                                    <span v-if="introduce=='獨立衛浴'"><i class="fa-solid fa-shower"></i>獨立衛浴</span>
                                    <span v-if="introduce=='地毯'"><i class="fa-solid fa-rug"></i>地毯</span>
                                </span>
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
                                <span v-for="introduce in item.roomIntroduce">
                                    <span v-if="introduce=='空調'"><i class="fa-solid fa-snowflake"></i>空調</span>
                                    <span v-if="introduce=='平面電視 '"><i class="fa-solid fa-tv"></i>平面電視</span>
                                    <span v-if="introduce=='Wifi'"><i class="fa-solid fa-wifi"></i>Wifi</span>
                                    <span v-if="introduce=='浴缸'"><i class="fa-solid fa-bath"></i>浴缸</span>
                                    <span v-if="introduce=='床頭插座'"><i class="fa-solid fa-plug"></i>床頭插座</span>
                                    <span v-if="introduce=='景觀'"><i class="fa-solid fa-mountain-sun"></i>景觀</span>
                                    <span v-if="introduce=='酒水'"><i class="fa-solid fa-wine-glass"></i>酒水</span>
                                    <span v-if="introduce=='免治馬桶'"><i class="fa-solid fa-toilet"></i>免治馬桶</span>
                                    <span v-if="introduce=='香氛噴物'"><i class="fa-solid fa-spray-can-sparkles"></i>香氛噴物</span>
                                    <span v-if="introduce=='沙發'"><i class="fa-solid fa-couch"></i>沙發</span>
                                    <span v-if="introduce=='孩童專區'"><i class="fa-solid fa-children"></i>孩童專區</span>
                                    <span v-if="introduce=='遊戲機'"><i class="fa-solid fa-gamepad"></i>遊戲機</span>
                                    <span v-if="introduce=='咖啡機'"><i class="fa-solid fa-mug-hot"></i>咖啡機</span>
                                    <span v-if="introduce=='體重機'"><i class="fa-solid fa-weight-scale"></i>體重機</span>
                                    <span v-if="introduce=='獨立衛浴'"><i class="fa-solid fa-shower"></i>獨立衛浴</span>
                                    <span v-if="introduce=='地毯'"><i class="fa-solid fa-rug"></i>地毯</span>
                                </span>
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
                                <span v-for="introduce in item.roomIntroduce">
                                    <!-- <span>{{ introduce }}</span> -->
                                    <span v-if="introduce=='空調'"><i class="fa-solid fa-snowflake"></i>空調</span>
                                    <span v-if="introduce=='平面電視 '"><i class="fa-solid fa-tv"></i>平面電視</span>
                                    <span v-if="introduce=='Wifi'"><i class="fa-solid fa-wifi"></i>Wifi</span>
                                    <span v-if="introduce=='浴缸'"><i class="fa-solid fa-bath"></i>浴缸</span>
                                    <span v-if="introduce=='床頭插座'"><i class="fa-solid fa-plug"></i>床頭插座</span>
                                    <span v-if="introduce=='景觀'"><i class="fa-solid fa-mountain-sun"></i>景觀</span>
                                    <span v-if="introduce=='酒水'"><i class="fa-solid fa-wine-glass"></i>酒水</span>
                                    <span v-if="introduce=='免治馬桶'"><i class="fa-solid fa-toilet"></i>免治馬桶</span>
                                    <span v-if="introduce=='香氛噴物'"><i class="fa-solid fa-spray-can-sparkles"></i>香氛噴物</span>
                                    <span v-if="introduce=='沙發'"><i class="fa-solid fa-couch"></i>沙發</span>
                                    <span v-if="introduce=='孩童專區'"><i class="fa-solid fa-children"></i>孩童專區</span>
                                    <span v-if="introduce=='遊戲機'"><i class="fa-solid fa-gamepad"></i>遊戲機</span>
                                    <span v-if="introduce=='咖啡機'"><i class="fa-solid fa-mug-hot"></i>咖啡機</span>
                                    <span v-if="introduce=='體重機'"><i class="fa-solid fa-weight-scale"></i>體重機</span>
                                    <span v-if="introduce=='獨立衛浴'"><i class="fa-solid fa-shower"></i>獨立衛浴</span>
                                    <span v-if="introduce=='地毯'"><i class="fa-solid fa-rug"></i>地毯</span>
                                </span>
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
<!-- 新增房型modal -->
    <div class="modal fade" id="roomTypeModal" tabindex="-1" aria-labelledby="roomTypeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="roomTypeModalLabel">新增房型</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">房型名稱 :</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="this.createRoomTypeName" placeholder="請輸入房型名稱">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal"  @click="createRoomType()">確認新增</button>
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
                        <label for="recipient-name" class="col-form-label">類型 :</label>
                        <br>
                        <div class="flex-container">
                        <div class="mb-3 radios" v-for="(item,index) in this.list" @change="handleRadioChange" :key="index">
                            <input type="radio" :value="item" v-model="this.radioChange" class="roomtype" name="roomtype">
                            <label for="">{{ item }}</label>
                        </div>
                    </div>
                    <label for="recipient-name" class="col-form-label">編號 :</label>
                        <div class="mb-3-roomId">
                            <input type="text" class="form-control-idType" id="recipient-name" v-model="this.selectedValue" readonly>
                            <input type="text" class="form-control-input" id="recipient-name" v-model="this.roomId" placeholder="請從編號01依序新增">
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
                            <input type="checkbox" id="uno4" value="沙發" v-model="this.introduce">
                            <label for="uno">沙發</label>
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
                            <input type="file" class="form-control" id="recipient-name" multiple>
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
        }
        .list{
            display: flex;
            justify-content: space-between;
            position: relative;
            h1{
                color: #e76d87;
                position: absolute;
                right: 15%;
                top: 35%;
            }
            .roominfo{
                .buttonArea{
                    width: 50vw;
                    display: flex;
                    justify-content: space-between;
                    position: absolute;
                    right: 0%;
                    top: 8%;
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
                    height: 38vh;
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
                    margin-bottom: 5vmin;
                    .carousel-inner{
                        margin-top: 2vmin;
                        box-shadow: 8px 8px 2px 1px rgba(2, 40, 63, 0.2);
                    }
                    .carousel-control-next, .carousel-control-prev{
                        width: 4vmin;
                        height: 33vh;
                        padding: 0.5vmin;
                    }
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
    .mb-3-roomId{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .form-control-idType{
            width: 2vw;
            height: 5vh;
            border-radius: 5px;
            outline: none;
            text-align: center;
            border: 1px gainsboro solid;
        }
        .form-control-input{
            width: 28vw;
            height: 5vh;
            border-radius: 5px;
            border: 1px gainsboro solid;
            outline: none;
            padding-left: 1vmin;
        }
    }
</style>