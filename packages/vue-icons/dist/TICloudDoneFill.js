import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as C } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICloudDoneFill",
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
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      C("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M424.44 227.25C418.319 225.855 413.58 221.01 412.32 214.86C404.64 178.18 387.87 146.71 363.14 122.86C334.356 95.1885 295.927 79.8154 256 79.9999C220.5 79.9999 187.76 91.6899 161.32 113.8C143.265 129.05 128.904 148.197 119.32 169.8C117.223 174.502 112.991 177.907 107.95 178.95C80.95 184.57 56.88 196.29 38.77 212.82C13.39 235.88 0 267.42 0 304C0 340 14.38 372.88 40.49 396.59C65.64 419.43 99.56 432 136 432H396C428.37 432 456.23 423.43 476.59 407.23C499.76 388.78 512 361.39 512 328C512 270.43 470 237.42 424.44 227.25ZM329.24 218.31L221.44 346.31C218.453 349.855 214.075 351.931 209.44 352H209.17C204.641 352.001 200.324 350.082 197.29 346.72L151.39 295.85C145.62 289.46 145.57 279.52 151.69 273.45C154.795 270.364 159.029 268.684 163.405 268.803C167.781 268.922 171.918 270.829 174.85 274.08L208.75 311.66L304.75 197.66C308.433 193.287 314.17 191.211 319.799 192.215C325.427 193.218 330.093 197.148 332.039 202.525C333.984 207.901 332.913 213.907 329.23 218.28L329.24 218.31Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
