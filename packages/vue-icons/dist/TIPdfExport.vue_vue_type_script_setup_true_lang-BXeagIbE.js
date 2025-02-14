import { defineComponent as i, computed as o, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as n, createElementVNode as c } from "vue";
const m = /* @__PURE__ */ i({
  __name: "TIPdfExport",
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
    const t = e, C = o(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (d, l) => (s(), r("svg", {
      class: a(C.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        d: "M149.335 64.3477C125.868 64.3477 106.668 83.5477 106.668 107.014V405.681C106.668 429.148 125.868 448.348 149.335 448.348H362.668C386.135 448.348 405.335 429.148 405.335 405.681V162.481L307.201 64.3477H149.335ZM362.668 405.681H149.335V107.014H277.335V192.348H362.668V405.681ZM347.735 288.348C343.468 275.548 324.268 271.281 292.268 271.281C290.135 271.281 290.135 271.281 288.001 271.281C281.601 264.881 270.935 252.081 266.668 245.681C262.401 241.414 260.268 239.281 258.135 232.881C262.401 217.948 262.401 211.548 264.535 200.881C266.668 181.681 264.535 166.748 260.268 162.481C251.735 158.214 245.335 158.214 241.068 158.214C238.935 158.214 234.668 162.481 226.135 173.148C221.868 188.081 224.001 211.548 238.935 232.881C234.668 249.948 224.001 267.014 217.601 284.081C200.535 288.348 185.601 299.014 177.068 307.548C162.135 322.481 157.868 331.014 162.135 341.681C162.135 348.081 166.401 354.481 177.068 354.481C183.468 352.348 183.468 350.214 192.001 348.081C204.801 341.681 217.601 311.814 228.268 296.881C245.335 292.614 264.535 290.481 270.935 290.481C273.068 290.481 277.335 290.481 283.735 290.481C300.801 307.548 309.335 313.948 322.135 316.081C324.268 316.081 326.401 316.081 328.535 316.081C334.935 316.081 345.601 313.948 349.868 303.281C349.868 301.148 349.868 296.881 347.735 288.348ZM177.068 335.281C174.935 337.414 172.801 337.414 172.801 337.414C172.801 335.281 172.801 331.014 185.601 320.348C189.868 316.081 198.401 313.948 204.801 305.414C192.001 320.348 183.468 331.014 177.068 335.281ZM241.068 192.348C241.068 190.214 243.201 188.081 243.201 188.081C243.201 188.081 247.468 192.348 245.335 213.681C245.335 215.814 245.335 220.081 243.201 228.614C241.068 215.814 234.668 203.014 241.068 192.348ZM232.535 279.814C236.801 267.014 245.335 258.481 247.468 247.814C249.601 249.948 249.601 249.948 251.735 252.081C253.868 256.348 258.135 267.014 266.668 271.281C260.268 273.414 247.468 277.681 232.535 279.814ZM324.268 301.148C322.135 301.148 322.135 301.148 320.001 301.148C315.735 301.148 305.068 296.881 298.668 286.214C322.135 286.214 332.801 290.481 332.801 299.014C330.668 301.148 328.535 301.148 324.268 301.148Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
