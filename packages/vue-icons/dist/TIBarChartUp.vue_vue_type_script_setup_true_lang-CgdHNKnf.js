import { defineComponent as o, computed as r, openBlock as C, createElementBlock as s, normalizeClass as a, normalizeStyle as n, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIBarChartUp",
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
    return (d, t) => (C(), s("svg", {
      class: a(i.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "256",
      height: "257",
      viewBox: "0 0 256 257",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M74.6667 40.25C55.5208 40.25 40 55.7708 40 74.9167V181.583C40 200.729 55.5208 216.25 74.6667 216.25H181.333C200.479 216.25 216 200.729 216 181.583V117.583C216 113.165 219.582 109.583 224 109.583C228.418 109.583 232 113.165 232 117.583V181.583C232 209.566 209.316 232.25 181.333 232.25H74.6667C46.6842 232.25 24 209.566 24 181.583V74.9167C24 46.9342 46.6842 24.25 74.6667 24.25H138.667C143.085 24.25 146.667 27.8317 146.667 32.25C146.667 36.6683 143.085 40.25 138.667 40.25H74.6667ZM192.336 26.003C195.258 23.6657 199.409 23.6657 202.331 26.003L228.998 47.3364C232.448 50.0965 233.007 55.1308 230.247 58.5809C227.487 62.031 222.453 62.5904 219.002 59.8303L205.333 48.895V85.5833C205.333 90.0016 201.752 93.5833 197.333 93.5833C192.915 93.5833 189.333 90.0016 189.333 85.5833V48.895L175.664 59.8303C172.214 62.5904 167.18 62.031 164.42 58.5809C161.66 55.1308 162.219 50.0965 165.669 47.3364L192.336 26.003ZM85.3333 77.5833C89.7516 77.5833 93.3333 81.1651 93.3333 85.5833V170.917C93.3333 175.335 89.7516 178.917 85.3333 178.917C80.9151 178.917 77.3333 175.335 77.3333 170.917V85.5833C77.3333 81.1651 80.9151 77.5833 85.3333 77.5833ZM170.667 109.583C175.085 109.583 178.667 113.165 178.667 117.583V170.917C178.667 175.335 175.085 178.917 170.667 178.917C166.248 178.917 162.667 175.335 162.667 170.917V117.583C162.667 113.165 166.248 109.583 170.667 109.583ZM128 141.583C132.418 141.583 136 145.165 136 149.583V170.917C136 175.335 132.418 178.917 128 178.917C123.582 178.917 120 175.335 120 170.917V149.583C120 145.165 123.582 141.583 128 141.583Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
