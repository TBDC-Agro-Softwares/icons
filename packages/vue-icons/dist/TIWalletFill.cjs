"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIWalletFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M156.581 112H416.5C420.238 111.998 423.972 112.235 427.68 112.71C425.14 94.8826 415.427 78.867 400.791 68.376C386.155 57.885 367.869 53.8296 350.17 57.15L97.4203 100.301C93.9464 100.833 90.434 101.424 86.9173 102.08H86.7C85.1731 102.372 83.6619 102.717 82.1686 103.113C44.1325 112.656 33 147.128 33 168V192.027C32.6729 194.639 32.5029 197.3 32.5 200V392C32.5386 427.33 61.1698 455.961 96.5 456H416.5C451.83 455.961 480.461 427.33 480.5 392V200C480.461 164.67 451.83 136.039 416.5 136H161C144.071 136 142.215 115.484 156.581 112ZM337 296C337 313.673 351.327 328 369 328C386.673 328 401 313.673 401 296C401 278.327 386.673 264 369 264C351.327 264 337 278.327 337 296Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;