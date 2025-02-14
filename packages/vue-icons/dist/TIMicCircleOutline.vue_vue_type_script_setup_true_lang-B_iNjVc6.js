import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIMicCircleOutline",
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
        d: "M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM288 352C296.837 352 304 359.163 304 368C304 376.731 297.006 383.829 288.315 383.997L288 384H256H224C215.163 384 208 376.837 208 368C208 359.269 214.994 352.171 223.685 352.003L224 352H240V334.314C197.487 326.965 160.831 291.31 160.014 249.641L160 248.22V224.3C160 215.463 167.163 208.3 176 208.3C184.731 208.3 191.829 215.294 191.997 223.985L192 224.3V248.22C192 276.824 223.299 303.7 256 303.7C288.374 303.7 319.374 277.359 319.991 249.078L320 248.22V224.3C320 215.463 327.163 208.3 336 208.3C344.731 208.3 351.829 215.294 351.997 223.985L352 224.3V248.22C352 290.496 314.996 326.882 272 334.314V352H288ZM256 128C229.49 128 208 149.49 208 176V240C208 266.51 229.49 288 256 288C282.51 288 304 266.51 304 240V176C304 149.49 282.51 128 256 128Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
