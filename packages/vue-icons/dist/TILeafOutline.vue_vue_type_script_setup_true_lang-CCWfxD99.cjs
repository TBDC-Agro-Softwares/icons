"use strict";const e=require("vue"),C=e.defineComponent({__name:"TILeafOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M42.9393 51.7267C38.4058 55.1999 36.2234 59.6377 34.6975 65.4114C32.889 72.2544 32.0367 82.1585 32.0125 94.6453C31.9628 120.354 35.4272 154.864 41.9948 190.171C49.7355 231.784 61.278 272.355 76.3523 308.181C94.009 350.145 115.981 384.481 142.509 408.998L143.314 409.738C183.616 446.522 236.503 465.432 287.901 463.448C337.632 461.528 380.766 440.134 404.023 403.81C422.888 408.72 442.363 412.706 462.567 415.814C471.301 417.158 479.47 411.167 480.814 402.433C482.158 393.699 476.167 385.53 467.433 384.186C450.567 381.591 434.254 378.356 418.409 374.445C430.148 342.364 431.162 307.081 421.063 272.838C407.847 228.03 376.524 187.658 330.571 157.979C304.653 141.238 277.955 131.465 243.706 124.321L240.817 123.727C234.182 122.381 228.275 121.299 218.659 119.654L203.767 117.13C170.381 111.424 154.689 107.793 135.991 100.621C110.534 90.8574 88.4987 76.328 67.6322 54.234C65.0353 51.4797 61.8705 49.3872 57.8179 48.4567C52.476 47.2301 47.1103 48.5312 42.9393 51.7267ZM387.484 365.764C397.682 339.517 398.777 310.397 390.37 281.89C379.381 244.632 352.889 210.488 313.208 184.86C290.746 170.35 267.305 161.844 236.045 155.413L235.645 155.331C228.6 153.886 222.619 152.79 211.931 150.968L201.552 149.213C165.088 143.041 147.488 139.13 126.528 131.257L124.532 130.499C102.813 122.169 83.0922 110.8 64.6325 95.3513L64.012 94.829L64.0155 96.5537C64.1374 120.007 67.3951 151.741 73.4551 184.319C89.64 271.327 121.104 346.106 164.891 386.107L165.915 387.034C199.809 417.479 244.021 433.118 286.667 431.472C322.592 430.085 353.194 416.538 371.492 394.228C295.077 368.991 228.19 326.961 162.03 264.647C155.597 258.589 155.294 248.462 161.353 242.03C167.411 235.597 177.537 235.294 183.97 241.353C248.512 302.142 313.094 342.257 387.484 365.764Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=C;
