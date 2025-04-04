import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIInformationCircleFill",
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
    return (C, t) => (r(), s("svg", {
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
        d: "M256 56C145.72 56 56 145.72 56 256C56 366.28 145.72 456 256 456C366.28 456 456 366.28 456 256C456 145.72 366.28 56 256 56ZM256 138C270.359 138 282 149.641 282 164C282 178.359 270.359 190 256 190C241.641 190 230 178.359 230 164C230 157.104 232.739 150.491 237.615 145.615C242.491 140.739 249.104 138 256 138ZM304 364H216C207.163 364 200 356.837 200 348C200 339.163 207.163 332 216 332H244V244H228C219.163 244 212 236.837 212 228C212 219.163 219.163 212 228 212H260C268.837 212 276 219.163 276 228V332H304C312.837 332 320 339.163 320 348C320 356.837 312.837 364 304 364Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
