import { defineComponent as o, computed as s, openBlock as n, createElementBlock as a, normalizeClass as r, normalizeStyle as L, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBackspaceOutline",
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
    const l = e, i = s(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), a("svg", {
      class: r(i.value),
      style: L(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M173.855 96L420.202 96.0002C444.897 96.1106 464.889 116.103 465 140.87L465 371.202C464.889 395.897 444.897 415.889 420.13 416H173.864C160.934 415.995 148.637 410.402 140.135 400.66C139.59 400.036 139.097 399.373 138.66 398.68L138.467 398.365L49.9922 264.838C46.5127 259.586 46.444 252.793 49.7865 247.481L49.9912 247.164L138.861 113.004C139.28 112.371 139.744 111.769 140.249 111.202L140.561 110.851L141.043 110.324C149.508 101.209 161.392 96.0115 173.855 96ZM420.13 128L173.885 128C170.502 128.003 167.268 129.341 164.876 131.703L164.822 131.756L82.5221 255.998L164.879 380.294L165.005 380.418C167.289 382.62 170.319 383.901 173.502 383.995L173.87 384L420.059 384C427.193 383.968 432.968 378.193 433 371.13L433 140.942C432.968 133.807 427.193 128.032 420.13 128ZM342.356 181.016C348.605 174.768 358.735 174.768 364.984 181.016C371.145 187.178 371.231 197.115 365.241 203.381L364.984 203.644L311.293 257.335L364.984 311.026C371.232 317.275 371.232 327.405 364.984 333.654C358.822 339.815 348.885 339.901 342.619 333.91L342.356 333.654L288.665 279.962L234.974 333.654C228.725 339.902 218.595 339.902 212.346 333.654C206.185 327.492 206.099 317.555 212.09 311.289L212.346 311.026L266.038 257.335L212.346 203.644C206.098 197.395 206.098 187.265 212.346 181.016C218.508 174.855 228.445 174.769 234.711 180.76L234.974 181.016L288.665 234.708L342.356 181.016Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
