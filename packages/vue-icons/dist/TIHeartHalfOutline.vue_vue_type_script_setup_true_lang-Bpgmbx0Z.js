import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIHeartHalfOutline",
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
    return (u, t) => (r(), a("svg", {
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
        d: "M352.919 64C304.829 64 272.919 93.54 255.999 115C239.119 93.51 207.169 64 159.079 64C98.4594 64 48.6294 114.54 47.9994 176.65C47.4594 230.86 66.6294 280.92 106.609 329.65C125.379 352.53 159.409 389.11 237.999 442.46C248.848 449.895 263.151 449.895 273.999 442.46C352.589 389.11 386.619 352.53 405.389 329.65C445.389 280.91 464.539 230.85 463.999 176.65C463.369 114.54 413.539 64 352.919 64ZM255.999 416V207.58C255.999 187.95 261.229 168.82 270.209 151.36C270.232 151.305 270.259 151.251 270.289 151.2C276.114 140.684 283.448 131.078 292.059 122.69C310.189 105 330.659 96 352.919 96C396.069 96 431.539 132.32 431.989 177C432.999 281.61 343.629 356.51 255.999 416Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
