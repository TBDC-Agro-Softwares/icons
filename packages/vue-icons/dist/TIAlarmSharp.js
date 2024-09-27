import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIAlarmSharp",
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
    return (d, t) => (a(), n("svg", {
      class: s(i.value),
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
        d: "M108.21 61.11L111.48 61.01H112C126.73 61.01 140.55 66.92 152.52 76.01C164.49 85.1 168 93 168 93L80.0005 179C80.0005 179 68.7505 173.29 62.3905 165.15L62.1972 164.903C55.8712 156.808 48.11 146.877 48.0705 128C48.0005 92.55 74.4005 63.15 108.21 61.11ZM403.79 61.11L400.52 61.01H400C385.27 61.01 371.45 66.92 359.48 76.01C347.51 85.1 344 93 344 93L432 179C432 179 443.25 173.29 449.61 165.15L449.804 164.902C456.13 156.808 463.891 146.877 463.93 128.04C464 92.55 437.6 63.15 403.79 61.11ZM391.3 381.6C391.288 381.586 391.283 381.568 391.286 381.551C391.287 381.54 391.292 381.529 391.3 381.52C425 341 441 285.24 427 226.23C413.36 168.71 354.33 110.54 296.66 97.57C182 71.79 80.0704 158.71 80.0704 269C80.0302 310.131 94.4669 349.965 120.85 381.52C120.871 381.543 120.871 381.577 120.85 381.6L73.0005 429C72.9801 429.023 72.9801 429.057 73.0005 429.08L96.0005 451.59C96.0232 451.61 96.0577 451.61 96.0805 451.59L143.51 404.22C143.533 404.2 143.568 404.2 143.59 404.22C208.755 458.592 303.476 458.592 368.64 404.22L416 451.59C416.008 451.597 416.018 451.602 416.027 451.604C416.046 451.608 416.066 451.603 416.08 451.59L440 429L391.3 381.6ZM272.07 285H160.07V253.1H240.07V141H272.07V285Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};