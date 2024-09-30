import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGiftOutline",
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
    return (d, t) => (r(), s("svg", {
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
        d: "M128 104C128 64.2355 160.235 32 200 32C222.618 32 242.8 42.4293 256 58.7413C269.2 42.4293 289.382 32 312 32C351.764 32 384 64.2355 384 104C384 118.801 379.534 132.559 371.876 144H416C442.51 144 464 165.49 464 192V240C464 260.9 450.643 278.679 432 285.269V416C432 450.993 403.916 479.426 369.058 479.991L368 480H256H144C109.007 480 80.5737 451.916 80.0086 417.058L80 416V285.269C61.3569 278.679 48 260.9 48 240V192C48 165.49 69.4903 144 96 144H140.124C132.466 132.559 128 118.801 128 104ZM272 448H368C385.496 448 399.713 433.958 399.996 416.529L400 416V288H272V448ZM240 288V448H144L143.471 447.996C126.042 447.713 112 433.496 112 416V288H240ZM272 256H416C424.837 256 432 248.837 432 240V192C432 183.163 424.837 176 416 176H312H272V256ZM240 176H200H96C87.1634 176 80 183.163 80 192V240C80 248.837 87.1634 256 96 256H240V176ZM200 144C177.909 144 160 126.091 160 104C160 81.9086 177.909 64 200 64L200.661 64.0054C222.448 64.3586 240 82.1295 240 104V143.999L200 144ZM312 144C333.87 144 351.641 126.448 351.995 104.661L352 104C352 81.9086 334.091 64 312 64C289.909 64 272 81.9086 272 104V143.999L312 144Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
