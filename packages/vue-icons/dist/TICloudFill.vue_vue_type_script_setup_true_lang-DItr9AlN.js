import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TICloudFill",
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
    return (u, t) => (n(), r("svg", {
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
        d: "M396 432H136C99.56 432 65.64 419.43 40.49 396.59C14.38 372.88 0 340 0 304C0 267.42 13.39 235.88 38.72 212.78C56.83 196.25 80.94 184.53 107.9 178.91C112.941 177.867 117.173 174.462 119.27 169.76C128.869 148.152 143.247 129.004 161.32 113.76C187.76 91.69 220.5 80 256 80C295.933 79.8262 334.363 95.214 363.14 122.9C387.87 146.71 404.64 178.18 412.32 214.9C413.58 221.05 418.319 225.895 424.44 227.29C470 237.42 512 270.43 512 328C512 361.39 499.76 388.78 476.59 407.23C456.23 423.43 428.37 432 396 432Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
