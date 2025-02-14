"use strict";const e=require("vue"),r=e.defineComponent({__name:"TICaretForwardCircleOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM327.32 268.3L238.23 342.43C233.461 346.396 226.828 347.248 221.211 344.616C215.594 341.984 212.005 336.343 212 330.14V181.86C212.005 175.657 215.594 170.016 221.211 167.384C226.828 164.752 233.461 165.604 238.23 169.57L327.32 243.7C330.974 246.74 333.087 251.247 333.087 256C333.087 260.753 330.974 265.26 327.32 268.3Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=r;
