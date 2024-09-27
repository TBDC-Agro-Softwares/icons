import { defineComponent as o, computed as i, openBlock as r, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createStaticVNode as p } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TILogoNoSmoking",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(t) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(t) > -1;
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
  setup(t) {
    const e = t, C = i(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (s, l) => (r(), a("svg", {
      class: n(C.value),
      style: c(t.color ? `color: ${t.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      p('<path d="M112 304H241.6L193.6 256H112V304Z" fill="currentColor"></path><path d="M360 256H376V304H360V256Z" fill="currentColor"></path><path d="M352 256H318L352 290V256Z" fill="currentColor"></path><path d="M400 256H384V304H400V256Z" fill="currentColor"></path><path d="M360.1 212.7C351.3 208.6 338.1 207 314.5 207H310.9C298.2 207.1 295 206.9 290.9 200.9C288.1 196.7 289.9 186.1 294.6 179C296.233 176.549 296.386 173.399 295 170.8C293.595 168.226 290.931 166.589 288 166.5C281.719 166.282 275.525 164.962 269.7 162.6C259.1 158.1 254.1 150.5 254.1 139.5C254.1 113.7 275.9 111.8 276.9 111.8V95.8C264.9 95.8 238.1 106.8 238.1 139.5C238.1 157 247.1 170.5 263.8 177.5C267.678 179.075 271.696 180.28 275.8 181.1C272.5 190.9 272.2 202 277.5 209.8C286.491 223.087 297.778 223 310.762 222.9L310.8 222.9H314.3C340.6 222.9 348.9 225.2 353.2 227.2C358.9 229.8 360 234.7 359.8 242.9V243.9H375.8L375.8 242.515C375.806 235.247 375.817 219.969 360.1 212.7Z" fill="currentColor"></path><path d="M390.9 194.4C396.992 204.786 399.992 218.265 400 243.9H384C384 216 380.2 207.8 377.1 202.5C371.4 192.8 362.9 187.9 352 187.9H322.5C319.676 187.899 317.058 186.419 315.6 184C314.178 181.568 314.14 178.567 315.5 176.1C315.502 176.096 315.507 176.087 315.515 176.071C315.939 175.251 324.854 158.032 322.4 143.8C321.1 136.2 316 127.1 295 127.1V111.1C319 111.1 334.9 122.3 338.1 141.1C340 152.2 337.5 163.7 334.6 172H352C368.5 172 382.3 180 390.9 194.4Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M363.5 59.5C363.82 59.7219 364.154 59.9224 364.5 60.1C435.787 99.5098 480.026 174.545 480 256C480 379.7 379.7 480 256 480C233.006 479.884 210.169 476.207 188.3 469.1L182.9 467.3C171.031 463.359 159.523 458.407 148.5 452.5C148.3 452.4 148.125 452.275 147.95 452.15C147.775 452.025 147.6 451.9 147.4 451.8C76.1754 412.389 31.9791 337.401 32 256C32 132.3 132.3 32 256 32C278.993 32.1245 301.83 35.8012 323.7 42.9L329.1 44.7C340.969 48.6411 352.477 53.5926 363.5 59.5ZM228.8 424C237.783 425.565 246.882 426.368 256 426.4C293.2 426.4 327.4 414 355.5 393.7L118.3 156.5C98 184.5 85.6 218.7 85.6 255.9C85.582 318.792 120.222 376.576 175.7 406.2C181.843 409.471 188.189 412.343 194.7 414.8C196.5 415.5 198.4 416.1 200.3 416.7C209.571 419.952 219.107 422.394 228.8 424ZM393.8 355.4L156.6 118.2C184.6 98 218.7 85.6 256 85.6C265.118 85.6368 274.217 86.4397 283.2 88C292.893 89.6059 302.429 92.0483 311.7 95.3C312.145 95.4484 312.597 95.5969 313.053 95.7468L313.055 95.7474C314.441 96.2034 315.871 96.6734 317.3 97.2C323.459 99.5316 329.47 102.237 335.3 105.3C391.376 134.698 426.506 192.786 426.5 256.1C426.4 293.3 414 327.4 393.8 355.4Z" fill="currentColor"></path>', 7)
    ]), 6));
  }
});
export {
  u as default
};