import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIDocumentsFill",
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
    return (C, t) => (s(), r("svg", {
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
        d: "M328 108C328.185 132.223 347.777 151.815 372 152H463.99V340C463.99 373.08 437.55 400 405.04 400H351.99V264.14C352.028 253.291 347.775 242.867 340.16 235.14L231 124.14C223.372 116.412 212.978 112.043 202.12 112H160V76C160.039 42.8789 186.879 16.0386 220 16H328V108ZM372 120H442.39C444.001 120.001 445.456 119.036 446.081 117.551C446.705 116.066 446.378 114.351 445.25 113.2L366.85 33.48C365.71 32.3229 363.984 31.9696 362.482 32.586C360.979 33.2023 359.999 34.666 360 36.29V108C360 114.627 365.373 120 372 120ZM184 236C184.023 247.654 188.704 258.815 197 267C205.181 275.302 216.345 279.983 228 280H320V432C320 467.346 291.346 496 256 496H112C76.6538 496 48 467.346 48 432V208C48.1043 172.697 76.6971 144.104 112 144H184V236ZM302.081 245.551C301.456 247.036 300.001 248.001 298.39 248H228C221.373 248 216 242.627 216 236V164.29C215.999 162.666 216.979 161.202 218.482 160.586C219.984 159.97 221.71 160.323 222.85 161.48L301.25 241.2C302.378 242.351 302.705 244.066 302.081 245.551Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};