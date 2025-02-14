"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIGrowerOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,i=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,C)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C[0]||(C[0]=[e.createElementVNode("path",{d:"M122.074 140.443C121.985 140.301 121.925 140.231 121.916 140.229L122.074 140.443Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M332.288 277.292C349.302 253.923 358.8 222.355 352.619 185.073C370.566 180.911 385.653 175.574 396.545 169.326C407.915 162.803 416 154.511 416 144.5C416 139.009 413.525 134.01 409.539 129.632C405.573 125.277 399.945 121.337 393.109 117.804C379.947 111.002 361.615 105.356 339.953 101.274C329.163 58.5417 297.335 24 255 24C212.599 24 180.739 58.6481 169.997 101.473C148.623 105.572 130.548 111.202 117.573 117.969C110.831 121.486 105.28 125.404 101.369 129.734C97.4365 134.087 94.9998 139.052 94.9998 144.5C94.9998 154.472 103.023 162.738 114.314 169.245C125.124 175.475 140.097 180.801 157.913 184.964C151.696 222.293 161.196 253.9 178.226 277.292C197.981 304.426 228.32 320.889 254.983 320.999L254.994 320.999L255.494 321H255.505L255.515 321C282.182 320.896 312.529 304.431 332.288 277.292ZM122.074 140.443C121.986 140.302 121.926 140.231 121.916 140.229L122.074 140.443ZM121.916 148.77C121.924 148.77 121.985 148.7 122.074 148.557C121.984 148.701 121.924 148.771 121.916 148.77ZM306.418 258.457C291.477 278.979 269.96 289 255.263 289H255.251C240.554 289 219.037 278.979 204.096 258.457C192.223 242.148 184.743 219.381 189.398 190.699C209.533 193.462 231.923 195 255.5 195C278.891 195 301.115 193.486 321.126 190.764C325.759 219.415 318.283 242.161 306.418 258.457ZM198 134C198 86.9713 227.009 56 255 56C282.99 56 312 86.9713 312 134C312 142.837 319.163 150 328 150C336.576 150 343.576 143.253 343.981 134.777C349.046 135.921 353.793 137.154 358.187 138.46C364.956 140.471 370.472 142.534 374.826 144.5C370.472 146.466 364.956 148.529 358.187 150.54C333.109 157.991 296.796 163 255.5 163C214.204 163 177.891 157.991 152.813 150.54C146.044 148.529 140.528 146.466 136.174 144.5C140.528 142.534 146.044 140.471 152.813 138.46C156.92 137.239 161.335 136.083 166.031 135.002C166.548 143.372 173.5 150 182 150C190.836 150 198 142.837 198 134Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M416.965 476.001C429.922 476.001 440.789 469.327 446.534 459.834C452.321 450.27 452.856 437.885 445.243 427.046C402.303 365.906 333.335 326.18 255.5 326.18C177.664 326.18 108.697 365.906 65.7563 427.046C58.1435 437.885 58.6785 450.27 64.466 459.834C70.2108 469.327 81.077 476.001 94.0342 476.001H416.965ZM255.5 358.18C321.395 358.18 380.436 391.436 417.964 443.896C417.69 443.959 417.359 444.001 416.965 444.001H94.0342C93.64 444.001 93.3098 443.959 93.0354 443.896C130.564 391.436 189.605 358.18 255.5 358.18Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
