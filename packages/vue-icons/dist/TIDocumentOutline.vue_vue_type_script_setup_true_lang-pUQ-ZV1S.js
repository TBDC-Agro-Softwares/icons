import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIDocumentOutline",
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
        d: "M242.75 32H144C108.654 32 80 60.6538 80 96V416C80 451.346 108.654 480 144 480H368C403.346 480 432 451.346 432 416V221.25C432 208.524 426.944 196.318 417.945 187.318L276.684 46.0563C267.682 37.0565 255.476 32 242.75 32ZM240 64H144C126.327 64 112 78.3269 112 96V416C112 433.673 126.327 448 144 448H368C385.673 448 400 433.673 400 416V224H288C261.755 224 240.43 202.937 240.006 176.794L240 176V64ZM377.373 192L272 86.6274V176C272 184.731 278.994 191.829 287.685 191.997L288 192H377.373Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
