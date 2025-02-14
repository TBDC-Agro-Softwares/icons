import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIBarChartFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (s(), a("svg", {
      class: n(i.value),
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
        d: "M48 496H480C488.837 496 496 488.837 496 480C496 471.163 488.837 464 480 464H48V32C48 23.1634 40.8366 16 32 16C23.1634 16 16 23.1634 16 32V464C16 481.673 30.3269 496 48 496ZM116 432H156C175.882 432 192 415.882 192 396V244C192 224.118 175.882 208 156 208H116C96.1178 208 80 224.118 80 244V396C80 415.882 96.1178 432 116 432ZM300 432H260C240.118 432 224 415.882 224 396V196C224 176.118 240.118 160 260 160H300C319.882 160 336 176.118 336 196V396C336 415.882 319.882 432 300 432ZM403.64 432H443.64C463.522 432 479.64 415.882 479.64 396V132C479.64 112.118 463.522 96 443.64 96H403.64C383.758 96 367.64 112.118 367.64 132V396C367.64 415.882 383.758 432 403.64 432Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
