"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),C=e.defineComponent({__name:"TIInfiniteOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M190.64 161.17C171.554 150.066 151.271 144 130 144C67.1215 144 16 194.084 16 256C16 317.916 67.1215 368 130 368C169.083 368 206.626 347.266 235.9 314.695C241.807 308.123 241.268 298.007 234.695 292.1C228.123 286.193 218.007 286.732 212.1 293.305C188.389 319.686 158.849 336 130 336C84.6494 336 48 300.095 48 256C48 211.905 84.6494 176 130 176C158.841 176 185.952 191.774 210.394 218.744C219.253 228.519 227.087 239.053 233.777 249.581C235.777 252.729 237.544 255.673 239.07 258.354L239.813 259.672C240.175 260.319 240.502 260.916 240.796 261.46L241.384 262.566L241.72 263.217C241.762 263.3 241.81 263.395 241.865 263.502L242.604 264.917C243.081 265.814 243.627 266.818 244.243 267.922L244.643 268.635C246.53 271.985 248.722 275.659 251.214 279.581C258.822 291.553 267.722 303.519 277.894 314.744C291.162 329.385 305.635 341.681 321.36 350.83C340.446 361.934 360.729 368 382 368C444.878 368 496 317.916 496 256C496 194.084 444.878 144 382 144C342.917 144 305.374 164.734 276.1 197.305C270.193 203.877 270.732 213.993 277.305 219.9C283.877 225.807 293.993 225.268 299.9 218.695C323.611 192.314 353.151 176 382 176C427.351 176 464 211.905 464 256C464 300.095 427.351 336 382 336C353.159 336 326.048 320.226 301.606 293.256C292.747 283.481 284.913 272.947 278.223 262.419C276.223 259.271 274.456 256.327 272.93 253.646L272.187 252.328C271.825 251.681 271.498 251.084 271.204 250.54L270.616 249.434L270.281 248.784C270.239 248.701 270.19 248.606 270.135 248.498L269.396 247.083C268.919 246.186 268.373 245.182 267.757 244.078L267.357 243.365C265.47 240.015 263.278 236.341 260.786 232.419C253.178 220.447 244.278 208.481 234.106 197.256C220.838 182.615 206.365 170.319 190.64 161.17Z",fill:"currentColor"},null,-1)]),6))}});exports.default=C;