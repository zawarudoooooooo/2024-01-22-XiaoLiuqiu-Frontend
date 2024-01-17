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
        .icon{
            text-align: center;

            i{
                font-size: 26pt;
                color:#F7F2E7;
                margin-right: 3vmin;
                margin-top: 5vmin;

                &:hover{
                    color: #797A7E;
                }
                &:active{
                    color:#F7F2E7;
                }
            }
        }
    }
    @media(max-width:1200px){
        .footer{
            height: 8vh;
            .icon{
                i{
                    font-size: 30pt;
                    margin-top: 3.5vmin;
                }

            }
        }
    }
</style>