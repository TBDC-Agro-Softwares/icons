import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIEllipsisVerticalOutline",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
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
        d: "M256 48C229.49 48 208 69.4903 208 96C208 122.51 229.49 144 256 144C282.51 144 304 122.51 304 96C304 69.4903 282.51 48 256 48ZM256 80C264.837 80 272 87.1634 272 96C272 104.837 264.837 112 256 112C247.163 112 240 104.837 240 96C240 87.1634 247.163 80 256 80ZM208 256C208 229.49 229.49 208 256 208C282.51 208 304 229.49 304 256C304 282.51 282.51 304 256 304C229.49 304 208 282.51 208 256ZM272 256C272 247.163 264.837 240 256 240C247.163 240 240 247.163 240 256C240 264.837 247.163 272 256 272C264.837 272 272 264.837 272 256ZM208 416C208 389.49 229.49 368 256 368C282.51 368 304 389.49 304 416C304 442.51 282.51 464 256 464C229.49 464 208 442.51 208 416ZM272 416C272 407.163 264.837 400 256 400C247.163 400 240 407.163 240 416C240 424.837 247.163 432 256 432C264.837 432 272 424.837 272 416Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
