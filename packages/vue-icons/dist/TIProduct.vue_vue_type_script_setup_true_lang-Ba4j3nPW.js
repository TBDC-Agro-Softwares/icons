import { defineComponent as i, computed as r, openBlock as n, createElementBlock as d, normalizeClass as a, normalizeStyle as s, createElementVNode as l } from "vue";
const L = /* @__PURE__ */ i({
  __name: "TIProduct",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(C) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-16", "is-14", "is-26", "is-28", "is-36"].indexOf(C) > -1;
      }
    },
    type: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0
    },
    clickable: {
      type: Boolean,
      default: !1
    }
  },
  setup(C) {
    const e = C, o = r(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (c, t) => (n(), d("svg", {
      class: a(o.value),
      style: s(C.color ? `color: ${C.color} !important` : void 0),
      width: "513",
      height: "512",
      viewBox: "0 0 513 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      l("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M147.918 201.222H366.116C387.476 201.233 400.768 214.514 400.838 235.909V379.894C400.826 401.184 387.523 414.418 366.116 414.418H147.906C126.511 414.418 113.207 401.172 113.207 379.87V235.897C113.219 214.514 126.522 201.222 147.918 201.222ZM204.089 293.327C205.019 292.477 206.111 291.825 207.3 291.409C208.787 290.981 210.345 290.857 211.882 291.044C213.418 291.23 214.901 291.723 216.243 292.493C230.503 299.757 245.229 308.094 255.722 322.89C256.591 318.364 256.689 313.725 256.014 309.166C254.265 296.656 247.864 285.544 235.878 274.188C220.674 259.776 203.044 252.536 183.223 252.536C177.579 252.555 171.95 253.106 166.41 254.18C164.859 254.483 164.486 254.879 164.148 256.512C161.734 268.101 161.734 278.513 164.148 288.342C171.109 316.64 187.724 335.552 213.375 344.553C218.082 346.308 223.109 347.04 228.121 346.7C233.133 346.361 238.015 344.957 242.442 342.583C244.04 341.755 244.133 341.697 243.235 339.913C240.208 333.808 235.882 328.44 230.561 324.184C223.565 318.506 215.858 314.32 207.242 309.831C201.575 306.846 199.418 301.448 201.89 296.352C202.411 295.206 203.159 294.177 204.089 293.327ZM349.746 256.36C349.431 254.984 349.081 254.541 347.215 254.098L347.262 254.063C319.197 247.37 285.664 260.243 269.259 284.017C269.096 284.25 268.921 284.471 268.746 284.693L268.408 285.136C271.653 291.699 273.93 298.698 275.171 305.913C282.371 300.749 289.997 296.205 297.965 292.33C299.696 291.46 301.602 290.994 303.539 290.966C305.3 290.943 307.03 291.429 308.521 292.366C310.013 293.303 311.202 294.651 311.945 296.247C314.475 301.284 312.423 306.729 306.838 309.819C305.3 310.67 303.739 311.497 302.178 312.324L302.174 312.326C299.679 313.632 297.102 314.996 294.677 316.442C286.294 321.456 276.955 328.02 271.265 338.7C270.309 340.484 270.344 341.254 270.414 341.463C270.484 341.673 270.845 342.245 272.606 343.038C283.985 348.203 295.995 347.561 309.322 341.207C339.555 326.784 357.313 289.52 349.746 256.36ZM266.904 394.771C267.519 394.935 268.158 394.995 268.793 394.946L268.933 395.156C291.004 395.086 313.449 395.086 335.159 395.086H367.107C376.388 395.074 381.308 390.212 381.308 381.013V235.268C381.358 233.586 381.193 231.906 380.818 230.266C379.174 223.981 374.394 220.938 366.349 220.938H144.91C137.587 221.603 132.853 226.698 132.853 233.927V382.26C132.865 389.711 137.995 394.946 145.341 394.946H246.127C246.517 394.949 246.907 394.918 247.293 394.853C247.318 394.57 247.318 394.285 247.293 394.002C247.211 390.982 247.211 387.939 247.211 384.989V361.903L247.024 361.984C237.405 366.03 227.016 366.998 215.357 364.958C197.739 361.891 182.733 353.321 169.465 338.782C144.816 311.801 137.342 280.344 147.148 245.283C147.557 243.409 148.462 241.678 149.768 240.273C151.075 238.868 152.735 237.84 154.575 237.296C164.257 234.228 174.374 232.759 184.529 232.947C212.71 233.612 236.671 244.957 255.746 266.679C256.125 267.133 256.538 267.558 256.982 267.95C257.437 267.606 257.855 267.215 258.229 266.784C285.198 236.993 318.463 226.815 357.091 236.469C362.664 237.868 365.859 241.004 367.445 246.648C379.128 288.156 362.734 330.538 325.68 354.616C309.158 365.354 291.879 368.654 274.32 364.445C271.929 363.82 269.574 363.065 267.265 362.183L266.822 362.019V368.514C266.857 376.955 266.881 384.942 266.717 393.104C266.682 394.433 266.904 394.771 266.904 394.771Z",
        fill: "currentColor"
      }, null, -1),
      l("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M389.246 72.919C385.83 63.5913 380.327 59.7553 370.241 59.7437H296.074C284.077 59.7437 277.162 66.5412 277.081 78.399C276.999 89.9071 276.999 101.508 277.081 112.9C277.162 124.711 284.077 131.555 296.086 131.555H384.664C391.217 131.555 396.825 128.873 400.043 124.303C403.261 119.732 403.902 113.658 401.699 107.408C398.424 98.0586 395 88.6793 391.666 79.5459L391.665 79.5429L389.246 72.919ZM296.564 80.6843C296.532 80.2417 296.572 79.7969 296.681 79.3668C297.184 79.2423 297.702 79.1952 298.22 79.2269C319.627 79.3201 342.724 79.3318 368.842 79.2269C370.684 79.2269 370.952 79.4717 371.419 80.8009C375.208 91.7959 378.846 101.893 382.519 111.617C382.585 111.764 382.639 111.916 382.682 112.072H382.169C371.908 111.979 361.473 112.002 351.387 112.072H329.234C319.137 112.072 308.713 112.072 298.453 112.154C297.872 112.185 297.289 112.15 296.716 112.049C296.554 111.561 296.503 111.043 296.564 110.533C296.762 101.38 296.774 91.656 296.564 80.6843Z",
        fill: "currentColor"
      }, null, -1),
      l("path", {
        d: "M122.888 162.432C121.828 161.586 120.758 160.733 119.688 159.876C118.431 158.955 117.372 157.791 116.573 156.453C115.774 155.115 115.251 153.631 115.036 152.088C114.939 150.845 115.095 149.595 115.496 148.415C115.897 147.234 116.534 146.147 117.368 145.22C121.122 140.778 126.66 140.51 131.802 144.532C137.236 148.788 143.543 153.743 149.548 158.757C153.721 162.293 159.039 164.187 164.507 164.086H349.405C354.863 164.209 360.18 162.344 364.365 158.839C369.542 154.536 374.917 150.292 380.105 146.2L381.808 144.905C384.816 142.539 387.894 141.478 390.727 141.827C391.965 142.012 393.153 142.443 394.221 143.096C395.289 143.749 396.214 144.61 396.942 145.628C400.521 150.316 399.449 155.737 394.062 160.133C391.73 162.01 389.398 163.864 387.066 165.706C383.871 168.236 380.572 170.86 377.412 173.507C369.204 180.386 359.689 183.732 348.344 183.732H231.422C210.085 183.662 188.025 183.639 166.338 183.732H166.093C154.317 183.732 144.569 180.304 136.291 173.238C133.157 170.557 129.839 167.945 126.623 165.415L126.579 165.38C125.374 164.415 124.138 163.429 122.888 162.432Z",
        fill: "currentColor"
      }, null, -1),
      l("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M438.137 132.605V209.663C438.148 265.757 438.16 323.822 438.055 380.861C438.149 412.177 429.083 442.837 411.972 469.066C406.621 477.368 399.007 481.565 389.329 481.565H388.816C381.389 481.448 374.848 481.448 368.832 481.565C365.085 481.699 361.354 481.022 357.893 479.581C354.432 478.14 351.322 475.97 348.777 473.217C346.667 471.001 344.755 469.031 342.714 467.189C340.138 464.857 337.514 464.857 334.926 467.189C333.035 468.912 331.186 470.807 329.402 472.637L329.178 472.867L328.525 473.543C326.044 476.147 323.045 478.201 319.721 479.575C316.397 480.949 312.823 481.611 309.228 481.518C301.474 481.425 293.861 481.425 286.597 481.518H286.224C282.693 481.575 279.189 480.9 275.932 479.535C272.675 478.171 269.736 476.147 267.3 473.59L266.134 472.424C265.675 471.965 265.22 471.503 264.765 471.04L264.76 471.036C263.493 469.748 262.227 468.462 260.899 467.27C258.299 464.868 255.71 464.868 253.005 467.2L252.889 467.305C252.724 467.438 252.568 467.583 252.422 467.737C245.298 477.239 235.877 481.903 223.74 481.903C221.827 481.9 219.916 481.795 218.015 481.588C214.22 481.285 210.407 481.285 206.612 481.588C197.914 482.031 190.58 479.058 184.19 472.447C179.771 467.877 176.938 465.09 175.107 465.09C173.3 465.09 170.537 467.807 166.188 472.272C159.717 478.918 152.243 481.973 143.393 481.6C138.214 481.385 132.903 481.456 127.747 481.524H127.746L127.268 481.53H124.761C120.285 481.726 115.839 480.713 111.89 478.598C107.941 476.483 104.634 473.343 102.316 469.509C85.0136 442.832 76.164 414.219 76.0124 384.452C75.7092 323.682 75.7909 261.921 75.8958 202.189V162.768C75.9075 147.599 81.5507 134.295 92.5807 123.242C96.8637 118.974 101.139 114.699 105.406 110.416C107.225 108.601 109.059 106.766 110.905 104.92L110.909 104.916C115.986 99.8385 121.147 94.6769 126.277 89.6156C126.899 89.0733 127.385 88.3938 127.699 87.6309C128.013 86.868 128.145 86.0426 128.084 85.2199V56.8171C128.096 43.4319 133.436 35.6899 145.97 31.0027L146.401 30.5946L147.054 30.0583H217.245L217.607 30.1749C231.552 34.8854 238.081 45.1458 237.008 60.6764C236.833 63.2943 236.855 65.9845 236.877 68.6433C236.884 69.5251 236.892 70.404 236.892 71.275C236.985 74.3065 237.032 77.4663 236.892 80.6027C236.84 81.0521 236.84 81.5059 236.892 81.9552C237.414 81.8731 237.929 81.7483 238.431 81.5821C240.773 80.8417 242.841 79.4204 244.371 77.4994C245.902 75.5785 246.825 73.2451 247.024 70.797C247.21 69.0247 247.21 67.3457 247.21 65.5268L247.217 65.1553C247.249 63.1482 247.282 61.0734 247.502 59.0091C248.773 46.5217 255.524 37.5438 267.428 32.3319C268.839 31.7315 270.279 31.2023 271.742 30.7462L273.631 30.1283L274.004 30H388.268L389.962 30.5958C394.847 32.3327 399.929 34.14 404.079 37.9402C408.058 41.5017 411.107 45.9803 412.963 50.9873L419.19 68.0919C424.203 81.8036 429.38 95.9817 434.429 109.973C436.984 117.241 438.239 124.902 438.137 132.605ZM418.583 379.683V133.666C418.583 128.71 418.339 123.475 416.566 118.508C408.066 94.7691 401.094 75.5191 394.611 57.8781C392.594 52.3981 388.548 49.6698 382.252 49.5415H280.604C273.724 49.5532 268.629 52.9928 267.323 58.5311C266.877 60.8859 266.697 63.2834 266.787 65.6784V66.6811C266.659 88.6362 253.472 101.753 231.517 101.753H144.676C142.414 101.753 141.33 102.126 140.164 103.292C130.288 113.343 119.608 124.058 106.561 136.989C102.934 140.456 100.069 144.64 98.1479 149.275C96.2268 153.91 95.2918 158.894 95.4023 163.911V230.557C95.3907 280.075 95.379 331.284 95.4606 381.642C95.3711 405.646 101.578 429.253 113.463 450.107L114.268 451.53L114.388 451.741C117.343 456.936 118.986 459.824 120.436 460.974C121.59 461.884 122.907 461.942 126.883 462L127.107 462.003C128.864 462.026 131.033 462.054 133.716 462.21C144.827 462.886 151.963 460.17 158.341 452.882C160.449 450.496 163.043 448.587 165.948 447.284C168.854 445.981 172.005 445.313 175.189 445.327C178.273 445.309 181.325 445.951 184.141 447.21C186.956 448.468 189.47 450.315 191.512 452.626C198.438 460.578 206.25 463.399 217.653 462.047C218.299 461.959 218.954 461.959 219.6 462.047C226.841 463.201 232.531 460.916 238.501 454.41C243.759 448.673 250.324 445.525 257.016 445.525C263.72 445.525 270.32 448.685 275.602 454.445C281.548 460.893 287.203 463.224 294.513 462.059C294.98 461.988 295.452 461.952 295.924 461.954C296.4 461.95 296.876 461.981 297.347 462.047C309.006 463.539 316.527 460.706 321.832 452.847C322.026 452.561 322.267 452.309 322.543 452.101C327 448.074 332.785 445.832 338.791 445.804C344.797 445.776 350.603 447.964 355.097 451.95C357.777 454.308 360.33 456.807 362.746 459.435C363.548 460.329 364.543 461.029 365.657 461.482C366.77 461.934 367.971 462.128 369.17 462.047C375.886 461.872 381.949 461.779 388.07 462.047C391.813 462.233 394.11 460.881 396.325 457.383C411.024 434.145 418.748 407.179 418.583 379.683ZM147.649 56.3974V64.5591C147.684 69.7593 147.719 75.146 147.509 80.4978C147.427 81.0577 147.479 81.6291 147.661 82.1651C148.294 82.3172 148.948 82.3645 149.596 82.305C157.35 82.2234 165.255 82.2234 172.915 82.2234H217.292V76.825C217.339 69.0364 217.385 60.9796 217 53.1093C217.001 52.6973 216.913 52.29 216.744 51.9142C216.576 51.5383 216.329 51.2026 216.021 50.929C214.61 49.6698 211.602 49.1567 207.614 49.4949C207.342 49.5114 207.072 49.5583 206.81 49.6348C206.846 50.0464 206.908 50.4553 206.996 50.859C207.262 51.8827 207.321 52.9487 207.171 53.9955C206.951 55.4148 206.904 56.8556 207.031 58.2862C207.09 59.1607 207.09 60.0585 207.09 60.9679C206.961 67.474 203.347 71.6948 197.552 71.8463C191.757 71.9979 187.746 67.5206 187.56 60.8047V58.566C187.548 54.0771 187.537 50.5209 186.767 49.798C186 49.0774 182.522 49.2605 178.111 49.4926L178.069 49.4949C177.817 49.5124 177.563 49.5124 177.311 49.4949V49.6464C177.404 53.669 177.404 57.6683 177.311 61.5276C177.171 67.509 173.09 71.8697 167.61 71.8697C162.13 71.8697 158.026 67.5323 157.851 61.5742V49.3083C156.708 48.8505 155.469 48.6836 154.246 48.8227C153.022 48.9618 151.852 49.4024 150.841 50.1051C149.83 50.8078 149.009 51.7505 148.451 52.8487C147.894 53.947 147.619 55.1663 147.649 56.3974Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as _
};
