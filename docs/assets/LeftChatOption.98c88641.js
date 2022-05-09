import { _ as _imports_0 } from "./iconSet.4f90a59e.js";
import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createBaseVNode } from "./index.cab83b23.js";
const _sfc_main = {
  name: "LeftChatOption"
};
const _hoisted_1 = _imports_0 + "#chevronDown";
const _hoisted_2 = _imports_0 + "#plus";
const _hoisted_3 = _imports_0 + "#chat";
const _hoisted_4 = { class: "flex w-full max-h-screen flex-col h-full border-t border-[#2E2E2E] pb-5" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex justify-between items-center group h-10 pl-1 py-4 cursor-default flex-grow" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "flex items-center space-x-2" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center cursor-pointer" }, [
      /* @__PURE__ */ createBaseVNode("svg", {
        role: "img",
        class: "h-4 w-4"
      }, [
        /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_1 })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("span", { class: "text-sm font-semibold" }, "Chat")
  ]),
  /* @__PURE__ */ createBaseVNode("button", { class: "w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] transition duration-200" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "text-[#80868B] hover:text-white" }, [
      /* @__PURE__ */ createBaseVNode("svg", {
        role: "img",
        class: "h-6 w-6"
      }, [
        /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_2 })
      ])
    ])
  ])
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col h-full justify-center items-center text-[#80868B] text-sm" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "mb-2" }, [
    /* @__PURE__ */ createBaseVNode("svg", {
      role: "img",
      class: "h-12 w-12"
    }, [
      /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_3 })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "No conversations"),
  /* @__PURE__ */ createBaseVNode("span", { class: "text-[#789CD6] cursor-pointer" }, "Find a room")
], -1);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_4, _hoisted_7);
}
var LeftChatOption = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LeftChatOption as default };
