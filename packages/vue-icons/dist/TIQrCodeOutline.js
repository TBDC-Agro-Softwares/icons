import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as V } from "vue";
const c = /* @__PURE__ */ i({
  __name: "TIQrCodeOutline",
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
    const l = e, C = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (H, t) => (n(), r("svg", {
      class: s(C.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      V("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M208 32H64C46.3269 32 32 46.3269 32 64V208C32 225.673 46.3269 240 64 240H208C225.673 240 240 225.673 240 208V64C240 46.3269 225.673 32 208 32ZM64 64H208V208H64V64ZM448 32H304C286.327 32 272 46.3269 272 64V208C272 225.673 286.327 240 304 240H448C465.673 240 480 225.673 480 208V64C480 46.3269 465.673 32 448 32ZM304 64H448V208H304V64ZM336 104C336 99.5817 339.582 96 344 96H408C412.418 96 416 99.5817 416 104V168C416 172.418 412.418 176 408 176H344C339.582 176 336 172.418 336 168V104ZM272 280C272 275.582 275.582 272 280 272H328C332.418 272 336 275.582 336 280V328C336 332.418 332.418 336 328 336H280C275.582 336 272 332.418 272 328V280ZM336 344C336 339.582 339.582 336 344 336H408C412.418 336 416 339.582 416 344V408C416 412.418 412.418 416 408 416H344C339.582 416 336 412.418 336 408V344ZM424 416C419.582 416 416 419.582 416 424V472C416 476.418 419.582 480 424 480H472C476.418 480 480 476.418 480 472V424C480 419.582 476.418 416 472 416H424ZM432 280C432 275.582 435.582 272 440 272H472C476.418 272 480 275.582 480 280V312C480 316.418 476.418 320 472 320H440C435.582 320 432 316.418 432 312V280ZM280 432C275.582 432 272 435.582 272 440V472C272 476.418 275.582 480 280 480H312C316.418 480 320 476.418 320 472V440C320 435.582 316.418 432 312 432H280ZM96 104C96 99.5817 99.5817 96 104 96H168C172.418 96 176 99.5817 176 104V168C176 172.418 172.418 176 168 176H104C99.5817 176 96 172.418 96 168V104ZM96 344C96 339.582 99.5817 336 104 336H168C172.418 336 176 339.582 176 344V408C176 412.418 172.418 416 168 416H104C99.5817 416 96 412.418 96 408V344ZM208 272H64C46.3269 272 32 286.327 32 304V448C32 465.673 46.3269 480 64 480H208C225.673 480 240 465.673 240 448V304C240 286.327 225.673 272 208 272ZM64 304H208V448H64V304Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  c as default
};