import { defineComponent as o, computed as C, openBlock as s, createElementBlock as n, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIGiftFill",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (s(), n("svg", {
      class: r(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M240 252V144H272V252C272 254.209 273.791 256 276 256H416C421.451 256 426.862 255.07 432 253.25C451.16 246.448 463.971 228.331 464 208V192C464 165.49 442.51 144 416 144H375.46C374.751 143.989 374.101 143.603 373.752 142.986C373.402 142.37 373.405 141.614 373.76 141C392.964 108.576 383.919 66.8297 353.016 45.2636C322.112 23.6976 279.808 29.609 256 58.82C232.192 29.609 189.888 23.6976 158.984 45.2636C128.081 66.8297 119.036 108.576 138.24 141C138.595 141.614 138.598 142.37 138.248 142.986C137.899 143.603 137.249 143.989 136.54 144H96C69.4903 144 48 165.49 48 192V208C48.0289 228.331 60.8405 246.448 80 253.25C85.1382 255.07 90.5491 256 96 256H236C238.209 256 240 254.209 240 252ZM272 144V104C272 81.9086 289.909 64 312 64C334.091 64 352 81.9086 352 104C352 126.091 334.091 144 312 144H272ZM240 144H200C178.505 143.945 160.897 126.912 160.128 105.431C159.359 83.9503 175.704 65.702 197.14 64.11V64.1C208.217 63.3059 219.126 67.1531 227.255 74.7205C235.384 82.2878 240.001 92.8941 240 104V144ZM80 416C80 451.346 108.654 480 144 480H236C238.209 480 240 478.209 240 476V292C240 289.791 238.209 288 236 288H88C83.5817 288 80 291.582 80 296V416ZM368 480H276C273.791 480 272 478.209 272 476V292C272 289.791 273.791 288 276 288H424C428.418 288 432 291.582 432 296V416C432 451.346 403.346 480 368 480Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
