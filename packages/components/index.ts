import { App } from "vue";
import * as components from "./src/index";
// 也导出所有单个组件，支持按需引入
export * from "./src/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default {
  install: (app: App) => {
    app.use(ElementPlus as any);
    // 使用 Object.values 来遍历组件
    Object.values(components).forEach((component) => {
      app.use(component);
    });
  }
};
