import { defineComponent as o, computed as a, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as H, createElementVNode as V } from "vue";
const d = /* @__PURE__ */ o({
  __name: "TIHierarchyOutline",
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
    const t = e, i = a(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (c, l) => (r(), s("svg", {
      class: n(i.value),
      style: H(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      V("path", {
        d: "M477.8 358.333H443.667V290.066C443.667 280.64 436.026 272.999 426.6 272.999H273V153.533H358.333C367.759 153.533 375.4 145.892 375.4 136.466V34.066C375.4 24.641 367.759 17 358.333 17H153.533C144.107 17 136.466 24.641 136.466 34.067V136.467C136.466 145.893 144.107 153.534 153.533 153.534H238.866V273H85.266C75.84 273 68.199 280.641 68.199 290.067V358.334H34.067C24.641 358.333 17 365.974 17 375.4V477.8C17 487.226 24.641 494.867 34.067 494.867H136.467C145.893 494.867 153.534 487.226 153.534 477.8V375.4C153.534 365.974 145.893 358.333 136.467 358.333H102.333V307.133H238.866V358.333H204.733C195.307 358.333 187.666 365.974 187.666 375.4V477.8C187.666 487.226 195.307 494.867 204.733 494.867H307.133C316.559 494.867 324.2 487.226 324.2 477.8V375.4C324.2 365.974 316.559 358.333 307.133 358.333H273V307.133H409.533V358.333H375.4C365.974 358.333 358.333 365.974 358.333 375.4V477.8C358.333 487.226 365.974 494.867 375.4 494.867H477.8C487.226 494.867 494.867 487.226 494.867 477.8V375.4C494.867 365.974 487.226 358.333 477.8 358.333ZM119.4 392.467V460.734H51.133V392.467H119.4ZM290.067 392.467V460.734H221.8V392.467H290.067ZM170.6 119.4V51.133H341.267V119.4H170.6ZM460.733 460.733H392.466V392.466H460.733V460.733Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  d as default
};
