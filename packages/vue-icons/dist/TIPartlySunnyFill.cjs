"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=e.defineComponent({__name:"TIPartlySunnyFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M320 80C320 88.8366 327.163 96 336 96C344.837 96 352 88.8366 352 80V48C352 39.1634 344.837 32 336 32C327.163 32 320 39.1634 320 48V80ZM422.65 236.39C411.65 230.203 399.99 225.268 387.89 221.68C383.93 220.501 380.579 217.834 378.54 214.24C367.112 193.871 351.699 176.013 333.22 161.73C317.838 149.942 300.471 141.001 281.94 135.33C280.698 134.964 279.773 133.921 279.561 132.643C279.348 131.366 279.883 130.079 280.94 129.33H281C297.134 118.004 316.378 111.95 336.09 112C388.52 112.05 431.61 154.84 432 207.27C432.069 216.284 430.881 225.264 428.47 233.95C428.147 235.14 427.293 236.115 426.156 236.592C425.019 237.069 423.725 236.994 422.65 236.39ZM106 480H340C373.2 480 404.11 468.54 427 447.72C450.87 426.07 464 396.05 464 363.2C464 331.71 453 304.11 432.26 283.38C415.49 266.67 393.09 254.99 367.09 249.38C362.148 248.316 357.999 244.979 355.9 240.38C346.339 219.497 331.863 201.24 313.71 187.17C290.48 169.39 262.23 160 232 160C197.567 159.9 164.301 172.472 138.54 195.32C112.06 218.91 94.67 252 88.23 291C88.22 291.05 88.2 291.05 88.14 291.05C65.31 294.68 44.38 304.21 29.14 317.89C10.08 335 0 358.14 0 384.8C0 415.35 11.23 440.44 32.47 457.36C51.08 472.17 76.5 480 106 480ZM496 224H464C455.163 224 448 216.837 448 208C448 199.163 455.163 192 464 192H496C504.837 192 512 199.163 512 208C512 216.837 504.837 224 496 224ZM245.49 133.49C241.246 133.497 237.174 131.809 234.18 128.8L211.55 106.18C205.301 99.9309 205.301 89.7991 211.55 83.55C217.799 77.3009 227.931 77.3009 234.18 83.55L256.8 106.18C261.373 110.756 262.74 117.635 260.265 123.612C257.79 129.589 251.959 133.487 245.49 133.49ZM411.735 123.612C414.21 129.589 420.041 133.487 426.51 133.49C430.754 133.497 434.826 131.809 437.82 128.8L460.45 106.18C466.699 99.9309 466.699 89.7991 460.45 83.55C454.201 77.3009 444.069 77.3009 437.82 83.55L415.2 106.18C410.627 110.756 409.26 117.635 411.735 123.612Z",fill:"currentColor"},null,-1)]),6))}});exports.default=o;