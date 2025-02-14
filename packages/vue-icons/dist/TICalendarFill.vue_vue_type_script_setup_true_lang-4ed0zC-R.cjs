"use strict";const e=require("vue"),o=e.defineComponent({__name:"TICalendarFill",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const l=C,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(s,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M416 64H400V48.45C400 39.84 393.38 32.45 384.77 32.02C380.398 31.8094 376.131 33.3989 372.962 36.4182C369.794 39.4376 368 43.6232 368 48V64H144V48.45C144 39.84 137.38 32.45 128.77 32.02C124.398 31.8094 120.131 33.3989 116.962 36.4182C113.794 39.4376 112 43.6232 112 48V64H96C60.6538 64 32 92.6538 32 128V416C32 451.346 60.6538 480 96 480H416C451.346 480 480 451.346 480 416V128C480 92.6538 451.346 64 416 64ZM136 416C122.745 416 112 405.255 112 392C112 378.745 122.745 368 136 368C149.255 368 160 378.745 160 392C160 405.255 149.255 416 136 416ZM136 336C122.745 336 112 325.255 112 312C112 298.745 122.745 288 136 288C149.255 288 160 298.745 160 312C160 325.255 149.255 336 136 336ZM216 416C202.745 416 192 405.255 192 392C192 378.745 202.745 368 216 368C229.255 368 240 378.745 240 392C240 405.255 229.255 416 216 416ZM216 336C202.745 336 192 325.255 192 312C192 298.745 202.745 288 216 288C229.255 288 240 298.745 240 312C240 325.255 229.255 336 216 336ZM296 416C282.745 416 272 405.255 272 392C272 378.745 282.745 368 296 368C309.255 368 320 378.745 320 392C320 405.255 309.255 416 296 416ZM296 336C282.745 336 272 325.255 272 312C272 298.745 282.745 288 296 288C309.255 288 320 298.745 320 312C320 325.255 309.255 336 296 336ZM296 256C282.745 256 272 245.255 272 232C272 218.745 282.745 208 296 208C309.255 208 320 218.745 320 232C320 245.255 309.255 256 296 256ZM376 336C366.293 336 357.542 330.153 353.827 321.184C350.112 312.216 352.165 301.893 359.029 295.029C365.893 288.166 376.216 286.112 385.184 289.827C394.153 293.542 400 302.293 400 312C400 325.255 389.255 336 376 336ZM376 256C366.293 256 357.542 250.153 353.827 241.184C350.112 232.216 352.165 221.893 359.029 215.029C365.893 208.166 376.216 206.112 385.184 209.827C394.153 213.542 400 222.293 400 232C400 245.255 389.255 256 376 256ZM448 136V152C448 156.418 444.418 160 440 160H72C67.5817 160 64 156.418 64 152V128C64.0494 110.347 78.3474 96.0495 96 96H416C433.653 96.0495 447.951 110.347 448 128V136Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
