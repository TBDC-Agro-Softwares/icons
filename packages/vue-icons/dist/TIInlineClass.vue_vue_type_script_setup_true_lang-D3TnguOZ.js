import { defineComponent as o, computed as s, openBlock as n, createElementBlock as a, normalizeClass as C, normalizeStyle as r, createElementVNode as c } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIInlineClass",
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
    return (d, l) => (n(), a("svg", {
      class: C(i.value),
      style: r(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        d: "M211.175 284.011C211.358 281.73 211.846 279.484 212.626 277.333H133.885L173.565 166.4L212.839 276.224C214.431 270.449 217.862 265.35 222.612 261.7C227.363 258.05 233.174 256.049 239.165 256H248.253L194.919 106.667H152.253L45.5859 405.333H88.2526L118.759 320H211.175V284.011ZM267.73 427.52C257.771 415.467 252.775 400.074 253.757 384.469V326.656C253.748 322.978 254.466 319.335 255.87 315.935C257.274 312.535 259.335 309.447 261.936 306.846C264.536 304.245 267.625 302.184 271.025 300.78C274.425 299.377 278.068 298.658 281.746 298.667H348.157C364.862 300.604 380.161 308.957 390.823 321.963C390.823 321.963 427.687 360.747 454.055 384.427C457.207 386.685 459.884 389.542 461.931 392.835C463.978 396.128 465.356 399.792 465.986 403.618C466.616 407.444 466.486 411.356 465.603 415.132C464.72 418.908 463.101 422.472 460.839 425.621C459.644 427.281 458.286 428.818 456.786 430.208L385.383 500.821C380.928 506.73 374.309 510.629 366.981 511.661C359.653 512.693 352.215 510.774 346.301 506.325C344.214 504.769 342.361 502.923 340.797 500.843L304.317 463.979L267.73 427.52ZM320.637 343.04C316.27 343.063 312.091 344.816 309.016 347.915C305.941 351.015 304.22 355.207 304.231 359.573C304.243 363.939 305.985 368.123 309.076 371.206C312.168 374.29 316.356 376.021 320.722 376.021C325.088 376.021 329.276 374.29 332.367 371.206C335.459 368.123 337.201 363.939 337.213 359.573C337.224 355.207 335.503 351.015 332.428 347.915C329.352 344.816 325.173 343.063 320.807 343.04H320.637Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
