import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIReorderThreeOutline",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), s("svg", {
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
        d: "M488.727 116C501.58 116 512 126.297 512 139C512 151.551 501.827 161.754 489.185 161.996L488.727 162H23.2727C10.4196 162 0 151.703 0 139C0 126.449 10.1729 116.246 22.8147 116.004L23.2727 116H488.727ZM488.727 232C501.58 232 512 242.297 512 255C512 267.551 501.827 277.754 489.185 277.996L488.727 278H23.2727C10.4196 278 0 267.703 0 255C0 242.449 10.1729 232.246 22.8147 232.004L23.2727 232H488.727ZM512 373C512 360.297 501.58 350 488.727 350H23.2727L22.8147 350.004C10.1729 350.246 0 360.449 0 373C0 385.703 10.4196 396 23.2727 396H488.727L489.185 395.996C501.827 395.754 512 385.551 512 373Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
