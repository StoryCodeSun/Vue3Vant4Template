<script setup>
  import { requestAddressData } from '@/service/module/home.js'
  const { proxy } = getCurrentInstance()
  requestAddressData()
  import { useTheme } from '@/stores/module/theme.js'
  const colorValue = ref()
  const { changeCustomColor } = useTheme()
  const unwatch = watchEffect(() => {
    // changeCustomColor(colorValue.value)
    // ...当该侦听器不再需要时
    // unwatch()
  })
</script>

<template>
  <!-- <input type="color" name="" id="" v-model="colorValue" /> -->
  <!-- <div class="home">
  </div> -->
  <div class="home1">
  </div>
  <div class="home2">
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
<style lang="scss" scoped>
  .home {
    width: 750px;
    height: 100px;
    border-radius: 8px, 8px, 0px, 0px;
    background: var(--back-down10-color);
  }
  .home1 {
    width: 750px;
    height: 100px;
    border-radius: 8px, 8px, 0px, 0px;
    background: $custom-color;
  }
  .home2 {
    width: 750px;
    height: 100px;
    border-radius: 8px, 8px, 0px, 0px;
    /* background: var(--back-up10-color); */
    background: $back-up10-color;
  }
</style>
