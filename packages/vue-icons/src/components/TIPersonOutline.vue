<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 32C193.198 32 147.405 81.3993 152.042 145.161C156.447 205.665 202.813 256 256 256C309.159 256 355.47 205.694 359.956 145.183C364.628 82.1131 318.509 32 256 32ZM256 64C299.838 64 331.346 98.2367 328.044 142.818C324.723 187.602 291.216 224 256 224C220.757 224 187.216 187.588 183.958 142.838C180.667 97.5937 211.809 64 256 64ZM256 288C208.579 288 161.876 301.303 124.808 326.012C84.2919 353.019 57.2001 392.153 48.614 439.76C44.8875 460.417 58.2912 480 80 480H432C453.715 480 467.123 460.42 463.396 439.759C454.804 392.152 427.71 353.018 387.193 326.011C350.124 301.303 303.42 288 256 288ZM256 320C297.276 320 337.792 331.541 369.445 352.639C402.949 374.971 424.911 406.692 431.904 445.442L431.944 445.685C432.085 446.643 432.007 447.437 431.842 447.945L431.822 448H80.187L80.1683 447.948C79.9889 447.395 79.913 446.509 80.1058 445.441C87.0944 406.691 109.054 374.97 142.557 352.638C174.208 331.541 214.723 320 256 320Z" fill="currentColor"/>
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
