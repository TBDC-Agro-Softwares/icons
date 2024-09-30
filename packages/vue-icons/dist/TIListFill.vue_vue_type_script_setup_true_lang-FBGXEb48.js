import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIListFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
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
        d: "M44 144C44 126.327 58.3269 112 76 112C93.6731 112 108 126.327 108 144C108 161.673 93.6731 176 76 176C58.3269 176 44 161.673 44 144ZM468 144C468 130.745 457.255 120 444 120H156L155.603 120.003C142.531 120.215 132 130.878 132 144C132 157.255 142.745 168 156 168H444L444.397 167.997C457.469 167.785 468 157.122 468 144ZM468 256C468 242.745 457.255 232 444 232H156L155.603 232.003C142.531 232.215 132 242.878 132 256C132 269.255 142.745 280 156 280H444L444.397 279.997C457.469 279.785 468 269.122 468 256ZM444 344C457.255 344 468 354.745 468 368C468 381.122 457.469 391.785 444.397 391.997L444 392H156C142.745 392 132 381.255 132 368C132 354.878 142.531 344.215 155.603 344.003L156 344H444ZM76 224C58.3269 224 44 238.327 44 256C44 273.673 58.3269 288 76 288C93.6731 288 108 273.673 108 256C108 238.327 93.6731 224 76 224ZM44 368C44 350.327 58.3269 336 76 336C93.6731 336 108 350.327 108 368C108 385.673 93.6731 400 76 400C58.3269 400 44 385.673 44 368Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};