import { defineComponent as i, computed as o, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const H = /* @__PURE__ */ i({
  __name: "TIQrCodeFill",
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
    return (d, t) => (r(), s("svg", {
      class: n(C.value),
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
        d: "M64 32H208C225.673 32 240 46.3269 240 64V208C240 225.673 225.673 240 208 240H64C46.3269 240 32 225.673 32 208V64C32 46.3269 46.3269 32 64 32ZM168 176C172.418 176 176 172.418 176 168V104C176 99.5817 172.418 96 168 96H104C99.5817 96 96 99.5817 96 104V168C96 172.418 99.5817 176 104 176H168ZM448 32H304C286.327 32 272 46.3269 272 64V208C272 225.673 286.327 240 304 240H448C465.673 240 480 225.673 480 208V64C480 46.3269 465.673 32 448 32ZM416 168C416 172.418 412.418 176 408 176H344C339.582 176 336 172.418 336 168V104C336 99.5817 339.582 96 344 96H408C412.418 96 416 99.5817 416 104V168ZM280 272C275.582 272 272 275.582 272 280V328C272 332.418 275.582 336 280 336H328C332.418 336 336 332.418 336 328V280C336 275.582 332.418 272 328 272H280ZM344 336C339.582 336 336 339.582 336 344V408C336 412.418 339.582 416 344 416H408C412.418 416 416 412.418 416 408V344C416 339.582 412.418 336 408 336H344ZM416 424C416 419.582 419.582 416 424 416H472C476.418 416 480 419.582 480 424V472C480 476.418 476.418 480 472 480H424C419.582 480 416 476.418 416 472V424ZM440 272C435.582 272 432 275.582 432 280V312C432 316.418 435.582 320 440 320H472C476.418 320 480 316.418 480 312V280C480 275.582 476.418 272 472 272H440ZM272 440C272 435.582 275.582 432 280 432H312C316.418 432 320 435.582 320 440V472C320 476.418 316.418 480 312 480H280C275.582 480 272 476.418 272 472V440ZM208 272H64C46.3269 272 32 286.327 32 304V448C32 465.673 46.3269 480 64 480H208C225.673 480 240 465.673 240 448V304C240 286.327 225.673 272 208 272ZM176 408C176 412.418 172.418 416 168 416H104C99.5817 416 96 412.418 96 408V344C96 339.582 99.5817 336 104 336H168C172.418 336 176 339.582 176 344V408Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  H as _
};
