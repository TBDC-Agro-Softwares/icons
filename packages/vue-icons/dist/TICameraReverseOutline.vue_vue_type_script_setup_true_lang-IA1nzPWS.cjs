"use strict";const e=require("vue"),o=e.defineComponent({__name:"TICameraReverseOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,i=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,C)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C[0]||(C[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M210 80H302C315.21 80 327.324 86.0142 336.064 96.2028C336.567 96.7889 337.027 97.4107 337.44 98.0633L363.349 139L363.56 139.223C366.421 142.162 369.856 143.883 372.707 143.994L373 144H432C458.51 144 480 165.49 480 192V384C480 410.51 458.51 432 432 432H80C53.4903 432 32 410.51 32 384V192C32 165.49 53.4903 144 80 144H84V136C84 127.269 90.9939 120.171 99.6851 120.003L100 120H124C132.731 120 139.829 126.994 139.997 135.685L140 136V144C142.534 144 145.373 142.53 148.44 139.244L148.624 139.042L174.56 98.0633C174.891 97.5412 175.251 97.0389 175.639 96.5587L175.936 96.2028C184.676 86.0142 196.79 80 210 80ZM302.339 112.005L302 112H210C206.837 112 203.756 113.378 201.073 116.112L200.882 116.309L174.98 157.237C174.651 157.756 174.293 158.256 173.907 158.734L173.612 159.088C164.613 169.595 153.193 176 140 176H80C71.1634 176 64 183.163 64 192V384C64 392.837 71.1634 400 80 400H432C440.837 400 448 392.837 448 384V192C448 183.163 440.837 176 432 176H373C359.786 176 347.228 169.41 338.388 159.088C337.888 158.505 337.431 157.886 337.02 157.237L311.117 116.309L310.927 116.112C308.34 113.476 305.382 112.1 302.339 112.005ZM350.582 256.941C356.23 254.914 362.789 256.162 367.314 260.686C373.475 266.848 373.561 276.785 367.57 283.051L367.314 283.314L347.314 303.314C341.152 309.475 331.215 309.561 324.949 303.57L324.686 303.314L304.686 283.314C298.438 277.065 298.438 266.935 304.686 260.686C308.261 257.111 313.107 255.582 317.769 256.098C313.105 237.851 300.526 222.274 282.994 214.03C260.563 203.482 234.058 206.835 214.96 222.637C208.152 228.271 198.066 227.318 192.433 220.51C186.799 213.702 187.752 203.616 194.56 197.983C223.206 174.28 262.964 169.25 296.611 185.071C325.676 198.739 345.666 225.842 350.582 256.941ZM144.949 283.57C149.401 287.827 155.707 289.016 161.194 287.137C166.128 318.129 186.031 345.142 214.971 358.822C248.513 374.679 288.189 369.788 316.876 346.262C323.709 340.658 324.705 330.577 319.102 323.744C313.498 316.911 303.417 315.915 296.584 321.518L296.008 321.985C276.93 337.266 250.785 340.357 228.648 329.892C211.173 321.631 198.641 306.08 193.989 287.874C198.725 288.47 203.677 286.95 207.314 283.314C213.562 277.065 213.562 266.935 207.314 260.686L187.314 240.686L187.051 240.43C180.785 234.439 170.848 234.525 164.686 240.686L144.686 260.686L144.43 260.949C138.439 267.215 138.525 277.152 144.686 283.314L144.949 283.57Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
