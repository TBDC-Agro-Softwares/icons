<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M470.539 121.52C468.202 116.975 463.835 113.82 458.786 113.029C453.737 112.239 448.614 113.907 444.999 117.52L383.559 179C377.284 185.185 367.205 185.185 360.929 179L334.369 152.4C331.368 149.399 329.682 145.329 329.682 141.085C329.682 136.841 331.368 132.771 334.369 129.77L395.549 68.5801C399.272 64.8575 400.926 59.5415 399.971 54.3639C399.016 49.1863 395.575 44.8098 390.769 42.6601C344.559 22.0001 286.879 32.7801 250.509 68.8801C219.609 99.5601 210.399 147.5 225.259 200.41C226.893 206.163 225.158 212.347 220.769 216.41L54.2893 368.46C36.6201 384.324 29.1562 408.65 34.8867 431.694C40.6172 454.738 58.6052 472.734 81.647 478.475C104.689 484.215 129.017 476.762 144.889 459.1L298.569 292.25C302.572 287.921 308.642 286.162 314.339 287.68C329.403 291.807 344.941 293.949 360.559 294.05C393.959 294.05 423.269 283.24 444.409 262.41C483.559 223.84 489.529 158.42 470.539 121.52ZM100.479 448.15C86.9819 449.623 74.0241 442.418 68.1532 430.176C62.2822 417.933 64.7765 403.318 74.3756 393.716C83.9748 384.113 98.5887 381.614 110.834 387.48C123.078 393.347 130.288 406.302 128.819 419.8C127.195 434.729 115.408 446.521 100.479 448.15Z" fill="currentColor"/>
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
