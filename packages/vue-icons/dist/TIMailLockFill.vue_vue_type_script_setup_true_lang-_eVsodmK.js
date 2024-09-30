import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as C, normalizeStyle as d, createElementVNode as i } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TIMailLockFill",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, t) => (a(), s("svg", {
      class: C(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "256",
      height: "256",
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M194.667 29H41.5238C27.4337 29.015 16.0151 40.356 16 54.3505V162.995C16.0151 176.99 27.4337 188.331 41.5238 188.346H128.105V161.859C128.105 158.076 131.364 155.01 135.384 155.01L140.177 155.01C142.196 131.652 162.98 113.289 188.322 113.289C200.533 113.289 211.686 117.552 220.191 124.583V54.3505C220.176 40.356 208.757 29.015 194.667 29ZM188.204 70.9324L122.571 121.633C119.938 123.666 116.252 123.666 113.62 121.633L47.9868 70.9324C45.8882 69.3583 44.8054 66.7839 45.1531 64.1949C45.5007 61.6059 47.225 59.4033 49.6656 58.4305C52.1063 57.4577 54.8852 57.8654 56.9384 59.4975L118.095 106.74L179.252 59.4975C182.434 57.1108 186.957 57.7051 189.404 60.8317C191.852 63.9583 191.317 68.4577 188.204 70.9324Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M187.644 120.661C210.173 120.661 228.65 137.891 230.445 159.808L233.529 159.808C237.103 159.808 240 162.685 240 166.235V220.573C240 224.122 237.103 227 233.529 227H140.581C137.007 227 134.11 224.122 134.11 220.573V166.235C134.11 162.685 137.007 159.808 140.581 159.808L144.842 159.808C146.638 137.891 165.115 120.661 187.644 120.661ZM220.992 159.808C219.228 143.062 204.971 130.009 187.644 130.009C170.317 130.009 156.059 143.062 154.295 159.808H220.992ZM181.857 178.505C179.258 178.505 177.15 180.597 177.15 183.179V183.763C177.15 186.345 179.258 188.437 181.857 188.437V198.955C181.857 201.536 183.964 203.629 186.563 203.629H188.328C190.927 203.629 193.034 201.536 193.034 198.955V188.437C195.633 188.437 197.74 186.345 197.74 183.763V183.179C197.74 180.597 195.633 178.505 193.034 178.505H181.857Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
