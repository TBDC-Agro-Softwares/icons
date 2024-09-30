import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIReloadOutline",
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
    return (u, t) => (r(), s("svg", {
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
        d: "M389.287 111.167C350.165 70.7468 296.281 47.9299 239.98 47.9999C125.163 47.9998 32 141.163 32 256C32 370.837 125.163 464 240 464C328.156 463.994 406.741 408.441 436.153 325.338C439.101 317.008 434.739 307.865 426.408 304.917C418.078 301.969 408.935 306.331 405.987 314.662L405.228 316.764C379.767 385.921 313.851 431.995 239.999 432C142.837 432 64 353.163 64 256C64 158.837 142.837 79.9998 240 79.9998L241.443 80.004C288.554 80.332 333.541 99.583 366.293 133.422L367.029 134.188L377.001 145.789L326.1 196.69C316.02 206.77 323.16 224 337.42 224H448C456.837 224 464 216.837 464 208V97.42C464 83.16 446.77 76 436.69 86.1L399.693 123.097L390.748 112.692L389.287 111.167Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
