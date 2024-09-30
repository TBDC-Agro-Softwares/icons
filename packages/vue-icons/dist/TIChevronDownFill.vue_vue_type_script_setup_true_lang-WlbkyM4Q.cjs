"use strict";const e=require("vue"),n=e.defineComponent({__name:"TIChevronDownFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M95.0294 167.029C104.305 157.753 119.285 157.658 128.679 166.743L128.971 167.029L256 294.059L383.029 167.029C392.305 157.753 407.285 157.658 416.679 166.743L416.971 167.029C426.247 176.305 426.342 191.285 417.257 200.679L416.971 200.971L272.971 344.971C263.695 354.247 248.715 354.342 239.321 345.257L239.029 344.971L95.0294 200.971C85.6569 191.598 85.6569 176.402 95.0294 167.029Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;