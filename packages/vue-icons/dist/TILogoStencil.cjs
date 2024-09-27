"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TILogoStencil",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,i=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,o)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o[0]||(o[0]=[e.createElementVNode("path",{d:"M428.8 64H232.2L125.87 177.93H322.62L428.8 64Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M512 199H106.61L0 313H405.39L512 199Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M188.8 334.07H386.13L279.47 448H83.2L188.8 334.07Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;