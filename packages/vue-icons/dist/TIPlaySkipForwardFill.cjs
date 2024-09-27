"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIPlaySkipForwardFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M400 64C391.163 64 384 71.1634 384 80V216.43L151.23 77.11C140.28 70.449 126.571 70.2804 115.46 76.67C103.46 83.47 96 96.63 96 111V401C96 415.37 103.46 428.53 115.46 435.33C126.573 441.714 140.281 441.542 151.23 434.88L384 295.57V432C384 440.837 391.163 448 400 448C408.837 448 416 440.837 416 432V80C416 71.1634 408.837 64 400 64Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;