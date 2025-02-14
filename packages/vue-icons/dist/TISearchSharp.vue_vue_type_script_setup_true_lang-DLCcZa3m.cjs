"use strict";const e=require("vue"),s=e.defineComponent({__name:"TISearchSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C164.674 319.694 124.421 292.802 107.334 251.555C90.2468 210.308 99.6898 162.829 131.26 131.26C162.829 99.6898 210.308 90.2468 251.555 107.334C292.802 124.421 319.694 164.674 319.69 209.32C319.618 270.246 270.246 319.618 209.32 319.69Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
