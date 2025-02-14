import { defineComponent as n, computed as r, openBlock as s, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as i } from "vue";
const m = /* @__PURE__ */ n({
  __name: "TISendFill",
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
    const l = e, o = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (s(), a("svg", {
      class: c(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("path", {
        d: "M420.803 56.4891C425.178 54.1966 430.463 54.5816 434.488 57.4341C438.513 60.3041 440.578 65.1691 439.861 70.0691L391.736 393.819C391.158 397.652 388.901 401.064 385.576 403.094C383.493 404.354 381.131 405.002 378.751 405.002C377.316 405.002 375.881 404.757 374.516 404.302L191.063 341.599L371.453 124.267L138.336 323.592L28.8733 286.177C23.9208 284.479 20.4383 279.999 20.0358 274.749C19.6508 269.517 22.3983 264.547 27.0533 262.114L420.803 56.4891Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        d: "M173.125 444.377V363.212L244.298 387.537L196.82 452.147C194.3 455.577 190.345 457.502 186.25 457.502C184.885 457.502 183.503 457.292 182.155 456.854C176.765 455.069 173.125 450.047 173.125 444.377Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
