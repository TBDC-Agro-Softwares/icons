import { defineComponent as o, computed as r, openBlock as n, createElementBlock as a, normalizeClass as s, normalizeStyle as L, createElementVNode as t } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TISatelliteOutline",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, C) => (n(), a("svg", {
      class: s(i.value),
      style: L(e.color ? `color: ${e.color} !important` : void 0),
      width: "256",
      height: "256",
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M179.443 58.5056C187.253 66.3155 187.253 78.9779 179.443 86.7878L168.816 97.4149C169.286 97.4015 169.756 97.3926 170.226 97.3883C184.048 97.2615 197.428 101.071 208.876 108.21C213.413 111.04 217.646 114.392 221.484 118.229L175.487 164.225L176.632 165.37C179.907 168.644 179.907 173.953 176.632 177.228C173.358 180.502 168.049 180.502 164.775 177.228L163.63 176.083L117.633 222.079C113.796 218.242 110.444 214.008 107.615 209.472C100.475 198.023 96.666 184.643 96.7928 170.821C96.7971 170.351 96.806 169.88 96.8194 169.41L87.0264 179.203C79.2165 187.013 66.5541 187.013 58.7442 179.203L27.096 147.555C19.2861 139.745 19.2861 127.083 27.096 119.273L46.3524 100.016L32.2887 85.9526C24.4788 78.1427 24.4788 65.4804 32.2887 57.6704L57.9082 32.051C65.7181 24.241 78.3804 24.241 86.1903 32.051L100.255 46.1155L119.513 26.8574C127.323 19.0475 139.985 19.0475 147.795 26.8574L179.443 58.5056ZM168.131 75.4749C169.692 73.9129 169.692 71.3805 168.131 69.8185L136.482 38.1703C134.92 36.6083 132.388 36.6083 130.826 38.1703L111.568 57.4281L148.873 94.7327L168.131 75.4749ZM137.13 105.616L74.8775 43.3638C73.3155 41.8018 70.783 41.8019 69.221 43.3638L43.6015 68.9833C42.0396 70.5453 42.0396 73.0778 43.6015 74.6398L57.6653 88.7035L57.6667 88.7021L105.596 136.632C109.013 130.272 113.371 124.379 118.577 119.173C124.081 113.669 130.352 109.114 137.13 105.616ZM57.6653 111.329L94.9699 148.634L75.7135 167.89C74.1515 169.452 71.6191 169.452 70.0571 167.89L38.4089 136.242C36.8469 134.68 36.8469 132.148 38.4089 130.586L57.6653 111.329ZM117.597 148.633L117.507 148.722C114.49 155.723 112.861 163.283 112.791 170.968C112.704 180.459 114.994 189.65 119.32 197.767L197.171 119.916C189.055 115.59 179.864 113.299 170.373 113.386C155.309 113.525 140.728 119.648 129.89 130.486C124.615 135.761 120.456 141.924 117.562 148.597L117.597 148.633Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M216.055 214.855C205.549 225.746 191.676 232.76 176.521 234.919C172.147 235.542 168.096 232.501 167.473 228.128C166.85 223.754 169.891 219.703 174.265 219.08C185.965 217.414 196.557 212.023 204.541 203.747C212.524 195.471 217.544 184.676 218.808 172.895C219.279 168.502 223.222 165.323 227.614 165.794C232.007 166.266 235.186 170.209 234.715 174.601C233.081 189.839 226.561 203.964 216.055 214.855Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M195.733 196.321C199.887 192.167 203.194 186.943 204.594 181.504C205.696 177.225 203.12 172.864 198.842 171.763C194.563 170.661 190.202 173.236 189.101 177.515C188.554 179.637 186.99 182.438 184.42 185.008C181.851 187.578 179.049 189.141 176.927 189.688C172.649 190.789 170.074 195.151 171.175 199.429C172.277 203.708 176.638 206.283 180.917 205.181C186.356 203.781 191.58 200.474 195.733 196.321Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};