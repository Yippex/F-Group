<script setup>
import {  RouterView } from 'vue-router'
import navBarVue from './components/navBar.vue'
</script>

<template>
  <div>
    <navBarVue />
    <router-view></router-view>
   
  </div>
</template>

<style scoped>

</style>
