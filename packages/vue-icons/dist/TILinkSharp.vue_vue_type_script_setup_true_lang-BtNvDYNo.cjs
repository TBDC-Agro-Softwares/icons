"use strict";const e=require("vue"),s=e.defineComponent({__name:"TILinkSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M223.41 136V184H144C104.235 184 72 216.235 72 256C72 295.367 103.594 327.355 142.809 327.99L144 328H224.66V376H144C77.7258 376 24 322.274 24 256C24 190.389 76.6567 137.076 142.016 136.016L144 136H223.41ZM368 136C434.274 136 488 189.726 488 256C488 321.611 435.343 374.924 369.984 375.984L368 376H287.34V328H368C407.764 328 440 295.764 440 256C440 216.633 408.406 184.645 369.191 184.01L368 184H288.59V136H368ZM145.07 280H368.93V232H145.07V280Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
