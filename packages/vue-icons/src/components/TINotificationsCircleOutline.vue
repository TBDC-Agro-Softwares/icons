<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM360.987 308.096L360.987 308.095C346.922 291.87 337.34 280.816 337.34 232.2C337.34 183.34 311.56 165.97 290.34 157.53C287.381 156.295 285.079 153.87 284 150.85C280.29 138.6 269.88 128 256 128C242.12 128 231.69 138.6 228 150.86C226.928 153.881 224.629 156.307 221.67 157.54C200.43 166 174.67 183.34 174.67 232.21C174.67 280.817 165.083 291.876 151.021 308.097C149.655 309.673 148.246 311.297 146.8 313.01C140.03 321.01 146.15 336.01 157.99 336.01H354C365.77 336 371.94 321 365.2 313C363.757 311.291 362.351 309.669 360.987 308.096ZM217.252 353.316C218.016 352.472 219.102 351.994 220.24 352H291.66C292.81 351.992 293.907 352.478 294.673 353.336C295.438 354.193 295.798 355.339 295.66 356.48C293.14 374.85 276.67 384 256 384C235.11 384 218.49 375.14 216.24 356.42C216.121 355.288 216.489 354.16 217.252 353.316Z" fill="currentColor"/>
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
