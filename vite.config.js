import { VantResolver } from "@vant/auto-import-resolver";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "node:url";
import postCssPxToRem from "postcss-pxtorem";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig, loadEnv } from "vite";
import pages from "vite-plugin-pages";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [
      vue(),
      vueJsx(),
      pages({
        dirs: [
          { dir: "src/views", baseRoute: "" },
          { dir: "src/layout", baseRoute: "" },
        ],
        importMode: "async",
        exclude: ["**/components/**.vue"],
        routeNameSeparator: "_",
      }),
      vueSetupExtend(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        dirs: ["./src/service/module", "./src/stores/module"],
      }),
      Components({
        resolvers: [VantResolver()],
        dirs: ["src/components"],
        extensions: ["vue"],
        deep: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue({ file }) {
              return file.indexOf("vant") !== -1 ? 37.5 : 75;
            },
            propList: ["*"],
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/theme/theme.scss";',
          // additionalData: `@use "@/assets/theme/theme" as *;`,
          // javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: true,
      // 代理跨域
      proxy: {
        [env.VITE_APP_BASE_URL]: {
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`${env.VITE_APP_BASE_URL}`), ""),
        },
      },
    },
    base: "/", // 映射
    build: {
      outDir: "decline_code_H5",
      assetsDir: "assets", //! 勿修改 utils 工具中 importFile 函数以 assets 为相对路径
      chunkSizeWarningLimit: 600,
    },
  };
});
