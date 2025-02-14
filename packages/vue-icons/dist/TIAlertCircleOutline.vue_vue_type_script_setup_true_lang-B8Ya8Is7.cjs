"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIAlertCircleOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM256.173 144.051C256.133 144.051 256.093 144.05 256.052 144.05C255.964 144.049 255.875 144.05 255.786 144.05C249.887 144.107 244.263 146.559 240.206 150.844C236.149 155.13 234.009 160.88 234.276 166.775L240.018 288.752C240.975 309.083 271.027 309.082 271.982 288.751L277.712 166.801C277.984 160.808 275.788 154.992 271.64 150.693C267.743 146.655 262.438 144.283 256.837 144.066L256.451 144.055L256.173 144.051ZM236 347.91C236 358.956 244.954 367.91 256 367.91C267.046 367.91 276 358.956 276 347.91C276 336.864 267.046 327.91 256 327.91C244.954 327.91 236 336.864 236 347.91Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
