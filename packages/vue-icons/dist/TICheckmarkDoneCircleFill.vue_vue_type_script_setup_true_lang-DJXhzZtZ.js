import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICheckmarkDoneCircleFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), s("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M259.9 48C142.92 46.42 47.4198 141.92 48.9998 258.9C50.5598 371.09 141.91 462.44 254.1 464C371.1 465.6 466.58 370.1 464.98 253.12C463.44 140.91 372.09 49.56 259.9 48ZM243.11 240.47L294.66 181.47C300.475 174.815 310.585 174.134 317.24 179.95C323.895 185.766 324.575 195.875 318.76 202.53L267.21 261.53C263.448 265.835 257.675 267.806 252.066 266.701C246.456 265.595 241.863 261.581 240.016 256.171C238.168 250.76 239.348 244.775 243.11 240.47ZM204.25 331.32C198.002 337.563 187.877 337.563 181.63 331.32L133.68 283.32C129.639 279.276 128.063 273.383 129.545 267.862C131.027 262.34 135.342 258.029 140.865 256.552C146.388 255.074 152.279 256.656 156.32 260.7L204.32 308.7C210.544 314.967 210.513 325.092 204.25 331.32ZM381.05 202.53L269.17 330.53C266.256 333.869 262.088 335.849 257.66 336H257.12C252.874 336.001 248.801 334.314 245.8 331.31L197.86 283.31C191.613 277.058 191.618 266.926 197.87 260.68C204.122 254.434 214.253 254.438 220.5 260.69L250.3 290.52C251.866 292.086 254.011 292.933 256.224 292.86C258.438 292.786 260.522 291.797 261.98 290.13L356.98 181.47C362.795 174.815 372.905 174.134 379.56 179.95C386.215 185.766 386.895 195.875 381.08 202.53H381.05Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
