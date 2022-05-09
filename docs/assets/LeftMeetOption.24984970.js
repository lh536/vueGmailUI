import { _ as _imports_0 } from "./iconSet.4f90a59e.js";
import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createBaseVNode } from "./index.cab83b23.js";
const _sfc_main = {
  name: "LeftMeetOption"
};
const _hoisted_1 = _imports_0 + "#chevronDown";
const _hoisted_2 = _imports_0 + "#newMeeting";
const _hoisted_3 = _imports_0 + "#joinMeeting";
const _hoisted_4 = { class: "flex w-full mt-auto max-h-screen flex-col border-t border-[#2E2E2E]" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex justify-between items-center group h-10 pl-1 mr-2 py-4 cursor-default" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "flex items-center space-x-2" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center cursor-pointer" }, [
      /* @__PURE__ */ createBaseVNode("svg", {
        role: "img",
        class: "h-4 w-4"
      }, [
        /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_1 })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("span", { class: "text-sm font-semibold" }, "Meet")
  ])
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col h-full justify-center items-center" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "flex space-x-4 ml-4 items-center" }, [
      /* @__PURE__ */ createBaseVNode("span", null, [
        /* @__PURE__ */ createBaseVNode("svg", {
          role: "img",
          class: "h-6 w-6"
        }, [
          /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_2 })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("span", null, "New meeting")
    ]),
    /* @__PURE__ */ createBaseVNode("span", { class: "" })
  ]),
  /* @__PURE__ */ createBaseVNode("button", { class: "w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "flex space-x-4 ml-4 items-center" }, [
      /* @__PURE__ */ createBaseVNode("span", null, [
        /* @__PURE__ */ createBaseVNode("svg", {
          role: "img",
          class: "h-6 w-6"
        }, [
          /* @__PURE__ */ createBaseVNode("use", { "xlink:href": _hoisted_3 })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("span", null, "Join meeting")
    ]),
    /* @__PURE__ */ createBaseVNode("span", { class: "" })
  ])
], -1);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_4, _hoisted_7);
}
var LeftMeetOption = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LeftMeetOption as default };
