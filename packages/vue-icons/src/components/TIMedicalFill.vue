<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M272.005 464H240.005C222.332 464 208.005 449.673 208.005 432L208.055 346.18C208.057 344.75 207.296 343.427 206.058 342.711C204.82 341.996 203.294 341.995 202.055 342.71L127.715 385.77C112.66 394.462 93.4091 389.304 84.7154 374.25L68.2154 345.61L68.1554 345.51C59.7044 330.477 64.8448 311.444 79.7154 302.71L154.325 259.46C155.559 258.744 156.318 257.426 156.318 256C156.318 254.574 155.559 253.256 154.325 252.54L79.7854 209.33C72.5367 205.173 67.2429 198.3 65.0753 190.23C62.9077 182.16 64.0449 173.559 68.2354 166.33L84.6754 137.78C88.8714 130.489 95.8107 125.181 103.945 123.04C111.987 120.882 120.559 122.034 127.745 126.24L202.055 169.24C203.294 169.955 204.82 169.954 206.058 169.239C207.296 168.523 208.057 167.2 208.055 165.77L208.005 80C208.005 62.3269 222.332 48 240.005 48H272.005C289.678 48 304.005 62.3269 304.005 80V165.72C304.003 167.15 304.765 168.473 306.003 169.189C307.241 169.905 308.767 169.905 310.005 169.19L384.345 126.13C399.403 117.456 418.641 122.61 427.345 137.65L443.835 166.29L443.895 166.38C452.448 181.438 447.251 200.577 432.255 209.24L357.725 252.44C356.492 253.156 355.732 254.474 355.732 255.9C355.732 257.326 356.492 258.644 357.725 259.36L432.255 302.56C439.504 306.717 444.798 313.59 446.967 321.659C449.136 329.728 448.002 338.329 443.815 345.56L427.375 374.11C423.179 381.401 416.24 386.709 408.105 388.85C400.063 391.008 391.492 389.856 384.305 385.65L309.995 342.65C308.758 341.936 307.234 341.935 305.997 342.649C304.76 343.363 303.997 344.682 303.995 346.11L304.005 432C304.005 449.673 289.678 464 272.005 464Z" fill="currentColor"/>
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
      return ['is-small', 'is-medium', 'is-large', 'is-default', 'is-12', 'is-14', 'is-26', 'is-28', 'is-36'].indexOf(value) > -1;
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
