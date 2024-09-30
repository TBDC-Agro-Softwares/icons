import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as d, normalizeStyle as C, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TILogoInstagram",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, o) => (a(), s("svg", {
      class: d(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M377.33 162.67C361.866 162.67 349.33 150.134 349.33 134.67C349.33 119.206 361.866 106.67 377.33 106.67C392.794 106.67 405.33 119.206 405.33 134.67C405.346 142.101 402.401 149.232 397.147 154.487C391.892 159.741 384.761 162.686 377.33 162.67Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 144C194.144 144 144 194.144 144 256C144 317.856 194.144 368 256 368C317.856 368 368 317.856 368 256C368 226.296 356.2 197.808 335.196 176.804C314.192 155.8 285.704 144 256 144ZM256 181.33C286.201 181.33 313.429 199.523 324.986 227.425C336.544 255.327 330.155 287.444 308.8 308.8C287.444 330.155 255.327 336.544 227.425 324.986C199.523 313.429 181.33 286.201 181.33 256C181.374 214.779 214.779 181.374 256 181.33Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M162.67 32H349.33C421.2 32 480 90.8 480 162.67V349.33C480 421.2 421.2 480 349.33 480H162.67C90.8 480 32 421.2 32 349.33V162.67C32 90.8 90.8 32 162.67 32ZM442.67 162.67C442.516 111.184 400.816 69.4838 349.33 69.33H162.67C111.184 69.4838 69.4838 111.184 69.33 162.67V349.33C69.4838 400.816 111.184 442.516 162.67 442.67H349.33C400.816 442.516 442.516 400.816 442.67 349.33V162.67Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
