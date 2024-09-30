import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as s, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TICalculatorOutline",
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
    const l = e, C = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
      class: a(C.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M368 32H144C117.49 32 96 53.4903 96 80V432C96 458.51 117.49 480 144 480H368C394.51 480 416 458.51 416 432V80C416 53.4903 394.51 32 368 32ZM144 64H368C376.837 64 384 71.1634 384 80V432C384 440.837 376.837 448 368 448H144C135.163 448 128 440.837 128 432V80C128 71.1634 135.163 64 144 64ZM352 96H160.01C151.173 96 144.01 103.163 144.01 112V176C144.01 184.837 151.173 192 160.01 192H352C360.837 192 368 184.837 368 176V112C368 103.163 360.837 96 352 96ZM336 128V160H176.01V128H336ZM168 272C181.255 272 192 261.255 192 248C192 234.745 181.255 224 168 224C154.745 224 144 234.745 144 248C144 261.255 154.745 272 168 272ZM280 248C280 261.255 269.255 272 256 272C242.745 272 232 261.255 232 248C232 234.745 242.745 224 256 224C269.255 224 280 234.745 280 248ZM344 272C357.255 272 368 261.255 368 248C368 234.745 357.255 224 344 224C330.745 224 320 234.745 320 248C320 261.255 330.745 272 344 272ZM192 328C192 341.255 181.255 352 168 352C154.745 352 144 341.255 144 328C144 314.745 154.745 304 168 304C181.255 304 192 314.745 192 328ZM256 352C269.255 352 280 341.255 280 328C280 314.745 269.255 304 256 304C242.745 304 232 314.745 232 328C232 341.255 242.745 352 256 352ZM192 408C192 421.255 181.255 432 168 432C154.745 432 144 421.255 144 408C144 394.745 154.745 384 168 384C181.255 384 192 394.745 192 408ZM256 432C269.255 432 280 421.255 280 408C280 394.745 269.255 384 256 384C242.745 384 232 394.745 232 408C232 421.255 242.745 432 256 432ZM344 304C330.745 304 320 314.745 320 328V408C320 421.255 330.745 432 344 432C357.255 432 368 421.255 368 408V328C368 314.745 357.255 304 344 304Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
