"use strict";const e=require("vue"),s=e.defineComponent({__name:"TISearchOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M221.091 48C125.495 48 48 125.495 48 221.09C48 316.685 125.495 394.18 221.09 394.18C263.126 394.18 301.662 379.195 331.649 354.276L436.686 459.314L436.949 459.57C443.215 465.561 453.152 465.475 459.314 459.314C465.562 453.065 465.562 442.935 459.314 436.686L354.276 331.649C379.195 301.662 394.18 263.126 394.18 221.09C394.174 125.497 316.683 48.0061 221.091 48ZM221.089 80C299.009 80.005 362.175 143.171 362.18 221.091C362.18 299.012 299.012 362.18 221.09 362.18C143.168 362.18 80 299.012 80 221.09C80 143.168 143.168 80 221.089 80Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
