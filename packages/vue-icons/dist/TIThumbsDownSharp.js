import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIThumbsDownSharp",
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
    const t = e, i = s(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (p, l) => (a(), n("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M372.5 23H489V247.251L372.5 247.251L372.5 23ZM38.8108 173.075L55.4536 164.45L44.6357 148.063C41.3072 142.888 39.6429 136.85 39.6429 130.813C39.6429 116.15 50.4608 103.213 64.6072 100.625L87.9072 97.1752L77.0893 75.6126C74.5929 69.5751 72.9286 63.5376 73.7607 57.5001C75.425 42.8376 88.7393 31.625 104.55 31.625L305.929 31.625C321.739 31.625 339.214 41.1125 339.214 57.5001L339.214 235.176L259.329 393.014C256.832 397.326 256 402.501 256.832 407.676L263.489 487.026C255.168 489.614 241.854 490.476 231.868 484.439C208.568 469.776 198.582 443.901 198.582 404.226C198.582 383.526 201.911 361.963 204.407 345.576C205.239 337.813 206.071 331.776 206.904 327.463L207.736 307.626L53.7893 307.626C38.8107 307.626 26.3286 297.276 23.8322 283.476C21.3357 271.401 26.3286 260.188 35.4822 253.288L54.6214 238.626L35.4822 224.826C27.9929 218.788 23 210.163 23 199.813C23 188.6 28.825 178.25 38.8108 173.075Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as default
};
