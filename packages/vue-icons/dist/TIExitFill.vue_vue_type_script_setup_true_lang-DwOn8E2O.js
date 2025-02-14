import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIExitFill",
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
        d: "M336 272V376C335.967 406.914 310.914 431.967 280 432H88C57.0858 431.967 32.0331 406.914 32 376V136C32.0331 105.086 57.0858 80.0331 88 80H280C310.914 80.0331 335.967 105.086 336 136V240H191C182.163 240 175 247.163 175 256C175 264.837 182.163 272 191 272H336ZM336 272H425.37L372.69 324.69C366.714 330.981 366.84 340.888 372.976 347.024C379.112 353.16 389.019 353.286 395.31 347.31L475.31 267.31C481.553 261.062 481.553 250.938 475.31 244.69L395.31 164.69C389.019 158.714 379.112 158.84 372.976 164.976C366.84 171.112 366.714 181.019 372.69 187.31L425.37 240H336V272Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
