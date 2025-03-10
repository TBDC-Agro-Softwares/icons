import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBluetoothOutline",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(e) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(e) > -1;
      }
    },
    type: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0
    },
    clickable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (s(), r("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M240 48.0001C240 33.8882 256.892 26.7504 267.009 36.3892L267.314 36.6864L379.314 148.686C385.821 155.193 385.499 165.81 378.678 171.916L378.413 172.148L280.585 256L378.413 339.852C385.4 345.841 385.893 356.451 379.561 363.062L379.314 363.314L267.314 475.314C257.335 485.292 240.344 478.396 240.005 464.426L240 464V290.787L154.413 364.148C147.794 369.821 137.875 369.142 132.088 362.681L131.852 362.413C126.179 355.794 126.859 345.875 133.319 340.087L133.588 339.852L231.414 256L133.588 172.148C126.969 166.475 126.124 156.569 131.623 149.861L131.852 149.587C137.525 142.969 147.432 142.123 154.139 147.622L154.413 147.852L240 221.212V48.0001ZM272 290.788V425.372L344.468 352.904L272 290.788ZM272 86.6271V221.211L344.468 159.095L272 86.6271Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
