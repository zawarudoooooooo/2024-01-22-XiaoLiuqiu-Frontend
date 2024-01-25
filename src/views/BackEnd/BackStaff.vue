<script>
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import backSideBar from '../../components/backSideBar.vue';
export default {
    data(){
        return{
            employee:"",
            account:"",
            pwd:"123",
            cookie:"",
            access: 0,
            active: false,
            password:"",
            newPassword:"",
            confirmPassword:"",
            employeeId:"",
            employees:[],
            department: "",
            role: "",
            giveAccess: "",
        }
    },
    mounted(){
        this.employeeData();
        this.access = this.getAccess();
        console.log(this.getAccess());
        console.log(this.access)
    },
    methods: {
        employeeData(){
            const cookieValue = this.getCookie("employee");
            console.log(cookieValue);
            const [account] = cookieValue.split(":");

            axios({
            url:'http://localhost:8080/employee/employeeSearch',
            method:'POST',
            withCredentials: true,
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                account: account
            },
            data:{

            },
            }).then(res=>{
                const account = res.data.account
                this.employees = res.data.employeeList
                console.log(this.employees);
            })
        },
        employeeAdd(){
            axios({
            url:'http://localhost:8080/employee/create',
            method:'POST',
            withCredentials: true,
            headers:{
                'Content-Type':'application/json'
            },
            data:{
                account:this.account,
                password:this.pwd,
                department: this.department,
                access: this.giveAccess,
                role: this.role
            },
            }).then(res=>{
            swal("成功", "已新增員工", "success");
            this.account=""
            console.log(res.data);
            this.employeeData();
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
                    new_password:this.newPassword,
                    confirm_password:this.confirmPassword,
                    
                },
            }).then(res => {
                console.log(res.data)
                if(res.data.rtncode=="SUCCESSFUL"){
                
                    swal("成功","已變更密碼", "success");
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
        },
        employeeActive(){
            const cookieValue = this.getCookie("employee");
            console.log(cookieValue);
            const [account] = cookieValue.split(":");

            axios({
            url:'http://localhost:8080/employee/active',
            method:'POST',
            withCredentials: true,
            
            headers:{
                'Content-Type':'application/json',
            },
            params:{
                account: account
            },
            }).then(res=>{
                console.log(res);
                if(res.data.rtncode=="SUCCESSFUL"){
                    swal("成功","已完成驗證", "success");
                    this.employeeData();
                }else if(res.data.rtncode=="ACCOUNT_IS_ALREADY_ACTIVED"){
                    swal("錯誤", "帳號已完成驗證", "warning");
                }else{
                    swal("錯誤", "驗證未成功", "error");
                }
            })
        },
        deactive(account){

            axios({
            url:'http://localhost:8080/employee/deactive',
            method:'POST',
            withCredentials: true,
            headers:{
                'Content-Type':'application/json',
            },
            params:{
                account: account
            },
            }).then(res=>{
                console.log(res);
                if(res.data.rtncode=="SUCCESSFUL"){
                    swal("成功","刪除員工驗證狀態", "success");
                    this.employeeData();
                }else{
                    swal("錯誤", "刪除員工驗證未成功", "error");
                }
            })
            
        },
        confirmDeactive(account){
            Swal.fire({
                title: '真的要執行嗎?',
                text: '此動作將視為該員工已離職',
                showCancelButton: true,
                confirmButtonText: '確定',
                cancelButtonText: '取消',
                preConfirm: () => {
                    return this.deactive(account)
                },
            })
        },
        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) {
                const [account, access, active] = parts.pop().split(';').shift().split(":");
                this.access = parseInt(access);
                this.active = active === "true";  
            return account;
        }
        return "";
        },
        getActive() {
            const cookieValue = this.getCookie("employee");
            return cookieValue ? cookieValue.split(":")[2] === "true" : false;
    },
        getAccess(){
            const cookieValue = this.getCookie("employee")
            console.log(cookieValue);
            if(cookieValue){
                const parts = cookieValue.split(":")
                console.log("Cookie parts:", parts);
                return parts.length === 3 ? parseInt(parts[1]) : 0
            }
            return 0
        },
        hasAccess(requiredAccess){
            return this.access = requiredAccess
        },
        getRole(role){
            if(role === "ADMINISTRATIVE_SUPERVISOR"){
                return "人事主管"
            }else if(role === "OPERATIONS_SUPERVISOR"){
                return "營運主管"
            }else if(role === "HOUSEKEEPING_SUPERVISOR"){
                return "房務主管"
            }else{
                return "基層員工"
            }
        },
        getDepartment(department){
            if(department === "HR"){
                return "人事部"
            }else if(department === "OPERATIONS"){
                return "營運部"
            }else if(department === "HOUSEKEEPING"){
                return "房務部"
            }else{
                return "櫃台"
            }
        }
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
                    <button type="button" v-if="this.access == 100" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">新增人員
                    </button>
                    <button type="button" data-bs-toggle="modal" 
                        data-bs-target="#exampleModalpwd">修改密碼
                    </button>
                    <button v-if="this.active === false" @click="employeeActive">
                        驗證
                    </button>
                </div>
                <div class="employee">
                    <table>
                        <thead>
                            <td>員工編號</td>
                            <td>員工帳號</td>
                            <td>職位</td>
                            <td>部門</td>
                            <td>驗證</td>
                            <td v-if="this.access === 100">離職</td>
                        </thead>
                        <tbody>
                            <tr v-for=" item in employees">
                                <td>{{ item.employeeId }}</td>
                                <td>{{ item.account }}</td>
                                <td>{{ getRole(item.role) }}</td>
                                <td>{{ getDepartment(item.department) }}</td>
                                <td v-if="item.active === true">已驗證</td>
                                <td v-else>尚未驗證</td>
                                <td v-if="this.access === 100">
                                    <input type="button" value="確認" @click="confirmDeactive(item.account)">
                                </td>
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
                                <label for="recipient-name" class="col-form-label">帳號 :</label>
                                <input type="text" class="form-control" v-model="this.account" id="recipient-name">

                                <label for="recipient-name" class="col-form-label" style="margin-left: 20px;">部門 :</label>
                                <select name="department" id="recipient-name" v-model="this.department" style="margin: 10px;">
                                    <option value="">請選擇</option>
                                    <option value="HR">人事部</option>
                                    <option value="OPERATIONS">營運部</option>
                                    <option value="HOUSEKEEPING">房務部</option>
                                    <option value="COUNTER">櫃台</option>
                                </select>
                                

                                <label for="recipient-name" class="col-form-label">權限 :</label>
                                <select name="access" id="recipient-name" v-model="this.giveAccess" style="margin: 10px;">
                                    <option value="">請選擇</option>
                                    <option value="100">高階</option>
                                    <option value="50">中階</option>
                                    <option value="0">一般</option>
                                </select>
                                

                                <label for="recipient-name" class="col-form-label">職位 :</label>
                                <select name="role" id="recipient-name" v-model="this.role" style="margin: 10px;">
                                    <option value="">請選擇</option>
                                    <option value="ADMINISTRATIVE_SUPERVISOR">人事主管</option>
                                    <option value="OPERATIONS_SUPERVISOR">營運主管</option>
                                    <option value="HOUSEKEEPING_SUPERVISOR">房務主管</option>
                                    <option value="EMPLOYEE">一般員工</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
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
                                <label for="recipient-name" class="col-form-label">舊密碼 :</label>
                                <input type="password" class="form-control" id="recipient-name" v-model="this.password">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">新密碼 :</label>
                                <input type="password" class="form-control" id="recipient-name" v-model="this.newpassword">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">確認新密碼 :</label>
                                <input type="password" class="form-control" id="recipient-name" v-model="confirmpassword">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">取消</button>
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
        margin-left: 45%;
        //height: 8vh;
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
            position: relative;
            .show{
                .buttonArea{
                    width: 20vw;
                    display: flex;
                    justify-content: space-between;
                    button {
                        width: 8vw;
                        height: 5vh;
                        border: none;
                        border-radius: 5px;
                        color: #797A7E;
                        box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(2, 40, 63, 0.2);
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