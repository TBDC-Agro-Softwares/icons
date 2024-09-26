import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIPodiumOutline",
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
    return (u, t) => (r(), s("svg", {
      class: a(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M192 32H320C337.673 32 352 46.3269 352 64V192H464C481.673 192 496 206.327 496 224V456C496 469.255 485.255 480 472 480H336H176H40C26.7452 480 16 469.255 16 456V160C16 142.327 30.3269 128 48 128H160V64C160 46.3269 174.327 32 192 32ZM320 448V224V64H192V160V448H320ZM352 448H464V224H352V448ZM160 160V448H48V160H160Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
