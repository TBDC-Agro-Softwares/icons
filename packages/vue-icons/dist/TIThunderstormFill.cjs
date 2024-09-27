"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIThunderstormFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(C,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M358.24 55C382.467 76.4989 399.152 105.207 405.84 136.9C455.959 137.928 495.932 179.068 495.519 229.196C495.106 279.323 454.459 319.799 404.33 320H300.49L292.49 352H320C325.99 352.007 331.474 355.36 334.212 360.687C336.949 366.015 336.482 372.426 333 377.3L253 489.3C248.952 494.942 241.726 497.329 235.114 495.208C228.502 493.088 224.012 486.944 224 480V416H192C187.297 415.999 182.833 413.93 179.793 410.341C176.754 406.753 175.447 402.009 176.22 397.37L189.11 320H122.8C63.91 320 16 272.15 16 213.33C16 156.65 60.5 110.16 116.43 106.86C136.3 62.1781 176.332 29.6862 224.146 19.4317C271.959 9.17733 321.794 22.3959 358.24 55ZM96 416C90.4554 415.997 85.3075 413.124 82.3945 408.406C79.4816 403.688 79.2188 397.798 81.7 392.84L105.7 344.84C109.654 336.937 119.267 333.736 127.17 337.69C135.073 341.644 138.274 351.257 134.32 359.16L110.32 407.16C107.607 412.582 102.063 416.004 96 416ZM120 480C114.455 479.997 109.308 477.124 106.395 472.406C103.482 467.688 103.219 461.798 105.7 456.84L121.7 424.84C124.258 419.727 129.349 416.368 135.056 416.027C140.762 415.686 146.217 418.416 149.366 423.187C152.514 427.959 152.878 434.047 150.32 439.16L134.32 471.16C131.607 476.582 126.063 480.004 120 480ZM362.395 408.406C365.307 413.124 370.455 415.997 376 416C382.063 416.004 387.607 412.582 390.32 407.16L414.32 359.16C418.274 351.257 415.073 341.644 407.17 337.69C399.267 333.736 389.654 336.937 385.7 344.84L361.7 392.84C359.219 397.798 359.482 403.688 362.395 408.406ZM400 480C394.455 479.997 389.307 477.124 386.395 472.406C383.482 467.688 383.219 461.798 385.7 456.84L401.7 424.84C405.654 416.937 415.267 413.736 423.17 417.69C431.073 421.644 434.274 431.257 430.32 439.16L414.32 471.16C411.607 476.582 406.063 480.004 400 480Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;