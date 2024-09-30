import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TICompassFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (n(), r("svg", {
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
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM361.07 161.33L314.19 278.53C307.685 294.796 294.796 307.685 278.53 314.19L161.33 361.07C158.358 362.259 154.964 361.563 152.7 359.3C150.437 357.036 149.741 353.642 150.93 350.67L197.81 233.47C204.315 217.204 217.204 204.315 233.47 197.81L350.67 150.93C353.642 149.741 357.036 150.437 359.3 152.7C361.563 154.964 362.259 158.358 361.07 161.33ZM280 256C280 269.255 269.255 280 256 280C242.745 280 232 269.255 232 256C232 242.745 242.745 232 256 232C269.255 232 280 242.745 280 256Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
