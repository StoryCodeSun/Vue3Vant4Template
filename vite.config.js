import { VantResolver } from "@vant/auto-import-resolver";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "node:url";
import postCssPxToRem from "postcss-pxtorem";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import pages from "vite-plugin-pages";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
// https://vitejs.dev/config/
export default defineConfig({
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
      dirs: ["./src/service", "./src/stores"],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue({ file }) {
            return file.indexOf("vant") !== -1 ? 37.5 : 75;
          },
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    host: true,
  },
});
