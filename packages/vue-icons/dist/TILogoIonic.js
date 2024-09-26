import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as c, normalizeStyle as C, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TILogoIonic",
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
    return (d, o) => (a(), s("svg", {
      class: c(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M457.91 158.92L459.86 163.2C473.182 192.321 480.053 223.977 480 256C480 379.51 379.51 480 256 480C132.49 480 32 379.51 32 256C32 132.49 132.49 32 256 32C291.752 31.9263 326.991 40.5036 358.71 57L362.88 59.07L359.21 62C350.204 69.1934 343.109 78.4939 338.55 89.08L337.3 92L334.43 90.7C309.945 78.9926 283.14 72.9433 256 73C155.08 73 73 155.08 73 256C73 356.92 155.1 439 256 439C356.9 439 439 356.92 439 256C439.03 231.896 434.257 208.028 424.96 185.79L423.74 182.86L426.74 181.76C437.542 177.729 447.18 171.093 454.8 162.44L457.91 158.92Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M402.59 162.97C428.282 162.97 449.11 142.142 449.11 116.45C449.11 90.7577 428.282 69.93 402.59 69.93C376.898 69.93 356.07 90.7577 356.07 116.45C356.07 142.142 376.898 162.97 402.59 162.97Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M256 153.9C199.612 153.9 153.9 199.612 153.9 256C153.9 312.388 199.612 358.1 256 358.1C312.388 358.1 358.1 312.388 358.1 256C358.028 199.641 312.359 153.972 256 153.9Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
