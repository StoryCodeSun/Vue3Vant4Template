<script setup>
  import { useMenu } from '@/stores/module/menu.js';
  const { menuActive } = storeToRefs(useMenu)
</script>

<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar v-model="menuActive">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/" icon="contact-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<route lang="yaml">
title: 菜单
name: layoutMenu
meta:
  requiresAuth: true
</route>
<style lang="scss" scoped></style>
