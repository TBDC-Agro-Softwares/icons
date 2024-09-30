import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TILockOpenOutline",
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
        d: "M352 112C352 58.9807 309.019 16 256 16C202.981 16 160 58.9807 160 112V192H144C108.654 192 80 220.654 80 256V432C80 467.346 108.654 496 144 496H368C403.346 496 432 467.346 432 432V256C432 220.654 403.346 192 368 192H192V112L192.009 110.942C192.574 76.0836 221.007 48 256 48C291.346 48 320 76.6538 320 112L320.003 112.315C320.171 121.006 327.269 128 336 128C344.837 128 352 120.837 352 112ZM176 224H144C126.327 224 112 238.327 112 256V432C112 449.673 126.327 464 144 464H368C385.673 464 400 449.673 400 432V256C400 238.327 385.673 224 368 224H176Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
