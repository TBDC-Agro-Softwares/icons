"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIMedicalOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,L=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(L.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M240.001 48L239.471 48.0043C222.042 48.2869 208.001 62.5036 208.001 80L208.058 172.778L127.701 126.225C112.586 117.529 93.3373 122.717 84.6632 137.789L68.2033 166.389C64.0365 173.597 62.9086 182.2 65.0843 190.268L65.2159 190.741C67.4687 198.604 72.7023 205.287 79.8126 209.356L160.295 256L79.7378 302.687C64.7738 311.406 59.6241 330.502 68.1571 345.53L84.6766 374.207L84.9399 374.656C93.7319 389.375 112.747 394.374 127.67 385.789L208.066 339.212L208.001 431.989C208.001 449.673 222.328 464 240.001 464H272.001L272.53 463.996C289.959 463.713 304.001 449.496 304.001 432L303.943 339.121L384.3 385.675C399.415 394.37 418.664 389.183 427.338 374.111L443.805 345.527C447.975 338.313 449.103 329.71 446.927 321.642L446.795 321.169C444.543 313.306 439.309 306.623 432.199 302.554L351.717 255.909L432.273 209.223C447.262 200.523 452.416 181.368 443.822 166.331L427.325 137.693L427.061 137.244C418.269 122.525 399.254 117.526 384.332 126.111L303.935 172.687L304.001 80.0113C304.001 62.3269 289.674 48 272.001 48H240.001ZM240.07 193.817L240.001 80H272.001L271.921 193.336C271.857 200.513 275.643 207.175 281.843 210.792L282.202 210.996C288.337 214.408 295.825 214.356 301.921 210.836L399.848 154.104L415.796 181.787L317.738 238.617C311.544 242.251 307.785 248.815 307.785 255.91L307.789 256.304C307.925 263.247 311.657 269.636 317.664 273.16L415.799 330.034L399.858 357.706L301.951 300.985C295.715 297.385 288.053 297.402 281.853 301.018C275.766 304.569 272.005 311.055 271.932 318.083L272.001 432H240.001L240.08 318.564C240.145 311.387 236.358 304.725 230.158 301.108L229.799 300.904C223.664 297.493 216.176 297.544 210.08 301.064L112.153 357.795L96.2117 330.124L194.273 273.293C200.467 269.659 204.226 263.095 204.226 256L204.223 255.606C204.086 248.663 200.354 242.274 194.348 238.75L96.2117 181.875L112.143 154.194L210.05 210.915C216.286 214.515 223.948 214.498 230.148 210.882C236.235 207.331 239.996 200.845 240.07 193.817Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;