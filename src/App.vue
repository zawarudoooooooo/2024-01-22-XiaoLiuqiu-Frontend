<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
export default{
  data(){
    return{
      fish:false
    }
  },
  mounted() {
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        scrolltop > 30 ? (this.fish = true) : (this.fish = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  },
  components:{
    Header
  }
}
</script>

<template>
    <div id="TOPUp" v-show="fish" @click="toTop()">
    <a >
      <i class="fa-solid fa-fish"></i>
    </a>
  </div>
  <header><Header/></header>
  <RouterView />
</template>

<style lang="scss" scoped>
  #TOPUp {
    position: fixed;
    right: 2vmin;
    bottom: 18vmin;
    z-index: 1;
    i{
      font-size: 30pt;
      //color: #82AAE3;
      color: #c2dbfb;
      text-shadow: 1.5px 1.5px 1.5px #797A7E;
      &:hover{
        color: #797A7E;
        transform: rotate(360deg);
        transition: 1s;
      }
      &:active{
        color:#82AAE3;
      }
    }
  }

  .gotop {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 30px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: white;
  color: #000000;
}
</style>
