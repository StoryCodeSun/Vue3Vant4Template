// import.meta.glob
/**
 * 存
 * @param {string} key 键
 * @param {Any} value 值
 * @param {number} expires 过期时间 毫秒 不传默认: 0 永久储存
 */
export function setLSto(key, value, expires = 0) {
  if (expires) {
    let startTime = new Date().getTime() // 记录缓存时间，毫秒
    localStorage.setItem(key, JSON.stringify({ key, value, expires, startTime }))
  } else {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
/**
 * 取
 * @param {String} key 键
 */
export function getLSto(key) {
  const parseValue = JSON.parse(localStorage.getItem(key))
  if (parseValue?.startTime) {
    let currentTime = new Date().getTime()
    if (currentTime - parseValue.startTime > parseValue.expires) {
      //缓存过期，清除缓存，返回false
      removeSto(key)
      return false
    } else {
      return parseValue.value
    }
  } else {
    return parseValue
  }
}
/**
 * 删除
 * @param {String} key 键
 */
export function removeLSto(key) {
  localStorage.removeItem(key)
}
/**
 * 清空
 */
export function clearLSto() {
  localStorage.clear()
}
/**
 * 静态文件引入
 * @param {String} url 地址
 * @returns 拼接后地址
 * @example 调用示例
 * importFile('image/xxx')
 */
export function importFile(url) {
  console.log('url', url)
  return new URL(`../assets/${url}`, import.meta.url).href
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
    return px
  } else {
    return parseFloat(px) / 75 + 'rem' // 这里的75，和postcss.config.js里的rootValue值对应
  }
}
/**
 * 面包屑递归扁平化处理
 * @param {Array} nodes 菜单数据
 * @param {String|Number} id 主键id
 * @returns {Array|null} [{}...]
 */
export function findMenuItem(nodes, id) {
  for (let node of nodes) {
    if (node.id === id) {
      return [node]
    } else if (node.children) {
      let result = findMenuItem(node.children, id)
      if (result) {
        return [node, ...result]
      }
    }
  }
  return null
}
