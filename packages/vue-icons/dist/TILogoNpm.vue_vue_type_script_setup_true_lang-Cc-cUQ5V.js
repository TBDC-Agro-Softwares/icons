import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as o } from "vue";
const V = /* @__PURE__ */ r({
  __name: "TILogoNpm",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (s(), a("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      o("path", {
        d: "M256 213.1H227.6V270.2H256V213.1Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 156V327.4H142.2V356H256V327.4H512V156H0ZM142.2 298.9H113.8V213.2H85.3V298.9H28.4V184.6H142.2V298.9ZM227.5 298.9H284.4V184.6H170.6V327.5H227.5V298.9ZM455.2 298.9V213.2H426.8V298.9H398.4V213.2H370V298.9H313.1V184.6H483.8V298.9H455.2Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  V as _
};
