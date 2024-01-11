<script>
import backSideBar from '../../../components/backSideBar.vue';
export default{
    data(){
        return{
        }
    },
    methods:{
        goBackSimpleDouble(){
            this.$router.push('/BackSimpleDouble')
        },
        goBackDouble(){
            this.$router.push('/BackDouble')
        },
        goBackFamily(){
            this.$router.push('/BackFamily')
        }
    },
    methods:{
        simpleDouble(){
            this.$router.push('/BackSimpleDouble')
        },
        double(){
            this.$router.push('/BackDouble')
        },
        family(){
            this.$router.push('/BackFamily')
        },
    },
    components:{
        backSideBar
    }
}
</script>

<template>
    <div class="title">
        <p>房型管理</p>
    </div>
    <div class="content">
        <div class="side">
            <backSideBar />
        </div>
        <div class="list">
            <div class="info">
                <p><i class="fa-solid fa-map-pin"></i>小資雙人房</p>
                <div class="buttonArea">
                    <button type="button" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">新增房間</button>
                    <button type="button" @click="simpleDouble()">小資雙人房</button>
                    <button type="button" @click="double()">舒適雙人房</button>
                    <button type="button" @click="family()">豪華家庭房</button>
                </div>
            </div>
            <div class="room">
                <img src="../../../../public/room/simpledouble.jpg" alt="">
                <div class="text">
                    <div class="name">
                        <p>小資雙人房</p>
                        <p>編號 : A01</p>
                    </div>
                    <hr>
                    <div class="description">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, accusamus!
                        </p>
                    </div>
                    <div class="price">
                        <p>價格 : $1500</p>
                    </div>
                    <div class="status">
                        <p>狀態 : 空房</p>
                        <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
                    </div>
                </div>
            </div>
        </div>
<!-- 新增房間modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">新增房間</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">房間編號 :</label>
                                <input type="number" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">房機名稱 :</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">房機價格 :</label>
                                <input type="number" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">房間說明 :</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">房間圖片 :</label>
                                <input type="file" class="form-control" id="recipient-name">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">確認新增</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .title{
        font-size: 28pt;
        font-weight: bold;
        color: #82AAE3;
        text-align: center;
        margin-top: 3vmin;
    }
    .content{
        width: 95vw;
        height: 50vh;
        margin: auto;
        display: flex;
        justify-content: space-around;
        margin-top: 5vmin;
        //border: 1px solid black;
        .list{
            width: 60vw;
            //border: 1px solid black;
            position: relative;
            .info{
                width: 60vw;
                //border: 1px solid black;
                display: flex;
                justify-content: space-between;
                p{
                    color: #797A7E;
                    font-size: 20pt;
                }
                i{
                    margin-right: 2vmin;
                }
                .buttonArea{
                    width: 35vw;
                    //border: 1px solid black;
                    display: flex;
                    justify-content: space-between;
                    position: absolute;
                    right: 0;
                    button {
                        width: 8vw;
                        height: 5vh;
                        border: none;
                        border-radius: 5px;
                        color: #797A7E;
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
            }
            .room{
                width: 60vw;
                height: 35vh;
                margin: auto;
                display: flex;
                border: 1px solid lightgray;
                border-radius: 10px;
                margin-top: 5vmin;
                box-shadow: 1px 1px 1px gray;
                padding: 3vmin;
                position: relative;
                img{
                    width: 23vw;
                    height: 28vh;
                    border-radius: 5px;
                    margin-right: 5vmin;
                    &:hover{
                        opacity: 0.6;
                    }
                    &:active{
                        opacity: 1.0;
                    }
                }
                .text{
                    height: 23vh;
                    //border: 1px solid black;
                    hr{
                        margin: 0;
                    }
                    .name{
                        width: 30vw;
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
                            font-size: 16pt;
                            width: 35vw;
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
                        input[type=checkbox]{
                            height: 0;
                            width: 0;
                            visibility: hidden;
                        }
                        label {
                            cursor: pointer;
                            text-indent: -9999px;
                            width: 4vw;
                            height: 4vh;
                            background: grey;
                            display: block;
                            border-radius: 30px;
                            position: relative;
                            margin-top: 1vmin;
                        }
                        label:after {
                            content: '';
                            position: absolute;
                            top: 5px;
                            left: 5px;
                            width: 1.5vw;
                            height: 2.8vh;
                            background: #fff;
                            border-radius: 30px;
                            transition: 0.5s;
                        }
                        input:checked + label {
                            background: #bada55;
                        }
                        input:checked + label:after {
                            left: calc(100% - 5px);
                            transform: translateX(-100%);
                        }
                        label:active:after { 
                            width: 130px;
                        }
                    }
                }
            }
        }
    }
</style>