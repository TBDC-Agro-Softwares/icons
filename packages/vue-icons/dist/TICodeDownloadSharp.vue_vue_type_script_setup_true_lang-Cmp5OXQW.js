import { defineComponent as i, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as d, createElementVNode as c } from "vue";
const L = /* @__PURE__ */ i({
  __name: "TICodeDownloadSharp",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), a("svg", {
      class: s(o.value),
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
        d: "M189.523 145.608L161.866 114L0 255.633L161.866 397.265L189.523 365.657L63.7804 255.633L189.523 145.608ZM349.915 114L322.258 145.608L447.999 255.632L322.258 365.657L349.915 397.265L511.781 255.633L349.915 114ZM319.914 258.034L349.589 287.756L255.89 381.308L162.192 287.756L191.867 258.034L234.89 300.99V138.633H276.89V300.99L319.914 258.034Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as _
};
