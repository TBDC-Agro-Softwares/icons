import { defineComponent as i, computed as o, openBlock as C, createElementBlock as n, normalizeClass as s, normalizeStyle as r, createElementVNode as a } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TIMagnetOutline",
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
    const l = e, L = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, t) => (C(), n("svg", {
      class: s(L.value),
      style: r(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      a("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M206.866 78.8638L206.868 78.8618C269.353 16.379 370.66 16.3797 433.144 78.8638C495.004 140.724 495.622 240.634 435 303.255L433.146 305.139L433.144 305.141L320.005 418.32C311.003 427.324 298.792 432.383 286.06 432.383C273.53 432.383 261.505 427.483 252.545 418.745L252.114 418.319L229.498 395.693C220.493 386.69 215.435 374.48 215.435 361.748C215.435 349.217 220.334 337.192 229.069 328.237L229.494 327.806L342.575 214.685C354.858 202.156 354.762 182.068 342.351 169.657C330.05 157.356 310.208 157.153 297.659 169.107L297.304 169.451L184.232 282.512C165.676 301.065 135.708 301.251 116.934 283.08L116.369 282.524L93.6876 259.893C84.6835 250.89 79.6248 238.68 79.6248 225.948C79.6248 213.417 84.5241 201.392 93.2625 192.433L93.6883 192.002L206.866 78.8638ZM353.94 225.948L365.256 237.259L297.385 305.154L342.646 350.408L410.514 282.516L421.916 293.914L410.516 282.514C460.504 232.526 460.504 151.479 410.516 101.491C361.028 52.0031 281.1 51.5082 231.003 100.007L229.494 101.491L218.185 90.183L229.492 101.493L161.6 169.361L206.863 214.631L274.747 146.753L286.06 158.068L274.839 146.662C299.89 122.016 340.129 122.179 364.978 147.029C389.58 171.63 389.986 211.314 366.077 236.413L365.345 237.169L353.94 225.948ZM320.023 373.039L274.762 327.785L252.122 350.433C249.121 353.433 247.435 357.503 247.435 361.748C247.435 365.855 249.014 369.799 251.84 372.772L252.126 373.066L274.745 395.695C277.746 398.697 281.816 400.383 286.06 400.383C290.167 400.383 294.112 398.804 297.081 395.982L297.374 395.696L320.023 373.039ZM116.312 214.633L138.968 191.985L184.234 237.258L161.607 259.883L161.344 260.14C155.079 266.128 145.144 266.043 138.982 259.883L116.301 237.251L116.016 236.959C113.204 233.999 111.625 230.055 111.625 225.948C111.625 221.703 113.311 217.633 116.312 214.633ZM207.997 415.693C207.829 407.001 200.731 400.008 192 400.008C183.163 400.008 176 407.171 176 416.008V464.008L176.003 464.322C176.171 473.014 183.269 480.008 192 480.008C200.837 480.008 208 472.844 208 464.008V416.008L207.997 415.693ZM112.806 376.574C119.055 370.325 129.185 370.325 135.434 376.574C141.595 382.735 141.681 392.672 135.69 398.939L135.434 399.201L101.494 433.141C95.2453 439.39 85.1147 439.39 78.8663 433.141C72.7047 426.98 72.6191 417.043 78.6096 410.776L78.8663 410.514L112.806 376.574ZM112 320.008C112 311.171 104.837 304.008 96 304.008H48L47.6851 304.011C38.9939 304.178 32 311.276 32 320.008C32 328.844 39.1634 336.008 48 336.008H96L96.3149 336.005C105.006 335.837 112 328.739 112 320.008Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
