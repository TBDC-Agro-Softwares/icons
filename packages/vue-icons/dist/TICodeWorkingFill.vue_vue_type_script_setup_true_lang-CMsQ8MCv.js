import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICodeWorkingFill",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
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
        d: "M146.171 128.196C154.9 120.559 168.167 121.443 175.804 130.171C183.357 138.803 182.576 151.873 174.117 159.548L173.829 159.804L63.89 256L173.829 352.196C182.46 359.748 183.421 372.806 176.056 381.536L175.804 381.829C168.252 390.46 155.194 391.421 146.464 384.056L146.171 383.804L18.1714 271.804C8.70612 263.522 8.61051 248.862 17.8846 240.451L18.1714 240.196L146.171 128.196ZM135 256C135 238.879 148.879 225 166 225C183.121 225 197 238.879 197 256C197 273.121 183.121 287 166 287C148.879 287 135 273.121 135 256ZM256 225C238.879 225 225 238.879 225 256C225 273.121 238.879 287 256 287C273.121 287 287 273.121 287 256C287 238.879 273.121 225 256 225ZM346 225C328.879 225 315 238.879 315 256C315 273.121 328.879 287 346 287C363.121 287 377 273.121 377 256C377 238.879 363.121 225 346 225ZM365.536 127.945C356.806 120.579 343.748 121.54 336.196 130.171L335.944 130.464C328.579 139.194 329.54 152.252 338.171 159.804L448.109 255.999L338.171 352.196L337.883 352.453C329.424 360.128 328.643 373.197 336.196 381.829C343.833 390.557 357.1 391.441 365.829 383.804L493.829 271.804L494.115 271.549C503.389 263.138 503.294 248.478 493.829 240.196L365.829 128.196L365.536 127.945Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
