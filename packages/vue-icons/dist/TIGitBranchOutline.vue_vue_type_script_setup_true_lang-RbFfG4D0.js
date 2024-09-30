import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGitBranchOutline",
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
    return (d, t) => (n(), r("svg", {
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
        d: "M96 96C96 60.6538 124.654 32 160 32C195.346 32 224 60.6538 224 96C224 125.821 203.604 150.879 176 157.984V303.63C177.143 302.853 178.314 302.097 179.515 301.362C188.464 295.883 198.806 291.627 211.245 287.962L213.155 287.408C221.956 284.891 229.959 283.064 245.452 279.847L252.737 278.336C284.334 271.754 300.088 266.808 312.998 258.023C325.219 249.706 332.586 238.428 335.061 221.734C307.935 214.309 288 189.482 288 160C288 124.654 316.654 96 352 96C387.346 96 416 124.654 416 160C416 190.093 395.231 215.335 367.244 222.173C364.175 249.838 351.807 270.318 331.002 284.477C321.162 291.174 309.708 296.32 296.042 300.609L294.389 301.122C285.207 303.931 275.927 306.159 261.85 309.122L249.755 311.639C220.588 317.767 207.652 321.657 196.223 328.654C186.087 334.859 179.876 342.795 177.333 354.375C204.258 361.933 224 386.661 224 416C224 451.346 195.346 480 160 480C124.654 480 96 451.346 96 416C96 386.179 116.396 361.121 144 354.016V157.984C116.396 150.879 96 125.821 96 96ZM352 192C369.673 192 384 177.673 384 160C384 142.327 369.673 128 352 128C334.327 128 320 142.327 320 160C320 177.673 334.327 192 352 192ZM160 384C142.327 384 128 398.327 128 416C128 433.673 142.327 448 160 448C177.673 448 192 433.673 192 416C192 398.327 177.673 384 160 384ZM160 128C177.673 128 192 113.673 192 96C192 78.3269 177.673 64 160 64C142.327 64 128 78.3269 128 96C128 113.673 142.327 128 160 128Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
