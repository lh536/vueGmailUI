import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createBaseVNode } from "./index.cab83b23.js";
var _imports_0 = "./img/avatarImage/fabio.jpg";
const _sfc_main = {
  name: "AvatarImage"
};
const _hoisted_1 = { class: "w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#222223] shrink-0 ml-8 md:ml-0" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  class: "rounded-full w-8 h-8",
  alt: "Avatar Image"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1, _hoisted_3);
}
var AvatarImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AvatarImage as default };
