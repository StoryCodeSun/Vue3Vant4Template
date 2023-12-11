# Vue3Vant4Template

### Project Introduction

### 基于[vant](https://vant-contrib.gitee.io/vant/#/zh-CN/home)封装: node-v v16.20.2 npm-v 8.19.4


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm start | npm run dev
```

### Compile and Minify for Staging

```sh
npm run build:stage
```
### Compile and Minify for Production

```sh
npm run build || npm run build:prod
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### components文件夹下所有组件均以进行自动导入无需单独引入

### 目录结构
```sh
├─.gitignore  git忽略文件
├─vite.config.js  vite配置文件
├─.vscode
├─node_modules  依赖文件
├─public  公共
├─src  源文件
│   ├─assets        资源
│   │  └─theme      主题修改
│   ├─components    全局公共组件  无需引入
│   ├─hooks         hooks 抽离
│   ├─layout/layout 布局（菜单页编写位置）
│   ├─locale        国际化
│   ├─router        路由
│   ├─service       请求相关
│   │  ├─config     环境配置
│   │  ├─module     请求模块化抽离
│   │  └─request    请求封装
│   ├─stores        状态管理
│   │  └─module     模块化
│   ├─utils         工具方法抽离
│   ├─views         视图资源（子页面编写位置）
│   │   ├─404       找不到页面
│   │   └─login     登录
│   └─App           vue入口
├─.env.development  开发环境配置
├─.env.production   生产环境配置
├─.env.staging      测试环境配置
├─.eslintrc.js      eslint配置文件
├─.gitignore        git忽略文件
├─.prettierrc.json  代码风格文件
├─index.html        入口页面
├─package-lock.json 精确版本依赖文件
├─package.json      依赖文件
├─README.md         README自述文件
└─vite.config.js    vite配置文件

```
### 跨域问题

+ 通过vite 中 proxy代理解决跨域问题
+ 不管后端做不做跨域处理, 在开发阶段你只需要修改.env.development文件中VITE_APP_BASE_API的域名
+ 其他环境亦是如此


### 集成 iconfont

+ 在 iconfont 官网上选择需要引入的图标，将它们添加到购物车中，并生成对应的项目。
+ 在购物车中进入已购项目，下载 iconfont 文件。
+ 将下载好的文件复制到自己公共样式的目录下如
  ```scss
  @import "assets/icons/iconfont.css";
  // ❗❗❗注意 iconfont.css中此代码要进行本地引用
  @font-face {
    font-family: "iconfont";
    /* Project id 4105880 */
    src: url('@/assets/icons/iconfont.woff2') format('woff2'),
      url('@/assets/icons/iconfont.woff') format('woff'),
      url('@/assets/icons/iconfont.ttf') format('truetype');
  }
  ```
+ 在页面中使用 iconfont 图标。例如：
  ```
  <i class="iconfont icon-home"></i>
  ```
### 集成外部字体
+ 下载需要引入的字体文件（一般为 .ttf 格式）。
+ 在 assets 目录下新建一个 fonts 文件夹，并将字体文件放到该文件夹中。
+ 在 assets/index.css 文件（或任意全局组件）中定义自己的字体。例如：
  ```scss
  @font-face {
    font-family: 'Custom';
    src: url('@/static/fonts/Custom.ttf') format('truetype');
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .custom_family {
    font-family: "Custom" !important;
    font-size: 16rpx;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ```
### 关于全局自定义函数
+ 关于全局自定义看utils目录
+ 其中locale文件中抛出vant更新语言包方法
+ 所有方法均已proxy.xxx形式调用
  ```js
   proxy.xxx()
  ```
### css相关
+ [弹性布局生成](https://loading.io/flexbox/)
+ [CSS拟态方块](https://neumorphism.io/)
+ [不规则的方块](https://9elements.github.io/fancy-border-radius/)
+ [优惠券工具](https://coupon.codelabo.cn/)
### 二维码集成
+ [参考文档](https://www.npmjs.com/package/qrcode-vue3)
### 关于创建页面路由自动生成
+ 该项已配置自动路由无需手动添加
+ 通常使用只需要在views文件夹创建xxx文件名并创建index.vue文件即可(你就会得到一个xxx的路由)
+ 如果在views文件夹创建xxx文件名并创建xxx.vue文件即可(你就会得到一个xxx_xxx的路由)
+ 关于嵌套路由的创建
```yaml
以demo目录为例子
-----------------
├─src
  └─views
    ├─demo
    ├─demo.vue
      └─demo
        └─demo1.vue
-----------------
这样你就会得到两个路由
/demo/demo
/demo/demo/demo1 | demo1.vue就是demo.vue的子路由（children）
如果觉得 path 跳转 /demo/demo/demo1 路径太长,可在vue文件自定义路由配置
两种写法
<route lang="yaml">
name: demo1
path: /demo1
meta:
  title: demo1
  requiresAuth: true
</route>
或
<route>
{
  name: 'demo1',
  path: '/demo1',
  meta:{
    title: 'demo1',
    requiresAuth: true
  }

}
</route>
```
