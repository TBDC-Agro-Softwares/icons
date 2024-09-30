"use strict";const e=require("vue"),n=e.defineComponent({__name:"TICloudDoneSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M414.25 225.36C407.73 184.18 390.2 148.96 363.14 122.9C334.363 95.214 295.933 79.8262 256 80C220.5 80 187.76 91.69 161.32 113.8C141.114 130.842 125.557 152.726 116.1 177.41C85.84 182.22 58.65 194.59 38.72 212.78C13.39 235.88 0 267.42 0 304C0 340 14.38 372.88 40.49 396.59C65.64 419.43 99.56 432 136 432H396C428.37 432 456.23 423.43 476.59 407.23C499.76 388.78 512 361.39 512 328C512 266.15 463.56 232.66 414.25 225.36ZM209.62 360.36L140.4 283.66L164.16 262.22L208.78 311.68L315.07 185.48L339.54 206.09L209.62 360.36Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;