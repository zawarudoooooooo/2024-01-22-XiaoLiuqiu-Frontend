<template >
    <div class="test">
        <input type="file" @change="handleFileChange">
        <button @click="upTest()">Upload</button>
        <button @click="test()">測試</button>

        <img :src="this.imgTest" alt="">
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            img:"",
            test1:"",
            imgTest:""
        }
    },
    methods: {
  handleFileChange(event) {
    // console.log(event);
    const file = event.target.files[0];
    // this.img=file
    // console.log(img);
    this.uploadFile(file);
  },
  uploadFile(file) {
    console.log(file.name);
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
                memberImg:this.img
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

                    this.imgTest='public/'+element.memberImgPhoto.memberImg
                    console.log(this.imgTest);
                });
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