import { defineComponent as o, computed as i, openBlock as d, createElementBlock as n, normalizeClass as C, normalizeStyle as a, createStaticVNode as p } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIColorWheelOutline",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(l) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(l) > -1;
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
  setup(l) {
    const e = l, r = i(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (u, t) => (d(), n("svg", {
      class: C(r.value),
      style: a(l.color ? `color: ${l.color} !important` : void 0),
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      p('<path fill-rule="evenodd" clip-rule="evenodd" d="M7.98286 2.27516C9.03779 1.83957 10.1552 1.57828 11.2911 1.5V6.81788C10.8535 6.87906 10.4245 6.99533 10.0145 7.16463C9.60451 7.33393 9.21868 7.55411 8.86589 7.81928L5.09375 4.05897C5.9525 3.31362 6.92794 2.71075 7.98286 2.27516Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.98286 2.27516C9.03779 1.83957 10.1552 1.57828 11.2911 1.5V6.81788C10.8535 6.87906 10.4245 6.99533 10.0145 7.16463C9.60451 7.33393 9.21868 7.55411 8.86589 7.81928L5.09375 4.05897C5.9525 3.31362 6.92794 2.71075 7.98286 2.27516Z" fill="currentColor"></path><path d="M7.18243 9.98932C7.01263 10.398 6.89601 10.8255 6.83463 11.2616L1.5 11.2616C1.57855 10.1294 1.84065 9.01558 2.27758 7.96404C2.71455 6.91242 3.31931 5.94004 4.067 5.08398L7.83914 8.8443C7.57314 9.19598 7.35226 9.5806 7.18243 9.98932Z" fill="currentColor"></path><path d="M6.83463 12.7129H1.5C1.57855 13.8452 1.84065 14.959 2.27758 16.0105C2.71454 17.0621 3.31928 18.0344 4.06695 18.8905L7.8391 15.1302C7.57311 14.7785 7.35225 14.3939 7.18243 13.9852C7.01263 13.5766 6.89601 13.149 6.83463 12.7129Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9043 19.9146L15.1322 16.1543C14.4223 16.6878 13.5874 17.0326 12.707 17.1557V22.4735C14.9968 22.3158 17.1733 21.4171 18.9043 19.9146Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9043 19.9146L15.1322 16.1543C14.4223 16.6878 13.5874 17.0326 12.707 17.1557V22.4735C14.9968 22.3158 17.1733 21.4171 18.9043 19.9146Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9043 19.9146L15.1322 16.1543C14.4223 16.6878 13.5874 17.0326 12.707 17.1557V22.4735C14.9968 22.3158 17.1733 21.4171 18.9043 19.9146Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9043 19.9146L15.1322 16.1543C14.4223 16.6878 13.5874 17.0326 12.707 17.1557V22.4735C14.9968 22.3158 17.1733 21.4171 18.9043 19.9146Z" fill="currentColor"></path><path d="M17.1646 12.7129H22.4993C22.4207 13.8452 22.1586 14.959 21.7217 16.0105C21.2847 17.0621 20.68 18.0344 19.9323 18.8905L16.1602 15.1302C16.4261 14.7785 16.647 14.3939 16.8168 13.9852C16.9866 13.5766 17.1032 13.149 17.1646 12.7129Z" fill="currentColor"></path><path d="M16.8169 9.98932C16.9867 10.398 17.1033 10.8255 17.1647 11.2616L22.4993 11.2616C22.4208 10.1294 22.1587 9.01558 21.7217 7.96404C21.2848 6.91242 20.68 5.94004 19.9323 5.08398L16.1602 8.8443C16.4262 9.19598 16.647 9.5806 16.8169 9.98932Z" fill="currentColor"></path><path d="M16.0153 2.27516C14.9603 1.83957 13.843 1.57828 12.707 1.5V6.81788C13.1446 6.87906 13.5736 6.99533 13.9836 7.16463C14.3936 7.33393 14.7794 7.55411 15.1322 7.81928L18.9044 4.05897C18.0456 3.31362 17.0702 2.71075 16.0153 2.27516Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.12303 19.94L8.89517 16.1797C9.60501 16.7132 10.4399 17.058 11.3203 17.181V22.4989C9.03056 22.3412 6.854 21.4425 5.12303 19.94Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.12303 19.94L8.89517 16.1797C9.60501 16.7132 10.4399 17.058 11.3203 17.181V22.4989C9.03056 22.3412 6.854 21.4425 5.12303 19.94Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.12303 19.94L8.89517 16.1797C9.60501 16.7132 10.4399 17.058 11.3203 17.181V22.4989C9.03056 22.3412 6.854 21.4425 5.12303 19.94Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.12303 19.94L8.89517 16.1797C9.60501 16.7132 10.4399 17.058 11.3203 17.181V22.4989C9.03056 22.3412 6.854 21.4425 5.12303 19.94Z" fill="currentColor"></path>', 15)
    ]), 6));
  }
});
export {
  f as _
};
