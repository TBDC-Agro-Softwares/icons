import { defineComponent as o, computed as C, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIListCircleFill",
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
    return (d, t) => (r(), s("svg", {
      class: n(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM168 350C154.745 350 144 339.255 144 326C144 312.745 154.745 302 168 302C181.255 302 192 312.745 192 326C192 339.255 181.255 350 168 350ZM168 279C154.745 279 144 268.255 144 255C144 241.745 154.745 231 168 231C181.255 231 192 241.745 192 255C192 268.255 181.255 279 168 279ZM168 206C158.293 206 149.542 200.153 145.827 191.184C142.112 182.216 144.165 171.893 151.029 165.029C157.893 158.165 168.216 156.112 177.184 159.827C186.153 163.542 192 172.293 192 182C192 195.255 181.255 206 168 206ZM352 341H224C215.163 341 208 333.837 208 325C208 316.163 215.163 309 224 309H352C360.837 309 368 316.163 368 325C368 333.837 360.837 341 352 341ZM352 270H224C215.163 270 208 262.837 208 254C208 245.163 215.163 238 224 238H352C360.837 238 368 245.163 368 254C368 262.837 360.837 270 352 270ZM352 198H224C215.163 198 208 190.837 208 182C208 173.163 215.163 166 224 166H352C360.837 166 368 173.163 368 182C368 190.837 360.837 198 352 198Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
