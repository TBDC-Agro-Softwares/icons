import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIIconsOutline",
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
        d: "M170.056 40.1949L18.0561 312.195C12.0961 322.86 19.8057 336 32.0231 336H176.823C183.379 401.449 229.68 456.948 294.228 474.415C363.976 493.29 437.72 463.075 474.171 400.686C510.623 338.298 500.736 259.22 450.046 207.727C403.264 160.203 332.443 147.06 272.314 173.195L197.99 40.1949C191.884 29.2684 176.162 29.2684 170.056 40.1949ZM288.022 201.305L349.99 312.195C355.95 322.86 348.241 336 336.023 336H209.025C215.431 386.959 252.006 429.838 302.587 443.526C358.386 458.626 417.38 434.454 446.542 384.543C475.703 334.632 467.794 271.37 427.242 230.175C390.583 192.935 335.472 182.084 288.022 201.305ZM184.023 80.799L308.752 304H59.2931L184.023 80.799Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};