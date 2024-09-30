import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIDesktopFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (n(), r("svg", {
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
        d: "M448 48C474.498 48.0276 495.972 69.5018 496 96V288H16V96C16.0276 69.5018 37.5018 48.0276 64 48H448ZM16 352C16.0276 378.498 37.5018 399.972 64 400H197.88L193.88 432H144C135.163 432 128 439.163 128 448C128 456.837 135.163 464 144 464H368C376.837 464 384 456.837 384 448C384 439.163 376.837 432 368 432H318.12L314.12 400H448C474.498 399.972 495.972 378.498 496 352V304H16V352ZM256 336C264.837 336 272 343.163 272 352C272 360.837 264.837 368 256 368C247.163 368 240 360.837 240 352C240 343.163 247.163 336 256 336Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
