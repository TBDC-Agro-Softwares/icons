"use strict";const e=require("vue"),n=e.defineComponent({__name:"TIPlayForwardOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16 145.52V366.52C16 391.716 42.0711 408.648 63.8543 395.594L244.57 287.473V366.52C244.57 391.716 270.641 408.648 292.424 395.594L481.285 282.6C500.904 270.858 500.904 241.282 481.287 229.541L292.513 116.599C270.726 103.351 244.57 120.271 244.57 145.52V224.667L63.9487 116.603C42.1695 103.347 16 120.271 16 145.52ZM48.171 144.452L234.73 256.069L48.193 367.673L48.1711 367.621C48.0688 367.354 48 366.991 48 366.52V145.52C48 145.097 48.0584 144.76 48.1566 144.491L48.171 144.452ZM276.74 144.452L463.3 256.069L276.763 367.673L276.741 367.621C276.639 367.354 276.57 366.991 276.57 366.52V145.52C276.57 145.096 276.629 144.758 276.727 144.488L276.74 144.452Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;