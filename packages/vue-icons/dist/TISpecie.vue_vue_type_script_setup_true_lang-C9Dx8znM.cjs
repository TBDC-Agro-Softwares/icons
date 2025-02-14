"use strict";const e=require("vue"),o=e.defineComponent({__name:"TISpecie",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const C=t,i=e.computed(()=>["icon",C.size,{[C.type]:C.type&&!C.color,"is-clickable":C.clickable}]);return(s,l)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[e.createElementVNode("path",{d:"M10.562 4.64787C11.5104 4.44967 12.4896 4.44967 13.438 4.64787L14.4139 3.67139C14.8044 3.28067 15.438 3.28087 15.8286 3.67147C16.2191 4.062 16.2194 4.69545 15.8289 5.08597L15.486 5.42887C16.7223 6.14066 17.7129 7.21175 18.326 8.49987H20C20.5523 8.49987 21 8.94758 21 9.49987C21 10.0522 20.5523 10.4999 20 10.4999H18.93C18.976 10.8269 19 11.1599 19 11.4999V12.4999H20C20.5523 12.4999 21 12.9476 21 13.4999C21 14.0522 20.5523 14.4999 20 14.4999H19V15.4999C19 15.8399 18.976 16.1729 18.93 16.4999H20C20.5523 16.4999 21 16.9476 21 17.4999C21 18.0522 20.5523 18.4999 20 18.4999H18.326C17.7586 19.6975 16.8629 20.7095 15.7431 21.4181C14.6232 22.1267 13.3252 22.5029 12 22.5029C10.6748 22.5029 9.37677 22.1267 8.25692 21.4181C7.13707 20.7095 6.24138 19.6975 5.674 18.4999H4C3.44772 18.4999 3 18.0522 3 17.4999C3 16.9476 3.44772 16.4999 4 16.4999H5.07C5.023 16.1686 4.99961 15.8344 5 15.4999V14.4999H4C3.44772 14.4999 3 14.0522 3 13.4999C3 12.9476 3.44772 12.4999 4 12.4999H5V11.4999C5 11.1599 5.024 10.8269 5.07 10.4999H4C3.44772 10.4999 3 10.0522 3 9.49987C3 8.94758 3.44772 8.49987 4 8.49987H5.674C6.28697 7.21138 7.27751 6.13993 8.514 5.42787L8.17186 5.08572C7.78104 4.69491 7.78141 4.06113 8.17265 3.67072C8.56337 3.28082 9.19616 3.28121 9.58636 3.67164L10.563 4.64887L10.562 4.64787ZM12 6.49987C10.6739 6.49987 9.40215 7.02665 8.46447 7.96433C7.52678 8.90202 7 10.1738 7 11.4999V15.4999C7 16.8259 7.52678 18.0977 8.46447 19.0354C9.40215 19.9731 10.6739 20.4999 12 20.4999C13.3261 20.4999 14.5979 19.9731 15.5355 19.0354C16.4732 18.0977 17 16.8259 17 15.4999V11.4999C17 10.1738 16.4732 8.90202 15.5355 7.96433C14.5979 7.02665 13.3261 6.49987 12 6.49987ZM9 15.4999C9 14.9476 9.44772 14.4999 10 14.4999H14C14.5523 14.4999 15 14.9476 15 15.4999C15 16.0522 14.5523 16.4999 14 16.4999H10C9.44772 16.4999 9 16.0522 9 15.4999ZM9 11.4999C9 10.9476 9.44772 10.4999 10 10.4999H14C14.5523 10.4999 15 10.9476 15 11.4999C15 12.0522 14.5523 12.4999 14 12.4999H10C9.44772 12.4999 9 12.0522 9 11.4999Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
