import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as C } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TINotificationsCircleFill",
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
    return (d, t) => (n(), r("svg", {
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
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM256 384C235.1 384 218.48 375.14 216.25 356.42C216.131 355.288 216.499 354.16 217.262 353.316C218.026 352.472 219.112 351.994 220.25 352H291.7C292.85 351.992 293.947 352.478 294.713 353.336C295.478 354.193 295.838 355.339 295.7 356.48C293.15 374.85 276.68 384 256 384ZM354 336H158C146.16 336 140 321 146.81 313C163.14 293.66 174.68 285.53 174.68 232.2C174.68 183.33 200.42 165.99 221.68 157.53C224.639 156.297 226.938 153.871 228.01 150.85C231.7 138.6 242.14 128 256 128C269.86 128 280.28 138.6 284 150.86C285.079 153.88 287.381 156.305 290.34 157.54C311.55 165.98 337.34 183.35 337.34 232.21C337.34 285.54 348.87 293.67 365.2 313.01C371.94 321 365.77 336 354 336Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
