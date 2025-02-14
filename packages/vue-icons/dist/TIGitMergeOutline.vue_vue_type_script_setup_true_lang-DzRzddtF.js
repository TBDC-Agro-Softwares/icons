import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as C, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGitMergeOutline",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: C(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M64 96C64 60.6538 92.6538 32 128 32C163.346 32 192 60.6538 192 96C192 125.488 172.057 150.319 144.922 157.739C149.402 190.482 170.068 217.782 204.232 238.28C236.668 257.742 279.384 269.532 322.107 271.653C329.331 244.226 354.304 224 384 224C419.346 224 448 252.654 448 288C448 323.346 419.346 352 384 352C354.064 352 328.929 331.447 321.935 303.682C273.704 301.506 225.303 288.241 187.768 265.72C170.441 255.323 155.724 243.193 144 229.52V354.016C171.604 361.121 192 386.179 192 416C192 451.346 163.346 480 128 480C92.6538 480 64 451.346 64 416C64 386.179 84.3964 361.121 112 354.016V157.984C84.3964 150.879 64 125.821 64 96ZM128 128C145.673 128 160 113.673 160 96C160 78.3269 145.673 64 128 64C110.327 64 96 78.3269 96 96C96 113.673 110.327 128 128 128ZM352 288C352 305.673 366.327 320 384 320C401.673 320 416 305.673 416 288C416 270.327 401.673 256 384 256C366.327 256 352 270.327 352 288ZM128 384C110.327 384 96 398.327 96 416C96 433.673 110.327 448 128 448C145.673 448 160 433.673 160 416C160 398.327 145.673 384 128 384Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
