import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIReorderFourFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (s(), n("svg", {
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
        d: "M480 14C497.673 14 512 28.3269 512 46C512 63.4964 497.958 77.7131 480.529 77.9957L480 78H32C14.3269 78 0 63.6731 0 46C0 28.5036 14.0418 14.2869 31.4708 14.0043L32 14H480ZM512 186C512 168.327 497.673 154 480 154H32L31.4708 154.004C14.0418 154.287 0 168.504 0 186C0 203.673 14.3269 218 32 218H480L480.529 217.996C497.958 217.713 512 203.496 512 186ZM512 326C512 308.327 497.673 294 480 294H32L31.4708 294.004C14.0418 294.287 0 308.504 0 326C0 343.673 14.3269 358 32 358H480L480.529 357.996C497.958 357.713 512 343.496 512 326ZM512 466C512 448.327 497.673 434 480 434H32L31.4708 434.004C14.0418 434.287 0 448.504 0 466C0 483.673 14.3269 498 32 498H480L480.529 497.996C497.958 497.713 512 483.496 512 466Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
