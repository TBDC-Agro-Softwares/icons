"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TINotificationsOffSharp",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M400 288L448 352L448.05 380.17L166.05 98.17C178.708 89.4241 192.961 83.2505 208 80L216 32H296L304 80C372.64 95.61 400 157 400 227.47V288ZM63.9975 41.3719L41.3701 63.9993L447.999 470.628L470.626 448.001L63.9975 41.3719ZM329.3 432C316.56 461.131 287.795 479.968 256 480C224.204 479.968 195.439 461.131 182.7 432H329.3ZM112 227.47V288L63.9996 352V400H332.12L115.87 183.75C113.229 198.172 111.933 212.808 112 227.47Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;