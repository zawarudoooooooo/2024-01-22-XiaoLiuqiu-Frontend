<template>
    <div>
        <h1>請稍作等待</h1>
    </div>
    <div>
        <h4><a href="" @click="goHome">若5秒後仍未跳轉請點此連結</a></h4>
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    mounted(){
        const email = this.$route.query.memberEmail
        const verify = this.$route.query.verificationCode

        console.log(email);
        console.log(verify);

        axios({
                url:'http://localhost:8080/member/verify',
                method: "POST",
                params: {
                    memberEmail: email,
                    verificationCode: verify,
                }
                
            })
            .then(res => {
                console.log(res)
                setTimeout(() =>{
                    this.$router.push('/')
                }, 5000)
            })
            
            .catch(error => console.error(error))

    },
    methods:{
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
    div{
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 20px;
    }
</style>