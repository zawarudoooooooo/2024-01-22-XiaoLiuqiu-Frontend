<script>
    import Footer from '../../components/Footer.vue';
    export default{
    data(){
        return{

        }
    },
    components:{
        Footer
    }
}

</script>

<template>
    <div class="content">
        <div class="title">
            <p>留言板</p>
        </div>
        <hr>
        <ul>
            <li>
                <div class="info">
                    <div class="user">
                        <img src="../../../public/user1.png" alt="">
                        <p>金萱紅茶</p>
                    </div>
                    <div class="time">
                        <small>2024/01/06 15:20</small>
                    </div>
                </div>
                <hr>
                <div class="message">
                    <div class="text">
                        <p>海龜郵筒🐢<br>郵筒上，有海龜 ! 超級可愛✨</p>
                    </div>
                    <br>
                    <div class="photo">
                        <img src="../../../public/message/IMG_1210.JPG" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 80vw;
        height: 85vh;
        margin: auto;
        margin-top: 5vmin;
        .title{
            p{
                font-size: 28pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
            }
        }
        hr{
            margin-bottom: 3vmin;
        }
        ul{
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            li{
                width: 25vw;
                height: 65vh;
                background-color: white;
                border-radius: 5px;
                padding: 2vmin;
                box-shadow: 1px 1px 1px gray;
                transition: all linear 0.3s;
                &:hover{
                    box-shadow: 8px 8px 2px 1px rgba(2, 40, 63, 0.2);
                }
                .info{
                    width: 23vw;
                    display: flex;
                    justify-content: space-between;
                    .user{
                        width: 15vw;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        img{
                            width: 5vw;
                            height: 9vh;
                            border-radius: 50%;
                        }
                        p{
                            font-size: 14pt;
                            color: #797A7E;
                            font-weight: bold;
                            margin: 0;
                        }
                    }
                    .time{
                        small{
                            color: #797A7E;
                        }
                    }
                }
                .message{
                    .text{
                        height: 14vh;
                        //border: 1px solid black;
                        p{
                            font-size: 14pt;
                            color: #797A7E;
                        }
                    }
                    .photo{
                        position: relative;
                        img{
                            width: 20vw;
                            height: 28vh;
                            position: absolute;
                            left: 5%;
                            transition: all ease 0.5s;
                            border-radius: 5px;
                            &:hover{
                                opacity: 0.6;
                            }
                            &:active{
                                opacity: 1.0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>