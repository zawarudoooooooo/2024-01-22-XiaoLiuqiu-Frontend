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
                        <img src="../../../public/userimg.png" alt="">
                        <p>杏仁茶加油條</p>
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
        height: 80vh;
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
            position: relative;
            display: flex;
            flex-wrap: wrap;
            li{
                width: 25vw;
                height: 65vh;
                background-color: white;
                border-radius: 5px;
                padding: 2vmin;
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
                        p{
                            font-size: 14pt;
                            color: #797A7E;
                        }
                    }
                    .photo{
                        position: absolute;
                        bottom: 5%;
                        img{
                            width: 20vw;
                            height: 28vh;
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
        
//         ul {
//             //display: block;
//             position: absolute;
//             width: 75vw;
//             //top: 10%;
//             left: 50%;
//             transform: translateX(-50%);
//             //margin-bottom: 10%;
//             margin: auto;
//             display: flex;
//             flex-wrap: wrap;
//             gap: 2vmin;
//             li {
//                 display: inline-block;
//                 border: 2px dotted transparent;
//                 width: 47%;
//                 height: 350px;
//                 position: relative;
//                 transition: all .4s ease;
//                 margin: 1%;
//     a {
//       display: block;
//       content: "";
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background: #fff;
//       transition: all .25s ease-in-out;
//       padding: 30px;
//       border: 2px solid transparent;
//       color: #444;
//       text-decoration: none;
//       i {
//         font-size: 2.5em;
//       }
//       h2 {
//         font-size: 1.4em;
//         font-weight: 700;
//         margin-bottom: .5em;
//       }
//     }
    
//     &.active {
//       border-color: #CCC;
//         a {
//           border-color: orange;
//           transform: translate(-4%, -4%);
//         }
//       }
//     &:hover {
//       border-color: #CCC;
//       a {
//         border-color: #82AAE3;;
//         transform: translate(-4%, -4%);
//       }
//     }
//   }
//         .list{
//             width: 70vw;
//             margin: auto;
//             display: flex;
//             justify-content: space-between;
//             position: relative;
//             .topic{
//                 h1{
//                     color: #797A7E;
//                 }
//             }
//             .message{
//                 p{
//                     color: #797A7E;
//                     font-size: 20pt;
//                 }
//             }
//             .photo{
//                 img{
//                     width: 15vw;
//                     height: 25vh;
//                     transition: all ease 0.5s;
//                     border-radius: 5px;
//                     &:hover{
//                         opacity: 0.6;
//                     }
//                     &:active{
//                         opacity: 1.0;
//                     }
//                 }
//             }
//         }
//         h5{ 
//             color: #797A7E;
//             position: absolute;
//             left: -7%;
//             bottom: 0;
//         }
//     }
}
</style>