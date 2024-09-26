import { defineComponent as i, computed as r, openBlock as a, createElementBlock as n, normalizeClass as p, normalizeStyle as C, createStaticVNode as d } from "vue";
const H = /* @__PURE__ */ i({
  __name: "TIReportTestSideBySideOutline",
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
    const e = t, o = r(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (c, l) => (a(), n("svg", {
      class: p(o.value),
      style: C(t.color ? `color: ${t.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d('<path fill-rule="evenodd" clip-rule="evenodd" d="M309.87 16H202.13C182.354 16 165.761 29.6252 161.226 48H144L142.942 48.0086C108.084 48.5737 80 77.0072 80 112V432L80.0086 433.058C80.5737 467.916 109.007 496 144 496H368L369.058 495.991C403.916 495.426 432 466.993 432 432V112L431.991 110.942C431.426 76.0836 402.993 48 368 48H350.774C346.239 29.6252 329.646 16 309.87 16ZM350.774 80C346.239 98.3748 329.646 112 309.87 112H202.13C182.354 112 165.761 98.3748 161.226 80H144C126.504 80 112.287 94.0418 112.004 111.471L112 112V432C112 449.496 126.042 463.713 143.471 463.996L144 464H368C385.496 464 399.713 449.958 399.996 432.529L400 432V112C400 94.5036 385.958 80.2869 368.529 80.0043L368 80H350.774ZM202.13 48H309.87C315.465 48 320 52.5354 320 58.13V69.87C320 75.4646 315.465 80 309.87 80H202.13C196.535 80 192 75.4646 192 69.87V58.13C192 52.5354 196.535 48 202.13 48Z" fill="currentColor"></path><path d="M192.003 151.467C229.23 151.467 260.089 178.709 265.742 214.347C278.275 201.856 295.577 194.133 314.67 194.133H362.67V220.8C362.67 259.093 331.63 290.133 293.337 290.133H266.67V343.467H245.337V258.133H224.003C182.766 258.133 149.337 224.704 149.337 183.467V151.467H192.003ZM341.337 215.467H314.67C288.163 215.467 266.67 236.96 266.67 263.467V268.8H293.337C319.843 268.8 341.337 247.307 341.337 220.8V215.467ZM192.003 172.8H170.67V183.467C170.67 212.917 194.553 236.8 224.003 236.8H245.337V226.133C245.337 196.683 221.454 172.8 192.003 172.8Z" fill="currentColor"></path><path d="M153.6 418.133V324.267H170.667V418.133H153.6Z" fill="currentColor"></path><path d="M298.667 418.133V358.4H315.733V418.133H298.667Z" fill="currentColor"></path><path d="M179.2 418.133V349.867H196.267V418.133H179.2Z" fill="currentColor"></path><path d="M349.867 418.133V332.8H366.933V418.133H349.867Z" fill="currentColor"></path><path d="M324.267 418.133V384H341.333V418.133H324.267Z" fill="currentColor"></path><path d="M204.8 418.133V366.933H221.867V418.133H204.8Z" fill="currentColor"></path>', 8)
    ]), 6));
  }
});
export {
  H as default
};
