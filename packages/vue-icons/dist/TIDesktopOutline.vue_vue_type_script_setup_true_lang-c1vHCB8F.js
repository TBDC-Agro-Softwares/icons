import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIDesktopOutline",
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
        d: "M448 48H64C37.4903 48 16 69.4903 16 96V352C16 378.51 37.4903 400 64 400H197.876L193.876 432H144L143.685 432.003C134.994 432.171 128 439.269 128 448C128 456.837 135.163 464 144 464H208H304H368L368.315 463.997C377.006 463.829 384 456.731 384 448C384 439.163 376.837 432 368 432H318.125L314.125 400H448C474.51 400 496 378.51 496 352V96C496 69.4903 474.51 48 448 48ZM281.875 400L285.875 432H226.124L230.124 400H281.875ZM464 304H48V96C48 87.1634 55.1634 80 64 80H448C456.837 80 464 87.1634 464 96V304ZM256 368C247.163 368 240 360.837 240 352C240 343.163 247.163 336 256 336C264.837 336 272 343.163 272 352C272 360.837 264.837 368 256 368Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
