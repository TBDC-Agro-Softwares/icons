import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIInsertImage",
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
    const t = e, i = s(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (m, l) => (a(), n("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M302.935 235.232L384.001 341.898H128.001L192.001 258.698L236.801 316.298L298.668 235.232H302.935ZM181.335 235.232C198.401 235.232 213.335 220.298 213.335 203.232C213.335 186.165 198.401 171.232 181.335 171.232C164.268 171.232 149.335 186.165 149.335 203.232C149.335 220.298 164.268 235.232 181.335 235.232ZM469.335 128.565V384.565C469.335 408.032 450.135 427.232 426.668 427.232H85.3346C61.868 427.232 42.668 408.032 42.668 384.565V128.565C42.668 105.098 61.868 85.8984 85.3346 85.8984H426.668C450.135 85.8984 469.335 105.098 469.335 128.565ZM426.668 188.298V128.565H85.3346V384.565H426.668V188.298Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
