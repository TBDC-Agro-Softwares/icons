import { defineComponent as o, computed as n, openBlock as s, createElementBlock as a, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIPlayBackOutline",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (s(), a("svg", {
      class: r(i.value),
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
        d: "M267.43 287.465V366.579C267.43 391.775 241.359 408.707 219.581 395.657L30.7131 282.588C11.0953 270.847 11.0953 241.271 30.715 229.529L219.553 116.548C241.343 103.441 267.43 120.367 267.43 145.579V224.656L448.117 116.552C469.899 103.437 496 120.367 496 145.579V366.579C496 391.775 469.929 408.707 448.151 395.657L267.43 287.465ZM463.816 144.448L463.83 144.482C463.931 144.747 464 145.108 464 145.579V366.579L463.996 366.774C463.979 367.152 463.916 367.451 463.829 367.68L463.806 367.732L277.268 256.059L463.816 144.448ZM235.236 144.455L235.272 144.544C235.371 144.816 235.43 145.154 235.43 145.579V366.579L235.426 366.774C235.409 367.152 235.346 367.451 235.259 367.68L235.236 367.732L48.6978 256.059L235.236 144.455Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
