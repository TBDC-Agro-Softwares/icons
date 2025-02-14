import { defineComponent as o, computed as n, openBlock as s, createElementBlock as r, normalizeClass as C, normalizeStyle as a, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIPersonAddOutline",
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
    return (c, t) => (s(), r("svg", {
      class: C(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M288 32C225.198 32 179.405 81.3993 184.042 145.161C188.447 205.665 234.813 256 288 256C341.159 256 387.47 205.694 391.956 145.183C396.628 82.1131 350.509 32 288 32ZM288 64C331.838 64 363.346 98.2367 360.044 142.818C356.723 187.602 323.216 224 288 224C252.757 224 219.216 187.588 215.958 142.838C212.667 97.5937 243.809 64 288 64ZM288 288C240.58 288 193.876 301.303 156.808 326.012C116.292 353.019 89.2002 392.153 80.614 439.76C76.8361 460.387 90.2845 480 112.01 480H464C485.715 480 499.123 460.42 495.396 439.759C486.804 392.152 459.71 353.018 419.193 326.011C382.124 301.303 335.42 288 288 288ZM288 320C329.276 320 369.792 331.541 401.445 352.639C434.949 374.971 456.911 406.692 463.904 445.442L463.944 445.685C464.085 446.643 464.007 447.437 463.842 447.945L463.822 448H112.174L112.144 447.913C111.976 447.37 111.909 446.514 112.098 445.482C119.094 406.691 141.054 374.97 174.557 352.638C206.208 331.541 246.724 320 288 320ZM88 160C96.7314 160 103.829 166.994 103.997 175.685L104 176V216H144C152.837 216 160 223.163 160 232C160 240.731 153.006 247.829 144.315 247.997L144 248H104V288C104 296.837 96.8366 304 88 304C79.2686 304 72.1708 297.006 72.003 288.315L72 288V248H32C23.1634 248 16 240.837 16 232C16 223.269 22.9939 216.171 31.6851 216.003L32 216H72V176C72 167.163 79.1634 160 88 160Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
