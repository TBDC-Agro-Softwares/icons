import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as L } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TIMailUnreadFill",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(C) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(C) > -1;
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
  setup(C) {
    const e = C, t = o(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (c, l) => (n(), r("svg", {
      class: s(t.value),
      style: a(C.color ? `color: ${C.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      L("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M450.345 77.6749C473.298 88.0423 488.036 110.908 488 136.093C488.017 151.684 482.326 166.742 472 178.424C467.541 183.419 462.332 187.69 456.56 191.083H456.5C455.6 191.633 454.68 192.133 453.761 192.633L453.76 192.633L453.27 192.873C452.48 193.293 451.68 193.684 450.87 194.063L450.12 194.403C449.39 194.733 448.65 195.053 447.9 195.353L446.97 195.723C446.27 195.993 445.57 196.253 444.86 196.503L443.8 196.863C443.12 197.083 442.43 197.294 441.74 197.493C441.35 197.614 440.97 197.723 440.58 197.823C439.94 198.013 439.26 198.173 438.581 198.333L438.58 198.333L437.35 198.623C436.72 198.763 436.03 198.893 435.35 199.013L434.09 199.243C433.43 199.347 432.761 199.433 432.099 199.518L431.98 199.533L430.73 199.693C430.142 199.755 429.553 199.798 428.96 199.842C428.777 199.856 428.594 199.869 428.41 199.883L427.33 199.963C426.19 200.063 425.05 200.063 423.89 200.063C423.402 200.063 422.925 200.044 422.445 200.024C421.96 200.004 421.473 199.983 420.97 199.983L420.11 199.933C419.37 199.893 418.63 199.833 417.9 199.773L417.13 199.703C416.22 199.604 415.31 199.483 414.41 199.353L413.47 199.203L411.64 198.873L410.49 198.643L408.76 198.243L406.84 197.743C406.718 197.709 406.597 197.675 406.476 197.642C406.141 197.548 405.811 197.456 405.48 197.353L403.98 196.883L403.03 196.563C401.183 195.924 399.373 195.203 397.6 194.403L397.21 194.223C394.577 193.019 392.03 191.632 389.59 190.073C380.293 184.163 372.67 175.965 367.45 166.263C367.08 165.573 366.73 164.873 366.38 164.174L366.05 163.503C365.68 162.723 365.33 161.933 364.99 161.143C364.9 160.943 364.82 160.743 364.74 160.533C364.45 159.833 364.17 159.123 363.9 158.413C363.83 158.233 363.76 158.053 363.7 157.873C363.4 157.043 363.12 156.213 362.85 155.363L362.64 154.683C362.37 153.813 362.12 152.943 361.89 152.053V151.863C361.67 151.013 361.47 150.153 361.29 149.293C361.275 149.214 361.254 149.135 361.233 149.057C361.197 148.92 361.16 148.784 361.16 148.643C360.98 147.743 360.81 146.843 360.67 145.933C360.6 145.763 360.6 145.583 360.6 145.413C360.47 144.583 360.37 143.743 360.28 142.893L360.22 142.413C360.133 141.473 360.063 140.534 360.01 139.593V138.953C359.93 138.013 359.93 137.013 359.93 136.013C359.93 134.853 359.97 133.713 360.03 132.573C360.038 132.429 360.052 132.285 360.067 132.141C360.088 131.925 360.11 131.709 360.11 131.493C360.124 131.31 360.138 131.126 360.151 130.944C360.195 130.351 360.239 129.762 360.3 129.173C360.327 128.951 360.356 128.731 360.385 128.512C360.411 128.318 360.437 128.126 360.46 127.933C360.55 127.223 360.64 126.513 360.75 125.813C360.82 125.393 360.9 124.973 360.98 124.553L361.02 124.345C361.129 123.773 361.245 123.159 361.37 122.553C361.46 122.143 361.56 121.733 361.66 121.323C361.69 121.203 361.719 121.082 361.749 120.961C361.88 120.423 362.015 119.87 362.17 119.323C362.27 118.933 362.38 118.553 362.5 118.163C362.7 117.473 362.91 116.783 363.13 116.103L363.49 115.043C363.74 114.333 364 113.633 364.27 112.933C364.39 112.623 364.51 112.313 364.64 112.003C364.94 111.253 365.26 110.513 365.59 109.783C365.7 109.533 365.81 109.283 365.93 109.033C366.31 108.223 366.7 107.423 367.12 106.633L367.36 106.143C367.86 105.223 368.37 104.303 368.91 103.403V103.343C372.33 97.6172 376.618 92.4559 381.62 88.0435C400.493 71.3658 427.392 67.3074 450.345 77.6749ZM257.82 292.674L363.38 210.574C394.265 235.761 437.514 239.209 472 219.234V384.043C471.967 414.958 446.914 440.01 416 440.043H80C49.0858 440.01 24.0331 414.958 24 384.043V144.043C24.0331 113.129 49.0858 88.0766 80 88.0435H340.81C323.103 118.613 323.645 156.444 342.22 186.493L248 259.773L113.82 155.413C109.315 151.808 103.218 150.907 97.8633 153.056C92.5085 155.205 88.7255 160.071 87.9627 165.79C87.1999 171.509 89.5755 177.196 94.18 180.673L238.18 292.674C243.957 297.164 252.043 297.164 257.82 292.674Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
