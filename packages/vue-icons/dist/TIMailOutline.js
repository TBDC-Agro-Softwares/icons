import { defineComponent as o, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIMailOutline",
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
    return (u, t) => (a(), r("svg", {
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
        d: "M424 80H88C57.0721 80 32 105.072 32 136V376C32 406.928 57.0721 432 88 432H424C454.928 432 480 406.928 480 376V136C480 105.072 454.928 80 424 80ZM88 112H424C437.255 112 448 122.745 448 136V376C448 389.255 437.255 400 424 400H88C74.7452 400 64 389.255 64 376V136C64 122.745 74.7452 112 88 112ZM412.63 150.177C407.205 143.202 397.152 141.945 390.177 147.37L256 251.73L121.823 147.37L121.542 147.157C114.581 141.98 104.723 143.295 99.3704 150.177C93.9452 157.152 95.2018 167.205 102.177 172.63L246.177 284.63L246.478 284.858C252.233 289.122 260.145 289.046 265.823 284.63L409.823 172.63L410.099 172.41C416.831 166.937 417.982 157.059 412.63 150.177Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
