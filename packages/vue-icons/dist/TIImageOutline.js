import { defineComponent as o, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIImageOutline",
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
    return (d, t) => (a(), r("svg", {
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
        d: "M416 64H96.0002C60.6539 64 32.0002 92.6538 32.0002 128V351.932C31.9999 351.981 31.9999 352.03 32.0002 352.08V384C32.0002 419.346 60.6539 448 96.0002 448H223.984C223.995 448 224.005 448 224.016 448H416C451.346 448 480 419.346 480 384V368.118C480.001 368.045 480.001 367.972 480 367.899V128C480 92.6538 451.346 64 416 64ZM448 333.822V128C448 110.327 433.673 96 416 96H96.0002C78.3271 96 64.0002 110.327 64.0002 128V316.365L158.848 232.035C177.653 215.339 206.113 216.01 224.101 233.442L224.643 233.976L312.102 321.271L336.015 297.358C353.376 279.962 381.033 278.513 400.122 293.901L400.698 294.372L448 333.822ZM289.475 343.898L202.028 256.615C196.128 250.717 186.707 250.353 180.383 255.713L180.101 255.957L64.0002 359.184V384C64.0002 401.673 78.3271 416 96.0002 416H217.373L289.475 343.898ZM262.628 416H416C433.673 416 448 401.673 448 384V375.49L380.22 318.962C373.953 313.751 364.789 314.094 358.918 319.715L358.654 319.974L262.628 416ZM336 128C309.491 128 288 149.49 288 176C288 202.51 309.491 224 336 224C362.51 224 384 202.51 384 176C384 149.49 362.51 128 336 128ZM336 160C344.837 160 352 167.163 352 176C352 184.837 344.837 192 336 192C327.164 192 320 184.837 320 176C320 167.163 327.164 160 336 160Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
