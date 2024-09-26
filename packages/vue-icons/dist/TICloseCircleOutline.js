import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICloseCircleOutline",
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
        d: "M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM180.686 180.686C186.848 174.525 196.785 174.439 203.051 180.43L203.314 180.686L256 233.373L308.686 180.686C314.935 174.438 325.065 174.438 331.314 180.686C337.475 186.848 337.561 196.785 331.57 203.051L331.314 203.314L278.627 256L331.314 308.686C337.562 314.935 337.562 325.065 331.314 331.314C325.152 337.475 315.215 337.561 308.949 331.57L308.686 331.314L256 278.627L203.314 331.314C197.065 337.562 186.935 337.562 180.686 331.314C174.525 325.152 174.439 315.215 180.43 308.949L180.686 308.686L233.373 256L180.686 203.314C174.438 197.065 174.438 186.935 180.686 180.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
