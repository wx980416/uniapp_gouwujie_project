"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  _easycom_tab_control2();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
if (!Math) {
  (HomePopular + _easycom_tab_control)();
}
const HomePopular = () => "./cpns/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultidata();
    });
    function handleTabItemClick(index) {
      console.log("handleTabItemClick=>", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleTabItemClick),
        b: common_vendor.p({
          titles: ["\u6D41\u884C", "\u65B0\u6B3E", "\u7CBE\u9009"]
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/HYMallApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
