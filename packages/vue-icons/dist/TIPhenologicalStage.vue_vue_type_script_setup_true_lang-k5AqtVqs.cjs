"use strict";const C=require("vue"),L=C.defineComponent({__name:"TIPhenologicalStage",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-16","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const t=e,i=C.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(o,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createElementVNode("path",{d:"M470.848 462.169H456.703C454.667 452.451 448.433 444.103 439.747 439.984C433.47 437.009 427.367 436.847 422.859 437.421C420.485 429.442 415.006 422.957 407.586 419.439C400.576 416.115 393.812 416.466 389.08 417.485C388.867 415.936 389.08 343.919 389.08 343.919L410.73 322.269H428.912C452.473 322.269 471.641 303.101 471.641 279.541V262.127C471.641 256.672 467.202 252.233 461.746 252.233H444.333C420.772 252.233 401.604 271.401 401.604 294.962V313.143L389.08 325.667V251.751L401.935 238.897C418.594 222.237 418.594 195.129 401.934 178.47L389.621 166.157C387.752 164.288 385.267 163.259 382.624 163.259C379.981 163.259 377.497 164.288 375.629 166.157L363.315 178.47C346.656 195.13 346.656 222.238 363.315 238.897L376.174 251.756V364.289L363.743 351.858V325.266C363.743 293.637 338.012 267.907 306.384 267.907H280.559C275.104 267.907 270.665 272.345 270.665 277.801V303.626C270.665 335.254 296.396 360.985 328.025 360.985H354.616L376.174 382.543V405.984C366.31 396.887 351.325 387.321 330.975 385.737C330.582 385.706 326.97 385.449 321.409 385.843C317.854 386.096 315.178 389.182 315.43 392.737C315.683 396.292 318.772 398.957 322.324 398.716C327.015 398.381 329.941 398.6 329.972 398.604C356.222 400.645 371.887 418.971 377.405 426.755C380.134 430.606 385.162 432.224 389.633 430.697C392.699 429.648 397.347 428.865 402.056 431.099C406.416 433.168 409.684 437.344 410.795 442.269C412.067 447.908 417.561 451.478 423.294 450.411C426.015 449.901 430.12 449.703 434.218 451.645C438.471 453.663 441.717 457.51 443.351 462.169H241.401C242.045 458.322 244.072 454.872 247.054 452.937C250.14 450.934 253.531 450.841 255.834 451.123C261.325 451.78 266.491 448.034 267.604 442.587C269.18 434.879 272.189 427.893 276.548 421.821C281.428 415.025 287.888 409.593 295.749 405.678C298.94 404.089 300.238 400.214 298.649 397.024C297.059 393.835 293.188 392.537 289.995 394.125C280.233 398.987 272.182 405.773 266.064 414.294C260.995 421.354 257.402 429.367 255.367 438.137C254.163 438.075 252.852 438.087 251.474 438.208C249.279 429.996 243.723 423.11 235.982 419.437C227.881 415.598 220.094 416.663 215.395 418.002C207.369 407.155 186.154 385.476 155.263 385.625V344.731L176.864 323.129H195.046C218.607 323.129 237.775 303.962 237.775 280.401V262.987C237.775 257.532 233.336 253.093 227.881 253.093H210.467C186.906 253.093 167.739 272.261 167.739 295.822V314.004L155.263 326.48V228.583L176.864 206.981H195.046C218.607 206.981 237.775 187.813 237.775 164.253V146.839C237.775 141.384 233.336 136.945 227.881 136.945H210.467C186.906 136.945 167.739 156.113 167.739 179.674V197.856L155.263 210.332V124.494L168.118 111.639C184.777 94.9788 184.777 67.8709 168.117 51.2119L155.805 38.8985C153.936 37.029 151.451 36 148.808 36C146.165 36 143.681 37.029 141.813 38.8977L129.499 51.211C112.84 67.8709 112.84 94.9788 129.499 111.638L142.357 124.497V249.051L129.878 236.571V209.979C129.878 201.258 127.969 192.881 124.205 185.08C122.657 181.871 118.803 180.524 115.588 182.072C112.379 183.621 111.033 187.479 112.581 190.688C115.495 196.726 116.973 203.216 116.973 209.978V223.665L91.7084 198.402C89.1876 195.882 85.1026 195.882 82.5827 198.402C80.0627 200.922 80.0627 205.007 82.5827 207.527L107.848 232.792H94.1596C69.6481 232.792 49.7061 212.85 49.7061 188.338V165.524H72.52C80.4757 165.524 88.2791 167.649 95.087 171.67C98.1559 173.482 102.112 172.464 103.924 169.394C105.736 166.326 104.717 162.369 101.648 160.557C92.8544 155.364 82.7814 152.619 72.5191 152.619H46.6948C41.2393 152.619 36.8008 157.057 36.8008 162.513V188.338C36.8008 219.966 62.5313 245.697 94.1596 245.697H120.753L142.358 267.302V378.097L134.207 369.946V347.339C134.207 319.528 111.582 296.902 83.7708 296.902H61.9248C56.4693 296.902 52.0307 301.34 52.0307 306.796V328.641C52.0307 356.452 74.6571 379.078 102.468 379.078H125.086L134.298 388.29C121.196 391.569 105.621 398.753 94.4598 414.295C89.4061 421.336 85.815 429.339 83.7665 438.133C79.4906 437.917 73.857 438.586 68.4256 442.111C61.7759 446.426 57.5593 453.971 56.8065 462.167H43.2534C39.689 462.167 36.8008 465.056 36.8008 468.62C36.8008 472.184 39.689 475.073 43.2534 475.073H470.848C474.413 475.073 477.301 472.184 477.301 468.62C477.301 465.056 474.413 462.169 470.848 462.169ZM414.51 294.961C414.51 278.516 427.888 265.137 444.333 265.137H458.735V279.54C458.735 295.984 445.357 309.363 428.912 309.363H423.635L436.653 296.345C439.173 293.824 439.173 289.739 436.653 287.219C434.133 284.7 430.048 284.7 427.528 287.219L414.51 300.237V294.961ZM350.839 338.953L325.575 313.689C323.055 311.17 318.97 311.17 316.449 313.689C313.93 316.21 313.93 320.295 316.449 322.815L341.714 348.079H328.026C303.514 348.079 283.572 328.137 283.572 303.625V280.811H306.386C330.897 280.811 350.839 300.753 350.839 325.265L350.839 338.953ZM382.625 208.64C379.061 208.64 376.172 211.529 376.172 215.092V233.502L372.441 229.771C360.813 218.142 360.813 199.222 372.44 187.595L382.625 177.411L392.809 187.595C404.438 199.223 404.438 218.143 392.81 229.771L389.078 233.503V215.092C389.078 211.529 386.19 208.64 382.625 208.64ZM180.644 295.821C180.644 279.376 194.022 265.998 210.467 265.998H224.869V280.4C224.869 296.845 211.491 310.223 195.046 310.223H189.77L202.788 297.205C205.308 294.684 205.308 290.6 202.788 288.08C200.267 285.56 196.182 285.56 193.662 288.08L180.644 301.098V295.821ZM180.644 179.674C180.644 163.229 194.022 149.849 210.467 149.849H224.869V164.252C224.869 180.697 211.491 194.075 195.046 194.075H189.77L202.788 181.057C205.308 178.537 205.308 174.451 202.788 171.932C200.268 169.413 196.183 169.411 193.662 171.932L180.644 184.95V179.674ZM121.302 357.047L100.971 336.716C98.4501 334.197 94.3652 334.197 91.8452 336.716C89.3252 339.237 89.3252 343.322 91.8452 345.842L112.176 366.173H102.468C81.7722 366.173 64.936 349.337 64.936 328.641V309.808H83.7708C104.466 309.808 121.302 326.644 121.302 347.34V357.047ZM142.356 87.8336V106.244L138.624 102.513C126.996 90.8844 126.996 71.9644 138.623 60.3368L148.808 50.1528L158.992 60.3368C170.621 71.9653 170.621 90.8853 158.992 102.513L155.261 106.244V87.8336C155.261 84.27 152.373 81.381 148.808 81.381C145.244 81.381 142.356 84.27 142.356 87.8336ZM228.405 462.169H149.327C149.156 462.155 148.985 462.143 148.811 462.143C148.636 462.143 148.466 462.156 148.295 462.169H69.7996C70.444 458.321 72.471 454.871 75.4504 452.938C78.5399 450.933 81.9357 450.843 84.2345 451.12C89.7391 451.776 94.9046 448.027 95.999 442.595C97.5863 434.87 100.596 427.88 104.943 421.823C123.322 396.229 158.022 398.576 158.368 398.605C184.633 400.649 200.289 418.971 205.808 426.764C208.547 430.615 213.58 432.228 218.026 430.696C221.1 429.65 225.751 428.871 230.453 431.098C235.05 433.279 238.258 437.566 239.27 442.649C233.061 447.037 229.129 454.301 228.405 462.169Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=L;
