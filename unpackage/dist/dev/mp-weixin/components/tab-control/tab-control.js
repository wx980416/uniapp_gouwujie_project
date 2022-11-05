"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  emits: ["tabItemClick"],
  setup(__props, { emit }) {
    const currentIndex = common_vendor.ref(0);
    function handleItemClick(index) {
      currentIndex.value = index;
      emit("tabItemClick", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titles, (title, index, i0) => {
          return {
            a: common_vendor.t(title),
            b: common_vendor.n(currentIndex.value === index ? "active" : ""),
            c: common_vendor.o(($event) => handleItemClick(index)),
            d: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/HYMallApp/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);
