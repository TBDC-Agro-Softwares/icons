import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIManFill",
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
    return (d, t) => (r(), s("svg", {
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
        d: "M312 56C312 86.9279 286.928 112 256 112C225.072 112 200 86.9279 200 56C200 25.0721 225.072 0 256 0C286.928 0 312 25.0721 312 56ZM144 192C144.104 156.697 172.697 128.104 208 128H304C339.303 128.104 367.896 156.697 368 192V300C368.006 305.435 365.8 310.639 361.89 314.413C357.98 318.188 352.701 320.208 347.27 320.01C336.43 319.62 328 310.39 328 299.54V200.02C328.005 197.803 327.09 195.684 325.473 194.167C323.856 192.651 321.682 191.873 319.47 192.02C315.205 192.391 311.947 195.989 312 200.27V489C312 501.703 301.703 512 289 512C276.297 512 266 501.703 266 489V346C266.006 343.228 264.861 340.577 262.838 338.681C260.815 336.785 258.096 335.814 255.33 336C249.994 336.476 245.927 340.983 246 346.34V489C246 501.703 235.703 512 223 512C210.297 512 200 501.703 200 489V200.02C200.005 197.803 199.09 195.684 197.473 194.167C195.856 192.651 193.682 191.873 191.47 192.02C187.205 192.391 183.947 195.989 184 200.27V300C184.001 305.432 181.793 310.63 177.883 314.4C173.973 318.17 168.698 320.188 163.27 319.99C152.43 319.6 144 310.37 144 299.52V192Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
