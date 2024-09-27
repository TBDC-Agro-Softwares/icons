import { defineComponent as i, computed as o, openBlock as n, createElementBlock as a, normalizeClass as r, normalizeStyle as s, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TICalendarOutline",
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
    const l = e, t = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, C) => (n(), a("svg", {
      class: r(t.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M128 32C136.731 32 143.829 38.9939 143.997 47.6851L144 48V64H368V48C368 39.1634 375.163 32 384 32C392.731 32 399.829 38.9939 399.997 47.6851L400 48V64H416C451.346 64 480 92.6538 480 128V416C480 451.346 451.346 480 416 480H96C60.6538 480 32 451.346 32 416V128C32 92.6538 60.6538 64 96 64H112V48C112 39.1634 119.163 32 128 32ZM416 176C432 176 448 192 448 208V416C448 433.673 433.673 448 416 448H96C78.3269 448 64 433.673 64 416V208C64 192 80 176 96 176H416ZM320 232C320 245.255 309.255 256 296 256C282.745 256 272 245.255 272 232C272 218.745 282.745 208 296 208C309.255 208 320 218.745 320 232ZM376 256C389.255 256 400 245.255 400 232C400 218.745 389.255 208 376 208C362.745 208 352 218.745 352 232C352 245.255 362.745 256 376 256ZM320 312C320 325.255 309.255 336 296 336C282.745 336 272 325.255 272 312C272 298.745 282.745 288 296 288C309.255 288 320 298.745 320 312ZM376 336C389.255 336 400 325.255 400 312C400 298.745 389.255 288 376 288C362.745 288 352 298.745 352 312C352 325.255 362.745 336 376 336ZM160 312C160 325.255 149.255 336 136 336C122.745 336 112 325.255 112 312C112 298.745 122.745 288 136 288C149.255 288 160 298.745 160 312ZM216 336C229.255 336 240 325.255 240 312C240 298.745 229.255 288 216 288C202.745 288 192 298.745 192 312C192 325.255 202.745 336 216 336ZM160 392C160 405.255 149.255 416 136 416C122.745 416 112 405.255 112 392C112 378.745 122.745 368 136 368C149.255 368 160 378.745 160 392ZM216 416C229.255 416 240 405.255 240 392C240 378.745 229.255 368 216 368C202.745 368 192 378.745 192 392C192 405.255 202.745 416 216 416ZM320 392C320 405.255 309.255 416 296 416C282.745 416 272 405.255 272 392C272 378.745 282.745 368 296 368C309.255 368 320 378.745 320 392Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};