import { _ as _export_sfc, d as defineAsyncComponent, a as __vitePreload, c as createElementBlock, e as createVNode, r as resolveComponent, o as openBlock } from "./index.cab83b23.js";
const _sfc_main = {
  name: "LeftSidebar",
  components: {
    LogoSection: defineAsyncComponent(() => __vitePreload(() => import("./LogoSection.23f2f8b9.js"), true ? ["assets/LogoSection.23f2f8b9.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    ComposeMenu: defineAsyncComponent(() => __vitePreload(() => import("./ComposeMenu.a90976ac.js"), true ? ["assets/ComposeMenu.a90976ac.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    LeftOptionMenu: defineAsyncComponent(() => __vitePreload(() => import("./LeftFolderMenu.64fe6d52.js"), true ? ["assets/LeftFolderMenu.64fe6d52.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    LeftChatOption: defineAsyncComponent(() => __vitePreload(() => import("./LeftChatOption.98c88641.js"), true ? ["assets/LeftChatOption.98c88641.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    LeftRoomsOption: defineAsyncComponent(() => __vitePreload(() => import("./LeftRoomsOption.ac74d1af.js"), true ? ["assets/LeftRoomsOption.ac74d1af.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    LeftMeetOption: defineAsyncComponent(() => __vitePreload(() => import("./LeftMeetOption.24984970.js"), true ? ["assets/LeftMeetOption.24984970.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0))
  }
};
const _hoisted_1 = { class: "w-64 min-h-full flex flex-col" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_logo_section = resolveComponent("logo-section");
  const _component_compose_menu = resolveComponent("compose-menu");
  const _component_left_option_menu = resolveComponent("left-option-menu");
  const _component_left_chat_option = resolveComponent("left-chat-option");
  const _component_left_rooms_option = resolveComponent("left-rooms-option");
  const _component_left_meet_option = resolveComponent("left-meet-option");
  return openBlock(), createElementBlock("aside", _hoisted_1, [
    createVNode(_component_logo_section),
    createVNode(_component_compose_menu),
    createVNode(_component_left_option_menu),
    createVNode(_component_left_chat_option),
    createVNode(_component_left_rooms_option),
    createVNode(_component_left_meet_option)
  ]);
}
var LeftSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LeftSidebar as default };
