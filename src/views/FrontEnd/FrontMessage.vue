<script>
    import Footer from '../../components/Footer.vue';
    export default{
    data(){
        return{

        }
    },
    components:{
        Footer
    }
}

</script>

<template>
    <div class="content">
        <div class="title">
            <p>留言板</p>
        </div>
        <hr>
        <div class="card">
            <img src="../../../public/message/IMG_1210.JPG" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">海龜郵筒🐢</h5>
                    <p class="card-text">郵筒上，有海龜!超級可愛✨</p>
                    <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
                </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
    .content{
        width: 90vw;
        height: 67vh;
        margin: auto;
        margin-top: 5vmin;
        .title{
            p{
                font-size: 28pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
                margin-bottom: 3vmin;
            }
        }
        hr{
            margin-bottom: 3vmin;
        }
        .card{
            width: 20vw;
            height: 50vh;
            border-radius: 6px;
            box-shadow: 1px 1px 1px lightgray;
        }
    }
</style>