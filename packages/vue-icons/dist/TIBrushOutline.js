import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBrushOutline",
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
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M383.796 49.316C383.593 49.5187 383.396 49.7269 383.205 49.9402L172.095 285.05C163.914 294.161 168.592 308.657 180.445 311.341L180.807 311.418C197.48 314.814 214.941 332.034 217.352 346.817L217.421 347.264C219.305 360.447 235.528 365.693 244.774 356.109L463.793 129.094C485.498 107.271 485.731 72.0807 464.335 49.9788L463.683 49.316C441.623 27.2567 405.857 27.2567 383.796 49.316ZM441.056 71.944L441.343 72.2358C450.533 81.7284 450.513 96.8054 441.345 106.282L440.855 106.781L238.674 316.343L238.523 316.113C231.656 305.695 222.096 296.483 211.276 289.825L210.978 289.643L406.686 71.686L407.016 71.3704C416.617 62.3846 431.688 62.5758 441.056 71.944ZM138 321C99.6125 321 68.6248 352.09 68.0089 390.688L67.9996 391.86C67.9996 398.222 65.5818 403.238 61.2036 407.024C57.378 410.332 52.3591 412.304 48.3812 412.424L47.9996 412.43C34.8514 412.43 27.3155 427.409 35.1521 437.966C54.6795 464.274 87.6707 481 120 481C168.673 481 208 441.051 208 391.86C208 352.721 176.774 321 138 321ZM138 353C158.988 353 176 370.282 176 391.86C176 423.489 150.886 449 120 449L119.334 448.996C104.911 448.842 89.9818 443.683 77.642 435.056L77.3986 434.885L77.5065 434.813C79.1088 433.704 80.6563 432.508 82.1356 431.228C93.2238 421.639 99.8244 408.122 99.9961 392.487L99.9996 391.86C99.9996 370.282 117.012 353 138 353Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
