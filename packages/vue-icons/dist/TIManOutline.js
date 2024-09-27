import { defineComponent as L, computed as i, openBlock as o, createElementBlock as n, normalizeClass as a, normalizeStyle as r, createElementVNode as s } from "vue";
const u = /* @__PURE__ */ L({
  __name: "TIManOutline",
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
    const l = e, t = i(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, C) => (o(), n("svg", {
      class: a(t.value),
      style: r(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      s("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M255.999 0C225.071 0 199.999 25.0721 199.999 56C199.999 86.9279 225.071 112 255.999 112C286.927 112 311.999 86.9279 311.999 56C311.999 25.0721 286.927 0 255.999 0ZM255.999 32C269.254 32 279.999 42.7452 279.999 56C279.999 69.2548 269.254 80 255.999 80C242.744 80 231.999 69.2548 231.999 56C231.999 42.7452 242.744 32 255.999 32ZM303.999 128C338.992 128 367.427 156.084 367.992 190.942L368.001 192L368 280L368.002 280.367C367.979 290.68 363.946 300.581 356.755 307.974L356.367 308.368C348.933 315.802 338.861 319.98 328.362 320.002L327.998 319.999L327.636 320.002C325.054 319.996 322.497 319.74 319.999 319.245L319.998 472L320.001 472.37C319.975 482.681 315.941 492.58 308.752 499.971L308.364 500.365C300.933 507.796 290.867 511.975 280.373 512.003H279.626C271.066 511.98 262.792 509.196 255.999 504.138C249.207 509.196 240.932 511.98 232.373 512.003H231.626C221.316 511.975 211.419 507.941 204.028 500.753L203.634 500.365C196.202 492.933 192.024 482.865 191.998 472.37L191.999 472V319.245C189.501 319.74 186.945 319.996 184.362 320.002L183.998 319.999L183.636 320.002C173.322 319.981 163.419 315.947 156.025 308.756L155.631 308.368C148.198 300.935 144.02 290.864 143.996 280.367L143.998 280V192C143.998 157.007 172.083 128.574 206.941 128.009L207.999 128H303.999ZM287.998 280.363L287.999 280V208V192C287.999 183.163 295.163 176 303.999 176C312.731 176 319.828 182.994 319.996 191.685L319.999 192V208V280L319.999 280.046V280.429C320.037 282.422 320.845 284.327 322.259 285.741C323.655 287.137 325.531 287.943 327.498 287.999L327.809 288.001L327.999 287.999L328.189 288.001C330.268 288.026 332.27 287.211 333.74 285.741C335.137 284.343 335.943 282.466 335.999 280.497L336.001 192C336.001 174.504 321.958 160.287 304.528 160.004L303.999 160H207.999C190.502 160 176.284 174.042 176.002 191.471L175.998 192L175.997 280.186C175.972 282.267 176.788 284.27 178.259 285.741C179.655 287.137 181.531 287.943 183.498 287.999L183.809 288.001L183.999 287.999L184.189 288.001C186.268 288.026 188.27 287.211 189.74 285.741C191.137 284.344 191.942 282.468 191.998 280.501L191.999 280.327V208L191.999 207.918L191.999 192C191.999 183.163 199.163 176 207.999 176C216.731 176 223.828 182.994 223.996 191.685L223.999 192L223.999 207.981L223.999 208V280.14L224.001 280.363C224.001 280.458 224 280.553 223.999 280.647V472L223.998 472.183C223.974 474.264 224.79 476.266 226.262 477.737C227.66 479.136 229.538 479.943 231.508 480L231.82 480.003L231.999 480.001L232.178 480.003C234.261 480.026 236.265 479.209 237.737 477.737C239.14 476.335 239.947 474.449 239.998 472.473L239.998 472.37L239.999 472.004L239.999 471.973V336C239.999 327.163 247.163 320 255.999 320C264.731 320 271.828 326.994 271.996 335.685L271.999 336V471.921C272.001 472.105 272.001 472.288 272 472.472C272.052 474.448 272.859 476.334 274.262 477.737C275.66 479.136 277.538 479.943 279.508 480L279.82 480.003L279.999 480.001L280.178 480.003C282.261 480.026 284.265 479.209 285.737 477.737C287.135 476.34 287.941 474.463 287.998 472.495L288 472.183L288 280.677C287.999 280.572 287.998 280.468 287.998 280.363Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};