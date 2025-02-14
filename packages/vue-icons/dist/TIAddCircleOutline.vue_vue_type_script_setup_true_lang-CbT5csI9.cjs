"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIAddCircleOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM256 160C264.731 160 271.829 166.994 271.997 175.685L272 176V240H336C344.837 240 352 247.163 352 256C352 264.731 345.006 271.829 336.315 271.997L336 272H272V336C272 344.837 264.837 352 256 352C247.269 352 240.171 345.006 240.003 336.315L240 336V272H176C167.163 272 160 264.837 160 256C160 247.269 166.994 240.171 175.685 240.003L176 240H240V176C240 167.163 247.163 160 256 160Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
