<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M191.166 429.548C195.128 434.865 201.369 437.999 208 438C217.282 437.993 225.458 431.895 228.11 423L324.11 103C326.513 95.7362 324.776 87.7404 319.575 82.1289C314.374 76.5175 306.533 74.1786 299.108 76.0239C291.683 77.8693 285.849 83.6067 283.88 91L187.88 411C185.985 417.355 187.203 424.231 191.166 429.548ZM160 390C154.914 390.005 150.001 388.156 146.18 384.8L18.1799 272.8C13.6254 268.812 11.0132 263.053 11.0132 257C11.0132 250.947 13.6254 245.188 18.1799 241.2L146.18 129.2C154.909 121.562 168.177 122.446 175.815 131.175C183.453 139.904 182.569 153.172 173.84 160.81L63.8899 257L173.83 353.19C180.419 358.95 182.744 368.193 179.666 376.386C176.588 384.579 168.752 390.003 160 390ZM352 390C343.246 390.008 335.406 384.584 332.325 376.391C329.245 368.197 331.57 358.952 338.16 353.19L448.11 257L338.17 160.81C329.441 153.172 328.557 139.904 336.195 131.175C343.833 122.446 357.101 121.562 365.83 129.2L493.83 241.2C498.384 245.188 500.997 250.947 500.997 257C500.997 263.053 498.384 268.812 493.83 272.8L365.83 384.8C362.007 388.16 357.089 390.009 352 390Z" fill="currentColor"/>
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
