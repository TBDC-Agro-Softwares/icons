import { defineComponent as o, computed as a, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TILocateFill",
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), r("svg", {
      class: s(i.value),
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
        d: "M256 32C269.122 32 279.785 42.5313 279.997 55.6031L280 56V89.7013C353.577 100.226 411.774 158.423 422.299 232H456C469.255 232 480 242.745 480 256C480 269.122 469.469 279.785 456.397 279.997L456 280H422.299C411.774 353.577 353.577 411.774 280 422.299V456C280 469.255 269.255 480 256 480C242.878 480 232.215 469.469 232.003 456.397L232 456V422.299C158.423 411.774 100.226 353.577 89.7013 280H56C42.7452 280 32 269.255 32 256C32 242.878 42.5313 232.215 55.6031 232.003L56 232H89.7013C100.226 158.423 158.423 100.226 232 89.7013V56C232 42.7452 242.745 32 256 32ZM256 136C322.274 136 376 189.726 376 256C376 322.274 322.274 376 256 376C189.726 376 136 322.274 136 256C136 189.726 189.726 136 256 136Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
