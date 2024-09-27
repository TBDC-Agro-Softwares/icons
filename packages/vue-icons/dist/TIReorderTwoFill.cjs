"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIReorderTwoFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M512 179C512 159.67 496.24 144 476.8 144H35.2L34.6179 144.005C15.446 144.314 0 159.863 0 179C0 198.33 15.7596 214 35.2 214H476.8L477.382 213.995C496.554 213.686 512 198.137 512 179ZM512 333C512 313.67 496.24 298 476.8 298H35.2L34.6179 298.005C15.446 298.314 0 313.863 0 333C0 352.33 15.7596 368 35.2 368H476.8L477.382 367.995C496.554 367.686 512 352.137 512 333Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;