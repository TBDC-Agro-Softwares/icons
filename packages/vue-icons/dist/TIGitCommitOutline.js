import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGitCommitOutline",
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
        d: "M48 272H145.134C152.898 326.277 199.576 368 256 368C312.424 368 359.102 326.277 366.866 272H464L464.315 271.997C473.006 271.829 480 264.731 480 256C480 247.163 472.837 240 464 240H366.866C359.102 185.723 312.424 144 256 144C199.576 144 152.898 185.723 145.134 240H48L47.6851 240.003C38.9939 240.171 32 247.269 32 256C32 264.837 39.1634 272 48 272ZM336 256C336 211.817 300.183 176 256 176C211.817 176 176 211.817 176 256C176 300.183 211.817 336 256 336C300.183 336 336 300.183 336 256Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
