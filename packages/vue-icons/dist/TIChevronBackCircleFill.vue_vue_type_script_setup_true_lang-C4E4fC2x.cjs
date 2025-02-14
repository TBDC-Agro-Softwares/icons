"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIChevronBackCircleFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48ZM291.31 340.69C295.525 344.694 297.236 350.67 295.779 356.299C294.322 361.927 289.927 366.322 284.299 367.779C278.67 369.236 272.694 367.525 268.69 363.31L172.69 267.31C166.447 261.062 166.447 250.938 172.69 244.69L268.69 148.69C274.981 142.714 284.889 142.84 291.024 148.976C297.16 155.112 297.286 165.019 291.31 171.31L206.63 256L291.31 340.69Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
