import { _ as _imports_0 } from "./iconSet.4f90a59e.js";
import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createBaseVNode } from "./index.cab83b23.js";
const _sfc_main = {
  name: "ComposeMenu"
};
const _hoisted_1 = _imports_0 + "#chevronDown";
const _hoisted_2 = _imports_0 + "#pencil";
const _hoisted_3 = { class: "flex items-center border-b border-[#2E2E2E]" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("button", { class: "flex justify-between items-center flex-grow group hover:bg-[#414141] h-10 rounded-full rounded-l-none pl-1 mr-2 py-6" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "flex items-center space-x-2" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center" }, [
      /* @__PURE__ */ createBaseVNode("svg", {
        role: "img",
        class: "h-4 w-4 relative z-10"
      }, [
        /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_1 })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("span", { class: "text-sm font-semibold" }, "Mail")
  ]),
  /* @__PURE__ */ createBaseVNode("div", {
    class: "flex items-center justify-center group-hover:bg-[#303132] w-10 h-10 rounded-full",
    id: "compose"
  }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "flex items-center justify-center border border-[#5E6267] hover:bg-[#3C4043] hover:border-none w-10 h-10 rounded-full" }, [
      /* @__PURE__ */ createBaseVNode("svg", {
        role: "img",
        class: "h-5 w-5"
      }, [
        /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_2 })
      ])
    ])
  ])
], -1);
const _hoisted_5 = [
  _hoisted_4
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_3, _hoisted_5);
}
var ComposeMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ComposeMenu as default };
