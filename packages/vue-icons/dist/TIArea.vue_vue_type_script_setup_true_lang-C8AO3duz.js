import { defineComponent as o, computed as C, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIArea",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: n(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M396.731 54C403.321 35.3569 421.1 22 442 22C468.51 22 490 43.4903 490 70C490 90.8995 476.643 108.679 458 115.269V396.731C476.643 403.321 490 421.1 490 442C490 468.51 468.51 490 442 490C421.1 490 403.321 476.643 396.731 458H115.269C108.679 476.643 90.8995 490 70 490C43.4903 490 22 468.51 22 442C22 421.1 35.3569 403.321 54 396.731V115.269C35.3569 108.679 22 90.8995 22 70C22 43.4903 43.4903 22 70 22C90.8995 22 108.679 35.3569 115.269 54H396.731ZM54 70C54 61.1634 61.1634 54 70 54C78.8366 54 86 61.1634 86 70C86 78.8366 78.8366 86 70 86C61.1634 86 54 78.8366 54 70ZM115.269 86C110.448 99.6386 99.6386 110.448 86 115.269V396.731C99.6386 401.552 110.448 412.361 115.269 426H396.731C401.552 412.361 412.361 401.552 426 396.731V115.269C412.361 110.448 401.552 99.6386 396.731 86H115.269ZM426 70C426 61.1634 433.163 54 442 54C450.837 54 458 61.1634 458 70C458 78.8366 450.837 86 442 86C433.163 86 426 78.8366 426 70ZM54 442C54 433.163 61.1634 426 70 426C78.8366 426 86 433.163 86 442C86 450.837 78.8366 458 70 458C61.1634 458 54 450.837 54 442ZM426 442C426 433.163 433.163 426 442 426C450.837 426 458 433.163 458 442C458 450.837 450.837 458 442 458C433.163 458 426 450.837 426 442Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
