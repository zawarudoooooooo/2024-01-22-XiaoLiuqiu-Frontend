<script>
import backSideBar from '../../components/backSideBar.vue';
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    components:{
        backSideBar
    }
}
</script>

<template>
    <div class="title">
        <p>訂單管理</p>
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