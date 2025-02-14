import { defineComponent as o, computed as L, openBlock as s, createElementBlock as n, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TILayersOutline",
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
    const l = e, i = L(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (s(), n("svg", {
      class: r(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M70.6791 123.084L219.909 54.998C240.323 45.6673 271.677 45.6673 292.078 54.9918L441.414 123.081C471.494 136.737 471.553 167.584 441.519 181.297L390.897 204.385L441.501 227.074C471.347 240.64 471.573 271.052 442.314 284.884L441.419 285.298L392.635 307.544L441.796 331.201L442.395 331.48C471.308 345.224 471.309 375.136 442.413 388.872L441.519 389.287L293.51 456.792C272.619 466.303 240.424 466.398 219.297 457.073L218.661 456.787L70.6791 389.296C40.8747 375.748 40.5766 345.364 69.8534 331.449L70.7496 331.032L121.204 308.392L70.5791 285.306C40.7747 271.758 40.4766 241.374 69.7526 227.459L70.6488 227.043L121.209 204.352L70.6791 181.306C40.5736 167.622 40.5736 136.768 70.6791 123.084ZM159.971 222.03L83.854 256.19L231.837 323.672C244.342 329.372 266.859 329.448 279.629 323.9L280.141 323.672L428.174 256.167L352.123 222.07L293.517 248.798C272.411 258.421 239.769 258.42 218.661 248.797L159.971 222.03ZM346.583 189.425C345.752 189.724 344.945 190.092 344.172 190.524L280.241 219.683L279.728 219.911C266.959 225.458 244.442 225.382 231.937 219.682L83.966 152.194L233.201 84.1065C245.177 78.6327 266.823 78.6327 278.789 84.102L428.173 152.213L346.583 189.425ZM159.971 326.07L83.955 360.179L231.93 427.668C244.439 433.364 266.961 433.44 279.728 427.9L280.241 427.673L428.225 360.179L427.942 360.047L354.745 324.822L293.417 352.788C272.522 362.314 240.321 362.41 219.198 353.074L218.561 352.788L159.971 326.07Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
