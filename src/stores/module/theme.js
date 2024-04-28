export const useTheme = defineStore(
  'theme',
  () => {
    const rootStyle = ref(null)
    const prefer = matchMedia('(prefers-color-scheme: light)')
    const theme = ref('light') // light || dark || system
    // 跟随系统
    function followSystem() {
      document.documentElement.dataset.theme = prefer.matches ? 'light' : 'dark'
    }
    const unwatch = watchEffect(() => {
      if (theme.value === 'system') {
        prefer.addEventListener('change', followSystem)
      } else {
        console.log('theme.value', theme.value)
        document.documentElement.dataset.theme = theme.value
        prefer.removeEventListener('change', followSystem)
      }
      // ...当该侦听器不再需要时
      // unwatch()
    })
    function cutTheme() {
      rootStyle.value = document.documentElement
      document.documentElement.dataset.theme = theme.value
    }
    function changeCustomColor(color = '#000') {
      rootStyle.value.style.setProperty('--custom-color', color)
    }
    onUnmounted(() => {
      unwatch()
    })
    return {
      theme,
      cutTheme,
      changeCustomColor
    }
  },
  {
    // pinia-plugin-persistedstate 持久化存储插件
    // https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
    persist: true // 开启缓存
  }
)
