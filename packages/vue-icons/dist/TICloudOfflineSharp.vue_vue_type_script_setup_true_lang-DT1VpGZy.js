import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TICloudOfflineSharp",
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
    return (p, t) => (r(), s("svg", {
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
        d: "M41.3706 63.9992L63.998 41.3718L470.627 448.001L447.999 470.628L41.3706 63.9992ZM38.72 212.78C13.39 235.88 0 267.42 0 304C0 340 14.38 372.88 40.49 396.59C65.64 419.43 99.56 432 136 432H364.12L110.51 178.39C82.5 183.78 57.42 195.72 38.72 212.78ZM512 328C512 361.39 499.76 388.78 476.59 407.23C476.46 407.336 476.318 407.437 476.179 407.537C476.028 407.645 475.88 407.751 475.75 407.86L172.93 105C197.1 88.6199 225.53 80 256 80C295.933 79.8262 334.363 95.2139 363.14 122.9C390.2 148.96 407.73 184.18 414.25 225.36C463.56 232.66 512 266.15 512 328Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
