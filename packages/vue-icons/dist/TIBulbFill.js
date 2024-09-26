import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBulbFill",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
      class: s(i.value),
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
        d: "M256 16C299.07 16 339.35 32.58 369.42 62.69C399.444 92.732 416.214 133.528 416 176C416 223.61 399.08 265 367.06 295.57L362.15 300.23L362.126 300.253C344.338 317.091 320 340.129 320 360V384C320 392.837 312.837 400 304 400H280C275.582 400 272 396.418 272 392V274.79C271.999 271.478 274.039 268.508 277.13 267.32C286.368 263.56 295.145 258.756 303.29 253C309.885 247.682 311.191 238.145 306.269 231.249C301.347 224.354 291.903 222.491 284.73 227C277.31 232.22 263.06 240 256 240C248.94 240 234.69 232.24 227.29 227C222.663 223.314 216.38 222.482 210.954 224.837C205.527 227.191 201.842 232.348 201.372 238.245C200.903 244.141 203.725 249.816 208.71 253C216.854 258.766 225.631 263.581 234.87 267.35C237.962 268.538 240.002 271.508 240 274.82V392C240 396.418 236.419 400 232 400H208C199.164 400 192 392.837 192 384V360C192 339.64 167.37 316.57 149.36 299.73L145 295.64C113.87 266.23 96.0005 222.62 96.0005 176C95.8992 133.534 112.724 92.7789 142.752 62.7511C172.779 32.7233 213.535 15.8987 256 16ZM320 432C320 423.163 312.837 416 304 416H208C199.164 416 192 423.163 192 432C192 440.837 199.164 448 208 448H304C312.837 448 320 440.837 320 432ZM304 480C304 471.163 296.837 464 288 464H224C215.164 464 208 471.163 208 480C208 488.837 215.164 496 224 496H288C296.837 496 304 488.837 304 480Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
