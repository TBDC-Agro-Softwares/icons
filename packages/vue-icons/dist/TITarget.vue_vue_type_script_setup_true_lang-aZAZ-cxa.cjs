"use strict";const e=require("vue"),o=e.defineComponent({__name:"TITarget",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const C=l,i=e.computed(()=>["icon",C.size,{[C.type]:C.type&&!C.color,"is-clickable":C.clickable}]);return(n,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{d:"M200.012 200.235C211.711 188.454 224.288 181.432 240.227 177.782C244.135 176.886 250.248 176.549 259.139 176.74C271.033 176.995 273.12 177.306 281.191 180.031C294.233 184.433 302.773 189.631 312.182 198.893C321.588 208.15 326.978 216.055 331.034 226.539C335.065 236.96 336.52 244.698 336.54 255.81C336.578 278.068 328.876 296.712 313.148 312.431C297.448 328.124 278.731 335.827 256.302 335.827C212.45 335.827 177.03 300.207 177.03 256.105C177.03 234.34 184.729 215.623 200.012 200.235Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M237.087 64.2559C237.087 45.8654 240.021 40.4434 252.095 36.5257C257.551 34.755 267.069 37.6419 271.528 42.4186C275.593 46.7752 276.499 50.7557 276.499 64.2559C276.499 76.655 276.545 76.9382 278.611 77.3321C279.772 77.5525 285.578 78.6339 291.513 79.7332C361.998 92.7935 420.189 150.955 433.256 221.403C434.356 227.335 435.438 233.138 435.658 234.299C436.052 236.363 436.336 236.409 448.741 236.409C458.064 236.409 462.342 236.794 464.897 237.861C479.222 243.843 481.024 263.391 468.088 272.477C464.06 275.306 463.894 275.335 450.025 275.634C436.503 275.926 436.014 276.006 435.641 277.979C435.429 279.103 434.356 284.876 433.256 290.808C420.189 361.256 361.998 419.417 291.513 432.478C285.578 433.577 279.802 434.65 278.678 434.862C276.704 435.234 276.624 435.723 276.332 449.238C276.033 463.1 276.004 463.266 273.173 467.292C264.082 480.221 244.525 478.42 238.539 464.103C237.472 461.549 237.087 457.273 237.087 447.955C237.087 435.556 237.041 435.273 234.975 434.879C233.814 434.658 228.008 433.577 222.073 432.478C167.418 422.351 118.929 384.77 94.342 333.483C88.3514 320.985 82.7811 304.02 80.33 290.808C79.2302 284.876 78.1483 279.073 77.9277 277.912C77.5336 275.847 77.2502 275.801 64.8447 275.801C55.5219 275.801 51.2437 275.417 48.6885 274.349C32.8382 267.731 32.8382 244.48 48.6885 237.861C51.2437 236.794 55.5219 236.409 64.8447 236.409C77.2502 236.409 77.5336 236.363 77.9277 234.299C78.1483 233.138 79.2302 227.335 80.33 221.403C82.7764 208.216 88.342 191.253 94.3317 178.728C118.839 127.489 167.385 89.8663 222.073 79.7332C228.008 78.6339 233.814 77.5525 234.975 77.3321C237.041 76.9382 237.087 76.655 237.087 64.2559ZM394.895 233.127C384.766 173.946 339.254 128.257 280.394 118.181C267.717 116.01 246.377 115.856 234.495 117.849C166.087 129.321 116.973 187.101 116.973 256.105C116.973 324.849 165.773 382.505 233.802 394.136C248.29 396.613 272.074 396.163 285.625 393.155C327.72 383.811 363.289 356.238 381.961 318.476C392.02 298.132 395.609 283.608 396.328 260.326C396.742 246.943 396.511 242.573 394.895 233.127Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
