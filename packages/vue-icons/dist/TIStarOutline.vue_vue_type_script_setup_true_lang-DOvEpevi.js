import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as L } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIStarOutline",
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
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      L("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M192.377 192H32.0006L31.5318 192.006C16.154 192.405 10.1149 212.393 22.9522 221.196L152.971 310.351L102.841 458.884L102.698 459.326C98.1958 473.894 114.898 486.008 127.389 476.956L256.001 383.758L384.612 476.956L384.992 477.224C397.566 485.85 414.093 473.5 409.16 458.884L359.03 310.351L489.049 221.196L489.432 220.926C501.889 211.9 495.566 192 480.001 192H319.624L271.217 43.0546C266.427 28.3151 245.574 28.3151 240.784 43.0546L192.377 192ZM256.001 99.765L292.784 212.945L292.896 213.279C295.135 219.687 301.187 224 308.001 224H428.375L330.952 290.804L330.66 291.01C324.965 295.103 322.589 302.446 324.841 309.116L362.82 421.646L265.389 351.044L265.082 350.827C259.513 346.987 252.111 347.059 246.612 351.044L149.181 421.646L187.16 309.116L187.271 308.777C189.366 302.084 186.856 294.786 181.049 290.804L83.6256 224H204.001C210.932 224 217.075 219.537 219.217 212.945L256.001 99.765Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
