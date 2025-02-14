import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICubeFill",
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
        d: "M440.9 136.3C442.129 135.583 442.884 134.268 442.884 132.845C442.884 131.422 442.129 130.107 440.9 129.39L288.16 40.65C268.267 29.1193 243.723 29.1193 223.83 40.65L71.1201 129.39C69.8913 130.107 69.1358 131.422 69.1358 132.845C69.1358 134.268 69.8913 135.583 71.1201 136.3L254 243.88C255.253 244.618 256.807 244.618 258.06 243.88L440.9 136.3ZM54.0001 163.51C52.7585 162.793 51.2281 162.796 49.9888 163.516C48.7495 164.237 47.9908 165.566 48.0001 167V340.89C48.0308 357.942 57.1057 373.697 71.8401 382.28L234 479.51C235.237 480.224 236.761 480.225 237.998 479.511C239.236 478.798 239.999 477.478 240 476.05V274.3C239.999 272.872 239.236 271.554 238 270.84L54.0001 163.51ZM272 476V275C272.005 273.576 272.767 272.262 274 271.55L458 163.55C459.236 162.837 460.757 162.835 461.994 163.547C463.231 164.258 463.995 165.574 464 167V340.89C463.95 357.926 454.873 373.659 440.15 382.23L278 479.46C276.763 480.174 275.239 480.175 274.002 479.461C272.765 478.748 272.002 477.428 272 476Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
