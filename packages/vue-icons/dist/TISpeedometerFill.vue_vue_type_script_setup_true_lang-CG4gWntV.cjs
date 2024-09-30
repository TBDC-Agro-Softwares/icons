"use strict";const e=require("vue"),C=e.defineComponent({__name:"TISpeedometerFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M425.7 118.25C333.907 27.0053 186.297 24.9816 92.0367 113.676C-2.2232 202.37 -9.17617 349.83 76.32 447L76.5 447.2C76.83 447.55 77.14 447.91 77.5 448.25C78.24 449.09 79.08 450.04 80.07 451.03C87.9186 459.372 98.8878 464.068 110.342 463.988C121.795 463.908 132.698 459.061 140.43 450.61C170.183 418.274 212.118 399.873 256.06 399.873C300.002 399.873 341.937 418.274 371.69 450.61C379.48 459.106 390.475 463.949 402.002 463.96C413.529 463.971 424.533 459.151 432.34 450.67L435.55 447.17L435.73 446.97C519.852 351.979 515.47 207.913 425.73 118.21L425.7 118.25ZM240 128C240 119.163 247.163 112 256 112C264.837 112 272 119.163 272 128V160C272 168.837 264.837 176 256 176C247.163 176 240 168.837 240 160V128ZM128 304H96C87.1634 304 80 296.837 80 288C80 279.163 87.1634 272 96 272H128C136.837 272 144 279.163 144 288C144 296.837 136.837 304 128 304ZM176.8 208.8C170.552 215.043 160.428 215.043 154.18 208.8L131.55 186.18C125.301 179.931 125.301 169.799 131.55 163.55C137.799 157.301 147.931 157.301 154.18 163.55L176.8 186.18C183.043 192.428 183.043 202.552 176.8 208.8ZM326.1 231.9L278.6 307.4C276.657 310.093 274.293 312.457 271.6 314.4C258.069 323.84 239.461 320.632 229.871 307.207C220.281 293.781 223.282 275.138 236.6 265.4L312.1 217.9C315.615 215.45 320.285 215.45 323.8 217.9C328.287 221.14 329.315 227.395 326.1 231.9ZM357.82 208.8C351.529 214.777 341.621 214.65 335.486 208.514C329.35 202.379 329.224 192.471 335.2 186.18L357.82 163.55C364.069 157.301 374.201 157.301 380.45 163.55C386.699 169.799 386.699 179.931 380.45 186.18L357.82 208.8ZM416 304H384C375.163 304 368 296.837 368 288C368 279.163 375.163 272 384 272H416C424.837 272 432 279.163 432 288C432 296.837 424.837 304 416 304Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=C;