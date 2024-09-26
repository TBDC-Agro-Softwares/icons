import { defineComponent as o, computed as C, openBlock as s, createElementBlock as n, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGitPullRequestFill",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (s(), n("svg", {
      class: r(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M417 368.61V164C416.945 113.213 375.788 72.0551 325 72H305V40C304.997 33.5309 301.099 27.7001 295.122 25.2249C289.146 22.7497 282.266 24.1172 277.69 28.69L213.69 92.69C207.447 98.9375 207.447 109.062 213.69 115.31L277.69 179.31C282.266 183.883 289.146 185.25 295.122 182.775C301.099 180.3 304.997 174.469 305 168V136H325C340.464 136 353 148.536 353 164V368.61C327.914 383.093 315.684 412.62 323.181 440.6C330.678 468.58 356.034 488.036 385 488.036C413.967 488.036 439.323 468.58 446.82 440.6C454.317 412.62 442.086 383.093 417 368.61ZM385 456C367.327 456 353 441.673 353 424C353 406.327 367.327 392 385 392C402.674 392 417 406.327 417 424C417 441.673 402.674 456 385 456ZM140.137 40.9408C170.727 46.3463 193.018 72.9367 193 104C192.988 126.852 180.791 147.964 161 159.39V368.61C186.086 383.093 198.317 412.62 190.82 440.6C183.323 468.58 157.967 488.036 129 488.036C100.034 488.036 74.6783 468.58 67.1812 440.6C59.684 412.62 71.9145 383.093 97.0004 368.61V159.39C70.0988 143.858 58.2345 111.252 68.8642 82.0639C79.4938 52.876 109.548 35.5354 140.137 40.9408ZM161 104C161 86.3269 146.674 72 129 72C111.327 72 97.0004 86.3269 97.0004 104C97.0004 121.673 111.327 136 129 136C146.674 136 161 121.673 161 104ZM129 456C111.327 456 97.0004 441.673 97.0004 424C97.0004 406.327 111.327 392 129 392C146.674 392 161 406.327 161 424C161 441.673 146.674 456 129 456Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
