import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIEyeOutline",
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
    return (C, t) => (r(), s("svg", {
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
        d: "M255.659 96C169.719 96 85.7513 146.373 21.7072 238.176C14.3127 248.891 14.0996 262.916 21.1204 273.783C76.6186 360.657 162.151 416 255.659 416C348.575 416 435.647 359.939 490.934 273.361C497.722 262.815 497.722 249.215 490.904 238.621C464.695 198.142 430.405 163.144 391.576 138.073C349.372 110.823 303.057 96 255.659 96ZM255.659 128C335.729 128 413.794 178.404 464.019 255.976C464.025 255.985 464.025 256.045 463.995 256.091C414.164 334.123 336.697 384 255.659 384C174.877 384 99.6273 335.833 49.5526 258.829L47.9985 256.417C106.365 172.753 180.965 128 255.659 128ZM255.999 160C202.98 160 159.999 202.981 159.999 256C159.999 309.019 202.98 352 255.999 352C309.019 352 351.999 309.019 351.999 256C351.999 202.981 309.019 160 255.999 160ZM255.999 192C291.346 192 319.999 220.654 319.999 256C319.999 291.346 291.346 320 255.999 320C220.653 320 191.999 291.346 191.999 256C191.999 220.654 220.653 192 255.999 192Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
