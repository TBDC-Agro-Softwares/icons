import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as c } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIReorderThreeFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (n(), s("svg", {
      class: a(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M480 108C497.673 108 512 122.327 512 140C512 157.496 497.958 171.713 480.529 171.996L480 172H32C14.3269 172 0 157.673 0 140C0 122.504 14.0418 108.287 31.4708 108.004L32 108H480ZM480 224C497.673 224 512 238.327 512 256C512 273.496 497.958 287.713 480.529 287.996L480 288H32C14.3269 288 0 273.673 0 256C0 238.504 14.0418 224.287 31.4708 224.004L32 224H480ZM512 372C512 354.327 497.673 340 480 340H32L31.4708 340.004C14.0418 340.287 0 354.504 0 372C0 389.673 14.3269 404 32 404H480L480.529 403.996C497.958 403.713 512 389.496 512 372Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
