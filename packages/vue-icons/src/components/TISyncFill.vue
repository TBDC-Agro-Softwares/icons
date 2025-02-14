<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M450.644 252.569C448.92 146.479 362.179 61.0003 255.47 61.0003C196.079 60.9273 139.877 87.942 102.823 134.381C97.312 141.289 98.4437 151.356 105.351 156.867C112.258 162.378 122.326 161.247 127.837 154.339C158.81 115.521 205.789 92.9393 255.45 93.0003C345.6 93.0003 418.67 165.904 418.67 255.79V261.283L401.06 244.438L400.791 244.187C394.393 238.338 384.461 238.644 378.438 244.941C372.33 251.327 372.555 261.455 378.94 267.563L424.94 311.563L425.212 311.817C431.509 317.571 441.251 317.377 447.314 311.314L491.314 267.314L491.57 267.052C497.561 260.785 497.475 250.848 491.314 244.687L491.051 244.43C484.785 238.44 474.848 238.525 468.686 244.687L450.67 262.703V255.79L450.644 252.569ZM110.94 267.563L92.8 250.211V256.16C92.8 346.143 165.815 419 255.977 419C305.521 418.929 352.393 396.524 383.563 358.014C389.123 351.146 399.198 350.084 406.066 355.644C412.935 361.203 413.996 371.278 408.437 378.147C371.2 424.15 315.208 450.915 256 451C149.236 451 62.5492 365.566 60.8261 259.384L60.8 256.16V249.827L43.3137 267.314C37.1521 273.476 27.2153 273.561 20.9489 267.571L20.6863 267.314C14.5247 261.153 14.4391 251.216 20.4296 244.949L20.6863 244.687L64.6863 200.687C70.7489 194.624 80.4908 194.43 86.788 200.184L87.0596 200.438L133.06 244.438C139.445 250.546 139.67 260.674 133.562 267.06C127.539 273.357 117.607 273.663 111.209 267.814L110.94 267.563Z" fill="currentColor"/>
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
