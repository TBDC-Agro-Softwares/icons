"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIBuildOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M143.495 459.147L143.767 458.841L297.627 291.841C301.593 287.571 307.657 285.82 313.35 287.333C363.339 300.722 411.313 293.759 443.42 262.067C479.1 226.925 490.106 163.42 470.318 122.75L470.233 122.579C467.788 117.701 463.149 114.294 457.763 113.418C452.377 112.543 446.898 114.307 443.033 118.159L382.552 178.691C376.314 184.889 366.176 184.889 359.897 178.65L333.364 152.116C327.151 145.87 327.151 135.73 333.394 129.453L393.284 69.5297C397.392 65.577 399.245 59.8283 398.219 54.2204C397.194 48.6125 393.425 43.8921 388.184 41.6497C342.646 22.1301 285.536 32.8067 249.509 68.5736C216.957 100.881 210.061 149.6 224.257 200.1L224.352 200.453C225.773 205.992 224.112 211.873 220.002 215.852L219.748 216.091L53.2918 368.111C35.5165 383.933 27.9541 408.297 33.6538 431.408C39.3634 454.56 57.4401 472.637 80.592 478.346C103.512 483.999 127.665 476.608 143.495 459.147ZM352.294 64.7811L352.731 64.84L310.734 106.859C292.047 125.646 292.048 155.954 310.706 174.713L337.306 201.314L337.874 201.868C356.706 219.987 386.576 219.802 405.147 201.35L447.471 158.991L447.481 159.085C448.416 167.993 448.089 177.759 446.38 187.622C442.849 207.999 433.894 226.535 420.953 239.281C398.081 261.857 361.657 267.143 321.6 256.415C304.442 251.853 286.197 257.125 274.136 270.112L120.13 437.271L120.028 437.385C112.097 446.33 99.8608 450.14 88.2542 447.277C76.6476 444.415 67.5853 435.353 64.7229 423.746C61.8987 412.294 65.5697 400.229 74.2599 392.291L74.79 391.814L241.464 239.597C254.549 227.495 259.828 209.145 255.207 191.962L255.064 191.442C243.833 151.491 248.835 114.964 271.365 91.9769L272.053 91.2845C292.91 70.578 323.777 61.1099 352.294 64.7811ZM112 416C112 424.837 104.837 432 96.0002 432C87.1637 432 80.0002 424.837 80.0002 416C80.0002 407.163 87.1637 400 96.0002 400C104.837 400 112 407.163 112 416Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
