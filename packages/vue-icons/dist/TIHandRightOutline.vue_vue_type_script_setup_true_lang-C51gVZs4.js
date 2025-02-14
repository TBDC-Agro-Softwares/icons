import { defineComponent as C, computed as o, openBlock as n, createElementBlock as s, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ C({
  __name: "TIHandRightOutline",
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
    return (d, t) => (n(), s("svg", {
      class: r(i.value),
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
        d: "M271.999 0C294.135 0 312.77 14.9835 318.318 35.3614C323.79 33.1922 329.755 32 335.999 32C362.244 32 383.569 53.0627 383.993 79.2062L383.999 80V98.7313C389.004 96.9625 394.389 96 399.999 96C426.244 96 447.569 117.063 447.993 143.206L447.999 144V320C447.999 380.609 431.683 429.287 400.77 462.862C370.965 495.234 328.925 512 279.999 512C235.163 512 200.189 502.256 173.345 483.196C150.069 466.669 133.742 444.002 121.243 414.186L121.104 413.843L120.973 413.496L68.3183 269.539C58.8291 243.821 64.9027 219.208 87.2937 206.489C110.786 193.139 141.094 200.737 153.668 224.628C153.819 224.915 153.961 225.206 154.094 225.501L154.287 225.947L159.999 239.71V96C159.999 69.4903 181.489 48 207.999 48C213.609 48 218.995 48.9625 223.999 50.7313V48C223.999 21.4903 245.489 0 271.999 0ZM191.809 322.472C191.956 321.538 192.021 320.586 191.999 319.629V96L192.002 95.6851C192.17 86.9939 199.268 80 207.999 80C216.836 80 223.999 87.1634 223.999 96V240V241L224.002 241.315C224.17 250.006 231.268 257 239.999 257C248.836 257 255.999 249.837 255.999 241V240V96V48L256.002 47.6851C256.17 38.9939 263.268 32 271.999 32C280.836 32 287.999 39.1634 287.999 48V80V240L288.002 240.315C288.17 249.006 295.268 256 303.999 256C312.836 256 319.999 248.837 319.999 240V80L320.002 79.6851C320.17 70.9939 327.268 64 335.999 64C344.836 64 351.999 71.1634 351.999 80V144V256L352.002 256.315C352.17 265.006 359.268 272 367.999 272C376.836 272 383.999 264.837 383.999 256V144L384.002 143.685C384.17 134.994 391.268 128 399.999 128C408.836 128 415.999 135.163 415.999 144V320L415.983 323.088C414.953 424.516 363.038 480 279.999 480C241.442 480 212.929 472.056 191.871 457.104L191.235 456.649C173.902 444.138 161.299 426.662 151.126 402.694L150.896 402.151L98.1933 258.058C93.8912 246.085 95.8569 238.427 103.102 234.312L103.408 234.142C111.395 229.799 121.024 232.129 125.052 238.995L125.066 239.021L161.079 325.79C161.426 326.684 161.851 327.539 162.346 328.347C163.58 330.371 165.22 332.046 167.112 333.307C169.004 334.573 171.181 335.446 173.526 335.81C175.356 336.098 177.251 336.071 179.129 335.694C181.005 335.322 182.763 334.622 184.34 333.656C188.266 331.254 191.075 327.206 191.809 322.472Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
