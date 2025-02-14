"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIDuplicateSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M400 80H112C94.3269 80 80 94.3269 80 112V400H56C42.7452 400 32 389.255 32 376V66C32 47.2223 47.2223 32 66 32H376C389.255 32 400 42.7452 400 56V80ZM456 112H136C122.745 112 112 122.745 112 136V456C112 469.255 122.745 480 136 480H456C469.255 480 480 469.255 480 456V136C480 122.745 469.255 112 456 112ZM392 312H312V392H280V312H200V280H280V200H312V280H392V312Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
