<script>
import Footer from '../../components/Footer.vue';
export default{
    data(){
        return{
            totalroom:1,
            totaladult:1,
            totalchild:0,
            childagecheck:false,
        }
    },
    methods:{
// 新增和減少房間數量
        increaseRoom(){
            if(this.totalroom<15){
                this.totalroom++
            }else{
                alert("已達房間數上限")
            }
        },
        decreaseRoom(){
            if(this.totalroom>1){
                this.totalroom--
            }else{
                alert("已達房間數下限")
            }
        },
//新增和減少成人數量
        increaseAdult(){
            if(this.totaladult<40){
                this.totaladult++
            }else{
                alert("已達輸入人數上限")
            }
        },
        decreaseAdult(){
            if(this.totaladult>1){
                this.totaladult--
            }else{
                alert("已達輸入人數下限")
            }
        },
//新增和減少孩童數量
        increaseChild(){
            if(this.totalchild<20){
                this.totalchild++
                this.increaseChildAge()
            }else{
                alert("已達輸入人數上限")
            }
        },
        decreaseChild(){
            if(this.totalchild>0){
                this.totalchild--
                this.decreaseChildAge()
            }else{
                alert("已達輸入人數下限")
            }
        },
///孩童年齡選擇增加畫面
        increaseChildAge(){
            this.childagecheck=true
        },
///孩童年齡選擇減少畫面
        decreaseChildAge(){
            this.childagecheck=false
        },
        goFrontEntry(){
            this.$router.push('/')
        }
    },
    components:{
        Footer
    },
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>訂房條件篩選</p>
        </div>
        <div class="checkInDate">
            <p>入住日期</p>
            <input type="date">
        </div>
        <div class="checkOutDate">
            <p>退房日期</p>
            <input type="date">
        </div>
        <div class="room">
            <p>客房</p>
            <div class="roomChoose">
                <i class="fa-solid fa-circle-minus" @click="decreaseRoom()"></i>
                <p>{{this.totalroom}}</p>
                <i class="fa-solid fa-circle-plus" @click="increaseRoom()"></i>
            </div>
        </div>
        <div class="adult">
            <p>成人</p>
            <div class="adultChoose">
                <i class="fa-solid fa-circle-minus" @click="decreaseAdult()"></i>
                <p>{{ this.totaladult }}</p>
                <i class="fa-solid fa-circle-plus" @click=increaseAdult()></i>
            </div>
        </div>
        <div class="child">
            <p>孩童</p>
            <div class="childChoose">
                <i class="fa-solid fa-circle-minus" @click="decreaseChild()"></i>
                <p>{{ this.totalchild }}</p>
                <i class="fa-solid fa-circle-plus" @click="increaseChild()"></i>
            </div>
        </div>
        <div class="childAgeChoose" v-if="childagecheck">
            <select>
                <option>年齡(必填)</option>
                <option>1歲</option>
                <option>2歲</option>
                <option>3歲</option>
                <option>4歲</option>
                <option>5歲</option>
                <option>6歲</option>
                <option>7歲</option>
                <option>8歲</option>
                <option>9歲</option>
                <option>10歲</option>
                <option>11歲</option>
                <option>12歲</option>
                <option>13歲</option>
                <option>14歲</option>
                <option>15歲</option>
                <option>16歲</option>
                <option>17歲</option>
            </select>
        </div>        
        <div class="buttonArea">
            <button type="button" @click="goFrontEntry()">取消</button>
            <button type="button">搜尋</button>
        </div>
    </div>
    <Footer/>
</template>

<style lang="scss" scoped>
    .content{
        width: 20vw;
        height: 85vh;
        margin: auto;
        margin-top: 6vmin;
        .title{
            p{
                font-size: 28pt;
                font-weight: bold;
                color: #82AAE3;
                text-align: center;
                margin-bottom: 3vmin;
            }
        }

        input{
            width: 20vw;
            height: 5vh;
            border-radius: 10px;
            border-style: none;
            outline: none;
            background-color: #D9D9D9;
            padding-left: 2vmin;
            margin-bottom: 2vmin;
        }

        p{
                margin: 0;
                font-size: 16pt;
                color: #797A7E;
        }

        i{
            color: #F7F2E7;
        }
        .room{
            .roomChoose{
                width: 20vw;
                height: 5vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: #D9D9D9;
                display:flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 2vmin;
                padding-right: 2vmin;
                margin-bottom: 2vmin;
            }
        }
        .adult{
            .adultChoose{
                width: 20vw;
                height: 5vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: #D9D9D9;
                display:flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 2vmin;
                padding-right: 2vmin;
                margin-bottom: 2vmin;
            }
        }
        .child{
            .childChoose{
                width: 20vw;
                height: 5vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: #D9D9D9;
                display:flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 2vmin;
                padding-right: 2vmin;
                margin-bottom: 2vmin;
            }
        }
        .childAgeChoose{
            select{
                width: 10vw;
                height: 5vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: #F7F2E7;
                color: #797A7E;
                option{
                    text-align: center;
                }
            }
        }
        .buttonArea{
            width: 20vw;
            display: flex;
            justify-content: space-around;
            margin-top: 5vmin;
            button{
                width: 8vw;
                height: 5vh;
                border: none;
                border-radius: 5px;
                color: #797A7E;

                &:hover{
                    background-color: #797A7E;
                    color: white;
                }
                &:active{
                    background-color: #F7F2E7;
                    color: #797A7E;
                }
            }
        }
    }
</style>