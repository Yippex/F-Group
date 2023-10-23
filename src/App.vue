<script setup>
import {  RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import navBarVue from './components/navBar.vue'
</script>

<template>
  <div>
    <navBarVue />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>

</style>
