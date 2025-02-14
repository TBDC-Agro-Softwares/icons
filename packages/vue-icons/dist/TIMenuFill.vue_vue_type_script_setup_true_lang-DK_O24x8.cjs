"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIMenuFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M424 128C437.255 128 448 138.745 448 152C448 165.122 437.469 175.785 424.397 175.997L424 176H88C74.7452 176 64 165.255 64 152C64 138.878 74.5313 128.215 87.6031 128.003L88 128H424ZM424 232C437.255 232 448 242.745 448 256C448 269.122 437.469 279.785 424.397 279.997L424 280H88C74.7452 280 64 269.255 64 256C64 242.878 74.5313 232.215 87.6031 232.003L88 232H424ZM448 360C448 346.745 437.255 336 424 336H88L87.6031 336.003C74.5313 336.215 64 346.878 64 360C64 373.255 74.7452 384 88 384H424L424.397 383.997C437.469 383.785 448 373.122 448 360Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
