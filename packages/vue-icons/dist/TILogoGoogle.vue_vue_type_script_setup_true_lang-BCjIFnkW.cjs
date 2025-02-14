"use strict";const e=require("vue"),s=e.defineComponent({__name:"TILogoGoogle",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M473.16 221.48L470.9 211.89H262.46V300.11H387C374.07 361.51 314.07 393.83 265.06 393.83C229.4 393.83 191.81 378.83 166.93 354.72C140.419 328.619 125.38 293.043 125.13 255.84C125.13 218.68 141.83 181.51 166.13 157.06C190.43 132.61 227.13 118.93 263.62 118.93C305.41 118.93 335.36 141.12 346.56 151.24L409.25 88.88C390.86 72.72 340.34 32 261.6 32C200.85 32 142.6 55.27 100.02 97.71C58 139.5 36.25 199.93 36.25 256C36.25 312.07 56.83 369.48 97.55 411.6C141.06 456.52 202.68 480 266.13 480C323.86 480 378.58 457.38 417.58 416.34C455.92 375.94 475.75 320.04 475.75 261.44C475.75 236.77 473.27 222.12 473.16 221.48Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
