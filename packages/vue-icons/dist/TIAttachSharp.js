import { defineComponent as o, computed as a, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TIAttachSharp",
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (r(), n("svg", {
      class: s(i.value),
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
        d: "M144.49 338.936L144.489 149.011L144.491 149.194C144.124 118.965 160.041 90.8735 186.161 75.652C212.281 60.4305 244.569 60.4305 270.689 75.652C296.547 90.7213 312.406 118.404 312.365 148.288L312.36 149.011L312.228 337.803C311.744 368.426 286.782 392.997 256.155 392.997C225.834 392.997 201.065 368.915 200.104 338.72L200.08 337.676V178H232.08L232.079 337.341L232.087 337.691C232.496 350.525 242.922 360.788 255.761 360.994L256.155 360.997C269.174 360.997 279.81 350.656 280.223 337.691L280.23 337.335L280.361 148.806C280.588 130.101 270.739 112.719 254.577 103.3C238.414 93.8812 218.436 93.8812 202.273 103.3C186.272 112.624 176.459 129.754 176.485 148.245L176.49 149L176.489 338.633L176.517 339.89C177.813 382.309 212.255 416.256 254.688 416.938L255.99 416.948C299.019 416.948 334.154 382.742 335.462 339.89L335.489 338.678L335.49 145.44H367.49L367.488 339.052C366.606 400.001 316.946 448.948 255.99 448.948C195.643 448.948 146.368 400.975 144.533 340.876L144.49 338.936Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as default
};