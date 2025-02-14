"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIGitCompareSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M431 360.61V156C430.945 105.213 389.788 64.0552 339 64.0001H304V9.93005L216.14 96.0001L304 182.07V128H339C354.464 128 367 140.536 367 156V360.61C341.915 375.093 329.684 404.62 337.181 432.6C344.678 460.58 370.034 480.036 399 480.036C427.967 480.036 453.323 460.58 460.82 432.6C468.317 404.62 456.086 375.093 431 360.61ZM399 448C381.327 448 367 433.673 367 416C367 398.327 381.327 384 399 384C416.674 384 431 398.327 431 416C431 433.673 416.674 448 399 448ZM208 384H171C155.537 384 143 371.464 143 356V152C168.342 137.972 181.103 108.672 174.113 80.5622C167.123 52.4526 142.126 32.542 113.165 32.0171C84.2038 31.4922 58.5007 50.4838 50.4968 78.3217C42.4928 106.159 54.1835 135.903 79.0005 150.84V356C79.0556 406.787 120.213 447.945 171 448H208V503.21L293.39 416L208 328.79V384ZM112 64.0001C129.674 64.0001 144 78.3269 144 96.0001C144 113.673 129.674 128 112 128C94.3274 128 80.0005 113.673 80.0005 96.0001C80.0005 78.3269 94.3274 64.0001 112 64.0001Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
