import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIAlbumsFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), r("svg", {
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
        d: "M368 96H144C135.163 96 128 88.8366 128 80C128 71.1634 135.163 64 144 64H368C376.837 64 384 71.1634 384 80C384 88.8366 376.837 96 368 96ZM400 144H112C103.163 144 96 136.837 96 128C96 119.163 103.163 112 112 112H400C408.837 112 416 119.163 416 128C416 136.837 408.837 144 400 144ZM92.87 448H419.13C443.9 447.972 463.972 427.9 464 403.13V204.87C463.972 180.1 443.9 160.028 419.13 160H92.87C68.1004 160.028 48.0276 180.1 48 204.87V403.13C48.0276 427.9 68.1004 447.972 92.87 448Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
