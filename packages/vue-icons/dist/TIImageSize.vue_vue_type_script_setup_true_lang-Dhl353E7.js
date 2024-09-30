import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as L, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIImageSize",
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
    return (d, l) => (a(), n("svg", {
      class: r(i.value),
      style: L(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "516",
      viewBox: "0 0 512 516",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        d: "M360.531 86.145C354.131 86.145 349.864 90.4348 343.464 92.5798L70.3974 279.188C51.1974 292.058 46.9307 319.942 59.7307 339.246L106.664 410.029C115.197 425.044 132.264 431.478 149.331 427.188C155.731 427.188 159.997 422.899 166.397 420.754L441.597 236.29C460.797 223.42 465.064 195.536 452.264 176.232L405.331 105.449C394.664 90.4348 377.597 84 360.531 86.145ZM360.531 212.696L386.131 193.391L343.464 131.188L362.664 120.464C364.797 120.464 364.797 118.319 366.931 118.319C371.197 118.319 375.464 118.319 377.597 122.609L424.531 193.391C428.797 197.681 426.664 204.116 422.397 208.406L149.331 395.015C147.197 395.015 147.197 397.159 145.064 397.159C140.797 397.159 136.531 397.159 134.397 392.87L87.464 322.087C83.1974 317.797 85.3307 311.362 89.5974 307.073L106.664 294.203L149.331 356.406L174.931 339.246L132.264 277.044L159.997 257.739L183.464 294.203L209.064 277.044L185.597 240.58L211.197 223.42L253.864 285.623L279.464 268.464L236.797 206.261L262.397 189.102L285.864 225.565L311.464 208.406L287.997 171.942L317.864 150.493L360.531 212.696Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
