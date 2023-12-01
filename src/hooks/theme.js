import { requestAddressData } from "@/service/module/home.js";
import { useTheme } from "@/stores/module/theme.js";
export const useTheme = () => {
  const { proxy } = getCurrentInstance();
  requestAddressData();
  const colorValue = ref();
  const { changeCustomColor } = useTheme();
  const unwatch = watchEffect(() => {
    changeCustomColor(colorValue.value)
    // ...当该侦听器不再需要时
    // unwatch()
  });
  onUnmounted(() => {
    unwatch();
  });
  return {};
};
{/* <input type="color" name="" id="" v-model="colorValue" /> */}
