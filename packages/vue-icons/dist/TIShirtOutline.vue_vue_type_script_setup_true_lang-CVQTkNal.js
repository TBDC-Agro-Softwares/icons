import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIShirtOutline",
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
    return (C, t) => (r(), s("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M309.727 32.748C311.29 32.2526 312.92 32 314.562 32C319.965 32 325.329 32.9135 330.417 34.6981L338.301 37.4572C338.511 37.5259 338.718 37.5986 338.924 37.6753L485.287 88.8981C492.757 91.5123 497.193 99.1947 495.724 106.971L479.094 194.971C477.79 201.869 472.143 207.111 465.167 207.899L416.291 213.419C412.154 213.887 409.067 217.45 409.195 221.65L415.995 463.55C416.249 472.56 409.014 480 400.002 480H112.002C102.989 480 95.7548 472.56 96.0081 463.55L102.809 221.612C102.936 217.45 99.8498 213.887 95.7163 213.419L46.8363 207.899C39.8609 207.111 34.2136 201.869 32.91 194.971L16.28 106.971C14.8105 99.1947 19.2468 91.5123 26.7166 88.8981L173.08 37.6753C173.285 37.5986 173.493 37.5259 173.703 37.4571L181.576 34.7017C186.675 32.9135 192.039 32 197.442 32C199.247 32 201.04 32.3056 202.743 32.9039L203.009 32.9933C203.445 33.1361 204.208 33.3713 205.286 33.6772L206.453 34.0019C209.302 34.777 212.625 35.5599 216.392 36.3008C228.119 38.6076 241.426 40 256.002 40C270.578 40 283.884 38.6076 295.611 36.3008C299.647 35.5069 303.174 34.665 306.153 33.8359L306.442 33.7551C307.666 33.4111 308.522 33.148 308.995 32.9933L309.727 32.748Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
