"use strict";const e=require("vue"),s=e.defineComponent({__name:"TITodaySharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M448 64H400V32H360V64H152V32H112V64H64C46.3269 64 32 78.3269 32 96V448C32 465.673 46.3269 480 64 480H448C465.673 480 480 465.673 480 448V96C480 78.3269 465.673 64 448 64ZM436 436H76V176H436V436ZM121.14 208C116.092 208 112 212.092 112 217.14V326.86C112 331.908 116.092 336 121.14 336H230.86C235.908 336 240 331.908 240 326.86V217.14C240 212.092 235.908 208 230.86 208H121.14Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;