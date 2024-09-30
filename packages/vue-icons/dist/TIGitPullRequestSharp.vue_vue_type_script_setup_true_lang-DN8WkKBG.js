import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGitPullRequestSharp",
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
    return (d, t) => (s(), n("svg", {
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
        d: "M417 371.61V167C416.945 116.213 375.787 75.0552 325 75.0001H290V20.9301L202.14 107L290 193.07V139H325C340.464 139 353 151.536 353 167V371.61C327.914 386.093 315.684 415.62 323.181 443.6C330.678 471.58 356.033 491.036 385 491.036C413.967 491.036 439.322 471.58 446.819 443.6C454.316 415.62 442.086 386.093 417 371.61ZM385 459C367.327 459 353 444.673 353 427C353 409.327 367.327 395 385 395C402.673 395 417 409.327 417 427C417 444.673 402.673 459 385 459ZM140.511 44.0177C170.923 49.5785 193.013 76.084 193 107C192.99 130.276 180.357 151.715 160 163V371.61C185.086 386.093 197.316 415.62 189.819 443.6C182.322 471.58 156.967 491.036 128 491.036C99.0332 491.036 73.6778 471.58 66.1807 443.6C58.6835 415.62 70.914 386.093 95.9999 371.61V161.81C69.5106 145.869 58.2034 113.271 69.1318 84.3509C80.0601 55.4307 110.1 38.4569 140.511 44.0177ZM161 107C161 89.3269 146.673 75 129 75C111.327 75 96.9999 89.3269 96.9999 107C96.9999 124.673 111.327 139 129 139C146.673 139 161 124.673 161 107ZM128 459C110.327 459 95.9999 444.673 95.9999 427C95.9999 409.327 110.327 395 128 395C145.673 395 160 409.327 160 427C160 444.673 145.673 459 128 459Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
