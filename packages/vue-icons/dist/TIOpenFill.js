import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIOpenFill",
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
        d: "M336 48H448C456.837 48 464 55.1634 464 64V176C464 184.837 456.837 192 448 192C439.163 192 432 184.837 432 176V102.63L393.25 141.37C388.053 131.803 380.197 123.947 370.63 118.75L409.37 80H336C327.163 80 320 72.8366 320 64C320 55.1634 327.163 48 336 48ZM370.63 118.75C362.456 114.312 353.301 111.991 344 112H104C73.0858 112.033 48.0331 137.086 48 168V408C48.0331 438.914 73.0858 463.967 104 464H344C374.914 463.967 399.967 438.914 400 408V168C400.009 158.699 397.688 149.544 393.25 141.37L235.31 299.31C232.316 302.319 228.244 304.007 224 304C217.531 303.997 211.7 300.099 209.225 294.122C206.75 288.145 208.117 281.266 212.69 276.69L370.63 118.75Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
