import { defineComponent as C, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ C({
  __name: "TICloudyNightOutline",
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
    const l = e, i = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
      class: s(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "513",
      height: "512",
      viewBox: "0 0 513 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M355.592 54.3811C361.387 41.0563 347.854 27.5291 334.532 33.3306C287.067 54.0005 256 102.103 256 155.69C255.998 157.807 256.047 159.923 256.147 162.036C248.346 160.69 240.286 160 232 160C159.643 160 101.208 212.071 88.2126 291.001C88.2115 291.007 88.2027 291.018 88.1895 291.026C88.1805 291.032 88.1695 291.037 88.1574 291.039C65.8419 294.597 44.9019 303.74 29.1387 317.892C10.4609 334.66 0 357.477 0 384.8C0 445.268 43.6238 480 106 480H340C409.414 480 464 430.434 464 363.2L463.987 361.333C463.535 328.529 451.153 301.243 430.342 281.411C466.015 269.904 495.617 244.034 510.669 209.468C516.471 196.146 502.944 182.613 489.619 188.408C478.468 193.257 464.349 195.69 448.62 195.69C393.22 195.69 348.31 150.78 348.31 95.38C348.31 79.6512 350.743 65.5319 355.592 54.3811ZM389.502 255.993C416.473 255.691 441.455 245.151 459.675 227.677L460.036 227.325L459.091 227.385C455.996 227.569 452.857 227.669 449.68 227.687L448.62 227.69C375.547 227.69 316.31 168.453 316.31 95.38C316.31 91.8409 316.411 88.348 316.615 84.9089L316.674 83.964L316.323 84.3253C298.856 102.538 288.318 127.51 288.007 154.477L288 155.704C287.995 161.305 288.459 166.893 289.386 172.408C297.991 176.42 306.119 181.361 313.706 187.168C334.131 202.802 349.847 224.204 359.07 247.834L360.832 248.132C370.946 249.898 380.537 252.537 389.502 255.993ZM269.106 198.564C269.498 198.733 269.898 198.887 270.305 199.025C278.901 202.402 286.904 206.952 294.257 212.579C309.713 224.41 321.786 240.724 328.968 258.729L329.292 259.548C333.333 269.895 342.452 277.373 353.351 279.32L353.82 279.401C401.443 287.163 432 317.669 432 363.2C432 412.035 392.393 448 340 448H106C83.8729 448 65.1881 442.499 52.4034 432.32C39.1662 421.781 32 406.133 32 384.8C32 366.684 38.5122 352.48 50.5163 341.703C61.2158 332.098 76.146 325.498 92.3194 322.783L93.1291 322.65C106.602 320.561 117.294 310.098 119.711 296.644L119.784 296.219C130.289 232.417 175.645 192 232 192C245.3 192 257.714 194.261 269.106 198.564Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};