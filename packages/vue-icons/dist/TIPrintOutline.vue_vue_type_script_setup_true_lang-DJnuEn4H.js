import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPrintOutline",
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
    return (L, t) => (r(), s("svg", {
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
        d: "M344.048 48.0001C374.602 48.0913 399.407 72.5915 399.99 103.074L400 104V112H408.048C438.602 112.091 463.407 136.592 463.99 167.074L464 168L464 328.048C463.909 358.602 439.408 383.407 408.926 383.99L408 384H400V423.68C400 445.948 381.948 464 359.68 464H152.32C130.052 464 112 445.948 112 423.68V384L103.952 384C73.3976 383.909 48.5928 359.408 48.0102 328.926L48 328L48.0001 167.952C48.0913 137.398 72.5915 112.593 103.074 112.01L104 112H112L112 103.952C112.091 73.3976 136.592 48.5928 167.074 48.0102L168 48L344.048 48.0001ZM368 104.048L368 112L144 112V104L144.004 103.604C144.255 90.5692 154.916 80.0392 168.048 79.9999L344 80L344.396 80.0044C357.431 80.2547 367.961 90.9156 368 104.048ZM400 352L407.952 352C421.084 351.961 431.745 341.431 431.996 328.396L432 328L432 168.048C431.961 154.916 421.431 144.255 408.396 144.004L408 144L104.048 144C90.9156 144.039 80.2547 154.569 80.0044 167.604L80 168L79.9999 327.952C80.0392 341.084 90.5692 351.745 103.604 351.996L104 352H112V264.32C112 242.052 130.052 224 152.32 224H359.68C381.948 224 400 242.052 400 264.32V352ZM152.32 256H359.68C364.275 256 368 259.725 368 264.32V423.68C368 428.275 364.275 432 359.68 432H152.32C147.725 432 144 428.275 144 423.68V264.32C144 259.725 147.725 256 152.32 256ZM416 184C416 197.255 405.255 208 392 208C378.745 208 368 197.255 368 184C368 170.745 378.745 160 392 160C405.255 160 416 170.745 416 184Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
