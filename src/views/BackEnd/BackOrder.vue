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
        <p>訂單管理<i class="fa-solid fa-list-check"></i></p>
    </div>
    <div class="content">
        <div class="list">
            <div class="side">
                <backSideBar />
            </div>
        </div>
        <div class="show">
            <table>
                <tr>
                    <td>訂單編號</td>
                    <td>開始時間</td>
                    <td>結束時間</td>
                    <td>加購項目</td>
                    <td>訂單狀態</td>
                </tr>
                <th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </th>
            </table>
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
        i{
            margin-left: 1vmin;
        }
    }
    .content{
        width: 90vw;
        height: 50vh;
        margin: auto;
        display: flex;
        margin-top: 5vmin;
        position: relative;
        //border: 1px solid black;
        .list{
            width: 80vw;
            height: 50vh;
            display: flex;
            justify-content: space-between;
            margin: auto;
            //border: 1px solid black;
        }
        .show{
            table{
                width:55vw;
                font-size: 20pt;
                color: #797A7E;
                position: absolute;
                text-align: center;
                right: 10%;
                th{
                    td{
                        border: 2px solid #797A7E;
                    }
                }
                tr{
                    td{
                        border: 2px solid #797A7E;
                    }
                }
            }
        }
    }
</style>