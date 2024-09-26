<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M309.87 16H202.13C182.354 16 165.761 29.6252 161.226 48H144L142.942 48.0086C108.084 48.5737 80 77.0072 80 112V432L80.0086 433.058C80.5737 467.916 109.007 496 144 496H368L369.058 495.991C403.916 495.426 432 466.993 432 432V112L431.991 110.942C431.426 76.0836 402.993 48 368 48H350.774C346.239 29.6252 329.646 16 309.87 16ZM350.774 80C346.239 98.3748 329.646 112 309.87 112H202.13C182.354 112 165.761 98.3748 161.226 80H144C126.504 80 112.287 94.0418 112.004 111.471L112 112V432C112 449.496 126.042 463.713 143.471 463.996L144 464H368C385.496 464 399.713 449.958 399.996 432.529L400 432V112C400 94.5036 385.958 80.2869 368.529 80.0043L368 80H350.774ZM202.13 48H309.87C315.465 48 320 52.5354 320 58.13V69.87C320 75.4646 315.465 80 309.87 80H202.13C196.535 80 192 75.4646 192 69.87V58.13C192 52.5354 196.535 48 202.13 48Z" fill="currentColor"/>
<path d="M344 151H168C159.163 151 152 158.163 152 167V169C152 177.837 159.163 185 168 185H344C352.837 185 360 177.837 360 169V167C360 158.163 352.837 151 344 151Z" fill="currentColor"/>
<path d="M344 233H168C159.163 233 152 240.163 152 249V251C152 259.837 159.163 267 168 267H344C352.837 267 360 259.837 360 251V249C360 240.163 352.837 233 344 233Z" fill="currentColor"/>
<path d="M344 315H168C159.163 315 152 322.163 152 331V333C152 341.837 159.163 349 168 349H344C352.837 349 360 341.837 360 333V331C360 322.163 352.837 315 344 315Z" fill="currentColor"/>
<path d="M344 397H168C159.163 397 152 404.163 152 413V415C152 423.837 159.163 431 168 431H344C352.837 431 360 423.837 360 415V413C360 404.163 352.837 397 344 397Z" fill="currentColor"/>
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
