<script>
import axios from 'axios';
import backSideBar from '../../components/backSideBar.vue';
export default {
    data() {
        return {
            account: "",
            password: "",
            accountAccess:"",
            passwordAccess:"",
            id:"",
            accessStaff: false,
            accessMaster: true,
            oldPassword:"",
            newpassword:"",
            confirmpassword:"",
        }
    },
    methods: {
        createStaff() {
            axios({
                url: 'http://localhost:8080/employee/create',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    account: this.account,
                    password: this.password,
                    access: this.accessStaff
                },
            }).then(res => {
                console.log(res.data)
                if (res.data.message == "Successful!!") {
                    swal("成功", "success");

                } else {
                    swal("錯誤", "error");
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
        createStaffAccess() {

            axios({
                url: 'http://localhost:8080/employee/createMaster',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    account: this.accountAccess,
                    password: this.passwordAccess,
                    access: this.accessMaster,
                },
            }).then(res => {
                console.log(res.data)
                if (res.data.message == "Successful!!") {
                    swal("成功", "success");

                } else {
                    swal("錯誤", "error");
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
        update() {

            axios({
                url: 'http://localhost:8080/employee/update',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    employeeId: this.id,
                },
                data: {

                    password: this.oldpassword,
                    new_password: this.newpassword,
                    confirm_password: this.confirmpassword,
                },
            }).then(res => {
                console.log(res.data)
                if (res.data.message == "Successful!!") {
                    swal("成功", "success");

                } else {
                    swal("錯誤", "error");
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
    },
    components: {
        backSideBar
    }
}
</script>

<template>
    <div class="title">
        <p>員工管理</p>
    </div>
    <div class="content">
        <div class="side">
            <backSideBar />
        </div>
        <div class="list">
            <div class="buttonArea">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">新增人員
                </button>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalBig">新增管理
                </button>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalpwd">修改密碼
                </button>
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
                                <input type="text" class="form-control" id="recipient-name" v-model="this.account">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">人員密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal"
                            @click="createStaff()">確認新增</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 新增管理 -->
        <div class="modal fade" id="exampleModalBig" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">新增管理</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">管理帳號 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.accountAccess">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">管理密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.passwordAccess">
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal"
                            @click="createStaffAccess()">新增管理</button>
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
                                <label for="recipient-name" class="col-form-label" >人員編號 :</label>
                                <input type="number" class="form-control" id="recipient-name" v-model="this.id">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">old密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.oldpassword">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">新密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.newpassword">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">確認密碼 :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="this.confirmpassword">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="update()">確認更改</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.title {
    font-size: 28pt;
    font-weight: bold;
    color: #82AAE3;
    text-align: center;
    margin-top: 3vmin;
}

.content {
    width: 90vw;
    height: 50vh;
    margin: auto;
    display: flex;
    margin-top: 5vmin;
    justify-content: space-around;

    //border: 1px solid black;
    .list {
        width: 60vw;
        position: relative;

        //border: 1px solid black;
        .buttonArea {
            width: 20vw;
            //border: 1px solid black;
            display: flex;
            justify-content: space-between;
            position: absolute;
            right: 20%;

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
    }
}
</style>