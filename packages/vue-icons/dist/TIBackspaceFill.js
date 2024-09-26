import { defineComponent as o, computed as a, openBlock as s, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIBackspaceFill",
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
    return (p, t) => (s(), n("svg", {
      class: r(i.value),
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
        d: "M421.13 96H174.87C161.971 96.0159 149.702 101.578 141.19 111.27C140.461 112.101 139.821 113.006 139.28 113.97L50 247.75C46.9453 252.826 46.9453 259.174 50 264.25L139.15 397.82C139.711 398.849 140.381 399.815 141.15 400.7C149.66 410.409 161.939 415.984 174.85 416H421.13C445.9 415.972 465.972 395.9 466 371.13V140.87C465.972 116.1 445.9 96.0276 421.13 96ZM366 311C370.14 315.022 371.792 320.962 370.324 326.545C368.856 332.127 364.495 336.486 358.913 337.951C353.33 339.417 347.39 337.762 343.37 333.62L289.67 280L236 333.65C229.745 339.905 219.605 339.905 213.35 333.65C207.095 327.395 207.095 317.255 213.35 311L267 257.33L213.31 203.64C207.058 197.374 207.069 187.227 213.335 180.975C219.601 174.723 229.748 174.734 236 181L289.69 234.7L343.36 181C349.612 174.748 359.748 174.748 366 181C372.252 187.252 372.252 197.388 366 203.64L312.3 257.33L366 311Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
