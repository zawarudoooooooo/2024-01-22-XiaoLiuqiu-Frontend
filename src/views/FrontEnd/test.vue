<template >
    <div class="test">
        <input type="file" @change="handleFileChange" multiple>
        <button @click="upTest()">Upload</button>
        <button @click="test()">測試</button>

        <!-- <div class="img" v-for="item in this.testImg.memberImg">
            
            <img :src="item" alt="">
        </div> -->


        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" >
  <div class="carousel-inner" >
    <div :class="{ 'carousel-item': true, 'active': index === 0 }" v-for="(item, index) in carouselImages" :key="index">
      <img :src="item" class="d-block w-100" alt="">
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
            arr:[],
            testImg:""
        }
    },
    methods: {
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
  }
}
}
</script>
<style lang="scss" scoped>
    .test{
        margin-top: 5vmin;
    }
</style>