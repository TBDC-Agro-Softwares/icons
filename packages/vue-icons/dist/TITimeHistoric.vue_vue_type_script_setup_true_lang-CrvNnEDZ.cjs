"use strict";const e=require("vue"),o=e.defineComponent({__name:"TITimeHistoric",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const t=C,i=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,l)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"256",height:"256",viewBox:"0 0 256 256",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[e.createElementVNode("path",{d:"M137.126 32C116.189 32.1022 95.8779 39.1661 79.3741 52.0849C62.8703 65.0037 51.1065 83.0476 45.9257 103.39L39.5883 93.7789C38.9884 92.7728 38.1914 91.8988 37.2455 91.2099C36.2996 90.521 35.2243 90.0313 34.0846 89.7704C32.9448 89.5095 31.7642 89.4827 30.6138 89.6918C29.4635 89.9008 28.3673 90.3413 27.3913 90.9867C26.4154 91.6321 25.5799 92.4691 24.9352 93.447C24.2905 94.425 23.8501 95.5238 23.6404 96.6771C23.4307 97.8304 23.4561 99.0144 23.7151 100.158C23.9741 101.301 24.4613 102.38 25.1473 103.329L44.1942 132.274C45.5173 134.13 47.4679 135.441 49.6832 135.963C51.9451 136.413 54.2929 135.962 56.2284 134.704L84.7987 115.405C85.7838 114.788 86.635 113.979 87.3017 113.025C87.9685 112.072 88.4371 110.993 88.6796 109.855C88.9222 108.716 88.9338 107.539 88.7137 106.396C88.4936 105.252 88.0463 104.165 87.3985 103.198C86.7506 102.232 85.9155 101.406 84.9428 100.77C83.97 100.133 82.8796 99.6999 81.7364 99.495C80.5931 99.2901 79.4204 99.3179 78.2881 99.5768C77.1558 99.8357 76.087 100.32 75.1454 101.002L62.1502 109.788C65.6088 95.7096 72.944 82.8896 83.319 72.7906C93.6939 62.6916 106.691 55.7203 120.827 52.6721C134.963 49.6239 149.668 50.6214 163.266 55.551C176.864 60.4806 188.806 69.1437 197.73 80.5519C206.654 91.96 212.201 105.654 213.737 120.071C215.273 134.488 212.737 149.048 206.419 162.089C200.1 175.131 190.253 186.129 178 193.828C165.748 201.527 151.585 205.618 137.126 205.634C124.731 205.6 112.527 202.566 101.553 196.789C90.5778 191.012 81.1564 182.663 74.0892 172.452C73.4562 171.478 72.6344 170.641 71.6726 169.991C70.7108 169.341 69.6285 168.891 68.4901 168.669C67.3517 168.446 66.1802 168.456 65.0454 168.696C63.9106 168.936 62.8355 169.403 61.884 170.068C60.9324 170.733 60.1238 171.583 59.5062 172.567C58.8886 173.552 58.4745 174.65 58.2886 175.798C58.1026 176.946 58.1486 178.12 58.4238 179.25C58.699 180.38 59.1978 181.443 59.8906 182.376C71.3799 198.985 87.8794 211.461 106.964 217.969C126.049 224.478 146.712 224.676 165.918 218.534C185.123 212.393 201.857 200.235 213.661 183.849C225.465 167.463 231.715 147.712 231.494 127.499C231.58 102.295 221.692 78.0863 204.001 60.1833C186.31 42.2802 162.259 32.1447 137.126 32Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M136.26 74.9744C133.964 74.9744 131.762 75.8891 130.138 77.5172C128.514 79.1453 127.602 81.3535 127.602 83.6561V127.499C127.639 129.794 128.546 131.988 130.139 133.637L156.112 159.916C157.742 161.525 159.934 162.431 162.221 162.443C164.507 162.454 166.708 161.569 168.354 159.977C169.984 158.356 170.905 156.152 170.915 153.85C170.924 151.548 170.022 149.336 168.406 147.701L144.918 123.93V83.6561C144.918 81.3535 144.005 79.1453 142.382 77.5172C140.758 75.8891 138.556 74.9744 136.26 74.9744Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
