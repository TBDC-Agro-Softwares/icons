import { defineComponent as e, computed as o, openBlock as a, createElementBlock as i, normalizeClass as p, normalizeStyle as n, createStaticVNode as c } from "vue";
const s = /* @__PURE__ */ e({
  __name: "TIVertical",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(t) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(t) > -1;
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
    const l = t, r = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, C) => (a(), i("svg", {
      class: p(r.value),
      style: n(t.color ? `color: ${t.color} !important` : void 0),
      width: "11",
      height: "14",
      viewBox: "0 0 11 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      c('<path d="M9.96726 0.5C10.227 0.5 10.4375 0.709867 10.4375 0.96875C10.4375 1.22763 10.227 1.4375 9.96726 1.4375L1.03274 1.4375C0.773033 1.4375 0.562501 1.22763 0.562501 0.96875C0.562501 0.709866 0.773033 0.5 1.03274 0.5L9.96726 0.5Z" fill="currentColor"></path><path d="M9.96726 12.5625C10.227 12.5625 10.4375 12.7724 10.4375 13.0312C10.4375 13.2901 10.227 13.5 9.96726 13.5L1.03274 13.5C0.773033 13.5 0.5625 13.2901 0.5625 13.0312C0.5625 12.7724 0.773033 12.5625 1.03274 12.5625L9.96726 12.5625Z" fill="currentColor"></path><path d="M9.43432 11.375C9.43432 11.6511 9.65889 11.875 9.93591 11.875C10.2129 11.875 10.4375 11.6511 10.4375 11.375C10.4375 11.0989 10.2129 10.875 9.93591 10.875C9.65889 10.875 9.43432 11.0989 9.43432 11.375Z" fill="currentColor"></path><path d="M1.06409 11.875C0.787069 11.875 0.5625 11.6511 0.5625 11.375C0.5625 11.0989 0.787069 10.875 1.06409 10.875C1.34111 10.875 1.56567 11.0989 1.56567 11.375C1.56567 11.6511 1.34111 11.875 1.06409 11.875Z" fill="currentColor"></path><path d="M9.43433 9.625C9.43433 9.90114 9.65889 10.125 9.93591 10.125C10.2129 10.125 10.4375 9.90114 10.4375 9.625C10.4375 9.34886 10.2129 9.125 9.93591 9.125C9.65889 9.125 9.43433 9.34886 9.43433 9.625Z" fill="currentColor"></path><path d="M1.06409 10.125C0.787069 10.125 0.562501 9.90114 0.562501 9.625C0.562501 9.34886 0.787069 9.125 1.06409 9.125C1.34111 9.125 1.56567 9.34886 1.56567 9.625C1.56567 9.90114 1.34111 10.125 1.06409 10.125Z" fill="currentColor"></path><path d="M9.43433 7.875C9.43433 8.15114 9.65889 8.375 9.93591 8.375C10.2129 8.375 10.4375 8.15114 10.4375 7.875C10.4375 7.59886 10.2129 7.375 9.93591 7.375C9.65889 7.375 9.43433 7.59886 9.43433 7.875Z" fill="currentColor"></path><path d="M1.06409 8.375C0.787069 8.375 0.562501 8.15114 0.562501 7.875C0.562501 7.59886 0.787069 7.375 1.06409 7.375C1.34111 7.375 1.56567 7.59886 1.56567 7.875C1.56567 8.15114 1.34111 8.375 1.06409 8.375Z" fill="currentColor"></path><path d="M9.43433 6.125C9.43433 6.40114 9.65889 6.625 9.93591 6.625C10.2129 6.625 10.4375 6.40114 10.4375 6.125C10.4375 5.84886 10.2129 5.625 9.93591 5.625C9.65889 5.625 9.43433 5.84886 9.43433 6.125Z" fill="currentColor"></path><path d="M1.06409 6.625C0.787069 6.625 0.562501 6.40114 0.562501 6.125C0.562501 5.84886 0.787069 5.625 1.06409 5.625C1.34111 5.625 1.56567 5.84886 1.56567 6.125C1.56567 6.40114 1.34111 6.625 1.06409 6.625Z" fill="currentColor"></path><path d="M9.43433 4.375C9.43433 4.65114 9.65889 4.875 9.93591 4.875C10.2129 4.875 10.4375 4.65114 10.4375 4.375C10.4375 4.09886 10.2129 3.875 9.93591 3.875C9.65889 3.875 9.43433 4.09886 9.43433 4.375Z" fill="currentColor"></path><path d="M1.06409 4.875C0.787069 4.875 0.562501 4.65114 0.562501 4.375C0.562501 4.09886 0.787069 3.875 1.06409 3.875C1.34111 3.875 1.56567 4.09886 1.56567 4.375C1.56567 4.65114 1.34111 4.875 1.06409 4.875Z" fill="currentColor"></path><path d="M9.43433 2.625C9.43433 2.90114 9.65889 3.125 9.93591 3.125C10.2129 3.125 10.4375 2.90114 10.4375 2.625C10.4375 2.34886 10.2129 2.125 9.93591 2.125C9.65889 2.125 9.43433 2.34886 9.43433 2.625Z" fill="currentColor"></path><path d="M1.06409 3.125C0.787069 3.125 0.562501 2.90114 0.562501 2.625C0.562501 2.34886 0.787069 2.125 1.06409 2.125C1.34111 2.125 1.56567 2.34886 1.56567 2.625C1.56567 2.90114 1.34111 3.125 1.06409 3.125Z" fill="currentColor"></path><path d="M5.84501 2.19936C5.75134 2.10573 5.62784 2.06014 5.50509 2.06259C5.38235 2.06014 5.25885 2.10573 5.16518 2.19936L3.43697 3.92701C3.25443 4.10949 3.25443 4.40535 3.43697 4.58784C3.61951 4.77032 3.91547 4.77032 4.09801 4.58784L5.00375 3.68238L5.00375 10.3278L4.08782 9.41216C3.90528 9.22968 3.60933 9.22968 3.42679 9.41216C3.24425 9.59465 3.24425 9.8905 3.42679 10.073L5.15499 11.8006C5.24866 11.8943 5.37216 11.9399 5.49491 11.9374C5.61765 11.9399 5.74115 11.8943 5.83482 11.8006L7.56303 10.073C7.74557 9.8905 7.74557 9.59465 7.56303 9.41216C7.38049 9.22968 7.08453 9.22968 6.90199 9.41216L5.93859 10.3753L5.93859 3.61457L6.91218 4.58784C7.09472 4.77032 7.39067 4.77032 7.57321 4.58784C7.75575 4.40535 7.75575 4.1095 7.57321 3.92701L5.84501 2.19936Z" fill="currentColor"></path>', 15)
    ]), 6));
  }
});
export {
  s as _
};
