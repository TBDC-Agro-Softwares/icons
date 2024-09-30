import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIHelpBuoySharp",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (n(), s("svg", {
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
        d: "M256 32C132.29 32 32 132.29 32 256C32 379.71 132.29 480 256 480C379.71 480 480 379.71 480 256C480 132.29 379.71 32 256 32ZM192 256C192 220.654 220.654 192 256 192C291.346 192 320 220.654 320 256C320 291.346 291.346 320 256 320C220.654 320 192 291.346 192 256ZM429.24 193.71L342.91 199C335.085 187.125 324.925 176.965 313.05 169.14L318.29 82.81C369.932 101.5 410.6 142.168 429.29 193.81L429.24 193.71ZM125.89 125.89C145.03 106.677 168.193 91.9466 193.71 82.76L199 169.09C187.102 176.925 176.925 187.102 169.09 199L82.76 193.76C91.94 168.225 106.671 145.045 125.89 125.89ZM82.76 318.29L169.09 313.05C176.93 324.93 187.107 335.09 199 342.91L193.76 429.24C142.129 410.561 101.462 369.913 82.76 318.29ZM386.11 386.11C366.969 405.323 343.807 420.053 318.29 429.24L313.05 342.91C324.925 335.085 335.085 324.925 342.91 313.05L429.24 318.29C420.053 343.807 405.323 366.969 386.11 386.11Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
