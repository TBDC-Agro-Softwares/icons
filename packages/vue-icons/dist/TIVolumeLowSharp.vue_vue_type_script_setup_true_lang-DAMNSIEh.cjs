"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIVolumeLowSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M96 176.1H189.65L320 72V440L189.65 335.9H96V176.1ZM362.52 327.12L391.12 341.48L398.3 327.18C410 303.78 416 279.83 416 256C416 231.47 410.2 208.16 398.26 184.73L391 170.48L362.48 185L369.75 199.27C379.34 218.08 384 236.64 384 256C384 274.82 379.19 293.92 369.7 312.82L362.52 327.12Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
