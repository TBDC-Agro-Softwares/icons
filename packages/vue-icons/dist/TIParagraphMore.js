import { defineComponent as i, computed as o, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as n, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TIParagraphMore",
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
    const t = e, C = o(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (d, l) => (a(), r("svg", {
      class: s(C.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "516",
      viewBox: "0 0 512 516",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        d: "M163.912 108.029C143.864 107.703 124.31 114.295 108.51 126.707C92.7107 139.119 81.6192 156.6 77.0849 176.237C72.5169 198.523 76.9406 221.72 89.3829 240.726C101.825 259.732 121.267 272.991 143.432 277.585L144.008 277.692C149.751 278.978 155.617 279.625 161.501 279.623V408.318H204.168V150.927H246.834V408.318H289.501V150.927H332.168V108.029H163.912ZM118.045 193.826C118.045 182.448 122.54 171.537 130.542 163.492C138.543 155.447 149.396 150.927 160.712 150.927V236.724C149.396 236.724 138.543 232.205 130.542 224.16C122.54 216.115 118.045 205.203 118.045 193.826ZM436.765 375.952C436.765 382.315 434.888 388.535 431.372 393.826C427.856 399.117 422.858 403.241 417.011 405.676C411.164 408.112 404.729 408.749 398.522 407.507C392.315 406.266 386.613 403.202 382.137 398.702C377.662 394.202 374.614 388.469 373.38 382.228C372.145 375.987 372.779 369.518 375.201 363.639C377.623 357.76 381.724 352.735 386.987 349.2C392.249 345.665 398.436 343.778 404.765 343.778C413.252 343.778 421.391 347.167 427.392 353.201C433.393 359.235 436.765 367.418 436.765 375.952ZM436.765 290.154C436.765 296.518 434.888 302.738 431.372 308.029C427.856 313.32 422.858 317.444 417.011 319.879C411.164 322.314 404.729 322.952 398.522 321.71C392.315 320.469 386.613 317.404 382.137 312.905C377.662 308.405 374.614 302.672 373.38 296.431C372.145 290.19 372.779 283.721 375.201 277.842C377.623 271.963 381.724 266.938 386.987 263.403C392.249 259.867 398.436 257.981 404.765 257.981C413.252 257.981 421.391 261.37 427.392 267.404C433.393 273.438 436.765 281.621 436.765 290.154ZM436.765 204.357C436.765 210.721 434.888 216.941 431.372 222.232C427.856 227.523 422.858 231.647 417.011 234.082C411.164 236.517 404.729 237.154 398.522 235.913C392.315 234.672 386.613 231.607 382.137 227.108C377.662 222.608 374.614 216.875 373.38 210.634C372.145 204.393 372.779 197.924 375.201 192.045C377.623 186.166 381.724 181.141 386.987 177.606C392.249 174.07 398.436 172.183 404.765 172.183C413.252 172.183 421.391 175.573 427.392 181.607C433.393 187.641 436.765 195.824 436.765 204.357Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};