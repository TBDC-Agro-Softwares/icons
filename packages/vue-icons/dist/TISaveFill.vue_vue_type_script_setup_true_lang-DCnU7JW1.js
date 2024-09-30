import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TISaveFill",
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
    return (C, t) => (r(), s("svg", {
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
        d: "M392.24 46.06L465.94 119.76C474.972 128.741 480.035 140.963 480 153.7V416C480 451.346 451.346 480 416 480H96C60.6538 480 32 451.346 32 416V96C32 60.6538 60.6538 32 96 32H358.3C371.037 31.9652 383.259 37.0281 392.24 46.06ZM296 112H120C115.582 112 112 115.582 112 120V168C112 172.418 115.582 176 120 176H296C300.418 176 304 172.418 304 168V120C304 115.582 300.418 112 296 112ZM259.75 431.91C226.745 433.46 196.183 414.559 182.826 384.338C169.469 354.117 176.066 318.793 199.429 295.429C222.793 272.066 258.117 265.469 288.338 278.826C318.559 292.183 337.46 322.745 335.91 355.75C333.946 396.971 300.971 429.946 259.75 431.91ZM304 352C304 378.51 282.51 400 256 400C229.49 400 208 378.51 208 352C208 325.49 229.49 304 256 304C282.51 304 304 325.49 304 352Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
