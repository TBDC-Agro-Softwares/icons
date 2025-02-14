"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIImageManager",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(a,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"55",height:"56",viewBox:"0 0 55 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M45.833 14.2474H29.7913L25.208 9.66406H9.16634C6.64551 9.66406 4.58301 11.7266 4.58301 14.2474V41.7474C4.58301 44.2682 6.64551 46.3307 9.16634 46.3307H45.833C48.3538 46.3307 50.4163 44.2682 50.4163 41.7474V18.8307C50.4163 16.3099 48.3538 14.2474 45.833 14.2474ZM45.833 41.7474H9.16634V14.2474H23.3747L27.958 18.8307H45.833V41.7474ZM41.2497 37.1641L32.5413 25.7057H32.083L25.4372 34.4141L20.6247 28.2266L13.7497 37.1641H41.2497ZM22.9163 22.2682C22.9163 20.4349 21.3122 18.8307 19.4788 18.8307C17.6455 18.8307 16.0413 20.4349 16.0413 22.2682C16.0413 24.1016 17.6455 25.7057 19.4788 25.7057C21.3122 25.7057 22.9163 24.1016 22.9163 22.2682Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
