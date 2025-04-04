import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIRecordingOutline",
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
        d: "M16 256C16 194.144 66.1441 144 128 144C189.856 144 240 194.144 240 256C240 287.339 227.129 315.672 206.384 336H305.616C284.871 315.672 272 287.339 272 256C272 194.144 322.144 144 384 144C445.856 144 496 194.144 496 256C496 317.856 445.856 368 384 368H128C66.1441 368 16 317.856 16 256ZM384 336C428.183 336 464 300.183 464 256C464 211.817 428.183 176 384 176C339.817 176 304 211.817 304 256C304 300.183 339.817 336 384 336ZM128 336C172.183 336 208 300.183 208 256C208 211.817 172.183 176 128 176C83.8172 176 48 211.817 48 256C48 300.183 83.8172 336 128 336Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
