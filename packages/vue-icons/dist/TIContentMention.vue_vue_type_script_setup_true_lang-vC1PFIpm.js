import { defineComponent as o, computed as n, openBlock as s, createElementBlock as a, normalizeClass as r, normalizeStyle as c, createElementVNode as C } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIContentMention",
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
    const t = e, i = n(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (d, l) => (s(), a("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      C("path", {
        d: "M264.508 107.232C177.041 107.232 104.508 179.765 104.508 267.232C104.508 354.699 177.041 427.232 264.508 427.232H345.574V395.232H264.508C194.108 395.232 136.508 337.632 136.508 267.232C136.508 196.832 194.108 139.232 264.508 139.232C334.908 139.232 392.508 196.832 392.508 267.232V290.699C392.508 303.499 381.841 316.299 369.041 316.299C356.241 316.299 345.574 303.499 345.574 290.699V267.232C345.574 222.432 309.308 186.165 264.508 186.165C219.708 186.165 185.574 222.432 185.574 267.232C185.574 312.032 221.841 348.299 266.641 348.299C287.974 348.299 309.308 339.765 324.241 324.832C334.908 339.765 351.974 348.299 371.174 348.299C403.174 348.299 426.641 322.699 426.641 290.699V267.232C424.508 179.765 354.108 107.232 264.508 107.232ZM264.508 314.165C238.908 314.165 215.441 292.832 215.441 267.232C215.441 241.632 236.774 218.165 264.508 218.165C292.241 218.165 313.574 239.499 313.574 267.232C313.574 294.965 290.108 314.165 264.508 314.165Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
