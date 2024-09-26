import { defineComponent as o, computed as a, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIMailFill",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(e) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(e) > -1;
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), r("svg", {
      class: s(i.value),
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
        d: "M424 80H88C57.0858 80.0331 32.0331 105.086 32 136V376C32.0331 406.914 57.0858 431.967 88 432H424C454.914 431.967 479.967 406.914 480 376V136C479.967 105.086 454.914 80.0331 424 80ZM409.82 172.63L265.82 284.63C260.043 289.121 251.957 289.121 246.18 284.63L102.18 172.63C97.5755 169.153 95.1999 163.466 95.9627 157.747C96.7255 152.027 100.509 147.162 105.863 145.013C111.218 142.864 117.315 143.765 121.82 147.37L256 251.73L390.18 147.37C397.162 142.098 407.083 143.411 412.453 150.317C417.824 157.224 416.65 167.163 409.82 172.63Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
