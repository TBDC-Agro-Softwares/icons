import { defineComponent as o, computed as n, openBlock as s, createElementBlock as a, normalizeClass as r, normalizeStyle as d, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICodeSlashOutline",
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
    return (u, t) => (s(), a("svg", {
      class: r(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M308.598 80.6748C300.134 78.1357 291.214 82.9386 288.675 91.4025L192.675 411.402L192.585 411.712C190.253 420.083 195.042 428.817 203.402 431.325C211.866 433.864 220.786 429.062 223.325 420.598L319.325 100.598L319.415 100.288C321.747 91.9171 316.958 83.183 308.598 80.6748ZM149.464 131.959C156.114 126.14 166.222 126.814 172.041 133.464C177.78 140.023 177.204 149.946 170.806 155.8L170.536 156.041L56.298 256L170.536 355.959C177.095 361.698 177.841 371.61 172.277 378.261L172.041 378.536C166.302 385.095 156.39 385.841 149.739 380.277L149.464 380.041L21.4639 268.041C14.2665 261.744 14.1797 250.606 21.2038 244.191L21.4639 243.959L149.464 131.959ZM339.959 133.464C345.698 126.905 355.61 126.16 362.261 131.723L362.536 131.959L490.536 243.959C497.734 250.257 497.82 261.394 490.796 267.809L490.536 268.041L362.536 380.041C355.886 385.86 345.778 385.186 339.959 378.536C334.22 371.977 334.797 362.054 341.194 356.2L341.464 355.959L455.701 256L341.464 156.041C334.905 150.302 334.159 140.39 339.723 133.739L339.959 133.464Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
