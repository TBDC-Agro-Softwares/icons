"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIShuffleFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(L,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M388.686 100.686C394.848 94.5247 404.785 94.4391 411.051 100.43L411.314 100.686L459.314 148.686C465.475 154.848 465.561 164.785 459.57 171.051L459.314 171.314L411.314 219.314C405.065 225.562 394.935 225.562 388.686 219.314C382.525 213.152 382.439 203.215 388.43 196.949L388.686 196.686L409.373 176H362.81C341.628 176 321.832 186.48 309.923 203.961L309.564 204.493L301.314 216.873C296.414 224.226 286.481 226.215 279.127 221.314C271.871 216.479 269.839 206.741 274.496 199.419L274.686 199.127L282.938 186.744C300.565 160.307 330.117 144.322 361.848 144.005L362.81 144H409.373L388.686 123.314C382.525 117.152 382.439 107.215 388.43 100.949L388.686 100.686ZM388.686 292.686C394.848 286.525 404.785 286.439 411.051 292.43L411.314 292.686L459.314 340.686C465.475 346.848 465.561 356.785 459.57 363.051L459.314 363.314L411.314 411.314C405.065 417.562 394.935 417.562 388.686 411.314C382.525 405.152 382.439 395.215 388.43 388.949L388.686 388.686L409.373 368H362.81C331.036 368 301.342 352.279 283.475 326.053L282.937 325.255L256 284.846L229.062 325.256C211.435 351.693 181.883 367.678 150.152 367.995L149.19 368H64C55.1634 368 48 360.837 48 352C48 343.269 54.9939 336.171 63.6851 336.003L64 336H149.19C170.372 336 190.168 325.52 202.078 308.037L202.437 307.505L236.771 256L202.438 204.496C190.686 186.871 170.985 176.215 149.831 176.003L149.19 176H64C55.1634 176 48 168.837 48 160C48 151.269 54.9939 144.171 63.6851 144.003L64 144H149.19C180.964 144 210.658 159.721 228.525 185.947L229.063 186.745L269.108 246.817C269.247 247.016 269.382 247.218 269.511 247.423L309.562 307.504C321.314 325.129 341.015 335.785 362.169 335.997L362.81 336H409.373L388.686 315.314C382.525 309.152 382.439 299.215 388.43 292.949L388.686 292.686Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
