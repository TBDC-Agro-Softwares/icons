import { defineComponent as C, computed as o, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as n, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ C({
  __name: "TIKeypadSharp",
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
    const l = e, i = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M88 16C83.5817 16 80 19.5817 80 24V104C80 108.418 83.5817 112 88 112H168C172.418 112 176 108.418 176 104V24C176 19.5817 172.418 16 168 16H88ZM216 16C211.582 16 208 19.5817 208 24V104C208 108.418 211.582 112 216 112H296C300.418 112 304 108.418 304 104V24C304 19.5817 300.418 16 296 16H216ZM336 24C336 19.5817 339.582 16 344 16H424C428.418 16 432 19.5817 432 24V104C432 108.418 428.418 112 424 112H344C339.582 112 336 108.418 336 104V24ZM88 144C83.5817 144 80 147.582 80 152V232C80 236.418 83.5817 240 88 240H168C172.418 240 176 236.418 176 232V152C176 147.582 172.418 144 168 144H88ZM208 152C208 147.582 211.582 144 216 144H296C300.418 144 304 147.582 304 152V232C304 236.418 300.418 240 296 240H216C211.582 240 208 236.418 208 232V152ZM344 144C339.582 144 336 147.582 336 152V232C336 236.418 339.582 240 344 240H424C428.418 240 432 236.418 432 232V152C432 147.582 428.418 144 424 144H344ZM80 280C80 275.582 83.5817 272 88 272H168C172.418 272 176 275.582 176 280V360C176 364.418 172.418 368 168 368H88C83.5817 368 80 364.418 80 360V280ZM216 272C211.582 272 208 275.582 208 280V360C208 364.418 211.582 368 216 368H296C300.418 368 304 364.418 304 360V280C304 275.582 300.418 272 296 272H216ZM208 408C208 403.582 211.582 400 216 400H296C300.418 400 304 403.582 304 408V488C304 492.418 300.418 496 296 496H216C211.582 496 208 492.418 208 488V408ZM344 272C339.582 272 336 275.582 336 280V360C336 364.418 339.582 368 344 368H424C428.418 368 432 364.418 432 360V280C432 275.582 428.418 272 424 272H344Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
