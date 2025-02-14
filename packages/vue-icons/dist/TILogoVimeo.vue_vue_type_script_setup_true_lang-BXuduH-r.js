import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as C, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILogoVimeo",
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
      class: C(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M476.9 114C471.9 90.6101 459.39 75.2201 436.29 67.7301C413.19 60.2401 371.37 63.2301 342.17 84.5201C315.38 104.03 295.91 138.94 288.17 162.8C287.705 164.246 288.098 165.83 289.186 166.889C290.273 167.949 291.867 168.302 293.3 167.8C304.07 164 315.02 160.7 327.3 161.35C342.3 162.15 351.81 173.35 352.21 186.64C352.51 196.43 352.01 205.33 348.61 214.32C337.87 243 321 270.78 301.06 295.07C298.055 298.683 294.706 301.995 291.06 304.96C280.85 313.25 272.25 311.06 265.65 299.76C260.25 290.47 256.65 280.88 253.45 270.68C241.05 231.01 236.64 189.84 229.64 149.16C226.34 129.68 222.64 109.39 211.64 92.3001C200.04 74.5101 183.03 67.7201 161.64 70.3001C146.94 72.1001 124.73 87.7901 113.83 96.6901C113.83 96.6901 57.8298 143.56 32.0098 168.04L53.2098 195.04C53.2098 195.04 71.1198 182.55 80.7198 176.75C86.4198 173.36 93.1198 172.66 97.9198 176.95C102.43 180.85 107.53 185.95 110.23 191.05C115.93 201.74 121.43 212.93 124.93 224.42C138.13 268.69 150.44 313.06 162.74 357.64C169.04 380.42 176.64 401.81 190.74 421.19C210.05 447.78 230.35 453.87 261.66 442.68C287.07 433.59 308.27 416.5 327.66 398.81C360.77 368.63 386.78 333.45 413.18 297.67C433.59 270 450.49 242 464.59 210.72C478.5 179.74 484 147.26 476.9 114Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
