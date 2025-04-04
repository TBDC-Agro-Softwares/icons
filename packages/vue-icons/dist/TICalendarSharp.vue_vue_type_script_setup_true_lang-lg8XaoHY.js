import { defineComponent as i, computed as o, openBlock as r, createElementBlock as a, normalizeClass as n, normalizeStyle as s, createElementVNode as V } from "vue";
const d = /* @__PURE__ */ i({
  __name: "TICalendarSharp",
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
    const l = e, C = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (H, t) => (r(), a("svg", {
      class: n(C.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      V("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M448 64H400V32H360V64H152V32H112V64H64C46.3269 64 32 78.3269 32 96V448C32 465.673 46.3269 480 64 480H448C465.673 480 480 465.673 480 448V96C480 78.3269 465.673 64 448 64ZM436 436H76V176H436V436ZM276 208C273.791 208 272 209.791 272 212V252C272 254.209 273.791 256 276 256H316C318.209 256 320 254.209 320 252V212C320 209.791 318.209 208 316 208H276ZM356 208C353.791 208 352 209.791 352 212V252C352 254.209 353.791 256 356 256H396C398.209 256 400 254.209 400 252V212C400 209.791 398.209 208 396 208H356ZM272 292C272 289.791 273.791 288 276 288H316C318.209 288 320 289.791 320 292V332C320 334.209 318.209 336 316 336H276C273.791 336 272 334.209 272 332V292ZM356 288C353.791 288 352 289.791 352 292V332C352 334.209 353.791 336 356 336H396C398.209 336 400 334.209 400 332V292C400 289.791 398.209 288 396 288H356ZM112 292C112 289.791 113.791 288 116 288H156C158.209 288 160 289.791 160 292V332C160 334.209 158.209 336 156 336H116C113.791 336 112 334.209 112 332V292ZM196 288C193.791 288 192 289.791 192 292V332C192 334.209 193.791 336 196 336H236C238.209 336 240 334.209 240 332V292C240 289.791 238.209 288 236 288H196ZM112 372C112 369.791 113.791 368 116 368H156C158.209 368 160 369.791 160 372V412C160 414.209 158.209 416 156 416H116C113.791 416 112 414.209 112 412V372ZM196 368C193.791 368 192 369.791 192 372V412C192 414.209 193.791 416 196 416H236C238.209 416 240 414.209 240 412V372C240 369.791 238.209 368 236 368H196ZM272 372C272 369.791 273.791 368 276 368H316C318.209 368 320 369.791 320 372V412C320 414.209 318.209 416 316 416H276C273.791 416 272 414.209 272 412V372Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  d as _
};
