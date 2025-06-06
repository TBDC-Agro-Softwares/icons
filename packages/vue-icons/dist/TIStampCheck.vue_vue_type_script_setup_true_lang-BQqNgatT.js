import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as i } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIStampCheck",
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
    const t = e, C = s(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (d, l) => (a(), n("svg", {
      class: r(C.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      i("path", {
        d: "M199.577 117.178C206.561 114.288 212.365 108.544 225.614 96.0205C240.873 81.5975 243.63 80 253.25 80C262.87 80 265.627 81.5975 280.886 96.0205C294.135 108.544 299.939 114.288 306.923 117.178C313.316 119.823 320.7 120.076 335.692 120.948C351.304 121.858 367.106 124.034 370.805 125.784C380.813 130.525 383.725 139.42 385.552 170.808C386.424 185.8 386.677 193.184 389.322 199.577C392.212 206.561 397.956 212.365 410.479 225.614C424.903 240.873 426.5 243.63 426.5 253.25C426.5 262.87 424.903 265.627 410.479 280.886C397.956 294.135 392.212 299.939 389.322 306.923C386.677 313.316 386.424 320.7 385.552 335.692C382.956 380.337 380.337 382.956 335.692 385.552C320.7 386.424 313.316 386.677 306.923 389.322C299.939 392.212 294.135 397.956 280.886 410.479C265.627 424.903 262.87 426.5 253.25 426.5C243.63 426.5 240.873 424.903 225.614 410.479C212.365 397.956 206.561 392.212 199.577 389.322C193.184 386.677 185.8 386.424 170.808 385.552C126.163 382.956 123.544 380.337 120.948 335.692C120.076 320.7 119.823 313.316 117.178 306.923C114.288 299.939 108.544 294.135 96.0205 280.886C81.5975 265.627 80 262.87 80 253.25C80 243.63 81.5975 240.873 96.0205 225.614C108.544 212.365 114.288 206.561 117.178 199.577C119.823 193.184 120.076 185.8 120.948 170.808C123.544 126.163 126.163 123.544 170.808 120.948C185.8 120.076 193.184 119.823 199.577 117.178Z",
        fill: "#48BB78"
      }, null, -1),
      i("path", {
        d: "M236.384 284.747L276.62 246.697L316.852 208.65C317.237 208.285 317.841 208.285 318.226 208.65L326.769 216.731L335.232 224.734C335.649 225.129 335.649 225.793 335.232 226.187L286.017 272.729L236.705 319.365C236.325 319.724 235.735 319.73 235.347 319.381L206.015 292.902L176.792 266.522C176.363 266.135 176.351 265.466 176.766 265.063L185.567 256.508L194.447 247.876C194.83 247.503 195.44 247.498 195.829 247.865L215.417 266.302L235.012 284.749C235.397 285.112 235.999 285.111 236.384 284.747Z",
        fill: "white"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
