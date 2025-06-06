import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TISchoolFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (n(), r("svg", {
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
        d: "M496.921 190.39V190.5C496.973 190.998 497 191.499 497.001 192V368C497 372.377 495.207 376.562 492.038 379.582C488.87 382.601 484.603 384.191 480.231 383.98C471.621 383.55 465.001 376.16 465.001 367.55V223.02C465.004 222.304 464.624 221.641 464.004 221.282C463.385 220.923 462.621 220.922 462.001 221.28L264.921 333.89C260.001 336.702 253.961 336.702 249.041 333.89L25.0409 205.89C20.0576 203.041 16.9824 197.74 16.9824 192C16.9824 186.26 20.0576 180.959 25.0409 178.11L249.041 50.11C253.961 47.2978 260.001 47.2978 264.921 50.11L488.921 178.11C493.416 180.67 496.396 185.244 496.921 190.39ZM249.061 365.89C251.479 367.272 254.216 368 257.001 368C259.786 368 262.523 367.272 264.941 365.89L405.001 285.84C407.478 284.41 410.53 284.411 413.006 285.843C415.482 287.275 417.005 289.92 417.001 292.78V368C417.006 373.816 413.855 379.176 408.771 382L264.771 462C259.939 464.684 254.063 464.684 249.231 462L105.231 382C100.147 379.176 96.9961 373.816 97.0009 368V292.78C96.9967 289.92 98.5198 287.275 100.996 285.843C103.472 284.411 106.524 284.41 109.001 285.84L249.061 365.89Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
