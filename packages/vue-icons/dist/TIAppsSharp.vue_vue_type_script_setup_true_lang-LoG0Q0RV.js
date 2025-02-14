import { defineComponent as o, computed as C, openBlock as s, createElementBlock as r, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const V = /* @__PURE__ */ o({
  __name: "TIAppsSharp",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (s(), r("svg", {
      class: n(i.value),
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
        d: "M48 56C48 51.5817 51.5817 48 56 48H152C156.418 48 160 51.5817 160 56V152C160 156.418 156.418 160 152 160H56C51.5817 160 48 156.418 48 152V56ZM200 56C200 51.5817 203.582 48 208 48H304C308.418 48 312 51.5817 312 56V152C312 156.418 308.418 160 304 160H208C203.582 160 200 156.418 200 152V56ZM360 48C355.582 48 352 51.5817 352 56V152C352 156.418 355.582 160 360 160H456C460.418 160 464 156.418 464 152V56C464 51.5817 460.418 48 456 48H360ZM48 208C48 203.582 51.5817 200 56 200H152C156.418 200 160 203.582 160 208V304C160 308.418 156.418 312 152 312H56C51.5817 312 48 308.418 48 304V208ZM208 200C203.582 200 200 203.582 200 208V304C200 308.418 203.582 312 208 312H304C308.418 312 312 308.418 312 304V208C312 203.582 308.418 200 304 200H208ZM352 208C352 203.582 355.582 200 360 200H456C460.418 200 464 203.582 464 208V304C464 308.418 460.418 312 456 312H360C355.582 312 352 308.418 352 304V208ZM56 352C51.5817 352 48 355.582 48 360V456C48 460.418 51.5817 464 56 464H152C156.418 464 160 460.418 160 456V360C160 355.582 156.418 352 152 352H56ZM200 360C200 355.582 203.582 352 208 352H304C308.418 352 312 355.582 312 360V456C312 460.418 308.418 464 304 464H208C203.582 464 200 460.418 200 456V360ZM360 352C355.582 352 352 355.582 352 360V456C352 460.418 355.582 464 360 464H456C460.418 464 464 460.418 464 456V360C464 355.582 460.418 352 456 352H360Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  V as _
};
