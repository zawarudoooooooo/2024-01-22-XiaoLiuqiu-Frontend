<script>
import Footer from '../../components/Footer.vue';
export default{
    data(){
        return{

        }
    },
    methods:{
        goBackLogin(){
            this.$router.push('/BackLogin')
        }

    },
    components:{
        Footer
    }
}
</script>

<template>
    <div class="content">

        <i class="fa-solid fa-gear" @click="goBackLogin()"></i>
    </div>
    
<Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 70vh;
        position: relative;

        i{
            font-size: 16pt;
            color:#F7F2E7;
            position: absolute;
            right: 1%;
            bottom: -20%;
            &:hover{
                color: #797A7E;
            }
            &:active{
                color:#F7F2E7;
            }
        }
    }
</style>