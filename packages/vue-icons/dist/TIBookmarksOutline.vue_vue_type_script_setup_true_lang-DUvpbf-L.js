import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBookmarksOutline",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (L, t) => (n(), r("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M463.988 62.9423C463.325 28.1069 434.972 0.10149 400.046 6.74644e-05L176 0L174.942 0.0115948C140.107 0.674645 112.101 29.0283 112 63.9535L112 80H144V64L144.006 63.4721C144.338 46.084 158.546 32.0508 176.046 31.9999L400 32L400.528 32.0058C417.916 32.338 431.949 46.5457 432 64.0465L432 398.71L384 360.31V144C383.897 108.676 355.324 80.1025 320.046 80.0001H111.954C76.6755 80.1025 48.1025 108.676 48.0001 143.954L48 496L48.0047 496.406C48.3175 509.75 64.0043 516.914 74.3062 508.239L216 388.917L357.694 508.239C368.1 517.001 384 509.604 384 496V401.29L438.005 444.494L438.321 444.741C448.79 452.725 464 445.282 464 432V64L463.988 62.9423ZM112 112H320L320.528 112.006C337.916 112.338 351.949 126.546 352 144.046L352 461.609L226.306 355.761L226.016 355.523C220.071 350.747 211.553 350.827 205.694 355.761L80 461.608V144C80.0508 126.545 94.084 112.338 111.517 112.006L112 112Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
