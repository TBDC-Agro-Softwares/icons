"use strict";const e=require("vue"),s=e.defineComponent({__name:"TITabletLandscapeSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 82V430C0 439.941 8.05887 448 18 448H494C503.941 448 512 439.941 512 430V82C512 72.0589 503.941 64 494 64H18C8.05887 64 0 72.0589 0 82ZM448 412H64V100H448V412Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;