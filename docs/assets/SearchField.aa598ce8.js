import { _ as _imports_0 } from "./iconSet.4f90a59e.js";
import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createBaseVNode } from "./index.cab83b23.js";
const _sfc_main = {
  name: "SearchField"
};
const _hoisted_1 = _imports_0 + "#search";
const _hoisted_2 = _imports_0 + "#adjustments";
const _hoisted_3 = { class: "min-w-full" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "" }, [
  /* @__PURE__ */ createBaseVNode("form", {
    class: "text-[#E7E7E7]",
    action: ""
  }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "relative" }, [
      /* @__PURE__ */ createBaseVNode("button", { class: "absolute inset-y-0 left-0 flex items-center sm:ml-2" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-[#535354]" }, [
          /* @__PURE__ */ createBaseVNode("svg", {
            role: "img",
            class: "w-5 h-5"
          }, [
            /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_1 })
          ])
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("input", {
        class: "bg-[#474747] border-0 placeholder-[#E7E7E7] p-3 pl-8 sm:pl-14 font-semibold",
        type: "text",
        name: "",
        id: "",
        placeholder: "Search all conversations"
      }),
      /* @__PURE__ */ createBaseVNode("button", { class: "absolute inset-y-0 right-0 hidden sm:flex items-center transform rotate-90 sm:mr-3" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "flex justify-center items-center rounded-full w-8 h-8 sm:w-10 sm:h-10 hover:bg-[#535354]" }, [
          /* @__PURE__ */ createBaseVNode("svg", {
            role: "img",
            class: "w-7 h-7 text-inherit"
          }, [
            /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_2 })
          ])
        ])
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
var SearchField = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { SearchField as default };
