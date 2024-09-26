import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TITrashBinOutline",
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
    return (L, t) => (r(), s("svg", {
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
        d: "M464 48H48C30.3269 48 16 62.3269 16 80V128C16 145.673 30.3269 160 48 160H65.5779L92.7659 421.395L92.7897 421.61L92.8803 422.333C96.0444 446.145 116.364 464 140.46 464H371.55L372.279 463.995C396.297 463.635 416.404 445.541 419.22 421.61L419.244 421.395L446.423 160H464C481.673 160 496 145.673 496 128V80C496 62.3269 481.673 48 464 48ZM432.065 127.999L432.011 127.999C431.933 127.999 431.856 127.999 431.779 128H80.2219C80.0872 127.998 79.9522 127.998 79.8168 128H48V80H464V128H432.183C432.143 128 432.104 127.999 432.065 127.999ZM97.7505 160H414.25L387.43 417.936L387.397 418.205C386.302 426.095 379.55 432 371.55 432H140.46L140.123 431.996C132.271 431.833 125.693 425.984 124.613 418.205L124.579 417.94L97.7505 160ZM300.686 228.686C306.935 222.438 317.065 222.438 323.314 228.686C329.475 234.848 329.561 244.785 323.57 251.051L323.314 251.314L278.627 296L323.314 340.686C329.562 346.935 329.562 357.065 323.314 363.314C317.152 369.475 307.215 369.561 300.949 363.57L300.686 363.314L256 318.627L211.314 363.314C205.065 369.562 194.935 369.562 188.686 363.314C182.525 357.152 182.439 347.215 188.43 340.949L188.686 340.686L233.373 296L188.686 251.314C182.438 245.065 182.438 234.935 188.686 228.686C194.848 222.525 204.785 222.439 211.051 228.43L211.314 228.686L256 273.373L300.686 228.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
