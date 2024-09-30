import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIBurguerMenu",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), s("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "26",
      height: "26",
      viewBox: "0 0 26 26",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M21.5312 6.5C22.2043 6.5 22.75 7.04565 22.75 7.71875C22.75 8.38512 22.2152 8.92657 21.5514 8.93734L21.5312 8.9375H4.46875C3.79565 8.9375 3.25 8.39185 3.25 7.71875C3.25 7.05238 3.78479 6.51093 4.4486 6.50016L4.46875 6.5H21.5312ZM21.5312 11.7812C22.2043 11.7812 22.75 12.3269 22.75 13C22.75 13.6664 22.2152 14.2078 21.5514 14.2186L21.5312 14.2188H4.46875C3.79565 14.2188 3.25 13.6731 3.25 13C3.25 12.3336 3.78479 11.7922 4.4486 11.7814L4.46875 11.7812H21.5312ZM22.75 18.2812C22.75 17.6082 22.2043 17.0625 21.5312 17.0625H4.46875L4.4486 17.0627C3.78479 17.0734 3.25 17.6149 3.25 18.2812C3.25 18.9543 3.79565 19.5 4.46875 19.5H21.5312L21.5514 19.4998C22.2152 19.4891 22.75 18.9476 22.75 18.2812Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
