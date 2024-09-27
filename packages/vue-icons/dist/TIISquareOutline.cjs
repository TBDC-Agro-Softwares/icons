"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIISquareOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M272 188H311V156L201 156V188H240V326H201V358H311V326H272V188Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48 102C48 72.1766 72.1766 48 102 48H410C439.823 48 464 72.1766 464 102V409C464 438.823 439.823 463 410 463H102C72.1766 463 48 438.823 48 409V102ZM102 80H410C422.15 80 432 89.8497 432 102V409C432 421.15 422.15 431 410 431H102C89.8497 431 80 421.15 80 409V102C80 89.8497 89.8497 80 102 80Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;