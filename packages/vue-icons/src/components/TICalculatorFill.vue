<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M416 80C415.972 53.5018 394.498 32.0276 368 32H144C117.502 32.0276 96.0276 53.5018 96 80V432C96.0276 458.498 117.502 479.972 144 480H368C394.498 479.972 415.972 458.498 416 432V80ZM168 432C154.745 432 144 421.255 144 408C144 394.745 154.745 384 168 384C181.255 384 192 394.745 192 408C192 421.255 181.255 432 168 432ZM168 352C154.745 352 144 341.255 144 328C144 314.745 154.745 304 168 304C181.255 304 192 314.745 192 328C192 341.255 181.255 352 168 352ZM168 272C154.745 272 144 261.255 144 248C144 234.745 154.745 224 168 224C181.255 224 192 234.745 192 248C192 261.255 181.255 272 168 272ZM256 432C242.745 432 232 421.255 232 408C232 394.745 242.745 384 256 384C269.255 384 280 394.745 280 408C280 421.255 269.255 432 256 432ZM256 352C242.745 352 232 341.255 232 328C232 314.745 242.745 304 256 304C269.255 304 280 314.745 280 328C280 341.255 269.255 352 256 352ZM256 272C242.745 272 232 261.255 232 248C232 234.745 242.745 224 256 224C269.255 224 280 234.745 280 248C280 261.255 269.255 272 256 272ZM368 408C368 421.255 357.255 432 344 432C330.745 432 320 421.255 320 408V328C320 314.745 330.745 304 344 304C357.255 304 368 314.745 368 328V408ZM344 272C330.745 272 320 261.255 320 248C320 234.745 330.745 224 344 224C357.255 224 368 234.745 368 248C368 261.255 357.255 272 344 272ZM363.31 171.31C360.311 174.311 356.243 175.998 352 176H160C151.163 176 144 168.837 144 160V96C144 87.1634 151.163 80 160 80H352C360.837 80 368 87.1634 368 96V160C367.998 164.243 366.311 168.311 363.31 171.31Z" fill="currentColor"/>
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
