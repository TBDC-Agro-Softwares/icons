import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TISearchFill",
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
        d: "M456.69 421.39L362.6 327.3C385.253 297.143 397.481 260.437 397.44 222.72C397.44 126.38 319.06 48 222.72 48C126.38 48 48 126.38 48 222.72C48 319.06 126.38 397.44 222.72 397.44C260.437 397.481 297.143 385.253 327.3 362.6L421.39 456.69C431.279 465.53 446.35 465.108 455.729 455.729C465.108 446.35 465.53 431.279 456.69 421.39ZM97.92 222.72C97.92 153.795 153.795 97.92 222.72 97.92C291.645 97.92 347.52 153.795 347.52 222.72C347.52 291.645 291.645 347.52 222.72 347.52C153.829 347.437 98.0027 291.611 97.92 222.72Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
