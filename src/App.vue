<script setup>
  const route = useRoute()
  console.log('route.meta', route)
  // 通过路由元信息传递
  // route.meta
  // tab: true 展示顶部导航栏
  // title: 首页 tab 标题
  // back: false 关闭返回按钮
  // leftText: 返回 左侧文字
  const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar
    v-if="route?.meta?.tab ?? true"
    :title="route?.meta?.title"
    :left-text="route?.meta?.leftText ?? ''"
    :left-arrow="route?.meta?.back ?? true"
    @click-left="onClickLeft"
  />

  <router-view></router-view>
</template>

<style scoped></style>
