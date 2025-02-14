import { defineComponent as o, computed as e, openBlock as a, createElementBlock as i, normalizeClass as p, normalizeStyle as n, createStaticVNode as h } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIFieldDeploymentOutline",
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
    const t = C, r = e(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (c, l) => (a(), i("svg", {
      class: p(r.value),
      style: n(C.color ? `color: ${C.color} !important` : void 0),
      width: "61",
      height: "61",
      viewBox: "0 0 61 61",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      h('<path d="M27.5015 12.7092C27.2815 11.6986 26.4394 10.421 25.1324 9.11544C23.825 7.81013 22.5457 6.96923 21.5342 6.74967C21.023 6.63871 20.4988 6.67122 20.0963 6.99029C19.6913 7.31129 19.5304 7.826 19.5304 8.40506C19.5304 8.70001 19.6238 9.01162 19.7545 9.30957C19.8879 9.61364 20.075 9.93663 20.2959 10.2635C20.7378 10.9174 21.3371 11.6194 21.9819 12.2633C22.6268 12.9073 23.3297 13.5058 23.9845 13.9471C24.3117 14.1676 24.6351 14.3545 24.9395 14.4876C25.2378 14.6181 25.5496 14.7113 25.8445 14.7113C26.4239 14.7113 26.9389 14.5508 27.2603 14.1464C27.5801 13.7441 27.6127 13.22 27.5015 12.7092Z" fill="currentColor"></path><path d="M22.6636 20.9083C22.008 20.9766 21.3646 21.2144 21.0197 21.7719C20.7161 22.262 20.9139 22.8134 21.1678 23.2162C21.4381 23.6449 21.8747 24.0824 22.3852 24.4824C23.4069 25.2828 24.8388 26.0205 26.1705 26.27C26.838 26.3951 27.437 26.435 27.9454 26.3933C28.4467 26.3522 28.8969 26.2286 29.2319 25.9927C29.5867 25.7427 29.8016 25.3694 29.7834 24.9155C29.7665 24.4941 29.5514 24.0736 29.2206 23.6755C28.2087 22.4581 26.482 21.553 24.9097 21.1396C24.1191 20.9317 23.3331 20.8386 22.6636 20.9083Z" fill="currentColor"></path><path d="M37.7083 41.4157C41.3184 39.5068 44.4085 35.7851 45.6484 31.8582L46.5855 28.8884H50.8663C51.93 28.8884 52.7602 28.8825 53.4042 28.8558C54.0415 28.8293 54.5291 28.7817 54.8927 28.6871C55.2622 28.591 55.5756 28.4277 55.7661 28.1168C55.9416 27.8304 55.959 27.4972 55.959 27.217C55.959 26.9426 55.9499 26.5825 55.7426 26.2847C55.5214 25.9668 55.1589 25.8267 54.7435 25.7517C54.3219 25.6756 53.739 25.6487 52.9469 25.6483C52.148 25.6479 51.1058 25.6747 49.7523 25.7147L43.6651 25.8944L42.8914 29.3322C40.8613 38.3499 31.3895 42.4767 23.9787 37.6779C21.0991 35.8132 19.2376 33.0443 18.4015 29.3321L17.6278 25.8944L11.5407 25.7147C10.1871 25.6747 9.14497 25.6479 8.34611 25.6483C7.55392 25.6487 6.97104 25.6756 6.54941 25.7517C6.13409 25.8267 5.77156 25.9668 5.55033 26.2847C5.34312 26.5825 5.33398 26.9426 5.33398 27.217C5.33398 27.4973 5.35121 27.8319 5.52883 28.1192C5.72122 28.4303 6.03732 28.5926 6.40941 28.6881C6.77634 28.7823 7.26929 28.8297 7.91504 28.856C8.56753 28.8826 9.40914 28.8884 10.4881 28.8884H14.7948L15.1301 30.4386C16.1184 35.0121 19.487 39.274 23.9217 41.6047C25.5534 42.4623 28.1841 42.8385 30.7656 42.8021C33.3503 42.7656 36.0105 42.3138 37.7083 41.4157Z" fill="currentColor"></path><path d="M5.66808 31.1778L5.66786 31.1781C5.21006 31.9185 5.52081 32.6979 6.02268 33.1114C6.52577 33.5259 7.35291 33.6775 7.97536 33.0559C8.46181 32.5701 8.5415 31.8898 8.35757 31.3472C8.17341 30.804 7.68934 30.3138 6.98577 30.3138C6.7049 30.3138 6.43489 30.4453 6.23221 30.5868C6.01843 30.7362 5.81416 30.942 5.66808 31.1778Z" fill="currentColor"></path><path d="M52.9895 31.1778L52.9893 31.1781C52.5315 31.9185 52.8422 32.6979 53.3441 33.1114C53.8472 33.5259 54.6743 33.6775 55.2968 33.0559C55.7832 32.5701 55.8629 31.8898 55.679 31.3472C55.4948 30.804 55.0108 30.3138 54.3072 30.3138C54.0263 30.3138 53.7563 30.4453 53.5536 30.5868C53.3399 30.7362 53.1356 30.942 52.9895 31.1778Z" fill="currentColor"></path><path d="M10.4002 35.9035L10.4 35.9038C9.9422 36.6442 10.253 37.4236 10.7548 37.8371C11.2579 38.2516 12.0851 38.4032 12.7075 37.7816C13.194 37.2958 13.2736 36.6155 13.0897 36.073C12.9056 35.5297 12.4215 35.0395 11.7179 35.0395C11.437 35.0395 11.167 35.171 10.9644 35.3126C10.7506 35.4619 10.5463 35.6677 10.4002 35.9035Z" fill="currentColor"></path><path d="M48.2574 35.9035L48.2571 35.9038C47.7993 36.6442 48.1101 37.4236 48.612 37.8371C49.1151 38.2516 49.9422 38.4032 50.5646 37.7816C51.0511 37.2958 51.1308 36.6155 50.9469 36.073C50.7627 35.5297 50.2786 35.0395 49.5751 35.0395C49.2942 35.0395 49.0242 35.171 48.8215 35.3126C48.6077 35.4619 48.4034 35.6677 48.2574 35.9035Z" fill="currentColor"></path><path d="M5.66808 40.6292L5.66786 40.6295C5.21006 41.3699 5.52081 42.1493 6.02268 42.5628C6.52577 42.9773 7.35291 43.1289 7.97536 42.5073C8.46181 42.0215 8.5415 41.3412 8.35757 40.7987C8.17341 40.2555 7.68934 39.7652 6.98577 39.7652C6.7049 39.7652 6.43489 39.8967 6.23221 40.0383C6.01843 40.1876 5.81416 40.3934 5.66808 40.6292Z" fill="currentColor"></path><path d="M15.1324 40.6292L15.1321 40.6295C14.6743 41.3699 14.9851 42.1493 15.487 42.5628C15.9901 42.9773 16.8172 43.1289 17.4396 42.5073C17.9261 42.0215 18.0058 41.3412 17.8219 40.7987C17.6377 40.2555 17.1536 39.7652 16.4501 39.7652C16.1692 39.7652 15.8992 39.8967 15.6965 40.0383C15.4827 40.1876 15.2784 40.3934 15.1324 40.6292Z" fill="currentColor"></path><path d="M43.5252 40.6292L43.525 40.6295C43.0672 41.3699 43.378 42.1493 43.8798 42.5628C44.3829 42.9773 45.21 43.1289 45.8325 42.5073C46.319 42.0215 46.3986 41.3412 46.2147 40.7987C46.0306 40.2555 45.5465 39.7652 44.8429 39.7652C44.562 39.7652 44.292 39.8967 44.0894 40.0383C43.8756 40.1876 43.6713 40.3934 43.5252 40.6292Z" fill="currentColor"></path><path d="M52.9895 40.6292L52.9893 40.6295C52.5315 41.3699 52.8422 42.1493 53.3441 42.5628C53.8472 42.9773 54.6743 43.1289 55.2968 42.5073C55.7832 42.0215 55.8629 41.3412 55.679 40.7987C55.4948 40.2555 55.0108 39.7652 54.3072 39.7652C54.0263 39.7652 53.7563 39.8967 53.5536 40.0383C53.3399 40.1876 53.1356 40.3934 52.9895 40.6292Z" fill="currentColor"></path><path d="M10.4002 46.5363L10.4 46.5367C9.9422 47.2771 10.253 48.0565 10.7548 48.47C11.2579 48.8845 12.0851 49.0361 12.7075 48.4145C13.194 47.9287 13.2736 47.2484 13.0897 46.7058C12.9056 46.1626 12.4215 45.6724 11.7179 45.6724C11.437 45.6724 11.167 45.8038 10.9644 45.9454C10.7506 46.0948 10.5463 46.3006 10.4002 46.5363Z" fill="currentColor"></path><path d="M19.8645 46.5363L19.8643 46.5367C19.4065 47.2771 19.7172 48.0565 20.2191 48.47C20.7222 48.8845 21.5493 49.0361 22.1718 48.4145C22.6582 47.9287 22.7379 47.2484 22.554 46.7058C22.3698 46.1626 21.8858 45.6724 21.1822 45.6724C20.9013 45.6724 20.6313 45.8038 20.4286 45.9454C20.2149 46.0948 20.0106 46.3006 19.8645 46.5363Z" fill="currentColor"></path><path d="M29.3288 46.5363L29.3286 46.5367C28.8708 47.2771 29.1815 48.0565 29.6834 48.47C30.1865 48.8845 31.0136 49.0361 31.6361 48.4145C32.1225 47.9287 32.2022 47.2484 32.0183 46.7058C31.8341 46.1626 31.3501 45.6724 30.6465 45.6724C30.3656 45.6724 30.0956 45.8038 29.8929 45.9454C29.6791 46.0948 29.4749 46.3006 29.3288 46.5363Z" fill="currentColor"></path><path d="M38.7931 46.5363L38.7929 46.5367C38.3351 47.2771 38.6458 48.0565 39.1477 48.47C39.6508 48.8845 40.4779 49.0361 41.1004 48.4145C41.5868 47.9287 41.6665 47.2484 41.4826 46.7058C41.2984 46.1626 40.8143 45.6724 40.1108 45.6724C39.8299 45.6724 39.5599 45.8038 39.3572 45.9454C39.1434 46.0948 38.9392 46.3006 38.7931 46.5363Z" fill="currentColor"></path><path d="M48.2574 46.5363L48.2571 46.5367C47.7993 47.2771 48.1101 48.0565 48.612 48.47C49.1151 48.8845 49.9422 49.0361 50.5646 48.4145C51.0511 47.9287 51.1308 47.2484 50.9469 46.7058C50.7627 46.1626 50.2786 45.6724 49.5751 45.6724C49.2942 45.6724 49.0242 45.8038 48.8215 45.9454C48.6077 46.0948 48.4034 46.3006 48.2574 46.5363Z" fill="currentColor"></path><path d="M5.66808 52.4435L5.66786 52.4439C5.21006 53.1842 5.52081 53.9636 6.02268 54.3771C6.52577 54.7916 7.35291 54.9432 7.97536 54.3216C8.46181 53.8358 8.5415 53.1555 8.35757 52.613C8.17341 52.0698 7.68934 51.5795 6.98577 51.5795C6.7049 51.5795 6.43489 51.711 6.23221 51.8526C6.01843 52.0019 5.81416 52.2077 5.66808 52.4435Z" fill="currentColor"></path><path d="M15.1324 52.4435L15.1321 52.4439C14.6743 53.1842 14.9851 53.9636 15.487 54.3771C15.9901 54.7916 16.8172 54.9432 17.4396 54.3216C17.9261 53.8358 18.0058 53.1555 17.8219 52.613C17.6377 52.0698 17.1536 51.5795 16.4501 51.5795C16.1692 51.5795 15.8992 51.711 15.6965 51.8526C15.4827 52.0019 15.2784 52.2077 15.1324 52.4435Z" fill="currentColor"></path><path d="M24.5967 52.4435L24.5964 52.4439C24.1386 53.1842 24.4494 53.9636 24.9513 54.3771C25.4543 54.7916 26.2815 54.9432 26.9039 54.3216C27.3904 53.8358 27.4701 53.1555 27.2861 52.613C27.102 52.0698 26.6179 51.5795 25.9143 51.5795C25.6335 51.5795 25.3635 51.711 25.1608 51.8526C24.947 52.0019 24.7427 52.2077 24.5967 52.4435Z" fill="currentColor"></path><path d="M34.0609 52.4435L34.0607 52.4439C33.6029 53.1842 33.9137 53.9636 34.4155 54.3771C34.9186 54.7916 35.7458 54.9432 36.3682 54.3216C36.8547 53.8358 36.9344 53.1555 36.7504 52.613C36.5663 52.0698 36.0822 51.5795 35.3786 51.5795C35.0978 51.5795 34.8277 51.711 34.6251 51.8526C34.4113 52.0019 34.207 52.2077 34.0609 52.4435Z" fill="currentColor"></path><path d="M43.5252 52.4435L43.525 52.4439C43.0672 53.1842 43.378 53.9636 43.8798 54.3771C44.3829 54.7916 45.21 54.9432 45.8325 54.3216C46.319 53.8358 46.3986 53.1555 46.2147 52.613C46.0306 52.0698 45.5465 51.5795 44.8429 51.5795C44.562 51.5795 44.292 51.711 44.0894 51.8526C43.8756 52.0019 43.6713 52.2077 43.5252 52.4435Z" fill="currentColor"></path><path d="M52.9895 52.4435L52.9893 52.4439C52.5315 53.1842 52.8422 53.9636 53.3441 54.3771C53.8472 54.7916 54.6743 54.9432 55.2968 54.3216C55.7832 53.8358 55.8629 53.1555 55.679 52.613C55.4948 52.0698 55.0108 51.5795 54.3072 51.5795C54.0263 51.5795 53.7563 51.711 53.5536 51.8526C53.3399 52.0019 53.1356 52.2077 52.9895 52.4435Z" fill="currentColor"></path><path d="M30.0682 31.2077C29.5731 31.5816 29.1939 32.007 29.1118 32.4875C29.0174 33.0407 29.3358 33.4636 29.7647 33.7369C30.1834 34.0037 30.7845 34.1894 31.5097 34.3115C32.2444 34.4353 33.1462 34.5002 34.1956 34.5002C35.7369 34.5002 36.9489 34.3335 37.8057 34.0598C38.233 33.9233 38.5932 33.7536 38.8637 33.548C39.1312 33.3446 39.3531 33.0722 39.4047 32.7277C39.4584 32.3694 39.3112 32.0506 39.0832 31.8025C38.8604 31.5601 38.5384 31.3567 38.1513 31.1863C37.3741 30.8443 36.2186 30.5856 34.6965 30.4664C32.5007 30.2945 31.0462 30.4691 30.0682 31.2077Z" fill="currentColor"></path><path d="M34.3627 14.7113C33.7072 14.7795 33.0638 15.0174 32.7189 15.5748C32.4153 16.0649 32.6131 16.6163 32.867 17.0191C33.1373 17.4478 33.5738 17.8853 34.0844 18.2853C35.1061 19.0857 36.538 19.8234 37.8697 20.073C38.5371 20.198 39.1362 20.2379 39.6446 20.1962C40.1459 20.1551 40.5961 20.0316 40.931 19.7956C41.2859 19.5457 41.5007 19.1723 41.4826 18.7184C41.4657 18.297 41.2506 17.8765 40.9198 17.4784C39.9078 16.261 38.1812 15.3559 36.6088 14.9425C35.8183 14.7347 35.0322 14.6416 34.3627 14.7113Z" fill="currentColor"></path>', 24)
    ]), 6));
  }
});
export {
  u as _
};
