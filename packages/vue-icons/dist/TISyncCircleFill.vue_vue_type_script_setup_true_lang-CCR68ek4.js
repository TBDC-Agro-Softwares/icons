import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as C, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TISyncCircleFill",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: C(i.value),
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
        d: "M256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48ZM339.69 330.65C310.303 363.444 264.455 376.024 222.447 362.821C180.438 349.617 150.031 313.069 144.69 269.36C137.836 273.895 128.66 272.5 123.464 266.132C118.268 259.764 118.742 250.495 124.56 244.69L148.16 221.09C154.31 214.941 164.244 214.83 170.53 220.84L195.2 244.44C200.924 249.872 201.833 258.665 197.341 265.153C192.85 271.641 184.299 273.885 177.2 270.44C182.791 300.523 205.002 324.809 234.467 333.056C263.933 341.304 295.524 332.079 315.92 309.27C321.887 302.959 331.8 302.561 338.254 308.374C344.708 314.187 345.345 324.087 339.69 330.68V330.65ZM387.45 267.31L363.85 290.91C357.7 297.059 347.766 297.17 341.48 291.16L316.81 267.56C311.201 262.161 310.292 253.508 314.657 247.061C319.022 240.615 327.394 238.246 334.49 241.45C328.885 211.435 306.717 187.211 277.316 178.972C247.915 170.733 216.387 179.909 196 202.64C192.183 206.895 186.385 208.79 180.792 207.612C175.198 206.433 170.658 202.36 168.882 196.927C167.105 191.493 168.363 185.525 172.18 181.27C201.591 148.478 247.473 135.935 289.477 149.206C331.48 162.476 361.828 199.102 367.06 242.84C373.869 238.198 383.09 239.487 388.365 245.817C393.64 252.148 393.244 261.45 387.45 267.31Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
