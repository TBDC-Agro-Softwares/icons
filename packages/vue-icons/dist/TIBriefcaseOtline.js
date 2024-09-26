import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIBriefcaseOtline",
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
        d: "M383.994 95.2062C383.57 69.0627 362.245 48 336 48H176L175.206 48.0064C149.063 48.4303 128 69.7554 128 96V112H80C44.6538 112 16 140.654 16 176V240V400C16 435.346 44.6538 464 80 464H432C467.346 464 496 435.346 496 400V240V176C496 140.654 467.346 112 432 112H384V96L383.994 95.2062ZM48 400V256H176V264L176.003 264.397C176.215 277.469 186.878 288 200 288H312L312.397 287.997C325.469 287.785 336 277.122 336 264V256H464V400C464 417.673 449.673 432 432 432H80C62.3269 432 48 417.673 48 400ZM320 224H464V176C464 158.327 449.673 144 432 144H368H144H80C62.3269 144 48 158.327 48 176V224H192H320ZM352 112V96C352 87.2686 345.006 80.1708 336.315 80.003L336 80H176C167.269 80 160.171 86.9939 160.003 95.6851L160 96V112H352Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
