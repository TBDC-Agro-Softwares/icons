import { defineComponent as r, computed as n, openBlock as C, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TIFileTrayFullOutline",
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
    return (d, i) => (C(), a("svg", {
      class: s(o.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, i[0] || (i[0] = [
      t("path", {
        d: "M368 128C376.837 128 384 135.163 384 144C384 152.731 377.006 159.829 368.315 159.997L368 160H144C135.163 160 128 152.837 128 144C128 135.269 134.994 128.171 143.685 128.003L144 128H368Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M400 208C400 199.163 392.837 192 384 192H128L127.685 192.003C118.994 192.171 112 199.269 112 208C112 216.837 119.163 224 128 224H384L384.315 223.997C393.006 223.829 400 216.731 400 208Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M128 64L126.99 64.0059C94.1024 64.3882 71.1226 83.4796 64.4859 115.979L64.32 116.814L32.4128 268.373C32.1427 269.539 32 270.753 32 272V384C32.1025 419.324 60.6755 447.897 95.9535 448L416 448C451.324 447.897 479.897 419.324 480 384.046L480 272C480 270.753 479.857 269.539 479.587 268.373L447.7 116.909C441.381 83.1731 417.447 64 384 64H128ZM320 256H444.281L416.343 123.296L416.163 122.363C412.64 104.3 402.123 96 384 96H128C109.616 96 99.2528 104.61 95.7121 123.022L95.6851 123.159L67.7183 256H192C200.731 256 207.829 262.994 207.997 271.685C207.998 271.723 207.998 271.761 207.999 271.799C207.999 271.82 207.999 271.842 207.999 271.863C208 271.888 208 271.914 208 271.94C208 271.96 208 271.98 208 272C208 298.51 229.49 320 256 320C282.245 320 303.57 298.937 303.994 272.794L304 272C304 263.269 310.994 256.171 319.685 256.003C319.79 256.001 319.895 256 320 256ZM334.4 288C326.987 324.516 294.703 352 256 352C217.297 352 185.013 324.516 177.6 288H64L63.9999 383.954C64.0508 401.454 78.084 415.662 95.4721 415.994L96 416L415.954 416C433.631 415.949 447.949 401.631 448 384V288H334.4Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
