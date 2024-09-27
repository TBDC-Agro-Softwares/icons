import { defineComponent as i, computed as r, openBlock as n, createElementBlock as a, normalizeClass as s, normalizeStyle as d, createElementVNode as C } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TILogoWordpress",
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
    const l = e, o = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, t) => (n(), a("svg", {
      class: s(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      C("path", {
        d: "M430.2 175.4C425.898 166.138 420.847 157.242 415.1 148.8C414.033 147.2 412.878 145.6 411.722 144C411.145 143.2 410.567 142.4 410 141.6C388.332 112.517 358.907 90.1287 325.1 77C303.05 68.3749 279.577 63.9652 255.9 64C197.802 64.0013 142.846 90.3758 106.5 135.7C99.9997 143.758 94.1481 152.318 89 161.3C103.2 161.4 120.8 161.4 122.8 161.4C140.9 161.4 168.8 159.2 168.8 159.2C178.2 158.6 179.2 172.3 169.9 173.4C169.9 173.4 160.5 174.5 150.1 175L213 362L250.8 248.7L224 175.1C214.6 174.6 205.9 173.5 205.9 173.5C196.5 173 197.7 158.7 206.9 159.3C206.9 159.3 235.4 161.5 252.4 161.5C270.5 161.5 298.4 159.3 298.4 159.3C307.7 158.7 308.9 172.4 299.5 173.5C299.5 173.5 290.2 174.6 279.8 175.1L342.1 360.7L359.4 303.1C368.1 280.7 372.5 262.2 372.5 247.4C372.5 226.1 364.8 211.3 358.2 199.8C357.44 198.55 356.683 197.318 355.935 196.1L355.928 196.088C348.125 183.379 341.3 172.263 341.3 159.4C341.3 143.5 353.3 128.7 370.3 128.7H372.5C398.7 128 407.3 154 408.4 171.7V172.3C408.679 177.326 408.617 181.426 408.555 185.587V185.59C408.527 187.389 408.5 189.199 408.5 191.1C408.5 208.5 405.2 228.2 395.4 252.9L356.4 365.7L334.1 431.4C335.9 430.6 337.6 429.8 339.4 428.9C396.1 401.5 437.4 346.9 446.1 282.2C447.39 273.594 448.025 264.902 448 256.2C448.038 228.29 441.962 200.71 430.2 175.4Z",
        fill: "currentColor"
      }, null, -1),
      C("path", {
        d: "M64 256C64 230.9 70.8 203.1 80.8 180.5C83.5649 180.646 85.3416 180.603 87.3513 180.554C89.4846 180.503 91.8809 180.446 96 180.6L189 435.9C186.3 434.9 183.6 433.8 181 432.7C117.8 405.8 71.8 346 64.9 274.8C64.3 268.6 64 262.3 64 256Z",
        fill: "currentColor"
      }, null, -1),
      C("path", {
        d: "M226.2 367L259 271.3L311.9 416.6C312.014 416.828 312.948 418.883 314.216 421.674C316.292 426.24 319.262 432.776 321 436.5L320.998 436.501C318.398 437.401 315.799 438.3 313.2 439.1C302.603 442.442 291.725 444.818 280.7 446.2C272.461 447.46 264.135 448.062 255.8 448C239.088 447.991 222.448 445.806 206.3 441.5H206C205.1 441.25 204.225 441.025 203.35 440.8C202.475 440.575 201.6 440.35 200.7 440.1L226.1 367H226.2Z",
        fill: "currentColor"
      }, null, -1),
      C("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 32C132.29 32 32 132.29 32 256C32 379.71 132.29 480 256 480C379.71 480 480 379.71 480 256C480 132.29 379.71 32 256 32ZM256 48C354.937 48.051 440.155 117.767 459.807 214.732C479.459 311.698 428.11 409.092 337 447.66C231.149 492.395 109.075 442.851 64.34 337C19.6049 231.149 69.1491 109.075 175 64.34C200.625 53.497 228.175 47.9393 256 48Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};