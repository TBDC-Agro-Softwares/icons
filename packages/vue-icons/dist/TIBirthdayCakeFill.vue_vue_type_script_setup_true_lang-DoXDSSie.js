import { defineComponent as i, computed as o, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as n, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TIBirthdayCakeFill",
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
    const l = e, t = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, C) => (r(), s("svg", {
      class: a(t.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M165.643 61.5373C165.643 78.3733 151.999 92.0222 135.169 92.0222C118.339 92.0222 104.695 78.3733 104.695 61.5373C104.695 50.3172 118.229 25.1192 127.258 9.55625C130.783 3.48125 139.556 3.48125 143.08 9.55625C152.11 25.1192 165.643 50.3172 165.643 61.5373ZM286.474 61.5373C286.474 78.3733 272.83 92.0222 256 92.0222C239.169 92.0222 225.526 78.3733 225.526 61.5373C225.526 50.3172 239.06 25.1192 248.089 9.55625C251.614 3.48125 260.387 3.48125 263.911 9.55625C272.941 25.1192 286.474 50.3172 286.474 61.5373ZM376.83 92.0222C393.66 92.0222 407.304 78.3733 407.304 61.5373C407.304 50.3172 393.771 25.1192 384.741 9.55625C381.216 3.48125 372.444 3.48125 368.919 9.55625C359.89 25.1192 346.356 50.3172 346.356 61.5373C346.356 78.3733 360 92.0222 376.83 92.0222ZM104.894 130.573C104.894 123.116 110.937 117.071 118.391 117.071V117.072H151.947C159.402 117.072 165.444 123.117 165.444 130.574V239.497H104.894V130.573ZM239.221 117.071C231.767 117.071 225.724 123.116 225.724 130.573V239.497H286.274V130.574C286.274 123.117 280.231 117.072 272.777 117.072H239.221V117.071ZM346.555 130.573C346.555 123.116 352.598 117.071 360.052 117.071V117.072H393.608C401.062 117.072 407.105 123.117 407.105 130.574V239.497H346.555V130.573ZM66.2499 356.215C68.6919 356.215 71.1909 355.871 73.6749 355.135L111.541 343.926C123.918 340.262 136.825 338.43 149.731 338.43C162.637 338.43 175.544 340.262 187.921 343.926L217.809 352.774C230.186 356.438 243.093 358.27 255.999 358.27C268.905 358.27 281.812 356.438 294.189 352.774L324.077 343.926C336.454 340.262 349.361 338.43 362.267 338.43C375.173 338.43 388.08 340.262 400.457 343.926L438.323 355.135C440.806 355.87 443.307 356.215 445.748 356.215C457.866 356.215 468.535 347.734 468.535 336.469V297.797C468.535 284.977 456.515 274.584 441.687 274.584H70.3119C55.4839 274.584 43.4639 284.977 43.4639 297.797V336.469C43.4639 347.734 54.1339 356.215 66.2499 356.215ZM456.054 477.24H497C505.284 477.24 512 483.957 512 492.241C512 500.525 505.284 507.241 497 507.241H15C6.716 507.241 0 500.525 0 492.241C0 483.957 6.716 477.241 15 477.241H55.947V385.252C59.317 385.883 62.765 386.216 66.252 386.216C71.644 386.216 77.007 385.437 82.193 383.902L120.059 372.693C129.612 369.865 139.596 368.431 149.733 368.431C159.87 368.431 169.854 369.865 179.407 372.693L209.295 381.541C224.381 386.007 240.095 388.271 256.001 388.271C271.907 388.271 287.62 386.007 302.706 381.541L332.594 372.693C342.147 369.865 352.131 368.431 362.268 368.431C372.405 368.431 382.389 369.865 391.942 372.693L429.808 383.902C434.993 385.437 440.357 386.215 445.749 386.215C449.235 386.215 452.683 385.882 456.054 385.251V477.24Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
