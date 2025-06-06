import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIStopwatchFill",
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
        d: "M280 81.5V72C280 58.7452 269.255 48 256 48C242.745 48 232 58.7452 232 72V81.5C201.692 85.3047 172.739 96.3229 147.57 113.63L137 103C127.611 93.6112 112.389 93.6112 103 103C93.6112 112.389 93.6112 127.611 103 137L111.6 145.6C80.8821 180.538 63.9584 225.478 64.0001 272C64.0001 377.87 150.13 464 256 464C361.87 464 448 377.87 448 272C448 174.26 374.58 93.34 280 81.5ZM256 320C232.628 319.993 212.658 303.153 208.705 280.117C204.753 257.082 217.967 234.547 240 226.75V152C240 143.163 247.164 136 256 136C264.837 136 272 143.163 272 152V226.75C294.033 234.547 307.248 257.082 303.295 280.117C299.343 303.153 279.373 319.993 256 320ZM272 272C272 280.837 264.837 288 256 288C247.164 288 240 280.837 240 272C240 263.163 247.164 256 256 256C264.837 256 272 263.163 272 272Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
