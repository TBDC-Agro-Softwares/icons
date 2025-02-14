<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M159.128 182.981C170.049 183.457 179.305 175.084 179.963 164.216L179.971 164.074L180.01 163.671C180.04 163.388 180.08 163.063 180.131 162.698L180.217 162.121C180.564 159.884 181.144 157.3 182.009 154.46C184.554 146.102 188.876 137.679 195.414 129.767C198.559 125.96 202.161 122.352 206.262 118.973C219.343 108.19 236.068 103.274 256.273 102.998C271.531 102.811 285.496 105.277 292.716 108.797C302.827 113.749 311.466 119.628 318.339 127.21C327.187 136.97 332 148.505 332 163C332 179.608 327.387 191.969 317.897 203.362L317.655 203.652C310.122 212.623 301.342 219.739 282.162 233.046L277.253 236.438C242.308 260.807 228 287.757 228 323C228 334.046 236.955 343 248 343C259.046 343 268 334.046 268 323L268.003 322.334C268.162 300.415 276.252 285.666 300.983 268.66C325.613 251.722 336.962 242.784 347.958 229.765L348.631 228.963C364.021 210.487 372 189.107 372 163C372 138.161 363.252 117.197 347.974 100.345C337.179 88.4373 324.584 79.8655 310.277 72.8586C296.759 66.2682 276.801 62.743 255.755 63.0015C227.14 63.3921 201.749 70.8563 180.82 88.1068C174.74 93.1186 169.334 98.5323 164.578 104.288C154.497 116.489 147.76 129.616 143.743 142.807C142.311 147.51 141.32 151.929 140.691 155.977C140.281 158.615 140.082 160.694 140.019 162.128L140.007 162.472C139.716 173.357 148.208 182.504 159.128 182.981ZM280 398.99C280 416.663 265.673 430.99 248 430.99C230.327 430.99 216 416.663 216 398.99C216 381.317 230.327 366.99 248 366.99C265.673 366.99 280 381.317 280 398.99Z" fill="currentColor"/>
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
