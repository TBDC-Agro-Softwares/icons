"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIMedicalSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M351.9 256L460 193.6L412 110.4L304 172.8V48H208V172.8L100 110.4L52 193.6L160.1 256L52 318.4L100 401.6L208 339.2V464H304V339.2L412 401.6L460 318.4L351.9 256Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;