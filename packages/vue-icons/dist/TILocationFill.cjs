"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({__name:"TILocationFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M96 185C96 100.65 167.78 32 256 32C344.22 32 416 100.65 416 185C416 225.19 397.69 278.61 361.64 343.78C332.64 396.12 299.06 443.45 281.64 467C275.66 475.161 266.148 479.983 256.03 479.983C245.912 479.983 236.4 475.161 230.42 467C212.97 443.45 179.42 396.12 150.42 343.78C114.31 278.59 96 225.17 96 185ZM192 192C192 227.346 220.654 256 256 256C291.33 255.961 319.961 227.33 320 192C320 156.654 291.346 128 256 128C220.654 128 192 156.654 192 192Z",fill:"currentColor"},null,-1)]),6))}});exports.default=n;