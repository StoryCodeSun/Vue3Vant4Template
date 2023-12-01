<script setup>
  import { useMenu } from '@/stores/module/menu.js'
  const { menuActive, menuList } = storeToRefs(useMenu())
</script>

<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar v-model="menuActive">
      <template v-for="item in menuList" :key="item.path">
        <van-tabbar-item :to="item.path" :icon="item.icon">{{ item.name }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<route lang="yaml">
title: 菜单
name: layoutMenu
meta:
  requiresAuth: true
</route>
<style lang="scss" scoped>
.layout{
  background-color: var(--van-black);
}
</style>
