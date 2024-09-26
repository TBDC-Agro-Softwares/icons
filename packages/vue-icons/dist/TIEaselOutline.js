import { defineComponent as o, computed as n, openBlock as s, createElementBlock as a, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIEaselOutline",
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
    return (C, t) => (s(), a("svg", {
      class: r(i.value),
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
        d: "M271.997 47.6851C271.829 38.9939 264.731 32 256 32C247.163 32 240 39.1634 240 48V64H80C53.4903 64 32 85.4903 32 112V320C32 346.51 53.4903 368 80 368H122.788L96.6156 459.604L96.5301 459.915C94.3086 468.316 99.2115 476.986 107.604 479.384C116.101 481.812 124.957 476.892 127.384 468.396L156.069 368H240V416L240.003 416.315C240.171 425.006 247.269 432 256 432C264.837 432 272 424.837 272 416V368H355.931L384.616 468.396L384.707 468.705C387.259 477.011 396.003 481.782 404.396 479.384C412.892 476.957 417.812 468.101 415.384 459.604L389.212 368H432C458.51 368 480 346.51 480 320V112C480 85.4903 458.51 64 432 64H272V48L271.997 47.6851ZM144.353 336H256H367.646C367.888 335.995 368.129 335.995 368.369 336H432C440.837 336 448 328.837 448 320V112C448 103.163 440.837 96 432 96H256H80C71.1634 96 64 103.163 64 112V320C64 328.837 71.1634 336 80 336H143.631C143.871 335.995 144.112 335.995 144.353 336Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
