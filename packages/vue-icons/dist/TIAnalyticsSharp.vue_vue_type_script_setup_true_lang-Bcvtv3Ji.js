import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIAnalyticsSharp",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (r(), s("svg", {
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
        d: "M450 128C435.502 128.005 421.854 134.844 413.173 146.456C404.492 158.068 401.793 173.093 405.89 187L334.52 258.36C325.108 255.225 314.932 255.225 305.52 258.36L252.61 205.45C257.38 186.836 250.078 167.218 234.297 156.254C218.517 145.289 197.583 145.289 181.803 156.254C166.022 167.218 158.72 186.836 163.49 205.45L75 293.88C54.7892 287.897 33.0956 296.391 22.3191 314.505C11.5425 332.619 14.4305 355.737 29.3321 370.643C44.2338 385.55 67.3502 388.445 85.468 377.674C103.586 366.904 112.086 345.213 106.11 325L193.48 237.64C202.892 240.778 213.068 240.778 222.48 237.64L275.4 290.56C270.63 309.174 277.932 328.792 293.713 339.756C309.493 350.721 330.427 350.721 346.207 339.756C361.988 328.792 369.29 309.174 364.52 290.56L437 218.12C454.282 223.219 472.949 217.758 484.759 204.149C496.568 190.541 499.345 171.29 491.863 154.899C484.381 138.508 468.018 127.994 450 128Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};