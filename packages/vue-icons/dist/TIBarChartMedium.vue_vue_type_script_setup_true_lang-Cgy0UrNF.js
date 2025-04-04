import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBarChartMedium",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (s(), a("svg", {
      class: n(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "256",
      height: "257",
      viewBox: "0 0 256 257",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 74.9167C24 46.9342 46.6842 24.25 74.6667 24.25H181.333C209.316 24.25 232 46.9342 232 74.9167V181.583C232 209.566 209.316 232.25 181.333 232.25H74.6667C46.6842 232.25 24 209.566 24 181.583V74.9167ZM74.6667 40.25C55.5208 40.25 40 55.7708 40 74.9167V181.583C40 200.729 55.5208 216.25 74.6667 216.25H181.333C200.479 216.25 216 200.729 216 181.583V74.9167C216 55.7708 200.479 40.25 181.333 40.25H74.6667ZM170.667 77.5833C175.085 77.5833 178.667 81.1651 178.667 85.5833V170.917C178.667 175.335 175.085 178.917 170.667 178.917C166.248 178.917 162.667 175.335 162.667 170.917V85.5833C162.667 81.1651 166.248 77.5833 170.667 77.5833ZM85.3333 109.583C89.7516 109.583 93.3333 113.165 93.3333 117.583V170.917C93.3333 175.335 89.7516 178.917 85.3333 178.917C80.9151 178.917 77.3333 175.335 77.3333 170.917V117.583C77.3333 113.165 80.9151 109.583 85.3333 109.583ZM128 141.583C132.418 141.583 136 145.165 136 149.583V170.917C136 175.335 132.418 178.917 128 178.917C123.582 178.917 120 175.335 120 170.917V149.583C120 145.165 123.582 141.583 128 141.583Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
