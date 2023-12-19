<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <header><Header/></header>
    <footer><Footer /></footer>
  <RouterView />
</template>

<style lang="scss" scoped>
    body{
      position: relative;
      height: 500vh;

      footer{
        position: absolute;
        bottom: 0;
      }
    }
</style>
