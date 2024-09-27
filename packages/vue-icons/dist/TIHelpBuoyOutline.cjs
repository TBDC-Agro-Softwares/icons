"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({__name:"TIHelpBuoyOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 32C132.288 32 32 132.288 32 256C32 379.712 132.288 480 256 480C379.712 480 480 379.712 480 256C480 132.288 379.712 32 256 32ZM318.787 74.501C374.318 93.7081 418.292 137.682 437.499 193.213L333.627 199.508C327.725 191.412 320.588 184.275 312.492 178.373L318.787 74.501ZM348.62 230.658L445.476 224.788C447.137 234.946 448 245.372 448 256C448 266.628 447.137 277.054 445.476 287.212L348.62 281.342C350.824 273.269 352 264.772 352 256C352 247.228 350.824 238.731 348.62 230.658ZM333.627 312.492C327.725 320.588 320.588 327.725 312.492 333.627L318.787 437.499C374.318 418.292 418.292 374.318 437.499 318.787L333.627 312.492ZM281.342 348.62C273.269 350.824 264.772 352 256 352C247.228 352 238.731 350.824 230.658 348.62L224.788 445.476C234.946 447.137 245.372 448 256 448C266.628 448 277.054 447.137 287.212 445.476L281.342 348.62ZM74.501 318.787C93.7081 374.318 137.682 418.292 193.213 437.499L199.508 333.627C191.412 327.725 184.275 320.588 178.373 312.492L74.501 318.787ZM66.5241 287.212L163.38 281.342C161.176 273.269 160 264.772 160 256C160 247.228 161.176 238.731 163.38 230.658L66.5241 224.788C64.8635 234.946 64 245.372 64 256C64 266.628 64.8635 277.054 66.5241 287.212ZM199.508 178.373C191.412 184.275 184.275 191.412 178.373 199.508L74.501 193.213C93.7081 137.682 137.682 93.7081 193.213 74.501L199.508 178.373ZM287.212 66.5241L281.342 163.38C273.269 161.176 264.772 160 256 160C247.228 160 238.731 161.176 230.658 163.38L224.788 66.5241C234.946 64.8635 245.372 64 256 64C266.628 64 277.054 64.8635 287.212 66.5241ZM256 192C291.346 192 320 220.654 320 256C320 291.346 291.346 320 256 320C220.654 320 192 291.346 192 256C192 220.654 220.654 192 256 192Z",fill:"currentColor"},null,-1)]),6))}});exports.default=n;