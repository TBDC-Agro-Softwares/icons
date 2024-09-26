import { defineComponent as o, computed as a, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as C, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIBandageSharp",
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, t) => (n(), r("svg", {
      class: s(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M496 148.1C496.031 137.45 491.8 127.231 484.25 119.72L393.25 28.7199C377.576 13.0553 352.174 13.0553 336.5 28.7199L264 101.28L411.72 249L484.25 176.47C491.799 168.963 496.03 158.746 496 148.1ZM27.7098 338.1C12.1078 353.718 12.1078 379.022 27.7098 394.64L118.36 485.29C133.977 500.892 159.282 500.892 174.9 485.29L250 410.19L102.81 263L27.7098 338.1ZM389.06 271.19L273.06 387.19L125.77 240L241.77 124L389.06 271.19ZM310.128 242.217C304.148 239.741 297.265 241.112 292.69 245.69C286.446 251.937 286.446 262.062 292.69 268.31C297.265 272.888 304.148 274.259 310.128 271.783C316.108 269.307 320.007 263.472 320.007 257C320.007 250.528 316.108 244.693 310.128 242.217ZM244.69 197.69C249.265 193.112 256.148 191.741 262.128 194.217C268.108 196.693 272.007 202.528 272.007 209C272.007 215.472 268.108 221.307 262.128 223.783C256.148 226.259 249.265 224.888 244.69 220.31C238.446 214.062 238.446 203.937 244.69 197.69ZM262.128 290.217C256.148 287.741 249.265 289.112 244.69 293.69C238.446 299.937 238.446 310.062 244.69 316.31C249.265 320.888 256.148 322.259 262.128 319.783C268.108 317.307 272.007 311.472 272.007 305C272.007 298.528 268.108 292.693 262.128 290.217ZM219.31 245.69C223.888 250.265 225.259 257.148 222.783 263.128C220.307 269.108 214.472 273.007 208 273.007C201.527 273.007 195.693 269.108 193.217 263.128C190.741 257.148 192.112 250.265 196.69 245.69C202.937 239.446 213.062 239.446 219.31 245.69Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
