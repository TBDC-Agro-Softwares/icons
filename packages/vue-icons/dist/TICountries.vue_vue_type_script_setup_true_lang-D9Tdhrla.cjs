"use strict";const C=require("vue"),o=C.defineComponent({__name:"TICountries",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const t=e,i=C.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createElementVNode("path",{d:"M357.103 16.1253C365.118 20.008 367.498 26.6462 367.373 35.2884C366.997 51.3202 367.248 67.4774 367.248 83.5093C367.248 94.5312 361.486 100.167 350.464 100.293C325.415 100.293 300.49 100.418 275.44 100.167C271.808 100.167 270.681 101.044 270.806 104.802C271.056 125.092 270.931 145.382 270.806 165.673C270.806 168.804 271.432 169.931 274.689 170.307C285.21 171.309 295.605 173.563 305.75 176.82C308.631 177.822 309.758 175.943 311.261 174.565C340.945 145.007 370.504 115.323 400.063 85.7638C401.441 84.386 402.693 83.1335 404.071 81.7558C410.834 75.2428 418.85 75.1176 425.614 81.7558C433.63 89.6465 441.52 97.6624 449.536 105.553C463.189 119.205 476.966 132.983 490.618 146.635C499.26 155.277 499.26 162.416 490.493 171.184C478.719 182.957 466.821 194.856 455.047 206.629C447.031 214.52 439.516 214.52 431.5 206.504C413.966 188.969 396.305 171.434 378.896 153.774C376.266 151.144 374.888 150.643 372.007 153.523C361.236 164.671 350.214 175.567 339.192 186.339C336.812 188.593 336.061 189.721 339.693 191.85C382.152 217.651 408.956 254.975 417.723 303.822C433.755 393.751 374.387 474.161 291.848 492.197C202.545 511.611 115.873 454.748 96.8349 366.071C82.306 298.311 113.368 227.796 173.362 192.351C177.245 189.971 177.12 188.969 174.114 185.963C162.966 175.192 152.07 164.295 141.298 153.148C138.919 150.768 137.666 151.018 135.412 153.273C118.002 170.808 100.592 188.218 83.0575 205.627C73.7891 214.896 66.9004 214.896 57.5067 205.502C46.7353 194.73 35.8386 183.834 24.942 173.062C21.8107 170.056 18.93 166.8 16.8008 163.168C16.8008 160.412 16.8008 157.531 16.8008 154.776C18.8048 152.271 20.3078 149.39 22.6875 147.136C44.2303 125.718 65.7732 104.05 87.316 82.6325C95.0814 74.9923 102.722 74.9923 110.487 82.6325C119.63 91.7757 128.773 100.919 138.042 110.062C159.585 131.605 181.128 153.148 202.545 174.691C204.674 176.945 206.553 177.446 209.434 176.444C218.828 173.313 228.347 171.309 238.116 170.432C241.748 170.056 242.875 168.929 242.875 165.046C242.75 121.334 242.875 77.6225 242.625 33.9106C242.625 25.3937 245.255 19.507 253.021 16C287.715 16.1252 322.409 16.1253 357.103 16.1253ZM215.446 329.999C215.947 344.278 216.323 355.926 217.199 367.699C217.45 371.206 218.577 372.334 221.834 372.459C230.726 372.835 239.619 373.461 248.512 373.711C263.04 374.212 277.569 373.461 291.973 372.459C294.228 372.334 295.981 371.958 296.231 368.827C298.361 344.779 298.235 320.856 296.231 296.808C295.981 294.303 295.104 293.677 292.85 293.552C286.212 293.176 279.448 292.425 272.81 292.174C255.275 291.297 237.865 291.924 220.456 293.552C218.327 293.802 217.575 294.429 217.45 296.558C216.698 308.582 215.947 320.606 215.446 329.999ZM291.221 263.617C287.965 247.836 283.581 231.929 275.691 217.025C272.81 211.639 269.679 206.504 265.17 202.245C259.033 196.484 254.273 196.484 248.136 202.371C244.253 206.128 241.372 210.512 238.742 215.146C230.851 229.424 226.468 244.955 222.836 260.862C221.959 264.494 222.961 265.12 226.217 264.745C238.492 263.367 250.891 263.743 263.166 263.743C272.559 263.617 281.828 263.617 291.221 263.617ZM325.164 360.435C325.164 360.811 325.164 361.437 325.164 362.063C325.039 367.574 325.039 367.574 330.299 366.447C342.949 363.566 355.349 360.059 367.122 354.548C375.264 350.791 383.154 346.658 388.916 339.518C393.049 334.383 393.049 330.751 388.791 325.741C385.033 321.232 380.274 317.976 375.264 315.095C360.86 307.079 345.204 302.445 329.172 298.812C325.665 298.061 324.914 298.562 325.164 302.069C326.417 321.608 326.792 340.896 325.164 360.435ZM188.517 305.451C188.517 303.948 188.392 302.319 188.517 300.816C188.643 299.063 188.142 298.186 186.138 298.687C167.726 302.946 149.565 307.83 133.533 318.351C129.901 320.731 126.519 323.612 123.889 327.119C121.008 331.001 121.008 334.884 123.889 338.767C126.394 342.149 129.65 344.904 133.157 347.284C149.189 357.93 167.225 362.94 185.637 367.073C189.394 367.95 188.517 365.445 188.392 363.566C187.265 344.027 186.764 324.739 188.517 305.451ZM224.84 401.016C222.209 400.89 222.084 401.016 222.585 403.395C226.092 420.179 230.851 436.586 239.368 451.616C242.124 456.501 245.38 461.135 249.764 464.767C255.025 468.901 258.406 468.901 263.541 464.893C266.673 462.513 269.052 459.382 271.182 456.125C281.828 439.968 286.838 421.682 290.971 403.145C291.472 400.765 290.47 400.89 288.842 401.016C267.549 402.644 246.132 402.769 224.84 401.016ZM383.28 378.972C363.991 387.739 343.701 393 323.035 396.757C320.655 397.133 320.78 398.886 320.405 400.515C316.772 420.179 311.762 439.342 303.12 457.503C302.744 458.129 302.369 458.881 303.496 459.758C341.822 444.602 368.5 417.924 383.28 378.972ZM130.276 378.346C135.286 407.779 182.38 454.873 210.812 459.131C210.686 458.63 210.812 458.129 210.561 457.754C201.668 439.592 196.784 420.179 193.151 400.389C192.776 398.01 192.024 397.008 189.519 396.507C179.875 394.753 170.356 392.624 160.837 389.994C150.442 386.988 140.296 383.105 130.276 378.346ZM130.276 286.663C149.314 278.272 169.104 272.761 189.394 269.254C191.648 268.878 192.65 267.751 193.151 265.246C196.658 245.456 201.794 226.043 210.561 207.756C210.686 207.381 210.561 206.88 210.436 205.752C171.609 221.158 144.931 247.836 130.276 286.663ZM383.53 287.415C374.262 253.723 327.669 207.631 302.87 206.754C302.87 207.005 302.744 207.381 302.87 207.631C311.637 226.043 316.898 245.456 320.405 265.496C320.906 268.001 322.158 268.753 324.287 269.254C331.176 270.631 338.065 272.009 344.828 273.637C357.979 276.769 370.629 281.278 383.53 287.415ZM70.2822 178.198C71.0337 177.571 71.6599 177.07 72.1609 176.444C86.815 161.79 101.469 147.136 116.249 132.482C117.877 130.853 117.752 129.851 116.123 128.348C110.988 123.338 105.853 118.329 100.968 113.068C99.2147 111.189 98.0874 111.69 96.4592 113.193C82.0556 127.722 67.6519 142.126 53.123 156.529C51.4948 158.158 50.9938 159.16 52.8725 161.038C58.0077 166.048 63.0177 171.184 68.1529 176.194C68.7792 177.07 69.5307 177.571 70.2822 178.198ZM462.312 159.034C461.686 158.283 461.185 157.657 460.684 157.156C446.029 142.502 431.375 127.847 416.721 113.068C415.093 111.44 414.091 111.69 412.588 113.193C407.578 118.329 402.568 123.464 397.307 128.348C395.303 130.227 395.93 131.229 397.558 132.857C412.087 147.261 426.491 161.665 440.894 176.194C442.522 177.822 443.524 178.448 445.403 176.444C450.288 171.184 455.548 166.299 460.558 161.164C461.185 160.537 461.686 159.786 462.312 159.034ZM304.122 71.6106C314.393 71.6106 324.663 71.4853 334.933 71.6106C337.814 71.6106 338.691 70.7338 338.691 67.8531C338.566 61.2149 338.566 54.4515 338.691 47.688C338.816 44.8073 337.814 43.9305 335.059 44.0558C314.768 44.181 294.478 44.181 274.313 44.0558C271.683 44.0558 270.806 44.8073 270.931 47.4375C271.056 54.0757 271.182 60.8392 270.931 67.6026C270.806 70.6086 271.683 71.6106 274.814 71.6106C284.458 71.4853 294.228 71.6106 304.122 71.6106Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;