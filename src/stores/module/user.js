export const useUserStore = defineStore(
  'useUser',
  () => {
    return {}
  },
  {
    // pinia-plugin-persistedstate 持久化存储插件
    // https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
    // persist: true, // 开启缓存
  }
)
