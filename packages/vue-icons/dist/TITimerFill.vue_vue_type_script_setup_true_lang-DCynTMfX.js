import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TITimerFill",
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
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 48C141.12 48 48 141.12 48 256C48 370.88 141.12 464 256 464C370.88 464 464 370.88 464 256C464 141.12 370.88 48 256 48ZM173.67 162.34L278.67 233.34C293.093 243.727 296.496 263.774 286.309 278.339C276.122 292.904 256.125 296.584 241.42 286.6C238.315 284.411 235.609 281.705 233.42 278.6L162.42 173.6C160.164 170.368 160.551 165.984 163.338 163.198C166.124 160.411 170.508 160.024 173.74 162.28L173.67 162.34ZM256 432C159 432 80 353.05 80 256C79.8334 208.163 99.3074 162.354 133.87 129.28C137.49 125.671 142.775 124.295 147.695 125.681C152.616 127.066 156.406 130.998 157.611 135.965C158.816 140.933 157.249 146.164 153.51 149.65C124.507 177.41 108.165 215.853 108.3 256C108.3 337.44 174.56 403.7 256 403.7C337.44 403.7 403.7 337.44 403.7 256C403.7 179.33 344.98 116.12 270.15 109V164C270.15 171.815 263.815 178.15 256 178.15C248.185 178.15 241.85 171.815 241.85 164V94.15C241.85 86.3352 248.185 80 256 80C353.05 80 432 159 432 256C432 353 353.05 432 256 432Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
