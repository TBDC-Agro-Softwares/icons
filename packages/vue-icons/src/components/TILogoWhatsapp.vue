<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M414.73 97.1001C372.902 55.252 316.108 31.8201 256.94 32.0001C134 32.0001 33.92 131.58 33.87 254C33.8156 292.981 44.091 331.281 63.65 365L32 480L150.25 449.13C182.982 466.862 219.623 476.143 256.85 476.13H256.94C379.87 476.13 479.94 376.54 480 254.13C480.15 195.158 456.638 138.59 414.73 97.1001ZM256.94 438.66H256.86C223.674 438.67 191.091 429.789 162.5 412.94L155.73 408.94L85.56 427.26L104.29 359.17L99.88 352.17C81.3239 322.792 71.4925 288.748 71.53 254C71.53 152.27 154.74 69.5 257.01 69.5C359.171 69.3176 442.141 151.979 442.34 254.14C442.3 355.88 359.13 438.66 256.94 438.66ZM358.63 300.47C353.06 297.69 325.63 284.27 320.55 282.42C315.47 280.57 311.72 279.64 308.01 285.2C304.3 290.76 293.61 303.2 290.36 306.95C287.11 310.7 283.86 311.11 278.29 308.33C272.72 305.55 254.75 299.7 233.46 280.8C216.89 266.09 205.71 247.93 202.46 242.38C199.21 236.83 202.11 233.82 204.9 231.06C207.41 228.57 210.47 224.58 213.26 221.34C216.05 218.1 216.98 215.78 218.83 212.08C220.68 208.38 219.76 205.14 218.37 202.37C216.98 199.6 205.83 172.29 201.19 161.18C196.66 150.36 192.07 151.83 188.65 151.66C185.4 151.5 181.65 151.46 177.96 151.46C172.258 151.608 166.874 154.123 163.1 158.4C157.99 163.96 143.59 177.4 143.59 204.68C143.59 231.96 163.59 258.36 166.35 262.06C169.11 265.76 205.65 321.79 261.56 345.82C271.942 350.266 282.55 354.165 293.34 357.5C306.69 361.72 318.84 361.13 328.44 359.7C339.15 358.11 361.44 346.28 366.07 333.32C370.7 320.36 370.71 309.26 369.32 306.95C367.93 304.64 364.21 303.24 358.63 300.47Z" fill="currentColor"/>
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
