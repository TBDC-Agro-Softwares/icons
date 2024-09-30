"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIMusicalNotesOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,L=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(L.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M421.768 37.3269C415.353 32.4343 407.03 30.7968 399.24 32.8945L199.846 86.5029L199.651 86.5565L199.234 86.6774C185.511 90.7504 176.069 103.337 176 117.652L176 211.954V217.954V343.954L175.996 344.303C175.852 350.919 171.6 356.533 164.895 358.79L112.28 377.002C92.3059 384.02 80 402.433 80 423.954C80 462.299 117.084 489.205 153.09 477.123L153.279 477.058L175.353 469.032L175.693 468.916C195.032 462.141 208 444.461 208 423.954L208 218.067C208 218.029 208 217.992 208 217.954V211.954L208.004 211.604C208.155 204.506 212.891 198.709 220.151 196.879L220.262 196.85L394.963 150.141L395.189 150.088C396.324 149.853 397.507 150.121 398.432 150.828C399.414 151.58 399.992 152.744 400 153.98V175.954V295.894L399.996 296.24C399.853 302.8 395.652 308.306 388.895 310.58L388.765 310.625L337.789 328.765L337.417 328.89C317.31 335.753 303.821 354.736 304.001 376.029L304.011 377.045C304.736 414.902 341.153 441.162 377.105 429.058L377.287 428.995L399.332 420.979L399.703 420.852C419.035 414.065 432 396.389 432 375.894V175.954V153.954V57.9542L431.994 57.5025C431.822 49.5325 428.064 42.1289 421.768 37.3269ZM400 118.227V65.8262L208.331 117.357L208.274 117.38C208.131 117.447 208.03 117.582 208.005 117.738L207.999 117.818L208 167.15C209.205 166.728 210.435 166.349 211.688 166.016L212.107 165.906L386.694 119.228C391.084 118.053 395.596 117.735 400 118.227ZM176 388.805V423.954L175.996 424.304C175.852 430.925 171.604 436.532 164.895 438.79L164.713 438.853L142.773 446.829L142.454 446.934C127.388 451.661 112 440.332 112 423.954C112 415.601 116.151 409.463 123.112 407.116L175.693 388.916L176 388.805ZM400 375.894V340.596L399.693 340.706L399.3 340.84L348.168 359.036L347.972 359.102C340.893 361.416 336.09 367.979 336 375.399L336 375.894C336 392.458 351.144 403.703 366.431 398.882L366.77 398.77L388.708 390.795L388.885 390.734C395.601 388.468 399.852 382.856 399.996 376.243L400 375.894Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;