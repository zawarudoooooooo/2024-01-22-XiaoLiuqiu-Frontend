<script>
import Footer from '../../../components/Footer.vue';
export default{
    data(){
        return{
        }
    },
    methods:{
        goSimpleDouble(){
            this.$router.push('/FrontSimpleDouble')
        },
        goDouble(){
            this.$router.push('/FrontDouble')
        },
        goFaimly(){
            this.$router.push('/FrontFamily')
        },
    },
    components:{
        Footer
    },
}
</script>

<template>
    <div class="content">
        <div class="search">
            <div class="title">
                <p>依房型搜尋</p>
            </div>
            <div class="roomType">
                <div class="card" style="width: 18rem;">
                    <img src="../../../../room/simpledouble3.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">小資雙人房</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" @click="goSimpleDouble()">搜尋</button>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../../../room/double4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">舒適雙人房</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" @click="goDouble()">搜尋</button>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../../../room/family4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">豪華家庭房</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" @click="goFaimly()">搜尋</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<style lang="scss" scoped>
    .content{
        width: 90vw;
        height: 67vh;
        margin: auto;
        margin-top: 4vmin;
        .search{
            .title{
                p{
                    font-size: 28pt;
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
                border-radius: 10px;
                box-shadow: 1px 1px 1px lightgray;
                transition: all linear 0.3s;
                &:hover{
                    opacity: 0.6;
                    //box-shadow: 0px 0px 10px rgba(97, 96, 96, 0.5);
                    box-shadow: 10px -10px rgba(6, 67, 147, 0.5);
                }
                &:active{
                    opacity: 1.0;
                }
            }
                button{
                    width: 4vw;
                    height: 4.5vh;
                    border: none;
                    border-radius: 5px;
                    color: #797A7E;
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
</style>