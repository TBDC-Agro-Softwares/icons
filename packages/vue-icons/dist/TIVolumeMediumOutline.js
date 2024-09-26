import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIVolumeMediumOutline",
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
    return (c, t) => (r(), s("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M249.279 101.051L249.444 100.92L249.78 100.666C257.069 95.3057 266.753 94.4994 274.827 98.5811C282.903 102.664 288 110.943 288 119.996L288 392.305C288.017 401.363 282.933 409.66 274.854 413.756C266.775 417.853 257.077 417.052 249.78 411.685C249.554 411.518 249.332 411.346 249.115 411.168L157.642 336.166H88C74.8777 336.166 64.2152 325.634 64.0032 312.562L64 312.166V200.166C64 186.911 74.7452 176.166 88 176.166H157.666L249.279 101.051ZM256 375.433V136.918L177.935 200.928L177.502 201.276C171.849 205.742 164.849 208.173 157.65 208.166H96V304.166H157.658C164.878 304.169 171.879 306.614 177.524 311.092L177.935 311.423L256 375.433ZM344.728 177.913C352.6 173.897 362.236 177.023 366.252 184.894C377.956 207.834 384 231.155 384 256.166C384 280.673 377.818 304.389 366.301 327.342C362.337 335.24 352.722 338.429 344.824 334.466C336.926 330.503 333.736 320.887 337.699 312.99C347.081 294.294 352 275.422 352 256.166C352 236.418 347.235 218.032 337.748 199.437C333.732 191.566 336.857 181.929 344.728 177.913ZM413.822 136.106C409.371 128.472 399.574 125.893 391.941 130.344C384.307 134.795 381.727 144.591 386.178 152.225C407.809 189.323 416 215.7 416 256.166C416 296.133 407.745 322.462 386.117 360.211C381.724 367.879 384.379 377.655 392.046 382.048C399.713 386.441 409.49 383.787 413.883 376.12C438.093 333.864 448 302.264 448 256.166C448 209.577 438.133 177.799 413.822 136.106Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
