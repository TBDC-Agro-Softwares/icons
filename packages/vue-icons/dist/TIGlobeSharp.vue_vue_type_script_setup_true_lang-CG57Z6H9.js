import { defineComponent as i, computed as o, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TIGlobeSharp",
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
    const l = e, t = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, C) => (r(), s("svg", {
      class: n(t.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 26C128.98 26 26 128.98 26 256C26 383.02 128.98 486 256 486C383.02 486 486 383.02 486 256C486 128.98 383.02 26 256 26ZM159.256 97.1111C152.695 101.114 146.402 105.513 140.409 110.273C143.492 112.192 146.628 114.031 149.814 115.79C152.767 109.29 155.919 103.054 159.256 97.1111ZM71.2876 234C75.3329 199.676 88.7253 168.212 108.849 142.224C117.119 147.839 125.731 152.959 134.637 157.562C127.915 181.317 123.53 207.134 121.968 234H71.2876ZM71.2876 278C75.3329 312.324 88.7253 343.788 108.849 369.776C117.119 364.161 125.731 359.041 134.637 354.438C127.915 330.683 123.53 304.866 121.968 278H71.2876ZM166.048 278C167.411 298.809 170.682 318.9 175.608 337.573C194.349 331.678 213.93 327.841 234 326.217V278H166.048ZM278 278V326.217C298.07 327.841 317.651 331.678 336.392 337.573C341.318 318.9 344.589 298.809 345.952 278H278ZM345.952 234H278V185.783C298.07 184.159 317.651 180.322 336.392 174.427C341.318 193.1 344.589 213.191 345.952 234ZM390.032 278C388.47 304.866 384.085 330.683 377.363 354.438C386.269 359.041 394.881 364.161 403.151 369.776C423.275 343.788 436.667 312.324 440.712 278H390.032ZM440.712 234H390.032C388.47 207.134 384.085 181.317 377.363 157.562C386.269 152.959 394.881 147.839 403.151 142.224C423.275 168.212 436.667 199.676 440.712 234ZM234 234H166.048C167.411 213.191 170.682 193.1 175.608 174.427C194.349 180.322 213.93 184.159 234 185.783V234ZM140.409 401.727C146.402 406.487 152.695 410.886 159.256 414.889C155.919 408.946 152.767 402.71 149.814 396.21C146.628 397.969 143.492 399.808 140.409 401.727ZM190.36 379.064C192.495 383.677 194.75 388.126 197.121 392.393C208.389 412.679 221.26 427.084 234 434.973V370.389C219.014 371.839 204.397 374.763 190.36 379.064ZM314.879 392.393C303.611 412.679 290.74 427.084 278 434.973V370.389C292.986 371.839 307.603 374.763 321.64 379.064C319.505 383.677 317.25 388.126 314.879 392.393ZM321.64 132.936C307.603 137.237 292.986 140.161 278 141.611V77.0274C290.74 84.9161 303.611 99.3212 314.879 119.607C317.25 123.874 319.505 128.323 321.64 132.936ZM234 141.611V77.0274C221.26 84.9161 208.389 99.3212 197.121 119.607C194.75 123.874 192.495 128.323 190.36 132.936C204.397 137.237 219.014 140.161 234 141.611ZM362.186 396.21C359.233 402.71 356.081 408.946 352.744 414.889C359.305 410.886 365.598 406.487 371.591 401.727C368.508 399.808 365.372 397.969 362.186 396.21ZM362.186 115.79C365.372 114.031 368.508 112.192 371.591 110.273C365.598 105.513 359.305 101.114 352.744 97.1111C356.081 103.054 359.233 109.29 362.186 115.79Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
