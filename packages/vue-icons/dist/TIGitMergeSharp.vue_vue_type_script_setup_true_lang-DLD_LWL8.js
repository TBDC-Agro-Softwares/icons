import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIGitMergeSharp",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (s(), n("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M384 224C370.336 223.986 357.031 228.369 346.05 236.5L160 153.36V151.36C185.086 136.877 197.316 107.35 189.819 79.3699C182.322 51.3902 156.967 31.9343 128 31.9343C99.0332 31.9343 73.6778 51.3902 66.1807 79.3699C58.6835 107.35 70.914 136.877 95.9999 151.36V360.61C70.914 375.093 58.6835 404.62 66.1807 432.6C73.6778 460.58 99.0332 480.036 128 480.036C156.967 480.036 182.322 460.58 189.819 432.6C197.316 404.62 185.086 375.093 160 360.61V223.46L320.41 295.15C324.255 329.353 354.462 354.39 388.785 351.822C423.107 349.253 449.252 320 447.964 285.606C446.677 251.212 418.418 223.995 384 224ZM128 64C145.673 64 160 78.3268 160 96C160 113.673 145.673 128 128 128C110.327 128 95.9999 113.673 95.9999 96C95.9999 78.3268 110.327 64 128 64ZM128 448C110.327 448 95.9999 433.673 95.9999 416C95.9999 398.327 110.327 384 128 384C145.673 384 160 398.327 160 416C160 433.673 145.673 448 128 448ZM384 320C366.327 320 352 305.673 352 288C352 270.327 366.327 256 384 256C401.673 256 416 270.327 416 288C416 305.673 401.673 320 384 320Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
