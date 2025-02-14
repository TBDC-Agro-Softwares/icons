"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIHeartDislikeCircleSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM319.73 358.36L136.59 176.06L159.33 153.55L342.52 335.91L319.73 358.36ZM256.22 363.22C220.86 338.22 189.91 311.3 181.31 300.82C161.31 276.45 151.73 251.42 152.01 224.32C152.044 221.199 152.328 218.086 152.86 215.01L283.07 344.41C279.64 347 266.86 355.86 256.22 363.22ZM330.69 300.82L330.38 301.2L197.33 169C200.694 168.342 204.113 168.007 207.54 168C224.323 167.942 240.346 174.995 251.64 187.41L256 192L260.36 187.4C271.655 174.988 287.678 167.94 304.46 168C334.77 168 359.68 193.27 359.99 224.33C360.27 251.42 350.68 276.45 330.69 300.82Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
