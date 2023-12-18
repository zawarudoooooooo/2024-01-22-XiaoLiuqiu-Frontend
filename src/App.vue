<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="content">
    <div class="header">
      <Header/>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
  <RouterView />
</template>

<style lang="scss" scoped>
    .content{
      width: 100vw;
      height: 200vh;
      position: relative;
      .footer{
        position: absolute;
        bottom: 0;
      }
    }
</style>
