import { defineComponent as C, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ C({
  __name: "TIPeoplesSettingsFill",
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
    const l = e, o = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, i) => (n(), s("svg", {
      class: a(o.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, i[0] || (i[0] = [
      t("path", {
        d: "M333 256C374.369 256 410.919 217.045 414.5 169.156C416.279 145.098 408.733 122.662 393.248 105.993C377.927 89.5288 356.51 80.4619 333 80.4619C309.303 80.4619 287.87 89.4739 272.659 105.837C257.276 122.38 249.776 144.863 251.5 169.14C255.019 217.037 291.561 256 333 256Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M495.514 400.004C488.9 363.314 468.251 332.493 435.808 310.864C406.993 291.656 370.482 281.077 333 281.077C295.518 281.077 259.008 291.656 230.193 310.856C197.75 332.485 177.1 363.306 170.486 399.997C168.974 408.405 171.027 416.72 176.121 422.809C180.8 428.428 187.765 431.636 195.077 431.539H470.923C478.24 431.643 485.211 428.438 489.896 422.817C494.974 416.728 497.027 408.413 495.514 400.004Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M118.5 195.39C98.2807 195.39 81.8898 211.781 81.8898 232C81.8898 252.219 98.2807 268.61 118.5 268.61C138.719 268.61 155.11 252.219 155.11 232C155.05 211.806 138.694 195.45 118.5 195.39ZM197.541 232C197.522 235.421 197.272 238.836 196.791 242.223L219.073 259.668C221.077 261.323 221.587 264.187 220.276 266.432L199.198 302.822C197.875 305.046 195.146 305.998 192.727 305.078L166.528 294.553C161.073 298.754 155.102 302.24 148.763 304.927L144.846 332.742C144.394 335.311 142.187 337.202 139.578 337.254H97.4217C94.8645 337.204 92.6803 335.396 92.1544 332.893L88.2371 305.078C81.88 302.422 75.9057 298.93 70.472 294.695L44.2728 305.22C41.8553 306.14 39.1261 305.191 37.8019 302.969L16.7236 266.583C15.4132 264.338 15.9228 261.474 17.9272 259.819L40.2091 242.374C39.7338 238.936 39.4831 235.471 39.4585 232C39.4776 228.579 39.7283 225.163 40.2091 221.776L17.9272 204.332C15.9228 202.677 15.4132 199.813 16.7236 197.568L37.8019 161.177C39.1247 158.954 41.8542 158.002 44.2728 158.921L70.472 169.447C75.9274 165.246 81.8975 161.759 88.2371 159.072L92.1544 131.258C92.6065 128.688 94.8133 126.798 97.4217 126.745H139.578C142.135 126.795 144.32 128.604 144.846 131.107L148.763 158.921C155.128 161.575 161.11 165.067 166.551 169.305L192.727 158.779C195.145 157.859 197.874 158.809 199.198 161.031L220.276 197.421C221.587 199.666 221.077 202.53 219.073 204.185L196.791 221.63C197.266 225.067 197.517 228.531 197.541 232Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
