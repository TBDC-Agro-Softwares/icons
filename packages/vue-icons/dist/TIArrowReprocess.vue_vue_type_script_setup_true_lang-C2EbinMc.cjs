"use strict";const C=require("vue"),i=C.defineComponent({__name:"TIArrowReprocess",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const L=e,t=C.computed(()=>["icon",L.size,{[L.type]:L.type&&!L.color,"is-clickable":L.clickable}]);return(o,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(t.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createElementVNode("path",{d:"M17.6033 9.86598C17.5359 5.72183 14.1476 2.38282 9.9793 2.38282C7.65935 2.37997 5.46393 3.43523 4.01653 5.24927C3.80125 5.51909 3.84546 5.91234 4.11527 6.12762C4.38509 6.3429 4.77834 6.29869 4.99362 6.02888C6.2035 4.51252 8.03865 3.63044 9.97853 3.63282C13.5 3.63282 16.3543 6.48061 16.3543 9.99181V10.2064L15.6664 9.54836L15.6559 9.53856C15.406 9.31006 15.018 9.32202 14.7827 9.568C14.5441 9.81744 14.5529 10.2131 14.8024 10.4517L16.5992 12.1704L16.6098 12.1803C16.8558 12.4051 17.2364 12.3975 17.4732 12.1607L19.1919 10.442L19.202 10.4317C19.436 10.1869 19.4326 9.79876 19.1919 9.55807L19.1817 9.54804C18.9369 9.31404 18.5487 9.31738 18.3081 9.55807L17.6043 10.2618V9.99181L17.6033 9.86598Z",fill:"currentColor"},null,-1),C.createElementVNode("path",{d:"M4.33361 10.4517L3.625 9.77386V10.0063C3.625 13.5212 6.47716 16.3672 9.9991 16.3672C11.9344 16.3644 13.7653 15.4892 14.9829 13.9849C15.2001 13.7166 15.5937 13.6752 15.862 13.8923C16.1303 14.1095 16.1717 14.5031 15.9546 14.7714C14.5 16.5684 12.3128 17.6139 10 17.6172C5.82954 17.6172 2.44333 14.2799 2.37602 10.1322L2.375 10.0063V9.75887L1.69194 10.442C1.45125 10.6826 1.0631 10.686 0.818315 10.452L0.808058 10.442C0.567371 10.2013 0.564028 9.81311 0.79803 9.56833L0.808058 9.55807L2.52681 7.83932C2.76363 7.6025 3.14417 7.59493 3.39015 7.81969L3.40076 7.82961L5.19764 9.54836C5.44708 9.78695 5.45587 10.1826 5.21728 10.432C4.982 10.678 4.59401 10.69 4.34409 10.4615L4.33361 10.4517Z",fill:"currentColor"},null,-1),C.createElementVNode("path",{d:"M12.9844 10.4248C13.0214 10.1636 13.0214 9.89856 12.9844 9.63741L13.8317 8.97504C13.8688 8.94471 13.894 8.90224 13.9028 8.85514C13.9116 8.80804 13.9035 8.75934 13.8799 8.71765L13.0764 7.32867C13.0586 7.29771 13.0328 7.27208 13.0018 7.25445C12.9707 7.23682 12.9355 7.22783 12.8998 7.2284C12.8765 7.22807 12.8534 7.2322 12.8316 7.24056L11.8333 7.64206C11.6258 7.48103 11.3976 7.34862 11.1549 7.24837L11.0021 6.18407C10.9954 6.13687 10.9718 6.09372 10.9356 6.06271C10.8994 6.03171 10.8531 6.01497 10.8054 6.01565H9.19944C9.15171 6.01487 9.10533 6.03155 9.06904 6.06257C9.03275 6.09358 9.00904 6.13679 9.00238 6.18407L8.84786 7.24793C8.60555 7.35028 8.3774 7.48332 8.16899 7.64379L7.17067 7.24229C7.14749 7.23426 7.12314 7.23015 7.09861 7.23014C7.06338 7.22992 7.02872 7.2391 6.9982 7.25672C6.96769 7.27434 6.94242 7.29978 6.92499 7.33041L6.12156 8.71938C6.09695 8.76082 6.08827 8.80979 6.09714 8.85716C6.106 8.90453 6.13181 8.94705 6.16973 8.97678L7.01701 9.63914C6.99941 9.76908 6.98985 9.89998 6.98836 10.0311C6.98949 10.1628 6.99876 10.2943 7.01614 10.4248L6.16887 11.0872C6.13177 11.1175 6.10658 11.16 6.09777 11.2071C6.08895 11.2542 6.09707 11.3029 6.12069 11.3445L6.92412 12.7335C6.94194 12.7645 6.96772 12.7901 6.99879 12.8077C7.02985 12.8254 7.06507 12.8344 7.10078 12.8338C7.12407 12.8341 7.1472 12.83 7.16893 12.8216L8.16726 12.4201C8.37484 12.5813 8.60318 12.7137 8.84612 12.8138L9.00108 13.8786C9.00774 13.9258 9.03145 13.969 9.06774 14.0001C9.10403 14.0311 9.15041 14.0478 9.19814 14.047H10.8041C10.8518 14.0477 10.8981 14.0309 10.9343 13.9999C10.9705 13.9689 10.9941 13.9258 11.0008 13.8786L11.1536 12.8143C11.3956 12.7125 11.6236 12.5802 11.832 12.4206L12.8303 12.8221C12.8536 12.8301 12.8781 12.8342 12.9028 12.8342C12.938 12.8344 12.9727 12.8253 13.0032 12.8076C13.0337 12.79 13.059 12.7646 13.0764 12.734L13.8799 11.345C13.9035 11.3033 13.9116 11.2546 13.9028 11.2075C13.894 11.1604 13.8688 11.1179 13.8317 11.0876L12.9844 10.4248ZM12.9453 11.3055L12.5747 11.9461L11.6558 11.5763L11.3636 11.7968C11.2081 11.9157 11.0384 12.0147 10.8584 12.0916L10.5133 12.2318L10.3701 13.2166H9.6322L9.4933 12.2318L9.14909 12.092C8.97178 12.0174 8.80452 11.9209 8.65123 11.8046L8.35 11.5763L7.42416 11.9496L7.05347 11.3094L7.83738 10.6969L7.79397 10.3293C7.78182 10.2025 7.774 10.1123 7.774 10.0311C7.774 9.94993 7.78182 9.85748 7.79354 9.73941L7.83955 9.36873L7.05521 8.75671L7.42589 8.11648L8.34479 8.48586L8.63691 8.26536C8.79242 8.14651 8.96214 8.0475 9.14215 7.97064L9.48939 7.83044L9.63306 6.84557H10.371L10.5103 7.83044L10.8541 7.9702C11.0315 8.04462 11.1989 8.14101 11.3524 8.25711L11.6493 8.48543L12.5751 8.11257L12.9453 8.75194L12.164 9.36873L12.2074 9.73637C12.2208 9.83405 12.2275 9.93252 12.2274 10.0311C12.2274 10.1149 12.2196 10.2047 12.2079 10.3228L12.1619 10.693L12.9453 11.3055ZM9.99941 11.1353C9.78105 11.1352 9.56764 11.0703 9.38616 10.9488C9.20469 10.8274 9.06329 10.6549 8.97984 10.4531C8.8964 10.2513 8.87466 10.0293 8.91736 9.81514C8.96007 9.601 9.0653 9.40432 9.21977 9.24998C9.37423 9.09563 9.57099 8.99055 9.78517 8.94802C9.99934 8.90548 10.2213 8.9274 10.423 9.011C10.6248 9.0946 10.7972 9.23614 10.9185 9.41771C11.0398 9.59928 11.1045 9.81274 11.1045 10.0311C11.1036 10.3238 10.9868 10.6043 10.7798 10.8112C10.5727 11.0181 10.2921 11.1346 9.99941 11.1353Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=i;
