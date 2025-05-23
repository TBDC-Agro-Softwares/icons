import { defineComponent as r, computed as i, openBlock as a, createElementBlock as C, normalizeClass as n, normalizeStyle as c, createStaticVNode as p } from "vue";
const u = /* @__PURE__ */ r({
  __name: "TILogoSlack",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(t) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(t) > -1;
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
    const l = t, o = i(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (s, e) => (a(), C("svg", {
      class: n(o.value),
      style: c(t.color ? `color: ${t.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e[0] || (e[0] = [
      p('<path d="M315.1 243.96C341.091 243.96 362.16 222.891 362.16 196.9V79.06C362.16 53.0695 341.091 32 315.1 32C289.109 32 268.04 53.0695 268.04 79.06V196.9C268.04 222.891 289.109 243.96 315.1 243.96Z" fill="currentColor"></path><path d="M196.9 126.12C170.915 126.098 149.865 105.019 149.88 79.0334C149.895 53.048 170.968 31.9927 196.953 32C222.939 32.0074 244 53.0747 244 79.06V126.12H196.9Z" fill="currentColor"></path><path d="M79.0334 362.12C105.019 362.135 126.098 341.085 126.12 315.1V268H79.06C53.0747 268 32.0074 289.061 32 315.047C31.9927 341.032 53.048 362.105 79.0334 362.12Z" fill="currentColor"></path><path d="M196.9 268.04C170.909 268.04 149.84 289.109 149.84 315.1V432.94C149.84 458.931 170.909 480 196.9 480C222.891 480 243.96 458.931 243.96 432.94V315.1C243.96 289.109 222.891 268.04 196.9 268.04Z" fill="currentColor"></path><path d="M243.96 196.9C243.96 170.909 222.891 149.84 196.9 149.84H79.06C53.0695 149.84 32 170.909 32 196.9C32 222.891 53.0695 243.96 79.06 243.96H196.9C222.891 243.96 243.96 222.891 243.96 196.9Z" fill="currentColor"></path><path d="M385.88 196.9C385.902 170.915 406.981 149.865 432.967 149.88C458.952 149.895 480.007 170.968 480 196.953C479.993 222.939 458.925 244 432.94 244H385.88V196.9Z" fill="currentColor"></path><path d="M315.1 385.88C341.085 385.902 362.135 406.981 362.12 432.967C362.105 458.952 341.032 480.007 315.047 480C289.061 479.993 268 458.925 268 432.94V385.88H315.1Z" fill="currentColor"></path><path d="M268.04 315.1C268.04 341.091 289.109 362.16 315.1 362.16H432.94C458.931 362.16 480 341.091 480 315.1C480 289.109 458.931 268.04 432.94 268.04H315.1C289.109 268.04 268.04 289.109 268.04 315.1Z" fill="currentColor"></path>', 8)
    ]), 6));
  }
});
export {
  u as _
};
