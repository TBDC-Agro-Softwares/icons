import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIEdit",
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
    const t = e, i = s(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (p, l) => (a(), n("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M362.668 238.933L273.068 149.333L106.668 315.733V405.333H196.268L362.668 238.933ZM149.335 358.4V326.4L268.801 206.933L298.668 238.933L179.201 358.4H149.335ZM288.001 134.4L302.935 119.467C320.001 102.4 347.735 102.4 362.668 119.467L392.535 149.333C409.601 166.4 409.601 192 392.535 209.067L377.601 224L288.001 134.4Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
