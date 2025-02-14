import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIVolumeMuteSharp",
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
    return (u, t) => (s(), n("svg", {
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
        d: "M64 57L41.3726 79.6274L416 454.255L438.627 431.627L64 57ZM334.25 184.357C346.19 207.747 352 231.067 352 255.627C351.97 268.825 350.184 281.961 346.69 294.687L319.37 267.367C319.784 263.468 319.994 259.549 320 255.627C320 236.247 315.34 217.687 305.75 198.877L298.48 184.627L327 170.097L334.25 184.357ZM416 255.627C416 204.437 402.92 171.737 381.82 135.567L373.76 121.747L346.12 137.867L354.18 151.687C373.07 184.067 384 211.457 384 255.627C384 281.557 380.11 301.837 373 320.957L397.5 345.467C409.19 319.307 416 292.047 416 255.627ZM429.49 87.0174C459.81 134.517 480 181.367 480 255.627C480 308.627 470.16 351.017 446.88 394.877L423.18 371.177C438.6 339.627 448 304.387 448 255.627C448 189.127 429.82 147.007 402.49 104.237L393.88 90.7474L420.88 73.5274L429.49 87.0174ZM256 71.6274L182.4 130.407L256 203.997V71.6274ZM32 335.527V175.727H92.47L256 339.257V439.627L125.65 335.527H32Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
