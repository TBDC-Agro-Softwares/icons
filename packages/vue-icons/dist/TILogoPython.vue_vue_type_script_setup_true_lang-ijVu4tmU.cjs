"use strict";const e=require("vue"),n=e.defineComponent({__name:"TILogoPython",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M314 36.3799C295.41 33.3199 268.2 31.9099 249.73 31.9999C232.418 32.0199 215.138 33.485 198.07 36.3799C152.33 44.3799 144 61.0799 144 91.9199V128H256V144H107.62C66.0601 144 32.3301 193.67 32.0001 255.12V256C31.9857 266.744 33.0342 277.463 35.1301 288C44.4201 334.28 73.3601 368 107.62 368H128V314C128 282.7 148.84 254.05 183 247.9L192.87 246.67H314C319.088 246.69 324.154 246.017 329.06 244.67C352.128 238.51 368.131 217.556 368 193.68V91.9199C368 62.9999 343.32 41.1899 314 36.3799ZM194.93 105.5C186.679 105.528 179.225 100.576 176.054 92.9575C172.883 85.3395 174.622 76.561 180.456 70.7262C186.291 64.8915 195.07 63.1532 202.688 66.324C210.306 69.4948 215.258 76.9483 215.23 85.1999C215.233 90.5846 213.095 95.7495 209.287 99.5571C205.48 103.365 200.315 105.503 194.93 105.5Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M475.28 217C464.58 174.39 436.87 144 404.38 144H386.67V191.45C386.67 231.02 360.67 259.67 328.93 264.58C325.724 265.077 322.485 265.328 319.24 265.33H198.08C192.941 265.325 187.822 265.98 182.85 267.28C160.54 273.14 144 291.7 144 315.77V417.54C144 446.54 173.14 463.54 201.73 471.85C235.94 481.8 273.21 483.6 314.15 471.85C341.34 464.08 368 448.37 368 417.54V384H256V368H404.38C433.82 368 459.33 343.07 471.83 306.69C477.32 290.357 480.08 273.231 480 256C480.028 242.856 478.443 229.758 475.28 217ZM316.51 404C324.762 403.972 332.215 408.924 335.386 416.542C338.557 424.16 336.819 432.939 330.984 438.774C325.149 444.608 316.371 446.347 308.753 443.176C301.134 440.005 296.182 432.551 296.21 424.3C296.207 418.915 298.345 413.75 302.153 409.943C305.961 406.135 311.125 403.997 316.51 404Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
