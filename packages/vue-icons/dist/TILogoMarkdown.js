import { defineComponent as i, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ i({
  __name: "TILogoMarkdown",
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
    return (u, t) => (r(), a("svg", {
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
        d: "M475 64H37C16.58 64 0 81.38 0 102.77V409.19C0 430.59 16.58 448 37 448H475C495.38 448 512 430.59 512 409.19V102.77C512 81.38 495.42 64 475 64ZM288 368H224V256L176 320L128 256V368H64V144H128L176 224L224 144H288V368ZM384 368L304 256H352.05L352 144H416V256H464L384 368Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
