import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as L, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIRepeatOutline",
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
    return (d, t) => (s(), r("svg", {
      class: a(i.value),
      style: L(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M331.051 108.43C324.785 102.439 314.848 102.525 308.686 108.686L308.43 108.949C302.439 115.215 302.525 125.152 308.686 131.314L329.373 152H144L142.414 152.018C90.1719 153.016 48.1566 195.554 48.0001 247.952L48 264L48.003 264.315C48.1708 273.006 55.2686 280 64 280C72.8366 280 80 272.837 80 264V248L80.0117 246.944C80.6784 212.15 109.072 184.104 144.048 184L329.373 184L308.686 204.686L308.43 204.949C302.439 211.215 302.525 221.152 308.686 227.314C314.935 233.562 325.065 233.562 331.314 227.314L379.314 179.314L379.57 179.051C385.561 172.785 385.475 162.848 379.314 156.686L331.314 108.686L331.051 108.43ZM180.686 284.686C186.935 278.438 197.065 278.438 203.314 284.686C209.475 290.848 209.561 300.785 203.57 307.051L203.314 307.314L182.627 328L367.952 328C402.928 327.896 431.322 299.85 431.988 265.056L432 264V248C432 239.163 439.163 232 448 232C456.731 232 463.829 238.994 463.997 247.685L464 248L464 264.048C463.843 316.446 421.828 358.984 369.586 359.982L368 360H182.627L203.314 380.686C209.475 386.848 209.561 396.785 203.57 403.051L203.314 403.314C197.152 409.475 187.215 409.561 180.949 403.57L180.686 403.314L132.686 355.314C126.525 349.152 126.439 339.215 132.43 332.949L132.686 332.686L180.686 284.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
