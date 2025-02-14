import { defineComponent as s, computed as r, openBlock as n, createElementBlock as c, normalizeClass as a, normalizeStyle as p, createElementVNode as i } from "vue";
const y = /* @__PURE__ */ s({
  __name: "TISubtilteIcon",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(l) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(l) > -1;
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
  setup(l) {
    const e = l, o = r(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (u, t) => (n(), c("svg", {
      class: a(o.value),
      style: p(l.color ? `color: ${l.color} !important` : void 0),
      width: "20",
      height: "21",
      viewBox: "0 0 20 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("ellipse", {
        cx: "4.55452",
        cy: "15.6302",
        rx: "3.33333",
        ry: "3.33333",
        fill: "#FF4560"
      }, null, -1),
      i("ellipse", {
        cx: "15.4452",
        cy: "15.9173",
        rx: "3.33333",
        ry: "3.33333",
        fill: "#45B1FF"
      }, null, -1),
      i("ellipse", {
        cx: "4.55452",
        cy: "5.02669",
        rx: "3.33333",
        ry: "3.33333",
        fill: "#FEB019"
      }, null, -1),
      i("ellipse", {
        cx: "15.4452",
        cy: "5.02669",
        rx: "3.33333",
        ry: "3.33333",
        fill: "#00DF8F"
      }, null, -1)
    ]), 6));
  }
});
export {
  y as _
};
