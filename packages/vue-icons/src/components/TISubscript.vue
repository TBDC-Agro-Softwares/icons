<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M221.865 256L298.665 332.8L268.799 362.667L191.999 285.867L115.199 362.667L85.332 332.8L162.132 256L85.332 179.2L115.199 149.333L191.999 226.133L268.799 149.333L298.665 179.2L221.865 256ZM390.662 419.712L413.449 395.253C417.63 390.957 421.362 386.562 424.9 382.266C428.308 378.123 431.39 373.722 434.116 369.103C436.67 364.833 438.762 360.303 440.357 355.59C441.873 351.005 442.641 346.207 442.632 341.378C442.695 335.375 441.586 329.418 439.366 323.841C437.263 318.598 433.976 313.913 429.761 310.153C425.284 306.237 420.049 303.286 414.382 301.482C400.77 297.428 386.226 297.761 372.814 302.434C366.691 304.748 361.135 308.348 356.521 312.992C352.067 317.441 348.613 322.791 346.391 328.682C344.258 334.367 343.133 340.381 343.067 346.453L342.989 351.509H375.828L375.964 346.668C375.998 343.965 376.384 341.279 377.111 338.677C377.823 336.392 378.958 334.262 380.456 332.397C381.972 330.682 383.861 329.339 385.978 328.469C390.769 326.571 396.083 326.46 400.949 328.158C402.703 328.928 404.269 330.069 405.538 331.503C406.834 333.034 407.83 334.795 408.474 336.694C409.235 339.003 409.628 341.418 409.64 343.849C409.617 345.76 409.389 347.664 408.96 349.526C408.338 351.751 407.45 353.892 406.314 355.903C404.665 358.809 402.786 361.579 400.696 364.186C397.829 367.911 394.772 371.487 391.537 374.898L345.536 425.099V448H447.999V419.712H390.662Z" fill="currentColor"/>
</svg>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue';
import type { IconColorClasses, IconsSize } from '@/types';

const props = defineProps({
  size: {
    type: String as PropType<IconsSize>,
    default: 'is-default',
    validator(value: string) {
      return ['is-small', 'is-medium', 'is-large', 'is-default', 'is-12', 'is-16', 'is-14', 'is-26', 'is-28', 'is-36'].indexOf(value) > -1;
    }
  },
  type: {
    type: String as PropType<IconColorClasses>,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  },
  clickable: {
    type: Boolean,
    default: false
  }
});

const className = computed(() => [
  'icon',
  props.size,
  {
    [props.type as string]: props.type && !props.color,
    'is-clickable': props.clickable
  }
]);
</script>
