import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPhonePortraitFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (n(), s("svg", {
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
        d: "M336 0H176C140.654 0 112 28.6538 112 64V448C112 483.346 140.654 512 176 512H336C371.346 512 400 483.346 400 448V64C400 28.6538 371.346 0 336 0ZM368 448C368 465.673 353.673 480 336 480H176C158.327 480 144 465.673 144 448V64C144 46.3269 158.327 32 176 32H187.35C190.512 31.9885 193.38 33.8543 194.65 36.75C199.728 48.4384 211.256 55.9999 224 56H288C300.744 55.9999 312.272 48.4384 317.35 36.75C318.62 33.8543 321.488 31.9885 324.65 32H336C353.673 32 368 46.3269 368 64V448ZM326.47 52.69C328.732 49.7146 332.262 47.9771 336 48C344.837 48 352 55.1634 352 64V448C352 456.837 344.837 464 336 464H176C167.163 464 160 456.837 160 448V64C160 55.1634 167.163 48 176 48C179.738 47.9771 183.268 49.7146 185.53 52.69C194.587 64.8379 208.848 71.9961 224 72H288C303.152 71.9961 317.413 64.8379 326.47 52.69Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
