"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIInlineStyle",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M253.467 320H268.4L283.333 283.733L219.333 106.667H176.667L70 405.333H112.667L142.533 320H253.467ZM159.6 277.333L200.133 166.4L240.667 277.333H159.6ZM328.56 459.627L397.808 501.205L378.416 423.616L442.053 362.667H361.712L331.227 287.872L295.216 362.667H214.875L275.824 423.616L259.205 501.205L328.56 459.627Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;