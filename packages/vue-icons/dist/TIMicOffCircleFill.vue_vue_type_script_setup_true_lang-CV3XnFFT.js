import { defineComponent as i, computed as o, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TIMicOffCircleFill",
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
    const l = e, C = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: n(C.value),
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
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM256 128C282.478 128.077 303.923 149.522 304 176V240C303.998 242.583 303.788 245.161 303.37 247.71C303.241 248.466 302.691 249.082 301.954 249.295C301.217 249.508 300.423 249.281 299.91 248.71L215.49 155.85C214.293 154.54 214.101 152.598 215.02 151.08C223.728 136.775 239.253 128.031 256 128ZM288 384H224.45C215.84 384 208.45 377.38 208.02 368.77C207.809 364.398 209.399 360.131 212.418 356.962C215.438 353.794 219.623 352 224 352H240V334.26C221.806 330.991 204.817 322.92 190.79 310.88C170.94 293.83 160 271.58 160 248.22V224C159.974 219.68 161.705 215.536 164.796 212.518C167.887 209.501 172.072 207.87 176.39 208C185.17 208.351 192.083 215.614 192 224.4V248.22C192 273.88 220 303.7 256 303.7C257.67 303.7 259.37 303.61 261.06 303.46C262.299 303.346 263.518 303.825 264.35 304.75L285.42 327.94C285.882 328.446 286.053 329.154 285.872 329.815C285.692 330.476 285.185 330.999 284.53 331.2C280.423 332.488 276.238 333.51 272 334.26V352H287.55C296.16 352 303.55 358.62 303.98 367.23C304.191 371.602 302.601 375.869 299.582 379.038C296.562 382.206 292.377 384 288 384ZM210.11 245.09L246.57 285.2C246.871 285.52 246.928 286 246.709 286.381C246.491 286.763 246.049 286.957 245.62 286.86C225.815 282.39 210.926 266.002 208.37 245.86C208.325 245.429 208.563 245.018 208.96 244.842C209.357 244.667 209.821 244.767 210.11 245.09ZM362.76 364.84C356.221 370.782 346.103 370.298 340.16 363.76L148.16 153.76C142.345 147.206 142.884 137.194 149.368 131.301C155.852 125.408 165.87 125.827 171.84 132.24L363.84 342.24C369.782 348.779 369.298 358.897 362.76 364.84ZM352 248.22C351.937 262.693 347.803 276.856 340.07 289.09C339.741 289.628 339.178 289.98 338.55 290.039C337.922 290.098 337.303 289.858 336.88 289.39L317.69 268.29C316.664 267.162 316.37 265.548 316.93 264.13C318.944 259.067 319.986 253.669 320 248.22V224.42C319.922 216.384 325.712 209.491 333.64 208.18C343.52 206.7 352 214.69 352 224.3V248.22Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
