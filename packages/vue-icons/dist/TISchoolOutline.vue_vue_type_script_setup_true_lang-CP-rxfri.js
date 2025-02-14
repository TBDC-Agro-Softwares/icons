import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TISchoolOutline",
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
        d: "M248.062 50.1081L24.0618 178.108C13.3127 184.25 13.3127 199.75 24.0618 205.892L96 246.999V368L96.0041 368.363C96.1321 374.033 99.2561 379.223 104.23 381.987L247.976 461.845C250.32 463.207 253.041 463.99 255.945 464C255.983 464 256.02 464 256.058 464C258.961 463.99 261.681 463.206 264.024 461.845L407.77 381.987L408.085 381.807C412.98 378.941 416 373.69 416 368V246.999L464 219.571V368L464.003 368.315C464.171 377.006 471.269 384 480 384C488.837 384 496 376.837 496 368V192C496 186.889 493.602 181.777 488.805 178.639C488.437 178.395 488.058 178.167 487.669 177.954L263.938 50.1081C259.019 47.2973 252.981 47.2973 248.062 50.1081ZM272 420.807L384 358.585V265.285L272 329.285V420.807ZM240 329.285L128 265.285V358.585L240 420.807V329.285ZM256 82.427L447.751 192L256 301.572L64.248 192L256 82.427Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as _
};
