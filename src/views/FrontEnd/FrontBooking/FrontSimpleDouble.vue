<script>
import Footer from '../../../components/Footer.vue';
export default{
    data(){
        return{

        }
    },
    methods:{
        booking(){
            this.$router.push('/SimpleDoubleBooking')
        }
    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="date">
            <div class="checkin">
                <p>入住日期</p>
                <input type="date">
            </div>
            <div class="checkout">
                <p>退房日期</p>
                <input type="date">
            </div>
        </div>
        <div class="show">
            <img src="../../../../public/room/simpledouble.jpg" alt="">
            <div class="text">
                <div class="name">
                    <p>小資雙人房</p>
                    <p>$1500</p>
                </div>
                <hr>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam sint quo sapiente? Libero quis, esse suscipit quia magnam molestiae.
                    </p>
                </div>
                <button type="button" @click="booking()">選購</button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped> 
    .content{
        width: 90vw;
        height: 100vh;
        margin: auto;
        margin-top: 6vmin;
        .date{
            width: 60vw;
            //border: 1px solid black;
            display: flex;
            justify-content: space-around;
            align-content: center;
            margin: auto;
            input{
                width: 20vw;
                height: 5vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: #D9D9D9;
                padding-left: 2vmin;
                padding-right: 2vmin;
            }
            p{
                margin: 0;
                font-size: 16pt;
                color: #797A7E;
                text-align: center;
                margin-right: 2vmin;
            }
            .checkin{
                display: flex;
            }
            .checkout{
                display: flex;
            }
        }
        .show{
            width: 60vw;
            height: 34vh;
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
            }
        }
        button{
            width: 4vw;
            height: 4.5vh;
            border: none;
            border-radius: 5px;
            color: #797A7E;
            position: absolute;
            right: 5%;
            bottom: 11%;

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
</style>