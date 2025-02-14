"use strict";const e=require("vue"),n=e.defineComponent({__name:"TIInformationCircleSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 56C145.72 56 56 145.72 56 256C56 366.28 145.72 456 256 456C366.28 456 456 366.28 456 256C456 145.72 366.28 56 256 56ZM256 138C270.359 138 282 149.641 282 164C282 178.359 270.359 190 256 190C241.641 190 230 178.359 230 164C230 157.104 232.739 150.491 237.615 145.615C242.491 140.739 249.104 138 256 138ZM320 364H200V332H244V244H212V212H276V332H320V364Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
