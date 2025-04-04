import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIBodyFill",
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
    return (d, t) => (n(), r("svg", {
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
        d: "M311.485 55.8908C311.485 86.7585 286.462 111.782 255.595 111.782C224.727 111.782 199.704 86.7585 199.704 55.8908C199.704 25.0232 224.727 0 255.595 0C286.462 0 311.485 25.0232 311.485 55.8908ZM48 154.698C48 139.815 60.0647 127.75 74.9474 127.75H436.242V127.721C451.124 127.721 463.189 139.785 463.189 154.668C463.189 169.551 451.124 181.615 436.242 181.615H334.371C328.013 181.615 319.679 184.729 315.128 196.586C309.789 210.389 312.404 237.047 315.697 257.697L320.019 282.099C320.103 282.195 320.143 282.322 320.129 282.448L354.671 478.875C356.561 488.511 353.107 498.417 345.636 504.79C338.165 511.163 327.838 513.012 318.621 509.627C309.403 506.242 302.727 498.149 301.156 488.456L277.292 351.803C277.292 351.803 269.797 319.376 255.595 319.376C241.622 319.376 233.967 351.803 233.967 351.803L210.103 488.336C208.94 495.467 204.968 501.835 199.075 506.016C193.182 510.196 185.86 511.841 178.745 510.583C163.912 507.909 154.031 493.749 156.638 478.905L191.17 282.478C191.262 282.387 191.306 282.258 191.29 282.129L195.602 257.727C198.895 237.077 201.51 210.419 196.171 196.616C191.6 184.729 183.525 181.645 176.629 181.645H74.9474C60.0647 181.645 48 169.58 48 154.698Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
