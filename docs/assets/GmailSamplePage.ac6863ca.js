import { _ as _export_sfc, d as defineAsyncComponent, a as __vitePreload, c as createElementBlock, b as createBaseVNode, e as createVNode, r as resolveComponent, o as openBlock } from "./index.cab83b23.js";
const _sfc_main = {
  name: "GmailSamplePage",
  components: {
    LeftSidebar: defineAsyncComponent(() => __vitePreload(() => import("./LeftSidebar.e5f8a09d.js"), true ? ["assets/LeftSidebar.e5f8a09d.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    MainSection: defineAsyncComponent(() => __vitePreload(() => import("./MainSection.751bc0d0.js"), true ? ["assets/MainSection.751bc0d0.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0))
  }
};
const _hoisted_1 = { class: "bg-[#111111] min-h-screen text-white" };
const _hoisted_2 = { class: "flex min-h-screen" };
const _hoisted_3 = { class: "w-72" };
const _hoisted_4 = { class: "w-full" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_left_sidebar = resolveComponent("left-sidebar");
  const _component_main_section = resolveComponent("main-section");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("aside", _hoisted_3, [
        createVNode(_component_left_sidebar)
      ]),
      createBaseVNode("main", _hoisted_4, [
        createVNode(_component_main_section)
      ])
    ])
  ]);
}
var GmailSamplePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { GmailSamplePage as default };
