import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as L, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIHomeOutline",
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
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
      style: L(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M233.873 40.6057C245.132 29.2464 266.424 29.168 277.816 40.2959L278.164 40.643L336 96.0066V64C336 55.2686 342.994 48.1708 351.685 48.003L352 48H400C408.731 48 415.829 54.9939 415.997 63.6851L416 64V172.587L491.064 244.442C497.359 250.468 497.661 260.4 491.809 266.796L491.558 267.064C485.532 273.359 475.6 273.661 469.204 267.809L468.936 267.558L448 247.517V448C448 465.496 433.958 479.713 416.529 479.996L416 480H320C311.269 480 304.171 473.006 304.003 464.315L304 464V328C304 323.665 300.552 320.135 296.249 320.004L296 320H216C211.665 320 208.135 323.448 208.004 327.751L208 328V464C208 472.731 201.006 479.829 192.315 479.997L192 480H96C78.5036 480 64.2869 465.958 64.0043 448.529L64 448V247.517L43.064 267.558C36.7693 273.584 26.8331 273.452 20.6989 267.326L20.442 267.064C14.4164 260.769 14.5478 250.833 20.6736 244.699L20.9361 244.442L233.873 40.6057ZM384 141.955V80H368V126.639L384 141.955ZM256.32 64.031L416 216.885V448H336V328L335.995 327.339C335.641 305.552 317.87 288 296 288H216L215.339 288.005C193.552 288.359 176 306.13 176 328V448H96V216.885L255.679 64.031L255.859 64.0199L256.005 64.0175L256.22 64.0238L256.32 64.031Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};