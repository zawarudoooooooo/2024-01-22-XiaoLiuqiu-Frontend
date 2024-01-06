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
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink to="/FrontAbout" class="routerItem">關於 Sea．Life</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontSearch" class="routerItem">訂房</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontActivity" class="routerItem"> 優惠</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <p class="routerItem" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">導覽</p>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontLogin" class="routerItem">登錄</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        width: 100vw;
        height: 14vh;
        background-color: #BFEAF5;
        display: flex;
        position: relative;
        .logo{
            img{
                width: 13vw;
                height: 22vh;
                position: absolute;
                left: 1%;
                top: -26%;
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