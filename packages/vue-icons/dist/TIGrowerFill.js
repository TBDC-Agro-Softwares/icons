import { defineComponent as r, computed as a, openBlock as n, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as i } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TIGrowerFill",
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
    const l = e, o = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), s("svg", {
      class: c(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("path", {
        d: "M186.115 102.808C196.105 66.225 223.174 40 255 40C286.782 40 313.82 66.1524 323.843 102.656C376.03 110.195 412 126.1 412 144.5C412 161.404 381.641 176.202 336.24 184.342C350.643 259.148 294.027 305 255.5 305H255.252C216.711 305 159.862 259.114 174.295 184.258C129.151 176.101 98.9999 161.347 98.9999 144.5C98.9999 126.222 134.492 110.408 186.115 102.808Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        d: "M441.97 429.345C455.249 448.251 440.07 472.001 416.965 472.001H94.0343C70.9302 472.001 55.7507 448.251 69.0298 429.345C111.287 369.179 179.077 330.18 255.5 330.18C331.923 330.18 399.713 369.179 441.97 429.345Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
