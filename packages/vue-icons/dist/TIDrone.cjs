"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const C=require("vue"),o=C.defineComponent({__name:"TIDrone",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const l=e,i=C.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(r,t)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[C.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M112.678 36.6028C94.2576 39.4464 75.6751 48.9336 62.2586 62.3445C50.607 73.9928 42.4613 88.3979 38.1065 105.058C35.347 115.613 35.2885 136.857 37.9911 146.769C42.7514 164.225 50.6285 178.202 62.2586 189.829C73.8895 201.455 87.8709 209.329 105.333 214.087C115.277 216.797 136.498 216.731 147.117 213.957C151.379 212.845 155.301 211.768 155.832 211.564C157.32 210.993 164.657 221.258 168.251 228.937C172.373 237.746 174.238 246.189 174.238 256.048C174.238 265.907 172.373 274.35 168.251 283.159C164.657 290.838 157.32 301.102 155.832 300.531C155.301 300.327 151.379 299.251 147.117 298.138C136.498 295.365 115.277 295.298 105.333 298.008C70.8606 307.401 46.9246 331.247 38.1065 364.98C35.347 375.535 35.2885 396.779 37.9911 406.691C42.7514 424.148 50.6285 438.124 62.2586 449.751C73.8895 461.377 87.8709 469.251 105.333 474.01C115.249 476.711 136.5 476.653 147.06 473.894C180.836 465.072 204.65 441.184 214.055 406.691C216.766 396.752 216.7 375.538 213.925 364.922C212.812 360.662 211.735 356.742 211.531 356.211C210.96 354.723 221.228 347.389 228.91 343.796C237.722 339.675 246.168 337.811 256.031 337.811C265.893 337.811 274.339 339.675 283.151 343.796C290.833 347.389 301.101 354.723 300.53 356.211C300.326 356.742 299.249 360.662 298.136 364.922C295.362 375.538 295.295 396.752 298.006 406.691C302.766 424.148 310.643 438.124 322.273 449.751C333.904 461.377 347.886 469.251 365.348 474.01C375.264 476.711 396.515 476.653 407.074 473.894C440.85 465.072 464.624 441.227 474.077 406.691C476.641 397.324 476.641 374.693 474.077 365.326C469.313 347.924 461.545 334.093 450.006 322.469C438.219 310.596 423.972 302.511 407.132 298.139C395.926 295.23 376.132 295.231 364.944 298.144C360.682 299.253 356.76 300.327 356.229 300.531C354.741 301.102 347.404 290.838 343.811 283.159C339.688 274.35 337.823 265.907 337.823 256.048C337.823 246.189 339.688 237.746 343.811 228.937C347.404 221.258 354.741 210.993 356.229 211.564C356.76 211.768 360.682 212.842 364.944 213.951C376.115 216.86 395.936 216.867 407.074 213.966C440.819 205.179 464.624 181.306 474.077 146.769C476.641 137.402 476.641 114.771 474.077 105.404C469.242 87.7394 461.382 73.8758 449.512 62.0743C437.677 50.3072 423.993 42.6025 407.132 38.2105C396.507 35.4426 375.28 35.3798 365.348 38.0857C330.874 47.4799 306.909 71.3557 298.127 105.058C295.226 116.192 295.233 136.006 298.142 147.173C299.252 151.433 300.326 155.354 300.53 155.885C301.101 157.372 290.833 164.707 283.151 168.299C274.339 172.42 265.893 174.284 256.031 174.284C246.168 174.284 237.722 172.42 228.91 168.299C221.228 164.707 210.96 157.372 211.531 155.885C211.735 155.354 212.812 151.433 213.925 147.173C216.7 136.557 216.766 115.344 214.055 105.404C209.249 87.779 201.372 73.881 189.497 62.0743C177.745 50.3898 163.867 42.544 147.548 38.3577C139.172 36.2095 121.114 35.3006 112.678 36.6028ZM138.662 62.8868C151.562 65.5505 162.354 71.41 171.587 80.7646C183.351 92.6831 189.264 105.895 190.353 122.702C191.276 136.934 191.74 136.995 175.269 120.725C167.362 112.916 159.331 105.734 157.423 104.766C150.706 101.36 144.335 100.044 136.388 100.425C130.054 100.728 127.96 101.242 122.471 103.849C113.942 107.898 107.828 114.01 103.777 122.535C98.5056 133.633 99.0196 147.222 105.118 157.931C106.33 160.062 113.497 168.045 121.043 175.673C131.633 186.377 134.438 189.667 133.336 190.089C130.72 191.093 120.004 190.653 113.289 189.267C78.4871 182.081 55.7332 147.863 62.8104 113.356C69.9445 78.5733 104.211 55.7733 138.662 62.8868ZM398.677 62.8868C411.576 65.5505 422.369 71.41 431.602 80.7646C440.06 89.3326 445.508 98.713 448.629 110.079C450.46 116.745 450.665 134.043 448.993 140.718C442.86 165.212 423.191 184.225 398.772 189.267C392.057 190.653 381.341 191.093 378.725 190.089C377.624 189.667 380.429 186.377 391.019 175.673C398.564 168.045 405.731 160.062 406.943 157.931C410.644 151.433 412.109 144.824 411.709 136.447C411.407 130.127 410.889 128.02 408.302 122.573C404.179 113.894 398.306 107.986 389.776 103.937C384.089 101.236 382.052 100.73 375.674 100.425C367.294 100.025 360.682 101.49 354.182 105.189C352.051 106.4 344.065 113.565 336.434 121.108C325.726 131.694 322.435 134.498 322.012 133.397C321.012 130.79 321.446 120.08 322.825 113.356C329.959 78.5733 364.226 55.7733 398.677 62.8868ZM143.833 127.006C145.165 127.512 158.461 140.027 173.377 154.817C188.582 169.894 202.692 183.137 205.493 184.958C213.047 189.87 225.46 195.409 233.645 197.521C242.961 199.924 260.267 200.765 269.611 199.268C282.494 197.205 295.484 192.158 306.751 184.837C309.397 183.116 323.768 169.608 338.684 154.817C353.601 140.027 366.896 127.512 368.229 127.006C379.081 122.889 389.236 133.041 385.118 143.89C384.612 145.222 372.093 158.512 357.297 173.423C342.215 188.623 328.967 202.728 327.145 205.528C322.031 213.388 316.521 225.761 314.398 234.152C311.581 245.287 311.581 266.809 314.398 277.943C316.521 286.335 322.031 298.708 327.145 306.567C328.967 309.367 342.215 323.472 357.297 338.672C372.093 353.583 384.612 366.873 385.118 368.206C389.236 379.053 379.105 389.185 368.229 385.098C366.896 384.597 353.988 372.461 339.545 358.129C325.102 343.796 311.736 330.906 309.842 329.483C299.98 322.072 287.042 316.356 274.09 313.687C262.529 311.304 245.032 311.666 233.683 314.522C225.667 316.538 213.239 322.1 205.493 327.137C202.692 328.958 188.582 342.202 173.377 357.278C158.461 372.068 145.165 384.583 143.833 385.09C132.98 389.206 122.825 379.055 126.943 368.206C127.449 366.873 139.969 353.583 154.764 338.672C169.56 323.761 183.045 309.431 184.731 306.827C192.099 295.447 197.183 282.405 199.231 269.623C200.728 260.282 199.887 242.983 197.483 233.67C195.371 225.488 189.829 213.08 184.916 205.528C183.094 202.728 169.846 188.623 154.764 173.423C139.969 158.512 127.449 145.222 126.943 143.89C122.825 133.041 132.98 122.889 143.833 127.006ZM246.99 218.541C239.741 220.354 234.314 223.451 228.848 228.894C213.57 244.109 213.58 267.911 228.872 283.197C251.12 305.436 288.73 293.322 294.07 262.197C296.163 249.995 292.232 237.956 283.189 228.875C273.48 219.124 260.02 215.282 246.99 218.541ZM262.08 244.87C265.9 246.819 268.945 251.777 268.945 256.048C268.945 262.626 262.58 268.958 255.967 268.958C251.963 268.958 246.643 265.611 244.749 261.898C241.57 255.668 243.565 248.866 249.653 245.182C253.776 242.687 257.611 242.591 262.08 244.87ZM133.336 322.006C134.438 322.428 131.633 325.718 121.043 336.422C113.497 344.05 106.33 352.034 105.118 354.164C101.417 360.662 99.9521 367.271 100.352 375.648C100.655 381.979 101.17 384.072 103.777 389.56C107.828 398.086 113.942 404.197 122.471 408.247C133.266 413.371 146.178 413.032 157.423 407.329C159.331 406.361 167.362 399.18 175.269 391.37C191.74 375.101 191.276 375.162 190.353 389.393C189.281 405.943 183.418 419.237 172.036 430.928C146.545 457.112 105.282 456.988 79.8294 430.651C44.4312 394.022 63.0816 333.578 113.109 322.801C118.974 321.538 130.894 321.069 133.336 322.006ZM398.772 322.829C423.191 327.871 442.86 346.884 448.993 371.377C450.665 378.053 450.46 395.35 448.629 402.016C442.032 426.043 422.815 444.224 398.772 449.189C364.306 456.306 330.024 433.529 322.835 398.738C321.448 392.026 321.008 381.314 322.012 378.698C322.435 377.597 325.726 380.401 336.434 390.988C344.065 398.531 352.051 405.695 354.182 406.907C360.682 410.606 367.294 412.071 375.674 411.67C390.027 410.984 401.951 402.89 408.302 389.522C413.555 378.464 413.032 364.857 406.943 354.164C405.731 352.034 398.557 344.042 391.001 336.404C382.147 327.455 377.675 322.354 378.422 322.056C380.871 321.081 392.431 321.519 398.772 322.829Z",fill:"currentColor"},null,-1)]),6))}});exports.default=o;