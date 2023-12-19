<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{

        }
    },
    methods: {
        goFrontEntry(){
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <div class="header">
        <div class="logo">
            <img src="../../public/seaLifeLogo.png" @click="goFrontEntry()">
        </div>
        <nav>
            <RouterLink to="/FrontSearch" class="routerItem">訂房</RouterLink>
            <RouterLink to="/FrontTourist" class="routerItem">景點</RouterLink>
            <RouterLink to="/FrontActivity" class="routerItem"> 優惠</RouterLink>
            <RouterLink to="/FrontAbout" class="routerItem">關於 Sea．Life</RouterLink>
            <RouterLink to="/FrontLogin" class="routerItem">登錄</RouterLink>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        width: 100vw;
        height: 15vh;
        background-color: #BFEAF5;
        display: flex;
        position: relative;
        .logo{
            img{
                width: 13vw;
                height: 21vh;
                position: absolute;
                top: -5%;
                left: 1%;
            }
        }

        nav{
            position: absolute;
            bottom: 5%;
            right: 2%;
            .routerItem{
                font-size: 18pt;
                text-decoration: none;
                color: #797A7E;
                margin-right: 5vmin;
            }
        }
    }
</style>