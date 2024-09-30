"use strict";const e=require("vue"),s=e.defineComponent({__name:"TILogOutSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M320 240H160V272H320V416C320 424.837 312.837 432 304 432H64C55.1634 432 48 424.837 48 416V96C48 87.1634 55.1634 80 64 80H304C312.837 80 320 87.1634 320 96V240ZM320 240V272H409.37L345.37 336L368 358.63L459.31 267.31C465.553 261.062 465.553 250.938 459.31 244.69L368 153.37L345.37 176L409.37 240H320Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;