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
        <p>房型管理</p>
    </div>
    <div class="content">
        <div class="side">
            <backSideBar />
        </div>
        <div class="list">

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
        margin-top: 5vmin;
        //border: 1px solid black;
    }
</style>