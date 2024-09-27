import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGridOutline",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, t) => (n(), r("svg", {
      class: s(i.value),
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
        d: "M204 32H68C48.1177 32 32 48.1177 32 68V204C32 223.882 48.1177 240 68 240H204C223.882 240 240 223.882 240 204V68C240 48.1177 223.882 32 204 32ZM68 64H204C206.209 64 208 65.7909 208 68V204C208 206.209 206.209 208 204 208H68C65.7909 208 64 206.209 64 204V68C64 65.7909 65.7909 64 68 64ZM444 32H308C288.118 32 272 48.1177 272 68V204C272 223.882 288.118 240 308 240H444C463.882 240 480 223.882 480 204V68C480 48.1177 463.882 32 444 32ZM308 64H444C446.209 64 448 65.7909 448 68V204C448 206.209 446.209 208 444 208H308C305.791 208 304 206.209 304 204V68C304 65.7909 305.791 64 308 64ZM68 272H204C223.882 272 240 288.118 240 308V444C240 463.882 223.882 480 204 480H68C48.1177 480 32 463.882 32 444V308C32 288.118 48.1177 272 68 272ZM204 304H68C65.7909 304 64 305.791 64 308V444C64 446.209 65.7909 448 68 448H204C206.209 448 208 446.209 208 444V308C208 305.791 206.209 304 204 304ZM444 272H308C288.118 272 272 288.118 272 308V444C272 463.882 288.118 480 308 480H444C463.882 480 480 463.882 480 444V308C480 288.118 463.882 272 444 272ZM308 304H444C446.209 304 448 305.791 448 308V444C448 446.209 446.209 448 444 448H308C305.791 448 304 446.209 304 444V308C304 305.791 305.791 304 308 304Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};