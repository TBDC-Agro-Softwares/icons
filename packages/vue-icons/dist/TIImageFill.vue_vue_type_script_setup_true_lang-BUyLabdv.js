import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIImageFill",
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
    return (p, t) => (r(), s("svg", {
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
        d: "M416 64H96C60.6698 64.0386 32.0386 92.6698 32 128V384C32.0386 419.33 60.6698 447.961 96 448H416C451.33 447.961 479.961 419.33 480 384V128C479.961 92.6698 451.33 64.0386 416 64ZM336 128C362.51 128 384 149.49 384 176C384 202.51 362.51 224 336 224C309.49 224 288 202.51 288 176C288.028 149.502 309.502 128.028 336 128ZM96 416C78.3269 416 64 401.673 64 384V316.37L158.84 232.07C177.833 215.225 206.651 216.058 224.64 233.97L289.59 298.78L172.37 416H96ZM448 384C448 401.673 433.673 416 416 416H217.63L339.05 294.58C356.802 279.484 382.86 279.416 400.69 294.42L448 333.84V384Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};