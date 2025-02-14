import { defineComponent as C, computed as i, openBlock as o, createElementBlock as n, normalizeClass as r, normalizeStyle as s, createElementVNode as a } from "vue";
const u = /* @__PURE__ */ C({
  __name: "TIAlarmOutline",
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
    const l = e, L = i(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, t) => (o(), n("svg", {
      class: r(L.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      a("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M111.81 63.999L108.5 64.0939L108.248 64.1091C74.0828 66.1684 47.9792 95.696 48.0706 131.041C48.0705 139.507 49.5769 146.722 52.6722 153.373L53.0523 154.174C55.085 158.383 57.2423 161.562 61.2321 166.669L62.2429 167.952C65.7719 172.565 71.088 175.469 76.8763 175.946L77.5324 176H79.2138L79.7549 175.986C84.9212 175.787 89.7669 173.517 93.2212 169.729L93.3377 169.597L153.676 110.333L153.758 110.25C157.926 106.034 160.157 100.277 159.918 94.354C159.715 88.5421 157.065 82.9929 152.605 79.124L152.523 79.0535C141.425 69.5563 127.363 64.239 112.772 64.0075L111.81 63.999ZM112.145 96.0021L112.442 96.0068C115.377 96.0704 118.266 96.5542 121.026 97.4273L121.118 97.4571L80.6757 137.181L80.6221 136.972C80.1962 135.254 80.0705 133.407 80.0705 131L80.073 130.436C80.287 112.05 93.2721 97.3533 109.67 96.0857L109.979 96.0641L112.145 96.0021ZM256.071 96.0001C158.869 96.0001 80.0707 174.798 80.0707 272C80.0707 314.84 95.3767 354.105 120.818 384.625L84.757 420.686L84.5002 420.949C78.5098 427.215 78.5954 437.152 84.757 443.314C91.0054 449.562 101.136 449.562 107.384 443.314L143.446 407.252C173.966 432.694 213.231 448 256.071 448C297.385 448 337.202 433.474 368.693 407.25L404.757 443.314L405.02 443.571C411.286 449.561 421.223 449.475 427.384 443.314C433.633 437.065 433.633 426.935 427.384 420.686L391.32 384.622C417.544 353.132 432.071 313.315 432.071 272C432.071 174.798 353.273 96.0001 256.071 96.0001ZM256.071 128C335.6 128 400.071 192.471 400.071 272C400.071 310.191 384.899 346.818 357.894 373.823C330.889 400.829 294.262 416 256.071 416C176.542 416 112.071 351.529 112.071 272C112.071 192.471 176.542 128 256.071 128ZM400.192 63.999L403.501 64.0939L403.753 64.1091C437.919 66.1684 464.022 95.696 463.931 131C463.931 139.507 462.424 146.722 459.329 153.373C457.116 158.129 454.881 161.432 450.39 167.154L449.468 168.323C446.021 172.615 440.995 175.345 435.518 175.9L435.096 175.938L434.454 175.99H432.788L432.644 175.988C427.33 175.892 422.323 173.604 418.78 169.719L418.663 169.588L358.326 110.333L357.934 109.931C353.965 105.747 351.85 100.132 352.08 94.4425C352.286 88.5421 354.936 82.9929 359.396 79.124L360.009 78.6044C371.201 69.2401 385.317 64.0702 399.924 64.0003L400.192 63.999ZM402.022 96.0641L399.856 96.0021L399.559 96.0068C396.625 96.0704 393.736 96.5542 390.975 97.4273L390.884 97.4571L431.325 137.172L431.379 136.96C431.784 135.323 431.918 133.565 431.93 131.318L431.931 130.959C431.98 112.163 418.631 97.0639 401.828 96.0511L402.022 96.0641ZM272.068 159.685C271.9 150.994 264.802 144 256.071 144L255.756 144.003C247.065 144.171 240.071 151.269 240.071 160V256H176.071L175.756 256.003C167.065 256.171 160.071 263.269 160.071 272C160.071 280.837 167.234 288 176.071 288H256.071L256.386 287.997C265.077 287.829 272.071 280.731 272.071 272V160L272.068 159.685Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
