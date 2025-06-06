import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIChatboxEllipsesFill",
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
    return (C, t) => (n(), r("svg", {
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
        d: "M408 48H104C64.2538 48.0441 32.0441 80.2538 32 120V312C32.0441 351.746 64.2538 383.956 104 384H128V448C127.998 454.211 131.591 459.861 137.216 462.495C142.84 465.128 149.481 464.269 154.25 460.29L245.74 384H408C447.746 383.956 479.956 351.746 480 312V120C479.956 80.2538 447.746 48.0441 408 48ZM160 248C142.327 248 128 233.673 128 216C128 198.327 142.327 184 160 184C177.673 184 192 198.327 192 216C192 233.673 177.673 248 160 248ZM256 248C238.327 248 224 233.673 224 216C224 198.327 238.327 184 256 184C273.673 184 288 198.327 288 216C288 233.673 273.673 248 256 248ZM352 248C334.327 248 320 233.673 320 216C320 198.327 334.327 184 352 184C369.673 184 384 198.327 384 216C384 233.673 369.673 248 352 248Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
