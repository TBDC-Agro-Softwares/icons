import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIPeopleSharp",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (s(), n("svg", {
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
        d: "M428 168C428 216.601 388.601 256 340 256C291.399 256 252 216.601 252 168C252 119.399 291.399 80 340 80C388.601 80 428 119.399 428 168ZM224 184C224 223.764 191.764 256 152 256C112.235 256 80 223.764 80 184C80 144.235 112.235 112 152 112C191.764 112 224 144.235 224 184ZM152 276C174.76 276 205.84 281.7 234 296C214.81 305.55 199.17 317.32 188 330C174 345.88 166 364.93 166 383.93V400H16V358C16 303.34 107.42 276 152 276ZM340 288C287.93 288 184 320.16 184 384V432H496V384C496 320.16 392.07 288 340 288Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
