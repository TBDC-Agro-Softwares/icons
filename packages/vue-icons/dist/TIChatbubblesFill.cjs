"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=e.defineComponent({__name:"TIChatbubblesFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M430.311 403.6C433.357 404.851 436.608 405.529 439.901 405.6C446.276 405.608 452.393 403.079 456.901 398.57C461.41 394.062 463.939 387.945 463.931 381.57C463.884 379.16 463.507 376.768 462.811 374.46L447.071 318.52C447.393 317.804 447.753 317.106 448.151 316.43L448.301 316.16C448.413 315.999 448.53 315.843 448.648 315.685C448.699 315.617 448.75 315.549 448.801 315.48L449.541 314.48L449.731 314.2C469.453 284.892 480.001 250.376 480.031 215.05C480.181 167.51 461.461 122.45 427.301 88.1798C391.161 51.9998 342.511 31.9998 290.301 31.9998C246.652 31.9581 204.254 46.5802 169.911 73.5198C136.431 99.9498 113.151 136.9 104.361 177.52C101.662 189.864 100.3 202.464 100.301 215.1C100.183 264.084 119.667 311.079 154.411 345.61C189.621 380.84 236.821 400.24 287.301 400.24C307.051 400.24 331.661 393.91 338.731 391.97C351.771 388.39 364.201 383.72 365.581 383.2C366.738 382.765 367.964 382.541 369.201 382.54C370.542 382.525 371.873 382.784 373.111 383.3L373.531 383.47L430.311 403.6ZM289.581 417.29C294.025 418.367 297.78 421.323 299.871 425.39C302.555 430.752 301.788 437.197 297.921 441.78C293.901 446.427 287.593 449.134 282.437 451.348C281.18 451.888 279.991 452.398 278.921 452.9C255.48 463.896 229.902 469.584 204.011 469.56C183.231 469.56 161.301 465.4 140.231 457.56C138.388 456.86 136.353 456.86 134.511 457.56L81.0008 478.21C78.1482 479.394 75.0895 480.003 72.0008 480C66.5095 479.996 61.1809 478.135 56.8808 474.72L56.4208 474.33C49.802 468.701 46.7421 459.935 48.4208 451.41C49.3793 446.44 50.677 439.696 52.0666 432.475C54.287 420.936 56.7417 408.179 58.4208 399.5C59.0008 395 59.0008 393 56.4008 388.67C28.334 343.485 24.2231 287.405 45.4008 238.61C49.1208 230 57.0008 221.42 57.0008 221.42C61.4019 216.43 68.432 214.684 74.6563 217.036C80.8805 219.388 84.9996 225.346 85.0008 232C85.0008 232 85.0008 234.42 86.4008 244.16C92.5832 286.887 112.478 326.449 143.091 356.89C177.525 391.39 223.284 412.259 271.911 415.64C273.335 415.745 274.881 415.801 276.495 415.86C280.716 416.013 285.4 416.183 289.581 417.29Z",fill:"currentColor"},null,-1)]),6))}});exports.default=o;