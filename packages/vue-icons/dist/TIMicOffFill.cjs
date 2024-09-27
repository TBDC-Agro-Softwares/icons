"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),C=e.defineComponent({__name:"TIMicOffFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M249.14 49C221.52 48.4931 195.608 62.3324 180.67 85.57C179.649 87.1556 179.874 89.2391 181.21 90.57L324.59 234C325.163 234.57 326.023 234.739 326.769 234.428C327.515 234.117 328.001 233.388 328 232.58V129.91C328 86 293 49.6 249.14 49ZM76.6863 53.6863C82.8479 47.5247 92.7847 47.4391 99.0511 53.4296L99.3137 53.6863L435.314 389.686C441.562 395.935 441.562 406.065 435.314 412.314C429.152 418.475 419.215 418.561 412.949 412.57L412.686 412.314L76.6863 76.3137C70.4379 70.0653 70.4379 59.9347 76.6863 53.6863ZM392 241V209.45C392 200.84 385.38 193.45 376.77 193.02C372.398 192.809 368.131 194.399 364.962 197.418C361.794 200.438 360 204.623 360 209V241C360.004 249.2 359.106 257.376 357.32 265.38C357.172 266.044 357.372 266.737 357.85 267.22L380.44 289.81C380.922 290.292 381.616 290.495 382.282 290.35C382.948 290.204 383.493 289.729 383.73 289.09C389.216 273.651 392.013 257.385 392 241ZM136 241C136.198 302.774 186.226 352.802 248 353C264.275 353.018 280.354 349.458 295.1 342.57C296.245 342.023 297.61 342.255 298.51 343.15L316.91 361.54C317.806 362.431 318.228 363.693 318.049 364.943C317.869 366.194 317.11 367.286 316 367.89C299.865 376.577 282.212 382.083 264 384.11V433H312C316.377 433 320.562 434.794 323.582 437.962C326.601 441.131 328.191 445.398 327.98 449.77C327.55 458.38 320.16 465 311.55 465H184C179.623 465 175.438 463.206 172.418 460.038C169.399 456.869 167.809 452.602 168.02 448.23C168.45 439.62 175.84 433 184.45 433H232V384.11C160.1 376.12 104 315 104 241V209C104 204.623 105.794 200.438 108.962 197.418C112.131 194.399 116.398 192.809 120.77 193.02C129.38 193.45 136 200.84 136 209.45V241ZM169.231 215.572C169.977 215.261 170.837 215.43 171.41 216L270.11 314.74C270.618 315.24 270.821 315.972 270.644 316.662C270.467 317.353 269.936 317.896 269.25 318.09C241.393 325.892 211.503 317.751 191.45 296.9C176.442 281.764 168.014 261.316 168 240V217.42C167.999 216.612 168.485 215.883 169.231 215.572Z",fill:"currentColor"},null,-1)]),6))}});exports.default=C;