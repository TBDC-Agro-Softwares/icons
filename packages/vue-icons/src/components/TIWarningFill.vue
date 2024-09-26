<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M455.069 399.08L284.639 82.58C272.559 60.14 240.379 60.14 228.289 82.58L57.8692 399.08C52.5338 408.99 52.7965 420.974 58.561 430.64C64.3256 440.307 74.7445 446.234 85.9992 446.25H426.889C438.153 446.251 448.588 440.331 454.365 430.662C460.141 420.992 460.409 408.998 455.069 399.08ZM256.469 397.25C245.424 397.25 236.469 388.296 236.469 377.25C236.469 366.204 245.424 357.25 256.469 357.25C267.515 357.25 276.469 366.204 276.469 377.25C276.469 382.554 274.362 387.641 270.611 391.392C266.861 395.143 261.774 397.25 256.469 397.25ZM278.189 196.1L272.449 318.1C272.449 326.937 265.286 334.1 256.449 334.1C247.613 334.1 240.449 326.937 240.449 318.1L234.709 196.15C234.449 190.262 236.591 184.521 240.644 180.243C244.698 175.965 250.316 173.517 256.209 173.46H256.419C262.354 173.457 268.031 175.88 272.135 180.167C276.238 184.453 278.411 190.231 278.149 196.16L278.189 196.1Z" fill="currentColor"/>
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
