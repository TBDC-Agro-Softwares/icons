import { defineComponent as i, computed as o, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TITrophyFill",
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
        d: "M464 80H403.9C401.691 80 399.9 78.2091 399.9 76C399.9 71.11 399.9 67 399.9 63.92C399.856 46.2781 385.542 31.9999 367.9 32L144.11 32.26C126.488 32.293 112.209 46.5676 112.17 64.19C112.17 67.42 112.17 71.41 112.17 76C112.17 78.2091 110.379 80 108.17 80H48C39.1634 80 32 87.1634 32 96V112C32 166.53 62 224.45 108.52 237.35C111.324 238.131 113.462 240.404 114.07 243.25C119.84 270.14 137.59 295.75 165.48 316.86C186.39 332.69 211.33 344.36 233.75 349.34C237.401 350.158 239.997 353.398 240 357.14V444C240 446.209 238.209 448 236 448H176.45C167.84 448 160.45 454.62 160.02 463.23C159.809 467.602 161.399 471.869 164.418 475.038C167.438 478.206 171.623 480 176 480H335.55C344.16 480 351.55 473.38 351.98 464.77C352.191 460.398 350.601 456.131 347.582 452.962C344.562 449.794 340.377 448 336 448H276C273.791 448 272 446.209 272 444V357.14C272.003 353.398 274.599 350.158 278.25 349.34C300.67 344.34 325.61 332.69 346.52 316.86C374.41 295.75 392.16 270.14 397.93 243.25C398.538 240.404 400.676 238.131 403.48 237.35C450 224.45 480 166.53 480 112V96C480 87.1634 472.837 80 464 80ZM112 198.22C111.995 199.647 111.231 200.962 109.994 201.674C108.757 202.385 107.235 202.383 106 201.67C95.74 195.56 88.25 186.3 83.86 179.78C71.95 162.09 64.86 139.11 64.07 116.15C64.0292 115.063 64.4326 114.007 65.1872 113.224C65.9418 112.441 66.9826 111.999 68.07 112H108.07C110.279 112 112.07 113.791 112.07 116C112.05 143.45 112 174.87 112 198.22ZM428.13 179.78C423.74 186.3 416.26 195.56 406 201.67C404.763 202.384 403.239 202.385 402.002 201.671C400.764 200.958 400.001 199.638 400 198.21C400 171.7 400 141.58 399.95 116C399.95 113.791 401.741 112 403.95 112H443.95C445.037 111.999 446.078 112.441 446.833 113.224C447.587 114.007 447.991 115.063 447.95 116.15C447.16 139.11 440.05 162.09 428.14 179.78H428.13Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
