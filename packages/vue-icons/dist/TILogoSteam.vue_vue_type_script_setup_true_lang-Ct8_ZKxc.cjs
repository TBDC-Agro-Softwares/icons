"use strict";const e=require("vue"),C=e.defineComponent({__name:"TILogoSteam",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M478.8 208.2C478.8 228.082 462.682 244.2 442.8 244.2C422.917 244.2 406.8 228.082 406.8 208.2C406.8 188.318 422.917 172.2 442.8 172.2C462.682 172.2 478.8 188.318 478.8 208.2ZM442.6 139C404.547 139.009 373.594 169.65 373.2 207.7L330 269.7C328.206 269.5 326.404 269.4 324.6 269.4C315.3 269.394 306.175 271.918 298.2 276.7L102.4 198C96.5791 171.469 71.2532 153.939 44.3718 157.836C17.4904 161.732 -1.81568 185.731 0.136828 212.824C2.08933 239.916 24.6372 260.898 51.7996 260.9C61.0987 260.906 70.2244 258.382 78.1996 253.6L274 332.2C279.395 357.113 302.125 374.389 327.573 372.919C353.021 371.448 373.61 351.669 376.1 326.3L442.6 277.7C480.901 277.7 511.95 246.651 511.95 208.35C511.95 170.049 480.901 139 442.6 139ZM442.6 161.9C468.24 161.928 489.009 182.726 489 208.367C488.99 234.007 468.207 254.791 442.566 254.8C416.926 254.809 396.127 234.041 396.1 208.4C396.122 182.728 416.927 161.922 442.6 161.9ZM51.7996 170.9C65.9013 170.893 78.8587 178.66 85.4996 191.1L66.5996 183.5V183.6C51.2907 177.99 34.2925 185.54 28.1907 200.66C22.0889 215.779 29.0853 233.013 43.9996 239.6V239.7L60.0996 246.1C57.4086 246.706 54.658 247.008 51.8996 247C30.8851 247.028 13.8272 230.014 13.7996 209C13.772 187.986 30.7851 170.928 51.7996 170.9ZM324.6 283.1C343.267 283.107 359.181 296.638 362.188 315.062C365.196 333.486 354.411 351.376 336.714 357.318C319.017 363.261 299.621 355.505 290.9 339C297.2 341.5 303.4 344 309.7 346.6C319.766 350.753 331.288 349.179 339.872 342.477C348.456 335.775 352.778 324.979 351.19 314.206C349.603 303.432 342.351 294.341 332.2 290.4L316.3 284C319.034 283.453 321.812 283.152 324.6 283.1Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=C;
