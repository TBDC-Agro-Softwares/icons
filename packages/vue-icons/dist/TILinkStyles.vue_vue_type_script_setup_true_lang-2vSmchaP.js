import { defineComponent as o, computed as s, openBlock as n, createElementBlock as a, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILinkStyles",
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
    return (p, l) => (n(), a("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M405.335 381.867L424.535 458.667L356.268 418.133L285.868 458.667L302.935 381.867L241.068 320H322.135L358.401 245.333L388.268 320H469.335L405.335 381.867ZM426.668 256C426.668 262.4 424.535 270.933 422.401 277.333H467.201C469.335 270.933 469.335 264.533 469.335 256C469.335 196.267 422.401 149.333 362.668 149.333H277.335V192H362.668C398.935 192 426.668 219.733 426.668 256ZM315.735 234.667H170.668V277.333H241.068H294.401L315.735 234.667ZM211.201 349.867L181.335 320H149.335C113.068 320 85.3346 292.267 85.3346 256C85.3346 219.733 113.068 192 149.335 192H234.668V149.333H149.335C89.6013 149.333 42.668 196.267 42.668 256C42.668 315.733 89.6013 362.667 149.335 362.667H224.001L211.201 349.867Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
