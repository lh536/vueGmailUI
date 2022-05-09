import { _ as _export_sfc, d as defineAsyncComponent, a as __vitePreload, c as createElementBlock, b as createBaseVNode, e as createVNode, r as resolveComponent, o as openBlock } from "./index.cab83b23.js";
const _sfc_main = {
  name: "MainSection",
  components: {
    SearchField: defineAsyncComponent(() => __vitePreload(() => import("./SearchField.aa598ce8.js"), true ? ["assets/SearchField.aa598ce8.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    UserStatusIndicator: defineAsyncComponent(() => __vitePreload(() => import("./UserStatusIndicator.9122c7b6.js"), true ? ["assets/UserStatusIndicator.9122c7b6.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    UpperRightOptions: defineAsyncComponent(() => __vitePreload(() => import("./UpperRightOptions.cf58fa05.js"), true ? ["assets/UpperRightOptions.cf58fa05.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    AvatarImage: defineAsyncComponent(() => __vitePreload(() => import("./AvatarImage.872e4c9e.js"), true ? ["assets/AvatarImage.872e4c9e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    MiddleCenterOptionsMenu: defineAsyncComponent(() => __vitePreload(() => import("./MiddleCenterOptionsMenu.56abe420.js"), true ? ["assets/MiddleCenterOptionsMenu.56abe420.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    InformationSection: defineAsyncComponent(() => __vitePreload(() => import("./InformationSection.bca1a66f.js"), true ? ["assets/InformationSection.bca1a66f.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0)),
    CentralMailContent: defineAsyncComponent(() => __vitePreload(() => import("./CentralMailContent.6c3d2b89.js"), true ? ["assets/CentralMailContent.6c3d2b89.js","assets/iconSet.4f90a59e.js","assets/index.cab83b23.js","assets/index.cf95b254.css"] : void 0))
  }
};
const _hoisted_1 = { class: "flex justify-between w-full py-2 border-b border-[#2E2E2E]" };
const _hoisted_2 = { class: "flex max-w-3xl w-full" };
const _hoisted_3 = { class: "flex items-center pr-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_search_field = resolveComponent("search-field");
  const _component_user_status_indicator = resolveComponent("user-status-indicator");
  const _component_upper_right_options = resolveComponent("upper-right-options");
  const _component_avatar_image = resolveComponent("avatar-image");
  const _component_middle_center_options_menu = resolveComponent("middle-center-options-menu");
  const _component_information_section = resolveComponent("information-section");
  const _component_central_mail_content = resolveComponent("central-mail-content");
  return openBlock(), createElementBlock("main", null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode(_component_search_field)
      ]),
      createBaseVNode("div", _hoisted_3, [
        createVNode(_component_user_status_indicator),
        createVNode(_component_upper_right_options),
        createVNode(_component_avatar_image)
      ])
    ]),
    createVNode(_component_middle_center_options_menu),
    createVNode(_component_information_section),
    createVNode(_component_central_mail_content)
  ]);
}
var MainSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MainSection as default };
