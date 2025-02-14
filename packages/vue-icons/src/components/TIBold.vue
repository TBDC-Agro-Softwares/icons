<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M325.303 251.733C335.748 245.373 344.563 236.66 351.045 226.289C357.526 215.918 361.496 204.177 362.636 192C362.834 180.99 360.861 170.048 356.829 159.8C352.797 149.552 346.787 140.199 339.14 132.275C331.493 124.351 322.36 118.011 312.262 113.617C302.164 109.223 291.3 106.861 280.289 106.667H141.836V405.333H291.169C301.647 405.222 312 403.048 321.638 398.935C331.276 394.822 340.009 388.851 347.338 381.362C354.668 373.874 360.451 365.015 364.357 355.292C368.263 345.569 370.215 335.171 370.103 324.693V322.133C370.11 307.352 365.898 292.875 357.962 280.404C350.026 267.934 338.696 257.987 325.303 251.733ZM184.503 149.333H274.103C283.194 149.052 292.154 151.558 299.781 156.515C307.408 161.473 313.335 168.644 316.769 177.067C320.244 188.326 319.12 200.503 313.644 210.937C308.167 221.37 298.783 229.211 287.543 232.747C283.177 234.026 278.651 234.673 274.103 234.667H184.503V149.333ZM282.636 362.667H184.503V277.333H282.636C291.728 277.052 300.688 279.558 308.314 284.515C315.941 289.473 321.869 296.644 325.303 305.067C328.777 316.326 327.653 328.503 322.177 338.937C316.7 349.37 307.316 357.211 296.076 360.747C291.711 362.026 287.185 362.673 282.636 362.667Z" fill="currentColor"/>
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
