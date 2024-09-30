import { defineComponent as o, computed as s, openBlock as n, createElementBlock as a, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIColumns",
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
    return (m, l) => (n(), a("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "515",
      viewBox: "0 0 512 515",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M426.664 107.377H85.3307C61.8641 107.377 42.6641 126.681 42.6641 150.275V364.768C42.6641 388.362 61.8641 407.667 85.3307 407.667H426.664C450.131 407.667 469.331 388.362 469.331 364.768V150.275C469.331 126.681 450.131 107.377 426.664 107.377ZM170.664 375.493H85.3307C78.9307 375.493 74.6641 371.203 74.6641 366.913V364.768V321.869H170.664V375.493ZM170.664 289.696H74.6641V225.348H170.664V289.696ZM170.664 193.174H74.6641V150.275C74.6641 143.84 78.9307 139.551 83.1974 139.551H170.664V193.174ZM437.331 364.768C437.331 371.203 433.064 375.493 428.797 375.493H341.331V321.869H437.331V364.768ZM437.331 289.696H341.331V225.348H437.331V289.696ZM437.331 193.174H341.331V139.551H426.664C433.064 139.551 437.331 143.84 437.331 148.13V193.174Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
