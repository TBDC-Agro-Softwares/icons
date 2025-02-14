import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIPersonRemoveOutline",
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
    return (d, t) => (s(), r("svg", {
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
        d: "M184.042 145.161C179.405 81.3993 225.198 32 288 32C350.509 32 396.628 82.1131 391.956 145.183C387.47 205.694 341.159 256 288 256C234.813 256 188.447 205.665 184.042 145.161ZM360.044 142.818C363.346 98.2367 331.838 64 288 64C243.809 64 212.667 97.5937 215.958 142.838C219.216 187.588 252.757 224 288 224C323.216 224 356.723 187.602 360.044 142.818ZM156.808 326.012C193.876 301.303 240.58 288 288 288C335.42 288 382.124 301.303 419.193 326.011C459.71 353.018 486.804 392.152 495.396 439.759C499.123 460.42 485.715 480 464 480H112.01C90.2845 480 76.8361 460.387 80.614 439.76C89.2002 392.153 116.292 353.019 156.808 326.012ZM401.445 352.639C369.792 331.541 329.276 320 288 320C246.724 320 206.208 331.541 174.557 352.638C141.054 374.97 119.094 406.691 112.098 445.482C111.909 446.514 111.976 447.37 112.144 447.913L112.174 448H463.822L463.842 447.945C464.007 447.437 464.085 446.643 463.944 445.685L463.904 445.442C456.911 406.692 434.949 374.971 401.445 352.639ZM160 232C160 223.163 152.837 216 144 216H32L31.6851 216.003C22.9939 216.171 16 223.269 16 232C16 240.837 23.1634 248 32 248H144L144.315 247.997C153.006 247.829 160 240.731 160 232Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
