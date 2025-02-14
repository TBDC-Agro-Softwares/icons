"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIVerticalAlignTop",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"513",viewBox:"0 0 512 513",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M170.667 234.797H234.667V448.13H277.333V234.797H341.333L256 149.464L170.667 234.797ZM448 106.797V64.1304H64V106.797H448Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
