import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TICheckmarkDoneOutline",
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
    return (u, t) => (r(), s("svg", {
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
        d: "M378.514 115.94C371.853 110.133 361.746 110.825 355.94 117.486L219.94 273.486L219.705 273.761C214.153 280.423 214.916 290.333 221.486 296.06C228.147 301.867 238.254 301.175 244.06 294.514L380.06 138.514L380.295 138.239C385.847 131.577 385.084 121.667 378.514 115.94ZM451.959 117.464C457.778 110.814 467.886 110.14 474.536 115.959C481.095 121.698 481.841 131.61 476.277 138.261L476.041 138.536L252.041 394.536C246.025 401.412 235.505 401.848 228.94 395.562L228.686 395.314L132.686 299.314C126.438 293.065 126.438 282.935 132.686 276.686C138.848 270.525 148.785 270.439 155.051 276.43L155.314 276.686L239.22 360.593L451.959 117.464ZM36.6863 276.686C42.8479 270.525 52.7847 270.439 59.0511 276.43L59.3137 276.686L155.314 372.686C161.562 378.935 161.562 389.065 155.314 395.314C149.152 401.475 139.215 401.561 132.949 395.57L132.686 395.314L36.6863 299.314C30.4379 293.065 30.4379 282.935 36.6863 276.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
