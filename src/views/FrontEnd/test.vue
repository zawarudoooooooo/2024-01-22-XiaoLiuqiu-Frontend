<template >
    <!-- <div class="test">
        <input type="file" @change="handleFileChange" multiple>
        <button @click="upTest()">Upload</button>
        <button @click="test()">測試</button>

        <div class="img" v-for="item in this.testImg.memberImg">
            
            <img :src="item" alt="">
        </div>


        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" >
  <div class="carousel-inner" >
    <div :class="{ 'carousel-item': true, 'active': index === 0 }" v-for="(item, index) in carouselImages" :key="index">
      <img :src="item" class="d-block w-100" alt="">
    </div>
  </div>
</div>


        
    </div> -->


    

    <button class="test" type="button" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">新增房間
                    </button>

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
                            <input type="radio" :value="item" v-model="this.text" class="roomtype" name="roomtype">
                            <label for="">{{ item }}</label>
                        </div>
                    </div>
                    <label for="recipient-name" class="col-form-label">編號 :</label>
                        <div class="mb-3 roomId">
                            <input type="text" class="form-control idType" id="recipient-name" v-model="this.selectedValue" readonly>
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
                            <input type="checkbox" id="uno9" value="地毯" v-model="this.introduce">
                            <label for="uno">地毯</label>
                            <input type="checkbox" id="uno10" value="咖啡機" v-model="this.introduce">
                            <label for="uno">咖啡機</label>
                            <br>
                            <input type="checkbox" id="uno11" value="體重機" v-model="this.introduce">
                            <label for="uno">體重機</label>
                            <input type="checkbox" id="uno12" value="酒水" v-model="this.introduce">
                            <label for="uno">酒水</label>
                            <input type="checkbox" id="uno13" value="免治馬桶" v-model="this.introduce">
                            <label for="uno">免治馬桶</label>
                            <input type="checkbox" id="uno14" value="香氛噴物" v-model="this.introduce">
                            <label for="uno">香氛噴物</label>
                            <input type="checkbox" id="uno15" value="孩童專區" v-model="this.introduce">
                            <label for="uno">孩童專區</label>
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
                        <!-- <div class="mb-3" v-for=" item in this.arr">
                            <img :src="'public/room/SP/'+item" alt="">
                            <img :src="'public/room/D/'+item" alt="">
                            <img :src="'public/room/F/'+item" alt="">
                        </div> -->
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal"  @click="createRoom()">確認新增</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            img:"",
            test1:"",
            imgTest:"",
            imgArr:[],
            testImg:"",
            // 測試用
            list:[],
            text:"",
            roomId:"",
            introduce:[],
            roomPrice:"",
            arr:[],
            imgArr:"",
            codeArr:"",
            roomTypeName:[],
            roomTypeId:[],
            roomTypeNameId:"",
            selectedValue:"",
        }
    },
    methods: {
//   handleFileChange(event) {
//     console.log(event);
//     const file = event.target.files;
//     this.imgArr = [...file];
//     this.imgArr.forEach(item=>{
//         this.arr.push(item.name)
//     })
//     console.log(this.arr);
// // console.log(this.imgArr);
//     // this.img=file
//     // console.log(img);
//     // this.uploadFile(file);
//   },
  uploadFile(file) {
    console.log(file);
    this.img=file.name
  },
  upTest(){
    axios({
            url:'http://localhost:8080/member/imgUpDate',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },  
            params:{
                memberId:5
            },
            data:{
                memberImg:this.arr
            },
            }).then(res=>{
                console.log(res.data);
            }).catch(error => {
                console.error( error);
            })
  },
  test(){
    axios({
            url:'http://localhost:8080/member/member',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },  
            params:{
                account:"aa159"
            },
            data:{
            },
            }).then(res=>{
                // this.test1=res.data.memberList
                res.data.memberList.forEach(element => {
                    element.memberImgPhoto=JSON.parse(element.memberImgPhoto)
                    // console.log();
                    this.testImg=element.memberImgPhoto
                    // console.log(JSON.parse(element.memberImgPhoto) );
                    // this.imgTest='public/'+element.memberImgPhoto.memberImg
                    // console.log(this.imgTest);
                    
                });
                
                console.log(this.testImg);
                this.testImg.memberImg.forEach(item=>{
                    item='public/'+item
                    // console.log(item);
                })
                // console.log(res.data);
            })
  },
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
                    let [code, type] = item.split(":");
                    // console.log(code);
                    this.roomTypeName.push(type)
                    this.roomTypeId.push(code)
                    // console.log(type);
                })
                console.log(this.roomTypeName);
                console.log(this.roomTypeId);
                // this.roomTypeName=this.list.splice(":")
                // console.log(this.roomTypeName);
                // this.list.forEach(item=>{
                //     // console.log(item);
                //     item.map((roomType,index)=>String.fromCharCode(65+index)+":"+roomType)
                // })
                // this.list=res.data.roomTypeList
                console.log(this.list);
                // this.codeArr = this.list.map((roomType, index) => String.fromCharCode(65 + index)+":"+roomType);
            // console.log(this.codeArr);
            })
  },
  handleRadioChange(){
    this.selectedValue=this.text.split(":")[0]
    // console.log();
    // console.log(this.test);
  },
  text1(){
    console.log(this.text);
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
  createRoom(){
    const type=document.querySelectorAll(".roomtype")
    // console.log(type);
    type.forEach((type,index)=>{
        if(type.checked){
            // console.log(type.value);
            // console.log(index);
            this.roomTypeId.forEach((typeId,typeIdIndex)=>{
                if(index==typeIdIndex){
                    // console.log(type.value);
                    this.roomTypeNameId=typeId+this.roomId
                    // console.log(this.roomTypeNameId);
                    
                }
            })
        }
    })
    axios({
            url:'http://localhost:8080/room/create',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
            },
            data:{
                room_id:this.roomTypeNameId,
                room_introduce:JSON.stringify(this.introduce),
                room_name:this.text,
                room_price:this.roomPrice,
                room_img:JSON.stringify(this.arr) 
            },
            }).then(res=>{
            console.log(res.data);
            if(res.data.rtnCode!=200){
                if(res.data.message=='RoomId is existed!!'){
                    swal("錯誤", "房間該房間已存在", "error");
                    return
                }
                swal("錯誤", "請確認房間", "error");
                return
            }
            swal("成功", "已新增房間", "success");
            // this.clearAdd()
            })
  },
  createRoomTest(){
    
  }
},
mounted(){
    this.roomtype()

    let testArr=[]
    for(let i=65;i<=90;i++){
        testArr.push(String.fromCharCode(i))
    }
    console.log(testArr);

    // 你的原始房间类型数组
let roomTypes = ["小資雙人房", "舒適雙人房", "豪華家庭房", "單身狗專用單人房"];

// 将 A 到 Z 的字母字符串附加到每个房间类型


// 打印新的数组内容
// console.log(roomsWithAlphabet);
    // setInterval(() => {
    //         this.text1()
    //     }, 100);
}
}
</script>
<style lang="scss" scoped>
    .test{
        margin-top: 5vmin;
    }
    .flex-container{
        // width: 50vmin;
        // height: 3vmin;
        display: flex;
        input{
            margin-left: 1vmin;
        }
    }
    .roomId{
        display: flex;
        .idType{
            width: 6vmin;
            margin-right: 1vmin
        }
    }
</style>