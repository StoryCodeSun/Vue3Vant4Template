<script setup name="home">
// const Global = inject('Global')
const { proxy } = getCurrentInstance()
// console.log('Global', Global)
console.log('httpUrl', proxy.httpUrl)
console.log('codeSun', codeSun)
</script>

<template>
  <div class="home"></div>
</template>

<route lang="yaml">
name: home
path: /home
meta:
  title: 首页
  back: false
  requiresAuth: true
</route>

<style lang="scss" scoped>
.home {
  width: 750px;
  height: 100px;
  border-radius: 8px, 8px, 0px, 0px;
  background: var(--back-down10-color);
}
</style>
