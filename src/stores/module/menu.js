export const useMenu = defineStore(
  'menu',
  () => {
    const menuActive = ref(0)
    const menuList = ref([
      {
        name: '首页',
        path: '/',
        icon: 'home-o'
      },
      {
        name: '我的',
        path: '/my',
        icon: 'contact-o'
      }
    ])
    return {
      menuList,
      menuActive
    }
  },
  {
    // pinia-plugin-persistedstate 持久化存储插件
    // https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
    persist: {
      key: 'menuActive'
    } // 开启缓存
  }
)
