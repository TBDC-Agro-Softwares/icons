<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M415.701 427.13C406.961 350.24 371.871 318.37 346.241 295.13C328.521 279 320.001 270.61 320.001 256C320.001 241.59 328.491 233.36 346.161 217.56C372.091 194.39 407.601 162.65 415.721 84.72C417.034 71.4796 412.673 58.3033 403.721 48.46C394.161 37.9468 380.6 31.9675 366.391 32H145.611C131.381 31.9556 117.798 37.9354 108.221 48.46C99.2959 58.3165 94.9583 71.4892 96.2808 84.72C104.371 162.4 139.751 193.91 165.581 216.91C183.421 232.8 192.001 241.09 192.001 256C192.001 271.1 183.401 279.56 165.501 295.75C140.001 318.85 105.001 350.48 96.3008 427.13C94.8721 440.312 99.1274 453.478 108.001 463.33C117.599 473.979 131.275 480.041 145.611 480H366.391C380.727 480.041 394.403 473.979 404.001 463.33C412.874 453.478 417.13 440.312 415.701 427.13ZM343.301 432H169.131C153.531 432 149.131 414 160.071 402.84C186.551 376 240.001 356.78 240.001 326V224C240.001 204.15 202.001 189 178.491 156.8C174.611 151.49 175.001 144 184.861 144H327.591C336.001 144 337.811 151.43 333.991 156.75C310.821 189 272.001 204.05 272.001 224V326C272.001 356.53 327.711 373 352.401 402.87C362.351 414.91 358.871 432 343.301 432Z" fill="currentColor"/>
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
