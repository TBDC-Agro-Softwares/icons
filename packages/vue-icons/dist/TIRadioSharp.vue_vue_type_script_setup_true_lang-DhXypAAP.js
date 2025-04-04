import { defineComponent as o, computed as L, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as n, createElementVNode as c } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TIRadioSharp",
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
    const l = e, i = L(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "513",
      height: "512",
      viewBox: "0 0 513 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M67.6008 430.61L82.2708 447L115.051 417.67L100.391 401.28C26.5287 318.509 26.5287 193.491 100.391 110.72L115.071 94.34L82.2808 65L67.6008 81.39C-21.2055 180.859 -21.2055 331.141 67.6008 430.61ZM431.731 447L398.941 417.67L413.601 401.28C487.463 318.509 487.463 193.491 413.601 110.72L398.931 94.34L431.721 65L446.391 81.39C535.197 180.859 535.197 331.141 446.391 430.61L431.731 447ZM139.241 401.76L124.241 385.7C55.9602 312.713 55.9602 199.287 124.241 126.3L139.241 110.23L171.381 140.28L156.381 156.34C103.915 212.423 103.915 299.577 156.381 355.66L171.381 371.72L139.241 401.76ZM189.401 350.8L174.781 334.36C135.047 289.679 135.047 222.331 174.781 177.65L189.401 161.22L222.271 190.46L207.651 206.89C182.742 234.904 182.742 277.126 207.651 305.14L222.271 321.58L189.401 350.8ZM257.001 291.99C276.883 291.99 293.001 275.877 293.001 256C293.001 236.123 276.883 220.01 257.001 220.01C237.119 220.01 221.001 236.123 221.001 256C221.001 275.877 237.119 291.99 257.001 291.99ZM291.711 321.58L324.601 350.8L339.201 334.36C378.935 289.679 378.935 222.331 339.201 177.65L324.581 161.22L291.711 190.46L306.331 206.89C331.24 234.904 331.24 277.126 306.331 305.14L291.711 321.58ZM342.621 371.76L374.761 401.76L389.761 385.79C458.041 312.803 458.041 199.377 389.761 126.39L374.761 110.32L342.621 140.32L357.621 156.38C410.086 212.463 410.086 299.617 357.621 355.7L342.621 371.76Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as _
};
