"use strict";const e=require("vue"),o=e.defineComponent({__name:"TILogoWhatsappCircle",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,i=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,C)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C[0]||(C[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 256C0 397.385 114.615 512 256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256ZM416.662 246.203C416.629 330.115 348.368 398.393 264.438 398.427H264.375C238.898 398.418 213.865 392.026 191.63 379.899L110.933 401.067L132.529 322.185C119.207 299.099 112.198 272.912 112.209 246.082C112.243 162.151 180.531 93.8667 264.436 93.8667C305.158 93.8843 343.379 109.738 372.119 138.511C400.86 167.283 416.679 205.529 416.662 246.203Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M147.487 364.898L195.374 352.336L199.994 355.078C219.42 366.606 241.688 372.705 264.392 372.715H264.443C334.18 372.715 390.937 315.955 390.966 246.19C390.979 212.382 377.831 180.594 353.943 156.678C330.055 132.763 298.287 119.585 264.493 119.573C194.702 119.573 137.944 176.327 137.916 246.087C137.907 269.995 144.596 293.277 157.261 313.421L160.269 318.208L147.487 364.898ZM335.924 278.973C338.576 280.255 340.368 281.12 341.133 282.397C342.084 283.983 342.084 291.599 338.916 300.485C335.744 309.37 320.55 317.478 313.241 318.57C306.688 319.55 298.396 319.958 289.285 317.062C283.759 315.31 276.676 312.97 267.6 309.051C231.943 293.653 207.845 259.093 203.291 252.561C202.972 252.103 202.748 251.783 202.624 251.618L202.594 251.577C200.581 248.891 187.093 230.895 187.093 212.271C187.093 194.751 195.7 185.567 199.661 181.34C199.932 181.051 200.182 180.784 200.406 180.54C203.892 176.732 208.013 175.78 210.549 175.78C213.084 175.78 215.622 175.804 217.838 175.915C218.111 175.929 218.396 175.926 218.691 175.925C220.907 175.911 223.67 175.895 226.396 182.444C227.445 184.964 228.98 188.7 230.598 192.639C233.87 200.608 237.487 209.412 238.123 210.686C239.075 212.59 239.708 214.811 238.44 217.35C238.25 217.731 238.074 218.091 237.906 218.433C236.954 220.378 236.253 221.808 234.637 223.695C234.002 224.437 233.344 225.237 232.687 226.036C231.38 227.63 230.071 229.223 228.932 230.358C227.028 232.255 225.045 234.314 227.263 238.122C229.482 241.93 237.116 254.384 248.424 264.47C260.579 275.312 271.143 279.894 276.498 282.218C277.543 282.671 278.39 283.038 279.012 283.349C282.813 285.253 285.033 284.935 287.252 282.397C289.47 279.859 296.76 271.291 299.295 267.483C301.83 263.677 304.367 264.31 307.853 265.58C311.34 266.85 330.04 276.05 333.844 277.954C334.586 278.326 335.28 278.661 335.924 278.973Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
