import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as i } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TIISquareOutline",
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
    return (u, t) => (a(), s("svg", {
      class: c(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("path", {
        d: "M272 188H311V156L201 156V188H240V326H201V358H311V326H272V188Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M48 102C48 72.1766 72.1766 48 102 48H410C439.823 48 464 72.1766 464 102V409C464 438.823 439.823 463 410 463H102C72.1766 463 48 438.823 48 409V102ZM102 80H410C422.15 80 432 89.8497 432 102V409C432 421.15 422.15 431 410 431H102C89.8497 431 80 421.15 80 409V102C80 89.8497 89.8497 80 102 80Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
