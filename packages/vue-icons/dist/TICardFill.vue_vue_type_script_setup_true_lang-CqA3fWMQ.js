import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TICardFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (n(), s("svg", {
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
        d: "M88 80H424C454.928 80 480 105.072 480 136V162H32V136C32 105.072 57.0721 80 88 80ZM32 376C32 406.928 57.0721 432 88 432H424C454.928 432 480 406.928 480 376V222H32V376ZM98 300C98 283.431 111.431 270 128 270H176C192.569 270 206 283.431 206 300V320C206 336.569 192.569 350 176 350H128C111.431 350 98 336.569 98 320V300Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
