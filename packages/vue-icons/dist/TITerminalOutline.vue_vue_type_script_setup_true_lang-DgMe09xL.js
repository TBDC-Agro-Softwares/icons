import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TITerminalOutline",
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
        d: "M80 32H432C467.346 32 496 60.6538 496 96V416C496 451.346 467.346 480 432 480H80C44.6538 480 16 451.346 16 416V96C16 60.6538 44.6538 32 80 32ZM432 64H80C62.3269 64 48 78.3269 48 96V416C48 433.673 62.3269 448 80 448H432C449.673 448 464 433.673 464 416V96C464 78.3269 449.673 64 432 64ZM83.5061 102.005C88.9517 95.1979 98.8236 94.0172 105.714 99.2859L105.995 99.5061L185.995 163.506C193.911 169.839 194.001 181.813 186.265 188.273L185.995 188.494L105.995 252.494C99.0949 258.014 89.0263 256.895 83.5061 249.995C78.0605 243.188 79.0757 233.298 85.7283 227.732L86.0049 227.506L150.387 176L86.0049 124.494C79.1979 119.048 78.0172 109.176 83.2859 102.286L83.5061 102.005ZM272 240C272 231.163 264.837 224 256 224H192L191.685 224.003C182.994 224.171 176 231.269 176 240C176 248.837 183.163 256 192 256H256L256.315 255.997C265.006 255.829 272 248.731 272 240Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
