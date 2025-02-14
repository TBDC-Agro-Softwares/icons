"use strict";const e=require("vue"),C=e.defineComponent({__name:"TILogoAndroid",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,i=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,o)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o[0]||(o[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M330 65.23C356.42 81.69 376 106.71 384.22 136C386.485 143.797 387.735 151.853 387.94 159.97H124.08C124.282 151.843 125.532 143.777 127.8 135.97C136 106.71 155.6 81.69 182 65.23C183.473 64.2767 184.967 63.37 186.48 62.51C187.993 61.65 189.527 60.8133 191.08 60L186 50.92L170.19 22.31C169.128 20.2799 169.88 17.7732 171.884 16.6626C173.888 15.552 176.412 16.2433 177.57 18.22L198.75 56.37C200.35 55.7 201.97 55.03 203.61 54.37C205.243 53.7233 206.893 53.1033 208.56 52.51C239.303 41.692 272.817 41.692 303.56 52.51C304.736 52.9256 305.898 53.3711 307.055 53.8148C307.541 54.0009 308.025 54.1868 308.51 54.37C310.15 54.99 311.77 55.66 313.37 56.37L334.55 18.17C335.293 16.8286 336.707 15.9974 338.24 16C338.941 16.0046 339.629 16.1869 340.24 16.53C341.22 17.0698 341.945 17.9775 342.254 19.0525C342.564 20.1276 342.433 21.2817 341.89 22.26L326 50.92L320.92 60C322.453 60.8333 323.98 61.6833 325.5 62.55C327.02 63.4167 328.52 64.31 330 65.23ZM184 108C184 114.627 189.373 120 196 120C202.627 120 208 114.627 208 108C208 101.373 202.627 96 196 96C189.373 96 184 101.373 184 108ZM316 120C309.373 120 304 114.627 304 108C304 101.373 309.373 96 316 96C322.627 96 328 101.373 328 108C328 114.627 322.627 120 316 120Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M48 204C48 188.536 60.536 176 76 176C91.464 176 104 188.536 104 204V332C104 347.464 91.464 360 76 360C60.536 360 48 347.464 48 332V204Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M408 204C408 188.536 420.536 176 436 176C451.464 176 464 188.536 464 204V332C464 347.464 451.464 360 436 360C420.536 360 408 347.464 408 332V204Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M124 176V368C124 385.673 138.327 400 156 400H176V468C176 483.464 188.536 496 204 496C219.464 496 232 483.464 232 468V400H280V468C280 483.464 292.536 496 308 496C323.464 496 336 483.464 336 468V400H356C373.673 400 388 385.673 388 368V176H124Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=C;
