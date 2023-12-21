<script>
import backSideBar from '../../components/backSideBar.vue';
export default{
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
        <p>後台總覽</p>
    </div>
    <backSideBar />
</template>

<style lang="scss" scoped>
    .title{
        font-size: 28pt;
        font-weight: bold;
        color: #82AAE3;
        text-align: center;
        margin-top: 3vmin;
    }
</style>