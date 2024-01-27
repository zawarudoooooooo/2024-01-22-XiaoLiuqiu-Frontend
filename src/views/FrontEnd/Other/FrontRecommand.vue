<script>
import Footer from '../../../components/Footer.vue';
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
            <p>推薦行程</p>
        </div>
        <hr>
        <div class="list">
            <ul>
                <li>
                    <img src="../../../../public/tourist/t10/t10-5.JPG" alt="">
                    <div class="text">
                        <p class="topic">一日遊</p>
                        <hr>
                        <p>
                            搭船抵達小琉球⭢租車⭢花瓶岩⭢美人沙灘⭢望海亭⭢蛤板灣⭢白燈塔⭢
                            <br>厚石群礁⭢厚石澳神秘沙灘⭢龍蝦洞⭢中澳沙灘
                        </p>
                        <br>
                        <small>
                            <i class="fa-solid fa-comment-dots"></i>
                            建議搭 8:00 以前的船班抵達小琉球。
                            因為最晚從小琉球返程的航班為17:20，能夠遊玩的時間有限。
                            <br>
                            而且船班越晚越多人排隊，會耗費不少時間。
                            <br>
                        </small>
                    </div>
                </li>
                <li class="second">
                    <p class="secondtopic">兩天一夜</p>
                    <hr>
                    <div class="nowater">
                        <div class="type">
                            <i class="fa-solid fa-droplet-slash"></i>
                            <p>不玩水版</p>
                        </div>
                        <br>
                        <p>
                            • Day 1
                            <br>
                            搭船抵達小琉球⭢租車⭢花瓶岩⭢衫福漁港⭢蛤板灣⭢白燈塔⭢
                            <br>落日亭(看日落)⭢夜間生態導覽
                            <br>
                            <br>
                            • Day 2
                            <br>
                            旭日亭(看日出)⭢美人洞⭢美人沙灘⭢望海亭⭢山豬溝⭢烏鬼洞⭢
                            <br>
                            厚石群礁⭢厚石澳神秘沙灘⭢龍蝦洞⭢中澳沙灘
                        </p>
                        <img src="../../../../public/tourist/t12/t12-6.JPG" alt="">
                    </div>
                    <hr>
                    <div class="water">
                        <div class="type">
                            <i class="fa-solid fa-water"></i>
                            <p>玩水版</p>
                        </div>
                        <br>
                        <p>
                            • Day 1
                            <br>
                            搭船抵達小琉球⭢租車⭢花瓶岩⭢蛤板灣⭢SUB/獨木舟/浮潛⭢
                            落日亭(看日落)⭢夜間生態導覽
                            <br>
                            <br>
                            • Day 2
                            <br>
                            旭日亭(看日出)⭢美人洞⭢美人沙灘⭢望海亭⭢山豬溝⭢烏鬼洞⭢
                            白燈塔⭢厚石群礁⭢厚石澳神秘沙灘⭢龍蝦洞⭢中澳沙灘
                            </p>
                    </div>
                    <hr>
                    <small><i class="fa-solid fa-comment-dots"></i>
                        時間較充裕，中午前再搭船至小琉球即可。
                    </small>
                </li>
                <li>
                    <img src="../../../../public/tourist/t02/t2-6.JPG" alt="">
                    <div class="text">
                        <p class="topic">三天兩夜</p>
                        <hr>
                        <div class="third">
                            <p>
                                • Day 1 • 
                                <br>
                                搭船抵達小琉球⭢租車⭢花瓶岩⭢衫福漁港⭢蛤板灣⭢
                                <br>SUB/獨木舟/浮潛⭢落日亭(看日落)
                                <br>
                                <br>
                                • Day 2 • 
                                <br>
                                旭日亭(看日出)⭢美人洞⭢美人沙灘⭢望海亭⭢
                                山豬溝⭢<br>烏鬼洞⭢SUB/獨木舟/浮潛
                                <br>
                                <br>
                                • Day 3 • 
                                <br>
                                白燈塔⭢厚石群礁⭢厚石澳神秘沙灘⭢龍蝦洞⭢中澳沙灘
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 80vw;
        height: 216vh;
        margin: auto;
        margin-top: 4vmin;
        .title{
            p{
                font-size: 27pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
            }
        }
        .list{
            ul{
                width: 75vw;
                list-style: none;
                padding: 0;
                margin: auto;
                li{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin-bottom: 5vmin;
                    box-shadow: 8px 8px 2px 1px rgba(2, 40, 63, 0.2);
                    border-radius: 5px;
                    padding: 3vmin;
                    background-color: white;
                    img{
                        width: 25vw;
                        height: 35vh;
                        border-radius: 5px;
                        box-shadow: 1px 1px 1px 1px rgba(2, 40, 63, 0.2);
                        transition: all linear 0.3s;
                        &:hover{
                            opacity: 0.7;
                            box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                        }
                        &:active{
                            opacity: 1.0;
                        }
                    }
                    .text{
                        width: 45vw;
                        padding: 0 2vmin 0;
                        .topic{
                            color: #797A7E;
                            font-weight: 600;
                            font-size: 26pt;
                            text-align: center;
                        }
                        small{
                            color: #797A7E;
                        }
                        p{
                            color: #797A7E;
                            font-size: 14pt;
                        }
                        .third{
                            text-align: center;
                        }
                    }
                }
                .second{
                    display: block;
                    small{
                        color: #797A7E;
                    }
                    .secondtopic{
                        color: #797A7E;
                        font-weight: 600;
                        font-size: 26pt;
                        text-align: center;
                    }
                    .nowater{
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        padding: 0 1vmin 0;
                        .type{
                            color: #797A7E;
                            font-weight: bold;
                            font-size: 16pt;
                            text-align: center;
                        }
                        p{
                            color: #797A7E;
                            font-size: 14pt;
                        }
                    }
                    .water{
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        padding: 0 1.5vmin 0;
                        .type{
                            color: #797A7E;
                            font-weight: bold;
                            font-size: 16pt;
                            text-align: center;
                        }
                        p{
                            color: #797A7E;
                            font-size: 14pt;
                        }
                    }
                }
            }
        }
    }
    @media(max-width:1200px){
        .content{
            height: 119vh;
            .list{
                ul{
                    li{
                        img{
                            height: 14vh;
                        }
                        .text{
                            .topic{
                                margin-bottom: 0;
                            }
                            hr{
                                margin-top: 0;
                            }
                        }
                        .third{
                            p{
                                font-size: 12pt;
                            }
                        }
                    }
                    .second{
                        .nowater{
                            .type{
                                margin-right: 1vmin;
                            }
                            p{
                                font-size: 12.5pt;
                            }
                        }
                        .water{
                            .type{
                                margin-right: 1vmin;
                            }
                        }
                    }
                }
            }
        }
    }
    @media(max-width:992px){
        .content{
            height: 134vh;
            .list{
                ul{
                    li{
                        .third{
                            p{
                                font-size: 10pt;
                            }
                        }

                    }
                }
            }
        }
    }
    @media(max-width:576px){
        .content{
            height: 121vh;
            .title{
                p{
                    font-size: 22pt;
                }
            }
            .list{
                ul{
                    li{
                        img{
                            height: 9vh;
                        }
                        .text{
                            .topic{
                                font-size: 24pt;
                            }
                            p{
                                font-size: 8pt;
                                margin: 0;
                            }
                            small{
                                font-size: 5pt;
                            }
                            .third{
                                p{
                                    font-size: 7.5pt;
                                }
                            }
                        }
                    }
                    .second{
                        .secondtopic{
                            font-size: 22pt;
                            margin: 0;
                        }
                        hr{
                            margin-top: 0;
                        }
                        .nowater{
                            .type{
                                margin-right: 2vmin;
                            }
                            p{
                                font-size: 7.5pt;
                            }
                        }
                        .water{
                            .type{
                                margin-right: 2vmin;
                            }
                            p{
                                font-size: 7.5pt;
                            }
                        }
                    }
                }
            }
        }
    }
    @media(max-width:414px){
        .content{
            height: 114vh;
            .title{
                p{
                    font-size: 20pt;
                }
            }
            .list{
                ul{
                    li{
                        .text{
                            .topic{
                                font-size: 16pt;
                            }
                            p{
                                font-size: 5pt;
                            }
                            .third{
                                p{
                                    font-size: 6.5pt;
                                }
                            }
                        }
                    }
                    .second{
                        small{
                            font-size: 9pt;
                        }
                        .secondtopic{
                            font-size: 16pt;
                        }
                        .nowater{
                            p{
                                font-size: 6.5pt;
                            }
                            .type{
                                font-size: 9pt;
                            }
                        }
                        .water{
                            p{
                                font-size: 6.5pt;
                            }
                            .type{
                                font-size: 9pt;
                            }
                        }
                    }
                }
            }
        }
    }
</style>