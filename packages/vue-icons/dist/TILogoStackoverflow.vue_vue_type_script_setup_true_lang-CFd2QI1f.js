import { defineComponent as i, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createStaticVNode as p } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TILogoStackoverflow",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(t) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(t) > -1;
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
  setup(t) {
    const e = t, o = r(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (d, l) => (a(), n("svg", {
      class: s(o.value),
      style: c(t.color ? `color: ${t.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      p('<path d="M294.61 55.8L328 32L448 192L415.43 216.17L294.61 55.8Z" fill="currentColor"></path><path d="M226.32 126.65L382.32 254.43L408.06 223.91L252.06 96.13L226.32 126.65Z" fill="currentColor"></path><path d="M359.22 300L175.37 215.65L192.18 178.92L376 263.76L359.22 300Z" fill="currentColor"></path><path d="M347.67 349.64L149.1 308.77L157.5 269.45L356.07 310.32L347.67 349.64Z" fill="currentColor"></path><path d="M144 400H348V360H144V400Z" fill="currentColor"></path><path d="M392 320V440H104V320H64V480H432V320H392Z" fill="currentColor"></path>', 6)
    ]), 6));
  }
});
export {
  u as _
};