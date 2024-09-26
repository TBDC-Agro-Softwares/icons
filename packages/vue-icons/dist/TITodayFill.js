import { defineComponent as o, computed as a, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as d, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TITodayFill",
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
    return (C, t) => (n(), r("svg", {
      class: s(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M416 64H400V48.45C400 39.84 393.38 32.45 384.77 32.02C380.398 31.8094 376.131 33.3989 372.962 36.4182C369.794 39.4376 368 43.6232 368 48V64H144V48.45C144 39.84 137.38 32.45 128.77 32.02C124.398 31.8094 120.131 33.3989 116.962 36.4182C113.794 39.4376 112 43.6232 112 48V64H96C60.6538 64 32 92.6538 32 128V416C32 451.346 60.6538 480 96 480H416C451.346 480 480 451.346 480 416V128C480 92.6538 451.346 64 416 64ZM224 307.43C224 323.209 211.209 336 195.43 336H124.57C108.791 336 96 323.209 96 307.43V236.57C96 220.791 108.791 208 124.57 208H195.43C211.209 208 224 220.791 224 236.57V307.43ZM448 136V156C448 158.209 446.209 160 444 160H68C65.7909 160 64 158.209 64 156V128C64.0494 110.347 78.3474 96.0495 96 96H416C433.653 96.0495 447.951 110.347 448 128V136Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
