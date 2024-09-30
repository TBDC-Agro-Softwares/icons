"use strict";const C=require("vue"),o=C.defineComponent({__name:"TIEarthOutline",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const l=e,i=C.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,t)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[C.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 33C132.293 33 32 133.293 32 257C32 380.707 132.293 481 256 481C379.707 481 480 380.707 480 257C480 133.293 379.707 33 256 33ZM444.127 218.445C446.667 230.9 448 243.795 448 257C448 282.543 443.011 306.922 433.955 329.215C433.829 327.286 433.644 325.359 433.35 323.44C432.735 319.44 431.305 315.556 429.882 311.691C428.248 307.257 426.624 302.846 426.25 298.31C425.974 294.928 425.889 291.692 425.808 288.565C425.507 277.074 425.245 267.052 415.67 256.66C403.91 243.91 386.67 240.85 370.2 243.44L370.044 243.464C361.49 244.805 328.573 249.963 341.9 231.11C343.368 229.044 345.443 227.183 347.509 225.331C349.173 223.84 350.831 222.354 352.16 220.77C353.215 219.511 354.213 217.823 355.232 216.101L355.232 216.101C356.714 213.595 358.238 211.018 360.04 209.59C363.08 207.18 377.04 204.41 381.04 205.64C383.581 206.421 386.191 209.035 388.646 211.494L388.646 211.494C390.056 212.906 391.414 214.266 392.68 215.2C399.091 220.029 406.573 223.24 414.49 224.56C422.233 225.694 434.764 223.633 444.127 218.445ZM432.789 181.978C432.41 182.523 432.036 183.072 431.665 183.618C426.969 190.526 422.606 196.943 411.08 188.89C408.544 187.122 406.342 185.081 404.169 183.067C399.976 179.181 395.896 175.398 389.75 173.89C382.706 172.161 375.513 173.481 368.493 174.768C367.391 174.97 366.293 175.171 365.2 175.36C363.897 175.585 362.56 175.792 361.205 176.002L361.204 176.003C353.039 177.268 344.212 178.637 338.26 184.58C335.043 187.777 332.553 191.499 330.045 195.246C327.321 199.316 324.577 203.417 320.86 206.91C307.05 219.91 301.22 234.1 310.16 252.48C318.76 270.15 336.75 279.74 356.16 278.48C360.267 278.206 364.409 277.479 368.374 276.782C382.819 274.244 394.922 272.118 394.49 293.86C394.29 303.66 396.34 310.46 399.35 319.57C401.547 326.183 401.896 332.635 402.258 339.311V339.312V339.312V339.313V339.313V339.313C402.355 341.117 402.454 342.936 402.59 344.78C403.304 354.581 404.677 365.099 407.43 375.048C372.291 420.058 317.523 449 256 449C245.114 449 234.44 448.094 224.048 446.353C224.07 445.819 224.089 445.291 224.108 444.775C224.183 442.678 224.252 440.769 224.47 439.33C226.9 423.43 234.86 407.88 245.6 395.98C249.99 391.122 255.053 386.914 260.115 382.706C267.287 376.744 274.457 370.783 279.71 362.98C288.44 350 291.07 332.49 287.45 317.3C283.716 301.581 267.637 293.193 252.689 285.395C246.298 282.061 240.114 278.835 235.19 275.19C232.732 273.369 230.345 271.291 227.939 269.197L227.938 269.196L227.938 269.196C221.094 263.238 214.102 257.151 204.92 256.5C202.743 256.344 200.7 256.427 198.692 256.509H198.692C195.425 256.641 192.252 256.77 188.74 255.86C187.1 255.437 185.572 254.87 184.073 254.313L184.073 254.313C180.821 253.105 177.713 251.95 173.92 252.45C169.372 253.048 165.562 255.518 161.776 257.973C156.945 261.104 152.154 264.211 145.92 263.37C135.37 261.95 124.5 249.61 122.1 239.56C119.02 226.64 129.24 222.45 140.19 221.3C144.76 220.82 149.89 220.3 154.28 221.97C157.488 223.163 159.756 225.438 162.027 227.714C163.848 229.54 165.67 231.367 167.98 232.64C177.71 237.97 179.68 229.45 178.19 220.81C177.948 219.408 177.703 218.097 177.471 216.861L177.47 216.856L177.469 216.851L177.469 216.849C175.562 206.68 174.614 201.623 184.9 193.69C185.377 193.324 185.849 192.965 186.316 192.609L186.329 192.599C193.693 186.992 199.663 182.447 198.46 172.08C198.21 169.947 197.657 168.199 197.147 166.583C196.106 163.29 195.24 160.547 197.46 156.22C199.922 151.405 206.596 147.051 211.088 144.121L211.088 144.121L211.088 144.121L211.35 143.95C214.785 141.709 220.546 140.182 226.547 138.591C240.792 134.814 256.391 130.678 245.45 115.79C240.88 109.58 232.45 98.48 224.45 96.96C217.65 95.6749 213.421 100.423 209.22 105.141C207.242 107.362 205.271 109.575 203.04 111.15C195.84 116.24 181.82 122.02 174.61 114.15C168.155 107.103 173.138 103.205 178.246 99.2074C180.815 97.1975 183.416 95.1626 184.61 92.69C186.262 89.2705 184.614 84.4421 181.739 79.8902C185.345 78.3765 189.006 76.9697 192.72 75.6737C195.052 77.3007 197.642 78.4591 200.73 78.66C202.986 78.8118 205.199 78.5006 207.365 78.1961C211.622 77.5976 215.699 77.0244 219.57 80.04C221.27 81.3519 222.846 82.7554 224.401 84.1402L224.401 84.1405C228.771 88.0335 232.977 91.7793 239.32 92.93C247.64 94.44 256.45 89.58 258.51 81.07C259.734 76.1064 258.595 70.8769 257.466 65.7L257.389 65.3463C257.365 65.2323 257.34 65.1183 257.315 65.0044C296.321 65.2661 332.566 77.1609 362.753 97.3927C360.687 96.4556 358.154 96.4669 355.01 97.93C348.94 100.75 340.34 107.93 339.63 115.05C338.82 123.13 350.74 124.27 356.4 124.27C364.89 124.27 373.51 120.47 370.77 110.65C369.527 106.203 367.812 101.552 364.992 98.916C371.419 103.356 377.562 108.177 383.388 113.347C383.275 113.46 383.162 113.574 383.05 113.69C381.364 115.446 379.598 117.096 377.845 118.733C373.609 122.69 369.447 126.577 366.66 131.74C363.88 136.87 360.75 139.32 355.12 140.65C354.453 140.807 353.766 140.943 353.072 141.08C350.541 141.58 347.921 142.097 345.88 143.73C338.64 149.43 342.76 163.12 349.62 167.24C358.29 172.43 371.15 169.99 377.69 162.58C379.105 160.974 380.359 159.041 381.627 157.085C384.941 151.976 388.354 146.713 395 146.72C399.046 146.712 402.933 148.296 405.82 151.13C408.701 154.109 408.967 156.951 409.28 160.294C409.379 161.361 409.484 162.48 409.68 163.67C411.117 172.443 418.883 167.683 423.568 163.206C426.969 169.268 430.05 175.533 432.789 181.978ZM64 257C64 340.849 117.758 412.15 192.686 438.314C192.657 438.202 192.629 438.091 192.6 437.98C189.173 424.407 186.684 410.615 185.15 396.7C184.952 394.975 184.786 393.237 184.621 391.498C183.652 381.313 182.681 371.104 175.07 363.34C171.741 359.905 167.842 357.388 163.994 354.906C157.761 350.885 151.664 346.951 148.35 339.34C144.898 331.406 145.365 322.695 145.83 314.012C146.36 304.134 146.887 294.292 141.64 285.67C136.376 277.017 127.956 273.763 119.557 270.516L119.557 270.516C110.231 266.911 100.93 263.315 96 252.35C92.2355 244.026 87.5979 236.376 82.9824 228.763L82.9823 228.763C78.6037 221.54 74.2451 214.351 70.6708 206.649C66.321 222.696 64 239.577 64 257ZM92.1739 176.333C90.6794 172.189 89.2196 168.141 87.4467 164.984C100.47 141.18 118.39 120.435 139.851 104.106C139.001 114.476 142.076 124.83 148.53 133.08C150.571 135.706 153.027 137.718 155.389 139.653C159.89 143.34 164.048 146.746 164.33 153.58C164.75 163.58 163.19 168.7 156.65 175.73C155.306 177.154 154.15 178.863 152.997 180.565C151.722 182.448 150.453 184.324 148.94 185.8C148.768 185.967 148.607 186.124 148.457 186.271C147.164 187.531 146.621 188.06 145.97 188.335C145.499 188.533 144.971 188.598 144.061 188.71C143.375 188.794 142.471 188.905 141.21 189.12C132.562 190.581 124.987 192.704 116.897 194.971L116.897 194.971L116.897 194.971L116.897 194.971C115.296 195.42 113.674 195.874 112.02 196.33C100.531 199.505 96.2249 187.565 92.1739 176.333ZM236.455 361.286C243.214 355.998 250.178 350.55 254.06 343.62C260.36 332.37 257.46 325.46 247.6 320C234.87 313.02 222.36 305.97 211 296.86C210.154 296.184 209.357 295.51 208.583 294.854L208.583 294.854L208.582 294.854L208.582 294.853C205.402 292.161 202.586 289.777 198.18 288.86C194.73 288.14 183.29 286.13 180.52 286.75C178.224 287.257 177.521 286.866 177.323 286.755C177.302 286.743 177.286 286.735 177.275 286.731C177.268 286.728 177.263 286.728 177.259 286.73C177.249 286.737 177.252 286.765 177.258 286.826C177.286 287.087 177.376 287.943 176.75 290.24C175.91 293.337 176.526 297.997 177.111 302.432L177.112 302.433C177.488 305.287 177.853 308.048 177.81 310.24C177.791 311.297 177.64 312.694 177.474 314.237C177.037 318.302 176.49 323.382 177.94 325.94C179.108 328.06 182.817 330.109 186.124 331.934L186.124 331.935L186.125 331.935L186.126 331.935L186.127 331.936C187.887 332.908 189.533 333.817 190.62 334.64C200.774 342.144 208.358 352.605 212.33 364.59C212.573 365.342 212.811 366.894 213.088 368.703C213.687 372.619 214.471 377.742 215.9 378.59C218.088 379.886 221.421 375.72 223.935 372.578L223.935 372.577C224.776 371.526 225.526 370.589 226.11 370.01C229.142 367.006 232.768 364.17 236.455 361.286Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;