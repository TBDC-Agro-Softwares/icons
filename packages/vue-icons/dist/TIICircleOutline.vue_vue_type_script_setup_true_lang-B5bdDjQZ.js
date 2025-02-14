import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as i } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TIICircleOutline",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (s(), a("svg", {
      class: c(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("path", {
        d: "M311 188H272V326H311V358H201V326H240V188H201V156L311 156V188Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M48 256C48 141.125 141.125 48 256 48C370.875 48 464 141.125 464 256C464 370.875 370.875 464 256 464C141.125 464 48 370.875 48 256ZM432 256C432 158.798 353.202 80 256 80C158.798 80 80 158.798 80 256C80 353.202 158.798 432 256 432C353.202 432 432 353.202 432 256Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
