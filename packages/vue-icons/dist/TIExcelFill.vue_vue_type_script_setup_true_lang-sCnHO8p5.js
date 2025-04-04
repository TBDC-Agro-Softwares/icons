import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as C } from "vue";
const H = /* @__PURE__ */ o({
  __name: "TIExcelFill",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (a(), n("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      C("path", {
        d: "M235.375 68.7085C233.774 68.6575 232.15 68.7555 230.5 69.0835L59.8332 103.25C49.8492 105.256 42.6665 113.991 42.6665 124.167V387.834C42.6665 398.01 49.8492 406.745 59.8332 408.75L230.5 442.917C243.705 445.562 256 435.42 256 421.959V90.0419C256 78.2632 246.577 69.0661 235.375 68.7085ZM298.666 106.667V149.334H341.333V192H298.666V234.667H341.333V277.334H298.666V320H341.333V362.667H298.666V405.334H448C459.776 405.334 469.333 395.776 469.333 384V128C469.333 116.224 459.776 106.667 448 106.667H298.666ZM384 149.334H426.666V192H384V149.334ZM116 177C122.656 177 128.69 181.023 131.25 187.167L146.708 224.25C148.308 228.112 149.512 232.59 150.75 237.667H151.291C151.995 234.616 153.428 229.955 155.583 223.875L173.5 185.667C175.975 180.376 181.279 177 187.125 177C198.474 177 205.749 189.057 200.458 199.084L170.833 255.292L200.833 311.459C206.465 322.125 198.783 335 186.708 335C180.479 335 174.769 331.383 172.166 325.709L152.708 283.459C151.812 281.645 150.749 278.036 149.875 272.959H149.541C149.008 275.391 147.933 279.032 146.333 283.917L126.458 326.334C123.983 331.624 118.637 335 112.791 335H110.958C99.4595 335 92.1818 322.632 97.7498 312.584L129.291 255.875L101.292 201C95.7022 190.014 103.669 177 116 177ZM384 234.667H426.666V277.334H384V234.667ZM384 320H426.666V362.667H384V320Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  H as _
};
