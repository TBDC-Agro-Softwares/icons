import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIEyeFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (n(), r("svg", {
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
        d: "M491.84 238.6C465.38 197.68 431.05 162.92 392.57 138.07C350 110.55 303 96 256.66 96C214.14 96 172.33 108.15 132.39 132.11C91.6604 156.54 54.7604 192.23 22.7104 238.18C15.3105 248.801 15.0577 262.839 22.0704 273.72C48.4804 315.05 82.4704 349.86 120.35 374.37C163 402 208.9 416 256.66 416C303.37 416 350.47 401.57 392.86 374.28C431.32 349.51 465.58 314.62 491.94 273.36C498.701 262.749 498.662 249.172 491.84 238.6ZM257 352C203.981 352 161 309.019 161 256C161 202.981 203.981 160 257 160C310.02 160 353 202.981 353 256C352.94 308.994 309.995 351.939 257 352ZM321 256C321 291.346 292.347 320 257 320C221.654 320 193 291.346 193 256C193 220.654 221.654 192 257 192C292.347 192 321 220.654 321 256Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
