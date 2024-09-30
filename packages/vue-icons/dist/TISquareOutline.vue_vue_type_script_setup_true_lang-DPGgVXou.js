import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TISquareOutline",
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
    return (u, t) => (r(), s("svg", {
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
        d: "M416.045 48.0001L96 48C69.5011 48.0742 48.0742 69.5011 48.0001 95.9552L48 416C48.0742 442.499 69.5011 463.926 95.9552 464L416 464C442.499 463.926 463.926 442.499 464 416.045L464 96C463.926 69.5011 442.499 48.0742 416.045 48.0001ZM96.0448 79.9999L416 80L415.955 79.9999C424.806 80.0247 431.975 87.1938 432 96.0448L432 416C431.975 424.806 424.806 431.975 415.955 432L96 432C87.1938 431.975 80.0247 424.806 79.9999 415.955L80 96C80.0247 87.1938 87.1938 80.0247 96.0448 79.9999Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
