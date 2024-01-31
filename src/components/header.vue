<script>
import axios from 'axios';
import swal from 'sweetalert';
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{
            cookie:"",
            cookieTest:"",
            account:""
        }
    },
    methods: {
        goFrontEntry(){
            this.$router.push('/')
        },
        goUserInfo(){
            this.$router.push('/FrontPersonInfo')
        },
        goBack(){
            this.$router.push('/BackOrder')
        },
        logout(){
            axios({
            url:'http://localhost:8080/member/logout',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true,
            params:{
            },
            data:{

            },
            }).then(res=>{
            console.log(res.data);
            swal({
                        title: '登出成功',
                        text: '已登出',
                        icon: 'success',
                        buttons: '確認',
                        dangerMode: true,
                    })
                    .then((willRefresh) => {
                        if (willRefresh) {
                            this.$router.push('/')
                          // 在这里可以执行页面刷新的操作
                            setTimeout(function() {
                                window.location.reload();
                            },100)
                        } 
                    });
            })
        },
        employeeLogout(){
            axios({
            url:'http://localhost:8080/employee/logout',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true,
            params:{
            },
            data:{
                
            },
            }).then(res=>{
            console.log(res.data);
            swal({
                        title: '登出成功',
                        text: '已登出',
                        icon: 'success',
                        buttons: '確認',
                        dangerMode: true,
                    })
                    .then((willRefresh) => {
                        if (willRefresh) {
                            this.$router.push('/')
                          // 在这里可以执行页面刷新的操作
                            setTimeout(function() {
                                window.location.reload();
                            },100)
                        } 
                    });
            })
        },
    },
    mounted(){
        this.cookie=document.cookie;
        //console.log(this.cookie);
        this.cookieTest=this.cookie.split("=")[0]
        this.account=this.cookie.split("=")[1]
        // console.log(this.cookieTest);
    }
}
</script>

<template>
    <div class="header">
        <div class="logo">
            <img src="../../public/seaLifeLogo.png" @click="goFrontEntry()">
        </div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <RouterLink to="/FrontAbout" class="routerItem" id="about"><i class="fa-solid fa-umbrella-beach"></i>關於 Sea．Life</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink to="/FrontSearch" class="routerItem"><i class="fa-solid fa-bed"></i>房型總覽</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontTicket" class="routerItem"><i class="fa-solid fa-comments-dollar"></i>超值加購</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <p class="routerItem" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-circle-info"></i>導覽</p>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><RouterLink to="/FrontTraffic" class="dropdown-item"><i class="fa-solid fa-ferry"></i>交通</RouterLink></li>
                                <li><RouterLink to="/FrontTourist" class="dropdown-item"><i class="fa-solid fa-camera"></i>景點</RouterLink></li>
                                <li><RouterLink to="/FrontMeal" class="dropdown-item"><i class="fa-solid fa-utensils"></i>美食</RouterLink></li>
                                <li><RouterLink to="/FrontOther" class="dropdown-item"><i class="fa-regular fa-lightbulb"></i>常見問答</RouterLink></li>
                                <li><RouterLink to="/FrontRecommand" class="dropdown-item"><i class="fa-regular fa-thumbs-up"></i>推薦行程</RouterLink></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/FrontMessage" class="routerItem"><i class="fa-solid fa-note-sticky"></i>留言板</RouterLink>
                        </li>
                        <li class="nav-item" v-if="this.cookie==''">
                            <RouterLink to="/FrontLogin" class="routerItem"><i class="fa-solid fa-user"></i>登入</RouterLink>
                        </li>
                        <li class="nav-item dropdown"  v-if="this.cookie!=''&&this.cookieTest!='employee'">
                            <p class="routerItem" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user"></i>您好，{{this.account}}</p>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li class="dropdown-item" @click="goUserInfo()"><i class="fa-solid fa-user-check"></i>會員中心</li>
                                <li class="dropdown-item" @click="logout()"><i class="fa-solid fa-right-from-bracket"></i>登出</li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown" v-if="this.cookie!=''&&this.cookieTest=='employee'">
                            <p class="routerItem" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user-gear"></i>員工</p>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li class="dropdown-item" @click="goBack()"><i class="fa-solid fa-gears"></i>後台管理</li>
                                <li class="dropdown-item" @click="employeeLogout()"><i class="fa-solid fa-right-from-bracket"></i>員工登出</li>
                            </ul>
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
                top: -30%;
                cursor: pointer;
            }
        }
        nav{
            position: absolute;
            bottom: -23%;
            right: 2%;
            #about{
                margin-bottom: 2vmin;
            }
            .routerItem{
                font-size: 17pt;
                text-decoration: none;
                color: #5f512c;
                margin-right: 5vmin;
            }
            .dropdown-item{
                font-size: 16pt;
                color: #5f512c;
                text-align: center;
                cursor: pointer;
                &:active{
                    background-color: #BFEAF5;
                }
            }
            i{
                margin-right: 1vmin;
            }
            button{
                border: none;
                background-color: transparent;
            }
        }
    }
    @media(max-width:1200px){
        .header{
            height: 10vh;
            position: relative;
            .logo{
                img{
                    width: 16vw;
                    height: 12vh;
                    position: absolute;
                    top: 2%;
                }
            }
            nav{
                position: absolute;
                bottom: -50%;
                .routerItem{
                    font-size: 14pt;
                    margin-right: 1vmin;
                }
            }
        }
    }
    @media(max-width:992px){
        .header{
            .logo{
                img{
                    width: 15vw;
                    height: 12vh;
                }
            }
            nav{
                .container-fluid{
                    width: 33vw;
                    .navbar-collapse{
                        background-color: aliceblue;
                        border-radius: 5px;
                        text-align: center;
                        p{
                            margin-bottom: 0.5vmin;
                        }
                    }
                }
                #about{
                    margin-top: 1.5vmin;
                }
            }
        }
    }
    @media(max-width:576px){
        .header{
            position: relative;
            .logo{
                img{
                    width: 30vw;
                    height: 14vh;
                    position: absolute;
                    top: -10%;
                }
            }
            nav{
                .container-fluid{
                    width: 52vw;
                    #about{
                        font-size: 13pt;
                        margin-top: 1.5vmin;
                    }
                }

            }
        }
    }
    @media(max-width:414px){
        .header{
            nav{
                .container-fluid{
                    width: 57vw;
                }
            }
        }
    }
</style>