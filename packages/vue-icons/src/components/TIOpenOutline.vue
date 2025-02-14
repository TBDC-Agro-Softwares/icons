<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M448 48C456.731 48 463.829 54.9939 463.997 63.6851L464 64V176C464 184.837 456.837 192 448 192C439.269 192 432.171 185.006 432.003 176.315L432 176V102.627L235.314 299.314C229.065 305.562 218.935 305.562 212.686 299.314C206.525 293.152 206.439 283.215 212.43 276.949L212.686 276.686L409.373 80H336C327.269 80 320.171 73.0061 320.003 64.3149L320 64C320 55.2686 326.994 48.1708 335.685 48.003L336 48H448ZM271.48 112C280.317 112 287.48 119.163 287.48 128C287.48 136.731 280.486 143.829 271.795 143.997L271.48 144H104C90.8777 144 80.2152 154.531 80.0032 167.603L80 168V408C80 421.122 90.5313 431.785 103.603 431.997L104 432H344C350.365 432 356.47 429.471 360.971 424.971C365.364 420.577 367.878 414.655 367.996 408.454L368 408V224C368 215.163 375.163 208 384 208C392.731 208 399.829 214.994 399.997 223.685L400 224V408C400 422.852 394.1 437.096 383.598 447.598C373.248 457.948 359.264 463.828 344.645 463.996L344 464H104C73.3813 464 48.502 439.427 48.0075 408.926L48 408V168C48 137.381 72.5731 112.502 103.074 112.007L104 112H271.48Z" fill="currentColor"/>
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
