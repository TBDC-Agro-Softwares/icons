import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as C } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIReloadCircleFill",
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
    return (d, t) => (n(), s("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      C("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM376 230.15C376 234.911 372.141 238.77 367.38 238.77H307.84C304.352 238.776 301.205 236.676 299.871 233.453C298.537 230.231 299.279 226.522 301.75 224.06L323.92 201.89L318.32 195.38C290.743 166.751 247.318 160.343 212.647 179.786C177.977 199.23 160.798 239.624 170.844 278.084C180.891 316.544 215.63 343.377 255.38 343.38C292.407 343.345 325.408 320.022 337.8 285.13C339.706 279.735 344.345 275.767 349.97 274.721C355.595 273.674 361.351 275.708 365.07 280.056C368.789 284.404 369.906 290.405 368 295.8C347.771 353.049 287.798 386 228.629 372.375C169.459 358.75 129.937 302.889 136.783 242.558C143.629 182.227 194.662 136.641 255.38 136.62C288.031 136.495 319.284 149.867 341.74 173.57L342.3 174.19L346.61 179.19L361.29 164.51C362.869 162.894 365.031 161.979 367.29 161.97C369.589 161.951 371.8 162.853 373.431 164.474C375.061 166.095 375.975 168.301 375.97 170.6L376 230.15Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
