import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIBrowsersMinimizedOutline",
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
    return (u, t) => (r(), s("svg", {
      class: a(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M3.75 1.875H16.25C17.6307 1.875 18.75 2.99429 18.75 4.375V15.625C18.75 17.0057 17.6307 18.125 16.25 18.125H3.75C2.36929 18.125 1.25 17.0057 1.25 15.625V4.375C1.25 2.99429 2.36929 1.875 3.75 1.875ZM2.5 6.79688C2.5 6.10652 3.05964 5.54688 3.75 5.54688H16.25C16.9404 5.54688 17.5 6.10652 17.5 6.79688V9.375C17.5 10.0654 16.9404 10.625 16.25 10.625H3.75C3.05964 10.625 2.5 10.0654 2.5 9.375V6.79688ZM3.75 11.875C3.05964 11.875 2.5 12.4346 2.5 13.125V15.625C2.5 16.3154 3.05964 16.875 3.75 16.875H16.25C16.9404 16.875 17.5 16.3154 17.5 15.625V13.125C17.5 12.4346 16.9404 11.875 16.25 11.875H3.75Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
