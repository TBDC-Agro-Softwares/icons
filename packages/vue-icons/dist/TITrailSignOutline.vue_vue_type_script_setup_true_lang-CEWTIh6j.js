import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TITrailSignOutline",
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
    return (u, t) => (r(), s("svg", {
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
        d: "M271.997 47.6851C271.829 38.9939 264.731 32 256 32C247.163 32 240 39.1634 240 48V64H102.63C94.1386 64 85.995 67.3736 79.9926 73.38L20.6863 132.686C14.4379 138.935 14.4379 149.065 20.6863 155.314L79.9963 214.624C85.995 220.626 94.1386 224 102.63 224H240V256H96C78.3269 256 64 270.327 64 288V384C64 401.673 78.3269 416 96 416H240V464L240.003 464.315C240.171 473.006 247.269 480 256 480C264.837 480 272 472.837 272 464V416H409.37C417.861 416 426.005 412.626 432.007 406.62L491.314 347.314C497.562 341.065 497.562 330.935 491.314 324.686L432.004 265.376C426.005 259.374 417.861 256 409.37 256H272V224H416C433.673 224 448 209.673 448 192V96C448 78.3269 433.673 64 416 64H272V48L271.997 47.6851ZM256 384L409.373 383.999L457.373 336L409.373 288H256H96V384H256ZM416 192H256H102.627L54.627 144L102.63 96H256H416V192Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};