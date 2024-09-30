import { defineComponent as r, computed as n, openBlock as C, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TILogoBuffer",
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
    return (d, o) => (C(), a("svg", {
      class: s(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M39.9317 149.25L237.332 244.57C242.472 247.02 249.332 248.3 256.122 248.3C262.912 248.3 269.772 247.02 274.902 244.57L472.302 149.25C482.682 144.25 482.682 136.07 472.302 131.05L274.902 35.73C269.772 33.28 262.902 32 256.122 32C249.342 32 242.472 33.28 237.332 35.73L39.9317 131.05C29.5517 136.07 29.5517 144.23 39.9317 149.25Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M472.302 246.9C472.302 246.9 436.252 229.52 431.472 227.18C426.692 224.84 425.402 224.97 420.382 227.3C415.362 229.63 274.782 297.53 274.782 297.53C268.856 300.089 262.456 301.363 256.002 301.27C249.232 301.27 242.352 299.98 237.222 297.53C237.222 297.53 100.372 231.53 93.9517 228.35C87.0017 225 85.0017 225 78.6717 228L39.6717 246.78C29.2917 251.78 29.2917 259.97 39.6717 264.98L237.102 360.3C242.232 362.75 249.102 364.03 255.882 364.03C262.662 364.03 269.532 362.75 274.672 360.3L472.072 265C482.682 260.08 482.682 251.92 472.302 246.9Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M431.472 343C436.252 345.37 472.302 362.75 472.302 362.75C482.682 367.77 482.682 375.93 472.182 381L274.742 476.27C269.612 478.72 262.742 480 255.962 480C249.182 480 242.312 478.83 237.182 476.27L39.7817 380.95C29.3917 375.93 29.3917 367.75 39.7817 362.75L78.7817 343.97C85.0717 340.93 87.0717 340.93 94.0717 344.32C100.482 347.5 237.332 413.5 237.332 413.5C242.472 415.95 249.352 417.23 256.122 417.23C262.575 417.325 268.975 416.054 274.902 413.5C274.902 413.5 415.362 345.45 420.382 343.12C425.402 340.79 426.692 340.63 431.472 343Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
