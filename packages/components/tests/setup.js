// vitest.setup.ts
import "element-plus/dist/index.css"; // 引入 Element Plus 样式
import { config } from "@vue/test-utils"; // 从 Vue Test Utils 导入全局配置
import ElementPlus from "element-plus"; // 导入 Element Plus 插件

// 全局注册 Element Plus 插件
config.global.plugins = [ElementPlus];
