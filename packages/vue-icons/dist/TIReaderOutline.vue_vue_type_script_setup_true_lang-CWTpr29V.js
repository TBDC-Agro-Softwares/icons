import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIReaderOutline",
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
        d: "M368 32H144C108.654 32 80 60.6538 80 96V416C80 451.346 108.654 480 144 480H368C403.346 480 432 451.346 432 416V96C432 60.6538 403.346 32 368 32ZM144 64H368C385.673 64 400 78.3269 400 96V416C400 433.673 385.673 448 368 448H144C126.327 448 112 433.673 112 416V96C112 78.3269 126.327 64 144 64ZM352 128C352 119.163 344.837 112 336 112H176L175.685 112.003C166.994 112.171 160 119.269 160 128C160 136.837 167.163 144 176 144H336L336.315 143.997C345.006 143.829 352 136.731 352 128ZM336 192C344.837 192 352 199.163 352 208C352 216.731 345.006 223.829 336.315 223.997L336 224H176C167.163 224 160 216.837 160 208C160 199.269 166.994 192.171 175.685 192.003L176 192H336ZM272 288C272 279.163 264.837 272 256 272H176L175.685 272.003C166.994 272.171 160 279.269 160 288C160 296.837 167.163 304 176 304H256L256.315 303.997C265.006 303.829 272 296.731 272 288Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
