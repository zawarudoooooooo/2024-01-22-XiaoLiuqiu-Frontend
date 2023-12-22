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
    components:{
        backSideBar
    }
}
</script>

<template>
    <div class="title">
        <p>豪華家庭房</p>
    </div>
    <div class="content">
        <div class="roomType">
            <button type="button" @click="goBackSimpleDouble()">小資雙人房</button>
            <button type="button" @click="goBackDouble()">舒適雙人房</button>
            <button type="button" @click="goBackFamily()">豪華家庭房</button>
        </div>
    </div>
<backSideBar/>
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
        position: relative;
        .roomType{
            position: absolute;
            right: 3%;

            button{
                width: 10vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                margin-right: 5vmin;
                background-color: #F7F2E7;
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