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
                            <RouterLink to="/FrontAbout" class="routerItem"><i class="fa-solid fa-umbrella-beach"></i>關於 Sea．Life</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontSearch" class="routerItem"><i class="fa-solid fa-bed"></i>訂房</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontActivity" class="routerItem"><i class="fa-solid fa-ticket"></i>套票</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <p class="routerItem" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-location-dot"></i>導覽</p>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><RouterLink to="/FrontTraffic" class="dropdown-item"><i class="fa-solid fa-ferry"></i>交通</RouterLink></li>
                                <li><RouterLink to="/FrontTourist" class="dropdown-item"><i class="fa-solid fa-camera"></i>景點</RouterLink></li>
                                <li><RouterLink to="/FrontMeal" class="dropdown-item"><i class="fa-solid fa-utensils"></i>美食</RouterLink></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontMessage" class="routerItem"><i class="fa-solid fa-note-sticky"></i>留言板</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontLogin" class="routerItem"><i class="fa-solid fa-user-check"></i>登錄</RouterLink>
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
            .dropdown-item{
                font-size: 16pt;
                color: #797A7E;
                &:active{
                    background-color: #BFEAF5;
                }
            }
            i{
                margin-right: 1vmin;
            }
        }
    }
</style>