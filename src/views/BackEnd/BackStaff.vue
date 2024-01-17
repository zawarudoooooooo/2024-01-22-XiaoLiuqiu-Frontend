<script>
import axios from 'axios';
import swal from 'sweetalert';
import backSideBar from '../../components/backSideBar.vue';
export default {
    data(){
        return{
            employee:"",
            account:"",
            pwd:"qaz159",
            cookie:"",
            access:"",
            password:"",
            newpassword:"",
            confirmpassword:"",
            employeeId:"",

        }
    },
    methods:{
        employeeAdd(){
            axios({
            url:'http://localhost:8080/employee/createMaster',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            data:{
                account:this.account,
                password:this.pwd,
                access:false
            },
            }).then(res=>{
            swal("新增帳號", "新增成功", "success");
            this.account=""
            console.log(res.data);
            })
        },
        employeeChange() {
            axios({
                url: 'http://localhost:8080/employee/update',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                params:{
                    employeeId:this.employeeId
                },
                data: {
                    password:this.password,
                    new_password:this.newpassword,
                    confirm_password:this.confirmpassword,
                    
                },
            }).then(res => {
                console.log(res.data)
                if(res.data.rtncode=="SUCCESSFUL"){
                
                    swal("新增成功", "success");
                // this.$router.push('FrontPersonInfo')
            }else{
                swal("密碼", "錯誤", "error");
            }
            }).catch(error => {
                if (error.response) {
                    // 這裡可以取得伺服器回應的詳細信息
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                console.error('Error:', error);
            });
        }
    },
    mounted(){
        axios({
            url:'http://localhost:8080/employee/search',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            data:{
                account:"",
                password:"",
                access:false
            },
            }).then(res=>{
            this.employee = res.data.employeeList;
            console.log(this.employee);
            })

            this.cookie=document.cookie.split("=")[1];

            console.log(this.cookie);

            axios({
            url:'http://localhost:8080/employee/employeeSearch',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                account:this.cookie
            },
            data:{

            },
            }).then(res=>{
                res.data.employeeList.forEach(element => {
                    this.access=element.access
                    console.log(this.access);
                });
            })
    },
    components:{
        backSideBar
    }
}
</script>

<template>
    <div class="title">
        <p>員工管理<i class="fa-solid fa-users"></i></p>
    </div>
    <div class="content">
        <div class="list">
            <div class="side">
                <backSideBar />
            </div>
            <div class="show">
                <div class="buttonArea">
                    <button type="button" v-if="this.access" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">新增人員
                    </button>
                    <button type="button" data-bs-toggle="modal" 
                        data-bs-target="#exampleModalpwd">修改密碼
                    </button>
                </div>
                <div class="employee" v-if="this.access">
                    <table>
                        <thead>
                            <td>員工編號</td>
                            <td>員工帳號</td>
                            <td>職位</td>
                        </thead>
                        <tbody>
                            <tr v-for=" (item) in employee">
                                <td>{{ item.employeeId }}</td>
                                <td>{{ item.account }}</td>
                                <td v-if="item.access">主管</td>
                                <td v-if="!item.access">員工</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

<!-- 新增人員modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">新增人員</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">人員帳號 :</label>
                                <input type="text" class="form-control" v-model="this.account" id="recipient-name">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="employeeAdd()">確認新增</button>
                    </div>
                </div>
            </div>
        </div>
<!-- 人員修改密碼modal -->
        <div class="modal fade" id="exampleModalpwd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">修改密碼</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">員工編號 :</label>
                                <input type="number" class="form-control" id="recipient-name" v-model="employeeId">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">舊密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.password">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">新密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newpassword">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">確認密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="confirmpassword">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="employeeChange()">確認更改</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
</template>

<style lang="scss" scoped>
    .title{
        font-size: 28pt;
        font-weight: bold;
        color: #82AAE3;
        //text-align: center;
        margin-top: 4vmin;
        height: 8vh;
        position: relative;
        p{
            position: absolute;
            right: 35%;
        }
        i{
            margin-left: 1vmin;
        }
    }
    .content{
        width: 90vw;
        height: 50vh;
        margin: auto;
        margin-top: 5vmin;
        .list{
            width: 80vw;
            height: 50vh;
            display: flex;
            justify-content: space-between;
            margin: auto;
            //border: 1px solid black;
            position: relative;
            .show{
                .buttonArea{
                    width: 20vw;
                    display: flex;
                    justify-content: space-between;
                    //border: 1px solid black;
                    button {
                        width: 8vw;
                        height: 5vh;
                        border: none;
                        border-radius: 5px;
                        color: #797A7E;
                        &:hover {
                            background-color: #797A7E;
                            color: white;
                        }
                        &:active {
                            background-color: #F7F2E7;
                            color: #797A7E;
                        }
                    }
                }
                .employee{
                    font-size: 20pt;
                    color: #797A7E;
                    table{
                        width: 60vw;
                        text-align: center;
                        position: absolute;
                        left: 25%;
                        top: 15%;
                        thead{
                            td{
                                border: 2px solid #797A7E;
                            }
                        }
                        tbody{
                            tr{
                                td{
                                    border: 2px solid #797A7E;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>