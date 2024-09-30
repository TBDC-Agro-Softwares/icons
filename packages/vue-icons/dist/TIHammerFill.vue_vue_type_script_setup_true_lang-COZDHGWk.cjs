"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIHammerFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M489.691 189.69L490.001 190C497.882 198.32 498.004 211.313 490.281 219.78C490.101 219.98 489.911 220.18 489.721 220.37L434.221 275.19C430.156 279.172 424.691 281.399 419.001 281.39C413.277 281.429 407.776 279.178 403.721 275.14L369.461 241.23C365.386 237.197 363.089 231.704 363.079 225.97C363.07 220.237 365.349 214.737 369.411 210.69L369.711 210.41L371.531 208.68C371.763 208.421 371.875 208.076 371.841 207.73C368.411 205.797 364.469 204.966 360.551 205.35C359.041 205.51 353.541 206.42 345.851 211.15C340.671 214.36 325.851 227.46 316.121 236.15C309.787 241.821 300.125 241.548 294.121 235.53L259.711 201.12C254.042 195.468 253.423 186.497 258.261 180.12C270.541 163.78 278.441 149.46 278.261 145.64C277.331 126.64 271.701 113.96 260.001 104.55C253.101 99.1 237.501 92.55 224.311 91.46C218.137 90.9408 211.921 91.3282 205.861 92.61C202.95 93.3134 200.085 94.1916 197.281 95.24C190.669 97.7572 183.19 95.6339 178.887 90.0185C174.585 84.4032 174.48 76.6288 178.631 70.9C182.861 65.0789 187.607 59.6503 192.811 54.68C202.001 46.24 226.001 32 257.561 32C275.766 31.9876 293.798 35.5377 310.641 42.45C355.051 60.56 384.041 85.27 397.361 98.39C397.39 98.4141 397.417 98.4409 397.441 98.47C406.402 107.428 414.691 117.034 422.241 127.21C428.572 136.084 427.895 145.874 427.444 152.374L427.441 152.43C427.432 152.537 427.421 152.649 427.409 152.764C427.381 153.045 427.351 153.345 427.351 153.65C431.074 150.963 435.549 149.514 440.141 149.51C445.865 149.475 451.366 151.729 455.421 155.77L489.691 189.69ZM254.051 216.67L280.161 242.79C286.173 248.809 289.542 256.975 289.521 265.483C289.5 273.991 286.092 282.14 280.051 288.13L111.351 468.83C105.031 475.5 97.0706 479.67 88.1806 480H87.0006C78.4915 479.972 70.3373 476.587 64.3106 470.58C64.2848 470.559 64.2613 470.536 64.2406 470.51L25.2406 431.08C18.9781 424.726 15.6415 416.053 16.0306 407.14C16.4306 398.25 20.7706 390.31 27.3806 384.08L208.911 216.55C221.427 204.163 241.6 204.216 254.051 216.67Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;