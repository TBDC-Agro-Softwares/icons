import { defineComponent as s, computed as a, openBlock as n, createElementBlock as r, normalizeClass as c, normalizeStyle as d, createElementVNode as i } from "vue";
const u = /* @__PURE__ */ s({
  __name: "TIFacebookColor",
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
    const l = e, o = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (p, t) => (n(), r("svg", {
      class: c(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("path", {
        d: "M512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 383.777 93.6154 489.685 216 508.89V330H151V256H216V199.6C216 135.44 254.219 100 312.695 100C340.704 100 370 105 370 105V168H337.719C305.918 168 296 187.734 296 207.979V256H367L355.65 330H296V508.89C418.385 489.685 512 383.777 512 256Z",
        fill: "#1877F2"
      }, null, -1),
      i("path", {
        d: "M355.65 330L367 256H296V207.978C296 187.734 305.917 168 337.719 168H370V105C370 105 340.704 100 312.695 100C254.219 100 216 135.44 216 199.6V256H151V330H216V508.89C229.232 510.964 242.606 512.003 256 512C269.608 512 282.966 510.935 296 508.89V330H355.65Z",
        fill: "white"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
