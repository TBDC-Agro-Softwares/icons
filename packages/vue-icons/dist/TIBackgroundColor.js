import { defineComponent as i, computed as a, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ i({
  __name: "TIBackgroundColor",
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
    const t = e, o = a(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (u, l) => (r(), s("svg", {
      class: n(o.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M211.56 261.137L376.849 146.147L402.01 173.793L272.005 327.552L211.56 261.137ZM161.851 269.909L258.605 376.219C260.608 378.203 263.009 379.74 265.65 380.727C268.291 381.714 271.111 382.13 273.925 381.947C276.738 381.764 279.481 380.985 281.971 379.664C284.461 378.342 286.643 376.507 288.372 374.28L447.335 186.27C450.501 182.79 452.294 178.277 452.378 173.572C452.461 168.868 450.83 164.294 447.789 160.704L394.179 101.799C390.89 98.4343 386.489 96.3811 381.798 96.0227C377.107 95.6642 372.445 97.0249 368.683 99.851L166.579 240.455C164.199 241.967 162.167 243.967 160.617 246.322C159.067 248.677 158.034 251.335 157.588 254.119C157.141 256.902 157.29 259.749 158.025 262.471C158.76 265.194 160.064 267.729 161.851 269.909ZM59.5898 395.258L179.427 416L210.982 387.282L146.365 316.284L59.5898 395.258Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};