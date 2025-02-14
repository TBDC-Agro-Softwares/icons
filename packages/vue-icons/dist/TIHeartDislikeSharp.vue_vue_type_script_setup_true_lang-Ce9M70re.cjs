"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIHeartDislikeSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32 67.45L421.47 457.39L444.31 434.92L54.85 45L32 67.45ZM62.67 195.91C62.11 251.54 82.44 302.85 124.83 352.79C159.723 393.898 205.181 423.606 244.619 449.379C250.675 453.337 256.588 457.201 262.3 461L271.3 467L280.3 461C286.004 457.206 291.91 453.344 297.958 449.391C311.514 440.528 325.783 431.199 340.09 421.11L71.74 152.28C65.8914 166.09 62.8099 180.913 62.67 195.91ZM479.99 195.91C480.55 251.54 460.22 302.85 417.83 352.79C416.21 354.7 414.55 356.59 412.84 358.48L142.84 88C152.977 84.9357 163.51 83.3758 174.1 83.37C222.33 83.37 254.45 111.34 271.33 131.54C288.21 111.37 320.3 83.37 368.56 83.37C429.38 83.37 479.36 133.91 479.99 195.91Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
