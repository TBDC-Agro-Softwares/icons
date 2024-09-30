import { defineComponent as i, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as d, createElementVNode as L } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TICodeDownloadFill",
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
    return (c, t) => (r(), s("svg", {
      class: a(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      L("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M175.804 130.171C168.167 121.443 154.9 120.559 146.171 128.196L18.1714 240.196L17.8846 240.451C8.61051 248.862 8.70612 263.522 18.1714 271.804L146.171 383.804L146.464 384.056C155.194 391.421 168.252 390.46 175.804 381.829L176.056 381.536C183.421 372.806 182.46 359.748 173.829 352.196L63.89 256L173.829 159.804L174.117 159.548C182.576 151.873 183.357 138.803 175.804 130.171ZM365.536 127.945C356.806 120.579 343.748 121.54 336.196 130.171L335.944 130.464C328.579 139.194 329.54 152.252 338.171 159.804L448.109 255.999L338.171 352.196L337.883 352.453C329.424 360.128 328.643 373.197 336.196 381.829C343.833 390.557 357.1 391.441 365.829 383.804L493.829 271.804L494.115 271.549C503.389 263.138 503.294 248.478 493.829 240.196L365.829 128.196L365.536 127.945ZM177.139 273.262C185.242 265.147 198.332 265.046 206.559 272.966L206.838 273.239L235 301.358V160C235 148.402 244.402 139 256 139C267.481 139 276.81 148.213 276.997 159.649L277 160V301.358L305.162 273.239C313.278 265.137 326.368 265.056 334.583 272.989L334.861 273.262C342.963 281.378 343.044 294.468 335.111 302.683L334.838 302.961L270.838 366.861C262.731 374.954 249.658 375.045 241.441 367.134L241.162 366.861L177.162 302.961C168.955 294.766 168.945 281.47 177.139 273.262Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};