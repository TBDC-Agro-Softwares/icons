import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TICheckboxFill",
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
    return (p, t) => (r(), s("svg", {
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
        d: "M400 48H112C76.6698 48.0386 48.0386 76.6698 48 112V400C48.0386 435.33 76.6698 463.961 112 464H400C435.33 463.961 463.961 435.33 464 400V112C463.961 76.6698 435.33 48.0386 400 48ZM364.25 186.29L229.85 346.29C226.867 349.843 222.489 351.926 217.85 352H217.58C213.045 351.998 208.723 350.072 205.69 346.7L148.09 282.7C144.108 278.476 142.726 272.427 144.478 266.893C146.231 261.36 150.843 257.209 156.53 256.047C162.218 254.886 168.088 256.896 171.87 261.3L217.16 311.62L339.75 165.71C345.472 159.095 355.445 158.3 362.142 163.926C368.84 169.551 369.778 179.512 364.25 186.29Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
