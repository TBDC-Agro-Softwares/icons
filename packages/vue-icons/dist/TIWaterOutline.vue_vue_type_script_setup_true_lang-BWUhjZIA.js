import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIWaterOutline",
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
    return (C, t) => (r(), s("svg", {
      class: a(i.value),
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
        d: "M256.005 36C247.826 36 240.056 39.576 234.737 45.7885C207.48 77.6684 178.739 115.687 153.937 156.09C117.296 215.778 96 270.032 96 316.075C96 413.282 158.793 476.075 256 476.075C353.207 476.075 416 413.282 416 316.075C416 270.033 394.705 215.78 358.065 156.09C333.267 115.692 304.547 77.698 277.283 45.7995C271.954 39.576 264.184 36 256.005 36ZM256.004 70.1751L256.727 71.0307C281.859 100.825 308.126 135.904 330.793 172.83C364.606 227.915 384 277.324 384 316.075C384 395.609 335.533 444.075 256 444.075C176.467 444.075 128 395.609 128 316.075C128 277.324 147.394 227.914 181.208 172.831C203.495 136.526 229.274 101.991 254.013 72.5383L256.004 70.1751ZM360 324.075C360 315.239 352.837 308.075 344 308.075C335.163 308.075 328 315.239 328 324.075L327.992 325.001C327.498 355.502 302.619 380.075 272 380.075L271.685 380.078C262.994 380.246 256 387.344 256 396.075C256 404.912 263.163 412.075 272 412.075C320.601 412.075 360 372.676 360 324.075Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
