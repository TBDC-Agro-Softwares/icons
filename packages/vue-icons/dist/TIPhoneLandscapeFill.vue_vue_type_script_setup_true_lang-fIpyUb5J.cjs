"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIPhoneLandscapeFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 176V336C0 371.346 28.6538 400 64 400H448C483.346 400 512 371.346 512 336V176C512 140.654 483.346 112 448 112H64C28.6538 112 0 140.654 0 176ZM448 144C465.673 144 480 158.327 480 176V336C480 353.673 465.673 368 448 368H64C46.3269 368 32 353.673 32 336V324.65C31.9885 321.488 33.8543 318.62 36.75 317.35C48.4384 312.272 55.9999 300.744 56 288V224C55.9999 211.256 48.4384 199.728 36.75 194.65C33.8543 193.38 31.9885 190.512 32 187.35V176C32 158.327 46.3269 144 64 144H448ZM52.69 185.53C49.7146 183.268 47.9771 179.738 48 176C48 167.163 55.1634 160 64 160H448C456.837 160 464 167.163 464 176V336C464 344.837 456.837 352 448 352H64C55.1634 352 48 344.837 48 336C47.9771 332.262 49.7146 328.732 52.69 326.47C64.8379 317.413 71.9961 303.152 72 288V224C71.9961 208.848 64.8379 194.587 52.69 185.53Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
