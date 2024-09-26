<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM359.99 224.32C360.26 250.26 351.48 274.3 333.2 297.69C332.509 298.605 331.452 299.172 330.308 299.241C329.163 299.311 328.046 298.875 327.25 298.05L203.25 174.84C202.107 173.707 201.755 172 202.355 170.507C202.955 169.015 204.391 168.027 206 168L207.54 167.99C227.94 167.99 242.54 178.63 251.65 188.41C252.772 189.621 254.349 190.31 256 190.31C257.651 190.31 259.228 189.621 260.35 188.41C269.46 178.63 284.06 167.99 304.46 167.99C334.77 167.99 359.68 193.26 359.99 224.32ZM158.84 221C157.709 219.875 156.018 219.529 154.537 220.12C153.055 220.711 152.066 222.125 152.02 223.72V224.36C151.74 251.46 161.33 276.49 181.32 300.86C190.7 312.3 207.72 330.59 247.02 357.27C252.445 360.985 259.595 360.985 265.02 357.27C270.17 353.78 274.92 350.43 279.33 347.27C280.276 346.58 280.872 345.509 280.961 344.341C281.049 343.173 280.621 342.025 279.79 341.2L158.84 221ZM324.69 363.31C327.684 366.319 331.756 368.007 336 368C342.469 367.997 348.3 364.099 350.775 358.122C353.25 352.145 351.883 345.266 347.31 340.69L171.31 164.69C165.019 158.714 155.112 158.84 148.976 164.976C142.84 171.112 142.714 181.019 148.69 187.31L324.69 363.31Z" fill="currentColor"/>
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
