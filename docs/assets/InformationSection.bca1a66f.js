import { _ as _imports_0 } from "./iconSet.4f90a59e.js";
import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createBaseVNode } from "./index.cab83b23.js";
const _sfc_main = {
  name: "InformationSection"
};
const _hoisted_1 = _imports_0 + "#informationChevron";
const _hoisted_2 = _imports_0 + "#threeDotsVertical";
const _hoisted_3 = { class: "flex justify-between items-center mr-2" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("button", { class: "flex justify-between items-center hover:bg-[#414141] rounded-md font-semibold px-2.5 py-1 mx-2 transition duration-200 my-1" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "flex space-x-2 items-center" }, [
    /* @__PURE__ */ createBaseVNode("svg", {
      role: "img",
      class: "h-5 w-5 text-[#B0B0B0] hover:text-white"
    }, [
      /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_1 })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "Unread")
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "" })
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex justify-center items-center text-xs font-semibold mr-2 -space-x-1 text-[#B0B0B0]" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "flex justify-between items-center hover:bg-[#414141] rounded-md font-semibold px-2 py-2 transition duration-200" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "1-10 of 57")
  ]),
  /* @__PURE__ */ createBaseVNode("div", null, [
    /* @__PURE__ */ createBaseVNode("button", { class: "w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] hover:text-white transition duration-200" }, [
      /* @__PURE__ */ createBaseVNode("svg", {
        role: "img",
        class: "h-5 w-5"
      }, [
        /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_2 })
      ])
    ])
  ])
], -1);
const _hoisted_6 = [
  _hoisted_4,
  _hoisted_5
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_3, _hoisted_6);
}
var InformationSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { InformationSection as default };
