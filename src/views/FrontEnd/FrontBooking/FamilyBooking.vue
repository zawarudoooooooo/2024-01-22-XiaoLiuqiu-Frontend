<script>
import Footer from '../../../components/Footer.vue';
export default{
    data(){
        return{

        }
    },
    methods: {
        booking(){
            this.$router.push('/FamilyBooking')
        }
    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">
        <div class="show">
            <img src="../../../../public/room/family.jpg" alt="">
            <div class="text">
                <div class="name">
                    <p>豪華家庭房</p>
                    <p>$4000</p>
                </div>
                <hr>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam sint quo sapiente? Libero quis, esse suscipit quia magnam molestiae.
                    </p>
                </div>
                <div class="extra">
                    <p>加購項目</p>
                    <button type="button">早餐(+200/人)</button>
                    <button type="button">來回船票(+400/全票)</button>
                    <button type="button">來回船票(+200/半票)</button>
                    <button type="button">摩托車(+300/天)</button>
                    <button type="button">三大風景區門票(+100/人)</button>
                    <button type="button">鹿粼梅花鹿園區門票(+220/全票)</button>
                    <button type="button">鹿粼梅花鹿園區門票(+50/半票)</button>
                    <button type="button">浮潛(+400/人)</button>
                    <button type="button">獨木舟(+600/人)</button>
                    <button type="button">透明獨木舟(+800/人)</button>
                    <button type="button">SUP立槳(+1000/兩人一板)</button>
                    <button type="button">SUP立槳(+1200/一人一板)</button>
                </div>
                <button type="button" id="buyBtn" @click="booking()">訂購</button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped> 
    .content{
        width: 90vw;
        height: 70vh;
        margin: auto;
        margin-top: 6vmin;
        .show{
            width: 60vw;
            height: 70vh;
            margin: auto;
            display: flex;
            //border: 1px solid black;
            border-radius: 10px;
            margin-top: 5vmin;
            //box-shadow: 1px 1px 1px gray;
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
                .extra{
                    p{
                        color: #797A7E;
                        font-size: 16pt;
                        font-weight: bold;
                        margin-top: 3vmin;
                    }
                    button{
                        height: 5vh;
                        border-radius: 5px;
                        color: #797A7E;
                        border: 1px dotted #797A7E;
                        //border: none;
                        //box-shadow: 1px 1px 1px lightgray;
                        margin-right: 2vmin;
                        margin-bottom: 1vmin;
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
        }
        #buyBtn{
            width: 4vw;
            height: 4.5vh;
            border: none;
            border-radius: 5px;
            color: #797A7E;
            position: absolute;
            right: 5%;
            bottom: 7%;
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