<script>
import Footer from '../../components/Footer.vue';
import axios from 'axios';
import FrontRoom from './FrontRoom.vue'
export default{
    
    data(){
        return{
            Search:false,
            room:"",
            roomList:[],
        }
    },
    mounted() {
        axios({
            url:'http://localhost:8080/room/search',
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            params:{
                roomName:""
            },
            data:{

            },
          }).then(res=>{
            
            this.room=res.data.roomList
            // console.log(this.room);
            
            })
    },
    methods:{
        goSimpleDouble(){
            this.Search=true
            this.roomList=[]
            this.room.forEach(element => {
                if(element.roomName=="小資雙人房"){
                    this.roomList.push(element)
                }
            });
            console.log(this.roomList);
            // this.$router.push('/FrontSimpleDouble')
        },
        goDouble(){
            this.Search=true
            this.roomList=[]
            this.room.forEach(element => {
                if(element.roomName=="舒適雙人房"){
                    this.roomList.push(element)
                }
            });
            console.log(this.roomList);
        },
        goFaimly(){
            this.Search=true
            this.roomList=[]
            this.room.forEach(element => {
                if(element.roomName=="豪華家庭房"){
                    this.roomList.push(element)
                }
            });
            console.log(this.roomList);
        },
        back(xxx){
            this.Search=xxx
            console.log(xxx);
        }
    },
    components:{
        Footer,
        FrontRoom
    },
}
</script>

<template>
    <div class="content" v-if="!Search">
        <div class="search">
            <div class="title">
                <p>房型總覽</p>
            </div>
            <div class="roomType">
                <div class="card">
                    <img src="../../../../room/SP/sp2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">小資雙人房</h5>
                        <p class="card-text">經濟實惠的最佳選擇。
                            <br>超值價格，舒適感受。
                        </p>
                        <button type="button" @click="goSimpleDouble()">搜尋</button>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../room/D/d2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">舒適雙人房</h5>
                        <p class="card-text">
                            好好犒賞自己的小假期。
                            <br>盡情享受，離島時光。
                        </p>
                        <button type="button" @click="goDouble()">搜尋</button>
                    </div>
                </div>
                <div class="card">
                    <img src="../../../../room/F/f1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">豪華家庭房</h5>
                        <p class="card-text">
                            多人出遊的第一首選。
                            <br>超大空間，宛如第二個家。
                        </p>
                        <button type="button" @click="goFaimly()">搜尋</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FrontRoom v-if="Search" v-bind:List="this.roomList" @goback="back(xxx)"/>
    <Footer/>
</template>

<style lang="scss" scoped>
    .content{
        width: 90vw;
        height: 67.5vh;
        margin: auto;
        margin-top: 3.5vmin;
        .search{
            height: 60vh;
            .title{
                p{
                    font-size: 27pt;
                    font-weight: bold;
                    color: #82AAE3;
                    text-align: center;
                    margin-bottom: 3vmin;
                }
            }
            .roomType{
                width: 70vw;
                display: flex;
                justify-content: space-around;
                margin: auto;
            }
            .card{
                width: 18rem;
                border-radius: 10px;
                box-shadow: 1px 1px 1px lightgray;
                transition: all linear 0.3s;
                &:hover{
                    box-shadow: 10px -10px rgba(6, 67, 147, 0.5);
                }
                &:active{
                    opacity: 1.0;
                }
                img{
                    height: 13rem;
                    transition: all linear 0.3s;
                    &:hover{
                        opacity: 0.6;
                    }
                    &:active{
                        opacity: 1.0;
                    }
                }
            }
            button{
                width: 4vw;
                height: 4.5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;
                box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
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
    }
    @media(max-width:1200px){
        .content{
            height: 78vh;
            margin-top: 6vmin;
            .search{
                height: 76vh;
                .title{
                    p{
                        font-size: 35pt;
                    }
                }
                .roomType{
                    height: 60vh;
                    flex-wrap: wrap;
                    gap: 3vmin;
                    margin-top: 5vmin;
                    .card{
                        margin-bottom: 4vmin;
                        .card-title{
                            font-size: 20pt;
                            margin-bottom: 2vmin;
                        }
                        .card-text{
                            font-size: 15pt;
                            margin-bottom: 2vmin;
                        }
                        button{
                            width: 12vw;
                            height: 3vh;
                            font-size: 18pt;
                        }
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 85vh;
            .search{
                height: 83vh;
                .roomType{
                    width: 90vw;
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 120vh;
            .search{
                height: 118vh;
                .title{
                    p{
                        font-size: 22pt;
                    }
                }
                .roomType{
                    .card{
                        width: 16rem;
                        img{
                            height: 10rem;
                        }
                        .card-title{
                            font-size: 15pt;
                        }
                        .card-text{
                            font-size: 11pt;
                            margin-bottom: 3vmin;
                        }
                        button{
                            width: 20vw;
                            height: 4vh;
                            font-size: 13pt;
                        }
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            height: 129vh;
            .search{
                height: 128vh;
            }
        }
    }
</style>