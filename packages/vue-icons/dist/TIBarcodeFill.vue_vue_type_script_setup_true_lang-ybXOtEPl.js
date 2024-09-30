import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIBarcodeFill",
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
    return (d, t) => (n(), s("svg", {
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
        d: "M419.13 96H419L383.95 96.33L128 96H127.84L91.1 96.33C66.93 96.38 48 116.07 48 141.2V371.47C48 396.62 67 416.33 91.2 416.33H91.35L128.06 416L383.98 416.33H384.15L419.22 416C443.957 415.928 463.978 395.867 464 371.13V140.87C463.972 116.1 443.9 96.0276 419.13 96ZM144 320C144 328.837 136.837 336 128 336C119.163 336 112 328.837 112 320V192C112 183.163 119.163 176 128 176C136.837 176 144 183.163 144 192V320ZM208 352C208 360.837 200.837 368 192 368C183.163 368 176 360.837 176 352V160C176 151.163 183.163 144 192 144C200.837 144 208 151.163 208 160V352ZM272 336C272 344.837 264.837 352 256 352C247.163 352 240 344.837 240 336V176C240 167.163 247.163 160 256 160C264.837 160 272 167.163 272 176V336ZM336 352C336 360.837 328.837 368 320 368C311.163 368 304 360.837 304 352V160C304 151.163 311.163 144 320 144C328.837 144 336 151.163 336 160V352ZM400 320C400 328.837 392.837 336 384 336C375.163 336 368 328.837 368 320V192C368 183.163 375.163 176 384 176C392.837 176 400 183.163 400 192V320Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
