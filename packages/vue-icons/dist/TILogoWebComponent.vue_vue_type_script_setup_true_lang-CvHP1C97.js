import { defineComponent as n, computed as r, openBlock as s, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as o } from "vue";
const m = /* @__PURE__ */ n({
  __name: "TILogoWebComponent",
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
    const t = e, i = r(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (p, l) => (s(), a("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      o("path", {
        d: "M103.74 256L223.74 464H136L16 256L136 48H223.74L103.74 256Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        d: "M376 48L496 256L376 464H239.74L195.9 388H332.11L408.26 256L332.11 124H195.9L239.74 48H376Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
