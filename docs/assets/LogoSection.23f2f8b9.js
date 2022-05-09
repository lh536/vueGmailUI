import { _ as _imports_0 } from "./iconSet.4f90a59e.js";
import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createBaseVNode } from "./index.cab83b23.js";
const _sfc_main = {
  name: "LogoSection"
};
const _hoisted_1 = _imports_0 + "#hamburger";
const _hoisted_2 = { class: "w-full flex justify-start items-center py-2 pl-4 space-x-2 border-b border-[#2E2E2E]" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "w-12 h-12 rounded-full flex justify-center items-center shrink-0 hover:bg-[#222223] text-[#E2E2E3]" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    role: "img",
    class: "w-7 h-7"
  }, [
    /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_1 })
  ])
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "font-normal text-xl" }, "Gmail", -1);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_2, _hoisted_5);
}
var LogoSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LogoSection as default };
