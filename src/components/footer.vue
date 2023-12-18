<script>
export default{
    data(){
        return{

        }
    },
}
</script>

<template>
    <div class="footer">
        <div class="icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-regular fa-envelope"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        width: 100vw;
        height: 15vh;
        background-color: #BFEAF5;
        position: relative;
        .icon{
            position: absolute;
            top: 30%;
            left: 40%;
            i{
                font-size: 26pt;
                color:#F7F2E7;
                margin-right: 3vmin;

                &:hover{
                    color: #797A7E;
                }
                &:active{
                    color:#F7F2E7;
                }
            }
        }
    }

</style>