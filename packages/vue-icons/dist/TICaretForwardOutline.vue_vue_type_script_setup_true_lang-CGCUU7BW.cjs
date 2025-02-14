"use strict";const e=require("vue"),s=e.defineComponent({__name:"TICaretForwardOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M190.06 414L353.18 274.22C358.498 269.66 361.558 263.005 361.558 256C361.558 248.995 358.498 242.34 353.18 237.78L190.06 98C174.49 84.66 150.44 95.72 150.44 116.22V395.82C150.44 416.32 174.49 427.38 190.06 414Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
