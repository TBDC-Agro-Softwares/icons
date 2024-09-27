"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TICopyFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M395.88 80H160C115.817 80 80 115.817 80 160V395.88C51.2562 385.679 32.0368 358.5 32 328V104C32 64.2355 64.2355 32 104 32H328C358.5 32.0368 385.679 51.2562 395.88 80ZM184 480H408C447.764 480 480 447.764 480 408V184C480 144.235 447.764 112 408 112H184C144.235 112 112 144.235 112 184V408C112 447.764 144.235 480 184 480Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;