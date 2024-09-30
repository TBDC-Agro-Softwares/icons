"use strict";const e=require("vue"),s=e.defineComponent({__name:"TINavigateFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M272.001 464C267.683 464.001 263.549 462.258 260.536 459.166C257.523 456.074 255.887 451.896 256.001 447.58V264.13C256.001 259.712 252.419 256.13 248.001 256.13H64.4106C57.515 256.212 51.3133 251.948 48.9206 245.48C46.1646 237.678 49.8113 229.063 57.3306 225.61L441.331 49.46C447.406 46.6762 454.572 47.9618 459.301 52.6841C464.03 57.4064 465.326 64.5704 462.551 70.65L286.551 454.65C283.948 460.345 278.262 463.999 272.001 464Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;