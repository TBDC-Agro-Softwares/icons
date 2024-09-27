"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=e.defineComponent({__name:"TIPushOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M376 32C406.619 32 431.498 56.5731 431.992 87.0739L432 88V296C432 326.619 407.427 351.498 376.926 351.992L376 352H336C327.163 352 320 344.837 320 336C320 327.269 326.994 320.171 335.685 320.003L336 320H376C389.122 320 399.785 309.469 399.997 296.397L400 296V88C400 74.8777 389.469 64.2152 376.397 64.0032L376 64H136C122.878 64 112.215 74.5313 112.003 87.6031L112 88V296C112 309.122 122.531 319.785 135.603 319.997L136 320H176C184.837 320 192 327.163 192 336C192 344.731 185.006 351.829 176.315 351.997L176 352H136C105.381 352 80.502 327.427 80.0075 296.926L80 296V88C80 57.3813 104.573 32.502 135.074 32.0075L136 32H376ZM244.686 148.686C250.848 142.525 260.785 142.439 267.051 148.43L267.314 148.686L347.314 228.686C353.562 234.935 353.562 245.065 347.314 251.314C341.152 257.475 331.215 257.561 324.949 251.57L324.686 251.314L272 198.627V464C272 472.837 264.837 480 256 480C247.269 480 240.171 473.006 240.003 464.315L240 464V198.627L187.314 251.314C181.152 257.475 171.215 257.561 164.949 251.57L164.686 251.314C158.525 245.152 158.439 235.215 164.43 228.949L164.686 228.686L244.686 148.686Z",fill:"currentColor"},null,-1)]),6))}});exports.default=s;