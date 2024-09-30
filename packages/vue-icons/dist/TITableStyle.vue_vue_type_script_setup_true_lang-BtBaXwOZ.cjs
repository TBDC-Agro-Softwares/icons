"use strict";const e=require("vue"),s=e.defineComponent({__name:"TITableStyle",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"515",viewBox:"0 0 512 515",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M427.029 426.918L446.229 504.135L377.962 463.381L307.562 504.135L324.629 426.918L262.762 364.715H343.829L380.096 289.642L409.962 364.715H491.029L427.029 426.918ZM426.664 107.377H85.3307C74.0251 107.41 63.1919 111.941 55.1976 119.978C47.2032 128.016 42.6973 138.908 42.6641 150.275V364.768C42.6973 376.135 47.2032 387.027 55.1976 395.065C63.1919 403.103 74.0251 407.633 85.3307 407.667H245.142L232.592 395.049L213.142 375.493H202.664V321.816H317.12L341.331 271.697V225.348H437.331V289.696H426.07L438.849 321.816H469.331V150.275C469.298 138.908 464.792 128.016 456.797 119.978C448.803 111.941 437.97 107.41 426.664 107.377ZM74.6641 150.275C74.5782 148.844 74.7952 147.411 75.3009 146.071C75.8066 144.731 76.5893 143.514 77.5975 142.5C78.6057 141.486 79.8163 140.699 81.1493 140.191C82.4824 139.682 83.9076 139.464 85.3307 139.551H170.664V193.174H74.6641V150.275ZM74.6641 225.348H170.664V289.696H74.6641V225.348ZM85.3307 375.493C83.9076 375.579 82.4824 375.361 81.1493 374.852C79.8163 374.344 78.6057 373.557 77.5975 372.543C76.5893 371.53 75.8066 370.312 75.3009 368.972C74.7952 367.632 74.5782 366.199 74.6641 364.768V321.869H170.664V375.493H85.3307ZM309.331 289.696H202.664V225.348H309.331V289.696ZM309.331 193.174H202.664V139.551H309.331V193.174ZM437.331 193.174H341.331V139.551H426.664C428.087 139.464 429.512 139.682 430.846 140.191C432.179 140.699 433.389 141.486 434.397 142.5C435.405 143.514 436.188 144.731 436.694 146.071C437.2 147.411 437.417 148.844 437.331 150.275V193.174Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;