import { defineComponent as o, computed as s, openBlock as r, createElementBlock as n, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TITrashFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), n("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M432 96H336V72C336 49.9086 318.091 32 296 32H216C193.909 32 176 49.9086 176 72V96H80C71.1634 96 64 103.163 64 112C64 120.837 71.1634 128 80 128H97L116 432.92C117.42 459.77 138 480 164 480H348C374.13 480 394.3 460.22 396 433L415 128H432C440.837 128 448 120.837 448 112C448 103.163 440.837 96 432 96ZM192.57 416H192C183.381 416.005 176.307 409.183 176 400.57L168 176.57C167.685 167.733 174.593 160.315 183.43 160C192.267 159.685 199.685 166.593 200 175.43L208 399.43C208.154 403.674 206.614 407.805 203.72 410.914C200.826 414.022 196.814 415.852 192.57 416ZM272 400C272 408.837 264.837 416 256 416C247.163 416 240 408.837 240 400V176C240 167.163 247.163 160 256 160C264.837 160 272 167.163 272 176V400ZM304 96H208V72C207.976 69.8709 208.811 67.8219 210.316 66.3163C211.822 64.8107 213.871 63.9756 216 64H296C298.129 63.9756 300.178 64.8107 301.684 66.3163C303.189 67.8219 304.024 69.8709 304 72V96ZM336 400.57C335.693 409.183 328.619 416.005 320 416H319.42C315.177 415.849 311.169 414.018 308.277 410.91C305.385 407.802 303.846 403.673 304 399.43L312 175.43C312.204 169.714 315.441 164.54 320.494 161.859C325.546 159.177 331.645 159.394 336.494 162.429C341.342 165.463 344.204 170.854 344 176.57L336 400.57Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
