<script setup>
import { requestAddressData } from '@/service/module/home.js';
const { proxy } = getCurrentInstance()
requestAddressData()
</script>

<template>
  <div class="home">

  </div>
</template>
<route lang="yaml">
name: home
path: /home
meta:
  title: 首页
  back: false
  requiresAuth: true
</route>
<style lang="css" scoped>
  .home {
    width: 750px;
    height: 100px;
    border-radius: 8px, 8px, 0px, 0px;
    background: rgba(255, 255, 255, 1);
    background: red;
  }
</style>
