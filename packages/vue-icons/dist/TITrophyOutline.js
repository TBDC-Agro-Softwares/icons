import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TITrophyOutline",
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
    return (d, t) => (r(), s("svg", {
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
        d: "M370.88 41L147.09 41.26C129.456 41.2599 115.145 55.526 115.09 73.16L115.077 89H51L50.6851 89.003C41.9939 89.1708 35 96.2686 35 105V121L35.0029 121.946C35.1907 152.208 44.3801 182.967 60.306 206.639C74.8635 228.277 94.2117 242.88 116.109 247.462C120.844 277.16 139.952 304.307 168.428 325.862C191.418 343.265 219.023 355.575 243 359.588V457H179L178.685 457.003C169.994 457.171 163 464.269 163 473C163 481.837 170.163 489 179 489H259H339L339.315 488.997C348.006 488.829 355 481.731 355 473C355 464.163 347.837 457 339 457H275V359.574C298.961 355.548 326.538 343.246 349.509 325.864C377.994 304.31 397.11 277.166 401.85 247.471C423.764 242.898 443.127 228.291 457.694 206.639C473.786 182.72 483 151.566 483 121V105L482.997 104.685C482.829 95.9939 475.731 89 467 89H402.892L402.88 72.9748C402.88 55.3269 388.553 41 370.88 41ZM402.916 121L402.986 213.718C413.321 209.404 422.973 200.921 431.143 188.776C443.482 170.437 450.826 145.881 450.997 121.858L451 121H402.916ZM67 121H115.051L114.976 213.702C104.655 209.383 95.0166 200.905 86.8565 188.776C74.3715 170.219 67 145.295 67 121ZM147 233C147 233.338 146.99 233.674 146.969 234.006C147.384 257.587 162.351 281.128 187.742 300.348C210.841 317.833 239.602 329 258.96 329C278.32 329 307.092 317.832 330.201 300.346C355.963 280.852 371 256.913 371 233C371 222.919 370.996 210.745 370.99 197.574L370.88 73L147.09 73.259L146.961 231.873C146.987 232.245 147 232.621 147 233Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
