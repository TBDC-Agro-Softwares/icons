import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIWatchOutline",
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
    return (u, t) => (s(), r("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M328 16C341.122 16 351.785 26.5313 351.997 39.6031L352 40V97.6003C388.516 105.013 416 137.297 416 176V336C416 374.703 388.516 406.987 352 414.4V472C352 485.122 341.469 495.785 328.397 495.997L328 496H184C170.878 496 160.215 485.469 160.003 472.397L160 472V414.4C123.484 406.987 96 374.703 96 336V176C96 137.297 123.484 105.013 160 97.6003V40C160 26.8777 170.531 16.2152 183.603 16.0032L184 16H328ZM192 416V464H320V416H192ZM320 48V96H192V48H320ZM336 128H176C149.49 128 128 149.49 128 176V336C128 362.51 149.49 384 176 384H336C362.51 384 384 362.51 384 336V176C384 149.49 362.51 128 336 128Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
