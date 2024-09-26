import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIFileTrayFullFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (a(), n("svg", {
      class: s(i.value),
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
        d: "M447.66 116.89L479.66 268.7C479.883 269.786 479.997 270.891 480 272V384C480 419.346 451.346 448 416 448H96.0001C60.6539 448 32.0001 419.346 32.0001 384V272C31.9967 270.892 32.1039 269.787 32.3201 268.7L64.3201 116.83C67.5301 100.25 74.8001 87.19 85.9001 77.94C97.0001 68.69 111.2 64 128 64H384C417.68 64 441.48 83.77 447.66 116.89ZM95.6601 123.02V123.3L68.7301 251.18C68.4829 252.36 68.7812 253.589 69.5419 254.524C70.3025 255.459 71.4445 256.001 72.6501 256H192C196.222 255.979 200.28 257.636 203.281 260.606C206.281 263.577 207.979 267.618 208 271.84C208 298.35 229.49 319.84 256 319.84C282.51 319.84 304 298.35 304 271.84C304.055 263.055 311.215 255.976 320 256.02H439.35C440.556 256.021 441.698 255.479 442.458 254.544C443.219 253.609 443.517 252.38 443.27 251.2L416.34 123.32C416.333 123.271 416.321 123.222 416.309 123.174L416.309 123.173C416.29 123.092 416.27 123.011 416.27 122.93C412.87 104.57 402.61 96.02 384 96.02H127.95C109.47 96.02 99.2101 104.59 95.6601 123.02ZM368 160H144C135.164 160 128 152.837 128 144C128 135.163 135.164 128 144 128H368C376.837 128 384 135.163 384 144C384 152.837 376.837 160 368 160ZM128 224H384C392.837 224 400 216.837 400 208C400 199.163 392.837 192 384 192H128C119.164 192 112 199.163 112 208C112 216.837 119.164 224 128 224Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
