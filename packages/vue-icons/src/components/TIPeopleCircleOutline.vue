<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48C141.31 48 48 141.31 48 256ZM80 256C80 159 159 80 256 80C353.05 80 432 158.95 432 256C432 287.319 423.773 316.752 409.369 342.256C408.667 341.775 407.928 341.296 407.15 340.82C383.69 326.49 354.83 318.91 323.67 318.91C293.1 318.91 263.44 326.81 240.14 341.16C213.89 357.33 196.25 380.91 189.14 409.34C188.55 411.691 187.864 414.753 187.337 418.038C178.762 414.388 170.534 410.076 162.716 405.168C162.996 403.897 163.301 402.63 163.63 401.37C170.7 373.16 185.75 349.64 209.1 330.62C211.348 328.765 212.41 325.835 211.871 322.97C211.332 320.106 209.278 317.761 206.51 316.85C194.51 313.02 180.81 310.97 163.82 310.97C140.085 310.97 114.891 317.374 95.8844 329.014C85.6876 306.758 80 282.027 80 256ZM323.67 292C306.27 292 289.46 284.28 276.33 270.27C263.343 256.183 255.578 238.069 254.33 218.95C252.86 198.25 259.21 179.2 272.21 165.33C285.21 151.46 303.38 144 323.67 144C343.81 144 362.04 151.62 375 165.46C387.96 179.3 394.47 198.46 393 218.97C391.729 238.078 383.967 256.178 371 270.27C357.86 284.28 341.06 292 323.67 292ZM105.49 234.03C107.89 267.85 134.06 295.36 163.82 295.36C193.53 295.36 219.69 267.86 222.13 234.09C223.38 216.91 217.83 200.79 206.88 189.09C195.93 177.39 180.74 170.95 163.81 170.95C146.88 170.95 131.68 177.2 120.66 188.95C109.64 200.7 104.26 216.71 105.49 234.03Z" fill="currentColor"/>
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
