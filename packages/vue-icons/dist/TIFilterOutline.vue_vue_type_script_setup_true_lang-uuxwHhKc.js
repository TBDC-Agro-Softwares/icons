import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIFilterOutline",
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
        d: "M480 128C488.837 128 496 135.163 496 144C496 152.731 489.006 159.829 480.315 159.997L480 160H32C23.1634 160 16 152.837 16 144C16 135.269 22.9939 128.171 31.6851 128.003L32 128H480ZM400 240C408.837 240 416 247.163 416 256C416 264.731 409.006 271.829 400.315 271.997L400 272H112C103.163 272 96 264.837 96 256C96 247.269 102.994 240.171 111.685 240.003L112 240H400ZM320 368C320 359.163 312.837 352 304 352H208L207.685 352.003C198.994 352.171 192 359.269 192 368C192 376.837 199.163 384 208 384H304L304.315 383.997C313.006 383.829 320 376.731 320 368Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
