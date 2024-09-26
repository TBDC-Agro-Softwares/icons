import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIListOutline",
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
    return (d, t) => (s(), r("svg", {
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
        d: "M48 144C48 126.327 62.3269 112 80 112C97.6731 112 112 126.327 112 144C112 161.673 97.6731 176 80 176C62.3269 176 48 161.673 48 144ZM464 144C464 135.163 456.837 128 448 128H160L159.685 128.003C150.994 128.171 144 135.269 144 144C144 152.837 151.163 160 160 160H448L448.315 159.997C457.006 159.829 464 152.731 464 144ZM464 256C464 247.163 456.837 240 448 240H160L159.685 240.003C150.994 240.171 144 247.269 144 256C144 264.837 151.163 272 160 272H448L448.315 271.997C457.006 271.829 464 264.731 464 256ZM448 352C456.837 352 464 359.163 464 368C464 376.731 457.006 383.829 448.315 383.997L448 384H160C151.163 384 144 376.837 144 368C144 359.269 150.994 352.171 159.685 352.003L160 352H448ZM80 224C62.3269 224 48 238.327 48 256C48 273.673 62.3269 288 80 288C97.6731 288 112 273.673 112 256C112 238.327 97.6731 224 80 224ZM48 368C48 350.327 62.3269 336 80 336C97.6731 336 112 350.327 112 368C112 385.673 97.6731 400 80 400C62.3269 400 48 385.673 48 368Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
