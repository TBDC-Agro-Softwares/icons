"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIPrintFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M168 48H344C371.821 48.0414 395.407 68.4698 399.42 96H112.58C116.593 68.4698 140.179 48.0414 168 48ZM106 112H408C438.928 112 464 137.072 464 168V328C464 358.928 438.928 384 408 384H400V423.68C400 445.948 381.948 464 359.68 464H152.32C130.052 464 112 445.948 112 423.68V384H104C73.0721 384 48 358.928 48 328V170C48 137.967 73.9675 112 106 112ZM359.68 432C364.268 431.984 367.984 428.268 368 423.68V264.32C367.984 259.732 364.268 256.016 359.68 256H152.32C147.732 256.016 144.016 259.732 144 264.32V423.68C144.016 428.268 147.732 431.984 152.32 432H359.68ZM394 207.92C383.974 208.726 374.509 203.194 370.29 194.063C366.071 184.932 367.994 174.139 375.107 167.027C382.219 159.914 393.012 157.991 402.143 162.21C411.274 166.429 416.806 175.894 416 185.92C415.057 197.657 405.737 206.977 394 207.92Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
