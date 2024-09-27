"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIChevronUpFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M239.029 167.029C248.305 157.753 263.285 157.658 272.679 166.743L272.971 167.029L416.971 311.029C426.343 320.402 426.343 335.598 416.971 344.971C407.695 354.247 392.715 354.342 383.321 345.257L383.029 344.971L256 217.941L128.971 344.971C119.695 354.247 104.715 354.342 95.3212 345.257L95.0294 344.971C85.7535 335.695 85.6579 320.715 94.7426 311.321L95.0294 311.029L239.029 167.029Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;