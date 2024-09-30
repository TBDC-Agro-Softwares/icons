import { defineComponent as o, computed as a, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIParagraphIndent",
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
    const t = e, i = a(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (p, l) => (n(), r("svg", {
      class: s(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M64 192.783V320.783L128 256.783L64 192.783ZM64 406.116H448V363.449H64V406.116ZM64 150.116H448V107.449H64V150.116ZM192 235.449H448V192.783H192V235.449ZM192 320.783H448V278.116H192V320.783Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
