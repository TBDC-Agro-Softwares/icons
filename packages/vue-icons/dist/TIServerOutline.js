import { defineComponent as o, computed as C, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIServerOutline",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), n("svg", {
      class: s(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M48 128V127.24C48 126.912 48.0099 126.586 48.0294 126.263C49.9226 70.3545 143.127 32 256 32C368.873 32 462.077 70.3542 463.971 126.262C463.984 126.482 463.993 126.703 463.997 126.925L464 127.24V128V214V300V384.76C464 441.224 370.035 480 256 480C143.105 480 49.8813 441.996 48.0281 386.449L48 384.76V300V214V128ZM80 266.727V300C80 313.416 95.9267 329.101 126.403 341.798C160.106 355.839 206.407 364 256 364C305.593 364 351.895 355.839 385.597 341.798C415.769 329.228 431.68 313.73 431.995 300.403L432 300V266.727C395.01 293.643 329.687 310 256 310C182.313 310 116.99 293.643 80 266.727ZM432 214L431.995 214.403C431.68 227.73 415.769 243.228 385.597 255.798C351.895 269.839 305.593 278 256 278C206.407 278 160.106 269.839 126.403 255.798C95.9267 243.101 80 227.416 80 214V180.734C116.985 207.648 182.3 224 256 224C329.7 224 395.015 207.648 432 180.734V214ZM432 352.727C395.01 379.643 329.687 396 256 396C182.313 396 116.99 379.643 80 352.727V384.76C80 397.923 95.9012 413.433 126.353 426C160.07 439.913 206.389 448 256 448C305.611 448 351.93 439.913 385.647 426C415.794 413.559 431.681 398.233 431.995 385.156L432 384.76V352.727ZM432 128C432 114.579 416.08 98.8962 385.611 86.2007C351.913 72.16 305.611 64 256 64C206.389 64 160.087 72.16 126.389 86.2007C95.9201 98.8962 80 114.579 80 128C80 141.421 95.9201 157.104 126.389 169.799C160.087 183.84 206.389 192 256 192C305.611 192 351.913 183.84 385.611 169.799C416.08 157.104 432 141.421 432 128Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
