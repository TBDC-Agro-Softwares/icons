"use strict";const e=require("vue"),n=e.defineComponent({__name:"TITerminalSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16 44V468C16 474.627 21.3726 480 28 480H484C490.627 480 496 474.627 496 468V44C496 37.3726 490.627 32 484 32H28C21.3726 32 16 37.3726 16 44ZM73.51 237.5L150.39 176L73.51 114.5L93.51 89.5L201.61 176L93.5 262.49L73.51 237.5ZM272 256H176V224H272V256Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;