import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIGolfOutline",
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
    return (u, t) => (s(), r("svg", {
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
        d: "M240 32C240 20.4797 251.788 12.7741 262.302 17.2934L262.62 17.4341L438.62 97.4341C451.001 103.062 451.125 120.527 438.992 126.392L438.62 126.566L272 202.301V320.457C313.563 322.833 353.794 334.423 386.549 354.072C427.238 378.481 454.608 414.059 463.338 457.596C467.343 477.583 453.329 496 432 496H79.9996C58.6763 496 44.6667 477.579 48.6715 457.596C57.3958 414.06 84.7629 378.481 125.451 354.072C158.205 334.423 198.436 322.833 240 320.457V192.368L239.996 192.119L239.997 191.808L240 191.675V32ZM240 352.516C204.099 354.835 169.596 364.906 141.913 381.513C108.582 401.509 86.898 429.699 80.0477 463.884L80.0266 464H431.982L431.962 463.886C425.176 430.042 403.852 402.073 371.084 382.115L370.087 381.513C342.404 364.906 307.9 354.835 272 352.516V400C272 408.731 265.006 415.829 256.314 415.997L256 416C247.268 416 240.17 409.006 240.003 400.315L240 400V352.516ZM272 56.847V167.152L393.335 112L272 56.847Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
