import { defineComponent as o, computed as C, openBlock as n, createElementBlock as s, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIFlameOutline",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), s("svg", {
      class: r(i.value),
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
        d: "M208 32C197.623 32 190.021 41.7131 192.445 51.7464L192.521 52.0505C198.716 75.723 196.815 98.5074 187.673 123.081L187.352 123.939C180.004 143.368 170.649 159.744 149.938 191.582L140.732 205.721C139.012 208.375 137.919 210.083 136.26 212.689L134.984 214.701C122.991 233.663 114.835 248.36 108.52 263.306C100.309 282.741 96 301.273 96 320C96 408.366 167.634 480 256 480C344.366 480 416 408.366 416 320C416 235.503 388.115 162.228 340.856 107.539C300.587 60.9374 248.638 32 208 32ZM227.543 66.838L227.597 66.8525C255.395 74.3677 288.909 96.3653 316.644 128.461C358.932 177.399 384 243.271 384 320C384 367.78 357.821 409.446 319.023 431.435C330.146 415.226 336 393.828 336 368C336 302.819 276.376 224 224 224C214.067 224 206.561 232.947 208.228 242.689L208.283 242.994C210.005 252.038 208.873 260.751 204.86 271.836C203.663 275.143 202.216 278.666 200.315 282.954L198.508 286.956C197.414 289.354 196.047 292.335 195.1 294.396L193.156 298.647C187.956 310.158 184.601 318.677 181.81 328.208C178.005 341.203 176 354.202 176 368C176 393.828 181.854 415.226 192.977 431.435C154.179 409.446 128 367.78 128 320C128 294.204 138.16 269.64 161.792 232.183L165.513 226.338C166.875 224.215 168.307 222.006 170.984 217.897L177.484 207.921C198.938 174.894 208.959 157.268 217.283 135.259C225.883 112.518 229.553 90.3566 227.64 67.924L227.543 66.838ZM222.679 311.026L229.081 297.019L229.218 296.714C231.567 291.448 233.387 287.045 234.95 282.727L235.248 281.897C237.796 274.712 239.546 267.873 240.424 261.131L240.473 260.736L240.582 260.793C251.7 266.599 263.97 277.444 274.99 292.011C292.857 315.631 304 344.284 304 368C304 391.354 298.247 408.129 288.333 418.692C280.087 427.479 268.751 432 256 432C243.249 432 231.913 427.479 223.667 418.692C213.753 408.129 208 391.354 208 368C208 348.825 212.276 333.978 222.679 311.026Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
