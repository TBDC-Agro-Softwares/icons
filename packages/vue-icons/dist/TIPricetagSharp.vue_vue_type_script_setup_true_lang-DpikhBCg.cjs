"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIPricetagSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M312 24L24 312L200 488L488 200V24H312ZM392 152C374.327 152 360 137.673 360 120C360 102.327 374.327 88 392 88C409.673 88 424 102.327 424 120C424 128.487 420.629 136.626 414.627 142.627C408.626 148.629 400.487 152 392 152Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
