import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIMicFill",
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
    return (C, t) => (n(), r("svg", {
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
        d: "M199.45 295.901C214.262 311.256 234.665 319.951 256 320.001C300.11 320.001 336 283.661 336 239.001V128.001C336 83.1412 300.86 48.0012 256 48.0012C234.757 47.9184 214.361 56.3204 199.34 71.3413C184.319 86.3622 175.917 106.759 176 128.001V239.001C176.014 260.317 184.442 280.765 199.45 295.901ZM399.997 207.686C399.829 198.995 392.731 192.001 384 192.001C375.163 192.001 368 199.165 368 208.001V240.001L367.985 241.845C366.99 302.559 316.964 351.985 256.03 352.001H256H255.97C194.42 351.985 144 301.555 144 240.001V208.001L143.997 207.686C143.829 198.995 136.731 192.001 128 192.001C119.163 192.001 112 199.165 112 208.001V240.001L112.019 242.374C113.209 315.141 168.998 375.183 240 383.113V432.001H192L191.685 432.004C182.994 432.172 176 439.27 176 448.001C176 456.838 183.163 464.001 192 464.001H256H320L320.315 463.998C329.006 463.83 336 456.733 336 448.001C336 439.165 328.837 432.001 320 432.001H272V383.113C343.772 375.097 400 313.832 400 240.001V208.001L399.997 207.686Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
