// 本地存储序列化

/**
 * 存
 * @param {String} key 键
 * @param {Any} value 值
 */
export function setSto(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * 取
 * @param {String} key 键
 */
export function getSto(key) {
  return JSON.parse(localStorage.getItem(key));
}
/**
 * 删除
 * @param {String} key 键
 */
export function removeSto(key) {
  localStorage.removeItem(key);
}
/**
 * 清空
 */
export function clearSto() {
  localStorage.clear();
}
/**
 * 行内样式转换
 * @param {String} px 行内元素适用
 * @returns 转换后的像素单位
 * <div :style="{ 'font-size': proxy.$px2rem('16px') }">测试</div>
 */
export const px2rem = (px) => {
  if (/%/gi.test(px)) {
      // 有百分号%，特殊处理，表述pc是一个有百分号的数，比如：90%
      return px;
  } else {
      return parseFloat(px) / 75 + 'rem'; // 这里的75，和postcss.config.js里的rootValue值对应
  }
};
