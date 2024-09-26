import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIBulbSharp",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (a(), n("svg", {
      class: s(i.value),
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
        d: "M256 16C299.07 16 339.35 32.58 369.42 62.69C399.444 92.732 416.214 133.528 416 176C416 223.61 399.08 265 367.06 295.57L362.15 300.23L362.126 300.253C344.338 317.091 320 340.129 320 360V400H272V269.29L316.39 243.29L297.29 217.61L256 240L214 217.72L195.72 244L240 269.11V400H192V360C192 339.64 167.37 316.57 149.36 299.73L145 295.64C113.87 266.23 96.0005 222.62 96.0005 176C95.8992 133.534 112.724 92.7789 142.752 62.7511C172.779 32.7233 213.535 15.8987 256 16ZM192 448V416H320V448H192ZM208 496V464H304V496H208Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
