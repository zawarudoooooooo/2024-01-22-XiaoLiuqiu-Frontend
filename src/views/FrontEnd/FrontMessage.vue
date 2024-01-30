<script>
import Footer from '../../components/Footer.vue';
import axios from 'axios';
export default{
    data(){
        return{
            msglist:""
        }
    },
    components:{
        Footer
    },
    methods:{
        member(){
            axios({
            url:'http://localhost:8080/member/member',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },  
            params:{
                account:""
            },  
            data:{
            },
        }).then(res=>{
            console.log(res.data)
        })
        }
    },
    mounted(){
        axios({
            url:'http://localhost:8080/message/search',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },  
            data:{
            },
        }).then(res=>{
            //console.log(res.data.messageList)
            this.msglist=res.data.messageList
            this.msglist.forEach(element => {
                console.log(element);
                let date=new Date(element.messageDateTime)
                let messageDate=date.getUTCFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+date.getHours()+'時'+date.getMinutes()+'分'
                console.log(messageDate);
                element.messageDateTime=messageDate
                
            });
            console.log(this.msglist)
        })
    }
}
</script>

<template>
    <div class="title">
        <p>留言板</p>
    </div>
    <hr>
    <div class="content">
        <div class="card" v-for="item in this.msglist">
            <div class="info">
                <img :src="'public/demo/'+item.memberImg" class="card-img-top" alt="">
                <p>user : {{ item.memberName }}</p>
            </div>
            <div class="card-body">
                <h5 class="card-title">標題 : {{ item.roomId }}</h5>
                <p class="card-text">
                    {{ item.roomMessageBoardDescription }}
                </p>
                <img :src="'public/message/'+item.messageImg" alt="">
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><small>{{item.messageDateTime}}</small></li>
            </ul>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
    .title{
        margin: auto;
        p{
            font-size: 28pt;
            font-weight: bold;
            color: #82AAE3;
            text-align: center;
            margin-top: 5vmin;
        }
    }
    hr{
        width: 80vw;
        margin: auto;
        margin-bottom: 3vmin;
    }
    .content{
        width: 90vw;
        height: 145vh;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 3vmin;
        position: relative;
        .card{
            width: 20rem;
            height: 30rem;
            padding: 2vmin;
            box-shadow: 1px 1px 1px lightgray;
            .info{
                display: flex;
                justify-content: space-between;
                align-items: center;
                img{
                    width: 5vw;
                    height: 9vh;
                    border-radius: 50%;
                }
            }
            .card-body{
                position: relative;
                .card-title{
                    font-weight: bold;
                    color: #82AAE3;
                }
                img{
                    width: 17vw;
                    height: 25vh;
                    border-radius: 5px;
                    position: absolute;
                    bottom: 5%;
                    transition: all ease 0.3s;
                    &:hover{
                        opacity: 0.7;
                        box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                    }
                    &:active{
                        opacity: 1;
                        scale: 1.1;
                    }
                }
            }
        }
    }
    @media(max-width:1200px){
        .content{
            width: 81vw;
            height: 71vh;
            gap: 2vmin;
            .card{
                width: 16rem;
                height: 27rem;
                p{
                    font-size: 10pt;
                }
                .info{
                    img{
                        width: 7vw;
                        height: 5vh;
                    }
                }
                .card-body{
                    .card-title{
                        font-size: 13pt;
                    }
                    img{
                        width: 19vw;
                        height: 10vh;
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 126vh;
            .card{
                width: 19rem;
                height: 29rem;
                p{
                    font-size: 13pt;
                }
                .info{
                    img{
                        width: 10vw;
                        height: 7vh;
                    }
                }
                .card-body{
                    .card-title{
                        font-size: 17pt;
                    }
                    img{
                        width: 23vw;
                        left: 15%;
                    }
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 260vh;
            .card{
                width: 22rem;
                p{
                    font-size: 13pt;
                }
                .info{
                    justify-content: space-around;
                    img{
                        width: 20vw;
                        height: 9vh;
                    }
                }
                .card-body{
                    img{
                        width: 55vw;
                        height: 15vh;
                        left: 13%;
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            height: 254vh;
            .card{
                height: 25rem;
                p{
                    font-size: 12pt;
                }
                .card-body{
                    .card-title{
                        font-size: 16pt;
                    }
                }
            }
        }
    }
</style>