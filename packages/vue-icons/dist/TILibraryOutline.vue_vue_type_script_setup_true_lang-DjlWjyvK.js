import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TILibraryOutline",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (n(), s("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M272 32H336C353.673 32 368 46.3269 368 64V88.1034C371.766 86.1877 375.934 84.9162 380.386 84.4478L420.786 80.1978C440.795 78.0925 458.617 93.0322 460.907 113.275L495.777 434.815C497.967 455.021 483.677 473.441 463.614 475.552L423.2 479.804C403.189 481.891 385.347 466.945 383.143 446.777L368 307.316V448C368 465.673 353.673 480 336 480H272C262.442 480 253.864 475.81 248 469.167C242.136 475.81 233.558 480 224 480H128C118.442 480 109.864 475.81 104 469.167C98.1364 475.81 89.5575 480 80 480H48C30.3269 480 16 465.673 16 448V112C16 94.3269 30.3269 80 48 80H80C97.6731 80 112 94.3269 112 112V148.281C116.707 145.558 122.171 144 128 144H224C229.829 144 235.293 145.558 240 148.281V64C240 46.3269 254.327 32 272 32ZM336 64H272V448H336V64ZM128 384V240H224V384H128ZM128 416V448H224V416H128ZM224 208H128V176H224V208ZM48 112H80V448H48V112ZM429.101 116.799L463.963 438.265C464.274 441.128 462.434 443.5 460.266 443.728L419.866 447.978C417.652 448.209 415.273 446.216 414.955 443.312L380.036 121.733C379.726 118.872 381.566 116.5 383.734 116.272L424.134 112.022C426.359 111.788 428.762 113.802 429.101 116.799Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
