import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILogout",
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
    const t = e, i = s(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (d, l) => (a(), n("svg", {
      class: r(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        d: "M15 6.6C14.8193 6.52896 14.664 6.40549 14.554 6.24546C14.4441 6.08543 14.3845 5.89616 14.383 5.702C14.383 5.166 14.831 4.73 15.383 4.73C15.499 4.73 15.611 4.75 15.715 4.785C15.716 4.782 15.717 4.781 15.719 4.782C18.834 6.158 21 9.208 21 12.752C21 17.582 16.97 21.5 12 21.5C7.03 21.5 3 17.583 3 12.751C3 9.232 5.137 6.2 8.218 4.81C8.3424 4.75914 8.47561 4.73331 8.61 4.734C9.162 4.734 9.61 5.169 9.61 5.705C9.60879 5.89804 9.55013 6.08635 9.44149 6.24592C9.33285 6.4055 9.17916 6.52911 9 6.601C6.635 7.693 5 10.037 5 12.751C5 16.509 8.134 19.556 12 19.556C15.866 19.556 19 16.509 19 12.751C19 10.037 17.365 7.693 15 6.601V6.6ZM12 2.5C12.2652 2.5 12.5196 2.60536 12.7071 2.79289C12.8946 2.98043 13 3.23478 13 3.5V9.5C13 9.76522 12.8946 10.0196 12.7071 10.2071C12.5196 10.3946 12.2652 10.5 12 10.5C11.7348 10.5 11.4804 10.3946 11.2929 10.2071C11.1054 10.0196 11 9.76522 11 9.5V3.5C11 3.23478 11.1054 2.98043 11.2929 2.79289C11.4804 2.60536 11.7348 2.5 12 2.5Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
