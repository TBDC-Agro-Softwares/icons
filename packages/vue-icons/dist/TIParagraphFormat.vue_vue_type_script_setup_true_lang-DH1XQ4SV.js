import { defineComponent as o, computed as a, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIParagraphFormat",
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
    const t = e, i = a(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (p, l) => (r(), s("svg", {
      class: n(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "516",
      viewBox: "0 0 512 516",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M216.553 108.029C196.505 107.703 176.952 114.295 161.152 126.707C145.352 139.119 134.261 156.6 129.726 176.237C127.123 188.735 127.327 201.659 130.323 214.067C133.319 226.475 139.031 238.054 147.044 247.96C155.057 257.866 165.168 265.849 176.639 271.327C188.111 276.804 200.654 279.639 213.353 279.623V408.318H256.02V150.927H298.686V408.318H341.353V150.927H384.02V108.029H216.553ZM170.686 193.826C170.686 182.448 175.182 171.537 183.183 163.492C191.185 155.447 202.037 150.927 213.353 150.927V236.724C202.037 236.724 191.185 232.205 183.183 224.16C175.182 216.115 170.686 205.203 170.686 193.826Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
