"use strict";const e=require("vue"),s=e.defineComponent({__name:"TICloudOfflineSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41.3706 63.9992L63.998 41.3718L470.627 448.001L447.999 470.628L41.3706 63.9992ZM38.72 212.78C13.39 235.88 0 267.42 0 304C0 340 14.38 372.88 40.49 396.59C65.64 419.43 99.56 432 136 432H364.12L110.51 178.39C82.5 183.78 57.42 195.72 38.72 212.78ZM512 328C512 361.39 499.76 388.78 476.59 407.23C476.46 407.336 476.318 407.437 476.179 407.537C476.028 407.645 475.88 407.751 475.75 407.86L172.93 105C197.1 88.6199 225.53 80 256 80C295.933 79.8262 334.363 95.2139 363.14 122.9C390.2 148.96 407.73 184.18 414.25 225.36C463.56 232.66 512 266.15 512 328Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
