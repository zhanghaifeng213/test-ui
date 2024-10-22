// src/elbutton/__tests__/elbutton.test.ts

// 导入必要的库和组件
import { mount } from "@vue/test-utils"; // Vue Test Utils 用于挂载组件
import { describe, it, expect } from "vitest"; // Vitest 的测试函数
import ElButton from "../index.vue"; // 导入要测试的 ElButton 组件
import * as Components from "../index";

// 使用 describe 来分组相关的测试用例

//index.vue
describe("ElButton Component", () => {
  // 测试组件是否正确渲染默认插槽内容
  it("renders correctly with default slot content", () => {
    // 挂载组件
    const wrapper = mount(ElButton);
    // 断言按钮文本是否为默认内容
    expect(wrapper.text()).toBe("Danger");
  });

  // 测试组件是否正确渲染自定义插槽内容
  it("renders correctly with custom slot content", () => {
    // 挂载组件，并传入自定义插槽内容
    const wrapper = mount(ElButton, {
      slots: {
        default: "Submit" // 自定义插槽内容
      }
    });
    // 断言按钮文本是否为自定义内容
    expect(wrapper.text()).toBe("Submit");
  });

  // 测试传递 disabled 属性为 true 时，el-button 是否被禁用
  it("sets the disabled attribute when disabled prop is true", () => {
    // 挂载组件，并传入 disabled 属性为 true
    const wrapper = mount(ElButton, {
      props: {
        disabled: true // 禁用 el-button
      }
    });
    // 查找 el-button 元素
    const elButton = wrapper.find("button"); // el-button 渲染为 button 元素
    // 使用 DOM 属性进行断言
    expect(elButton.element.disabled).toBe(true);
  });

  // 测试传递 disabled 属性为 false 时，el-button 是否未被禁用
  it("does not set the disabled attribute when disabled prop is false", () => {
    // 挂载组件，并传入 disabled 属性为 false
    const wrapper = mount(ElButton, {
      props: {
        disabled: false // 不禁用 el-button
      }
    });
    // 查找 el-button 元素
    const elButton = wrapper.find("button"); // el-button 渲染为 button 元素
    // 使用 DOM 属性进行断言
    expect(elButton.element.disabled).toBe(false);
  });

  // 测试传递 type 属性是否正确设置到 el-button 元素
  it("sets the type attribute when type prop is provided", () => {
    // 挂载组件，并传入 type 属性为 'primary'
    const wrapper = mount(ElButton, {
      props: {
        type: "primary" // 设置 el-button 的 type 为 'primary'
      }
    });
    // 查找 el-button 元素
    const elButton = wrapper.find("button"); // el-button 渲染为 button 元素
    // 断言 el-button 的 type 属性是否为 'primary'
    expect(elButton.classes()).toContain("el-button--primary");
  });

  // 测试当 type 属性未提供时，el-button 使用默认类型 'danger'
  it("uses the default type attribute when type prop is not provided", () => {
    // 挂载组件，不传 type 属性
    const wrapper = mount(ElButton);
    // 查找 el-button 元素
    const elButton = wrapper.find("button"); // el-button 渲染为 button 元素
    // 断言 el-button 的 type 属性是否为默认值 'danger'
    expect(elButton.classes()).toContain("el-button--danger");
  });

  // 测试 el-button 是否应用了 round 属性
  it("applies the round attribute correctly", () => {
    // 挂载组件
    const wrapper = mount(ElButton);
    // 查找 el-button 元素
    const elButton = wrapper.find("button"); // el-button 渲染为 button 元素
    // 断言 el-button 是否具有 round 属性（取决于 el-button 实现）

    // 通常，round 是一个布尔属性，存在即为 true
    expect(elButton.classes()).toContain("is-round"); // Element Plus 的 round 会添加 'is-round' 类
  });

  // 测试当 el-button 被点击且未禁用时，是否会触发 click 事件
  it("emits click event when clicked and not disabled", async () => {
    // 挂载组件，并确保 disabled 为 false
    const wrapper = mount(ElButton, {
      props: {
        disabled: false // 确保 el-button 未被禁用
      }
    });
    // 查找 el-button 元素
    const elButton = wrapper.find("button"); // el-button 渲染为 button 元素
    // 触发点击事件
    await elButton.trigger("click");
    // 断言组件是否发出了 click 事件
    expect(wrapper.emitted()).toHaveProperty("click");
    // 断言 click 事件触发的次数是否为 1 次
    expect(wrapper.emitted("click")?.length).toBe(1);
  });

  // 测试当 el-button 被禁用时，点击是否不会触发 click 事件
  it("does not emit click event when disabled", async () => {
    // 挂载组件，并传入 disabled 属性为 true
    const wrapper = mount(ElButton, {
      props: {
        disabled: true // 禁用 el-button
      }
    });
    // 查找 el-button 元素
    const elButton = wrapper.find("button"); // el-button 渲染为 button 元素
    // 触发点击事件
    await elButton.trigger("click");
    // 断言组件未发出 click 事件
    expect(wrapper.emitted("click")).toBeUndefined();
  });
});
// index.ts
describe("Components Entry Point", () => {
  // 测试 Button 组件是否被正确导出
  it("should export Button component", () => {
    // 断言 Components 对象中是否存在 Button
    expect(Components.ElButton).toBeDefined();
    // 断言 Button 是否具有 install 方法（由 withInstall 添加）
    expect(typeof Components.ElButton.install).toBe("function");
  });
});
