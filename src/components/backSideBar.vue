<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        goBackSimpleDouble(){
            this.$router.push('/BackSimpleDouble')
        },
        goBackBicycle(){
            this.$router.push('/BackBicycle')
        },
        goBackTourist(){
            this.$router.push('/BackTourist')
        },
        goBackTicket(){
            this.$router.push('/BackTicket')
        },
        // goBackAbout(){
        //     this.$router.push('/BackAbout')
        // }
    }
}
</script>

<template>
    <div class="sideBar">
        <button type="button" @click="goBackSimpleDouble()">房型管理</button>
        <button type="button" @click="goBackTourist()">景點管理</button>
        <button type="button" @click="goBackBicycle()">租車管理</button>
        <button type="button" @click="goBackTicket()">套票管理</button>
        <!-- <button type="button" @click="goBackActivity()">優惠管理</button> -->
        <!-- <button type="button" @click="goBackAbout()">簡介編輯</button> -->
    </div>    
</template>

<style lang="scss" scoped>
    .sideBar{
        width: 15vw;
        gap: 2vmin;
        display: grid;
        margin-left: 4vmin;

        button{
            width: 15vw;
            height: 10vh;
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
</style>