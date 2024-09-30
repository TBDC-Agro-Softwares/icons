"use strict";const e=require("vue"),o=e.defineComponent({__name:"TILogoEdge",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,i=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,C)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C[0]||(C[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M178.12 298C177.533 317.276 184.219 336.067 196.85 350.64C202.731 357.52 209.663 363.426 217.39 368.14C225.234 373.118 233.622 377.181 242.39 380.25C251.349 383.48 260.589 385.87 269.99 387.39C279.346 388.918 288.81 389.691 298.29 389.7C309.488 389.766 320.669 388.828 331.7 386.9C342.108 384.964 352.376 382.345 362.44 379.06C372.514 375.745 382.384 371.842 392 367.37C401.79 362.89 411.71 357.99 421.91 352.53V447.45C410.93 452.844 399.663 457.635 388.16 461.8C377.089 465.733 365.824 469.097 354.41 471.88C342.968 474.702 331.348 476.747 319.63 478C307.514 479.315 295.337 479.983 283.15 480C266.784 480.039 250.475 478.088 234.58 474.19C219.321 470.471 204.582 464.875 190.7 457.53C177.109 450.318 164.477 441.429 153.1 431.07C141.762 420.8 131.887 409.024 123.75 396.07C115.504 382.867 109.111 368.593 104.75 353.65C100.256 337.803 98.0204 321.401 98.11 304.93C98.0303 287.108 100.574 269.371 105.66 252.29C110.546 235.919 117.897 220.387 127.46 206.23C137.013 192.094 148.683 179.51 162.06 168.92C176.016 157.86 191.513 148.899 208.06 142.32C198.644 151.755 191.268 163.025 186.39 175.43C181.298 187.693 177.933 200.602 176.39 213.79H335.56C335.56 197.69 333.95 183.69 330.67 171.65C327.39 159.61 322.14 149.6 314.8 141.65C307.46 133.7 298.17 127.65 286.64 123.73C275.11 119.81 261.21 117.73 244.92 117.73C225.384 117.743 205.957 120.644 187.27 126.34C168.099 131.986 149.7 139.98 132.49 150.14C115.237 160.381 99.2013 172.545 84.69 186.4C70.5486 199.876 58.2156 215.13 48 231.78C50.0853 213.272 54.1382 195.039 60.09 177.39C65.7759 160.47 73.3964 144.262 82.8 129.09C91.9675 114.45 102.855 100.961 115.23 88.91C127.534 76.8501 141.397 66.4914 156.45 58.11C171.789 49.5024 188.156 42.8697 205.16 38.37C223.405 34.1645 242.066 32.0277 260.79 32C272.262 32.0165 283.71 33.0471 295 35.08C306.298 37.1332 317.436 39.987 328.33 43.62C369.291 57.419 404.545 84.3657 428.61 120.27C440.261 137.867 449.125 157.158 454.89 177.46C460.975 198.552 464.042 220.398 464 242.35V298H178.12Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;