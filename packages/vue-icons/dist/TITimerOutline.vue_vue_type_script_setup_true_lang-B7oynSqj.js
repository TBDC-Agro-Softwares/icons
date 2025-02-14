import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TITimerOutline",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (r(), s("svg", {
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
        d: "M463.985 252.62C462.203 141.099 372.558 50.5777 260.88 48.0086L260.549 48.0021C255.2 47.9574 250.037 50.0191 246.188 53.7572C242.226 57.605 239.997 62.8974 240.012 68.4206L240.012 152.006L240.015 152.32C240.183 161.012 247.281 168.006 256.012 168.006L256.327 168.003C265.018 167.835 272.012 160.737 272.012 152.006V80.6716L274.309 80.8908C363.028 90.0527 432.012 165.114 432.012 256.006C432.012 353.416 353.305 432.189 256.042 432.006C158.476 431.822 78.931 351.53 80.0111 254.183C80.4503 211.509 96.3835 170.463 124.842 138.678C130.737 132.095 130.178 121.98 123.595 116.085C117.012 110.191 106.896 110.749 101.002 117.333C67.3645 154.901 48.5319 203.417 48.0129 253.841C46.7353 368.988 140.653 463.789 255.982 464.006C370.961 464.222 464.012 371.094 464.012 256.006L463.985 252.62ZM154.392 165.636L233.392 278.636C235.608 281.725 238.337 284.41 241.462 286.576C256.167 296.56 276.164 292.879 286.351 278.315C296.538 263.75 293.135 243.703 278.712 233.316L165.712 154.316C162.48 152.06 158.096 152.447 155.31 155.233C152.523 158.02 152.136 162.404 154.392 165.636Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
