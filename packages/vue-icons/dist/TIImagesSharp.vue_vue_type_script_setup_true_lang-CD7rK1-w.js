import { defineComponent as o, computed as s, openBlock as r, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIImagesSharp",
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
    return (p, t) => (r(), a("svg", {
      class: n(i.value),
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
        d: "M0 52C0 40.9543 8.9543 32 20 32H428C439.046 32 448 40.9543 448 52V80H68C56.9543 80 48 88.9543 48 100V416H20C8.9543 416 0 407.046 0 396V52ZM80 132V460C80 471.046 88.9543 480 100 480H492C503.046 480 512 471.046 512 460V132C512 120.954 503.046 112 492 112H100C88.9543 112 80 120.954 80 132ZM373.14 173.33C398.508 173.484 418.962 194.147 418.86 219.516C418.757 244.884 398.136 265.38 372.767 265.329C347.399 265.278 326.86 244.699 326.86 219.33C326.965 193.859 347.669 173.28 373.14 173.33ZM111.73 353.85V449.33H215.27L328.27 337L234.49 243.65L111.73 353.85ZM480 449.33H259L403.58 305.33L480 370.59V449.33Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
