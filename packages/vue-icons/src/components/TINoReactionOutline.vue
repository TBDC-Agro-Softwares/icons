<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M208 232C208 245.255 197.255 256 184 256C170.745 256 160 245.255 160 232C160 218.745 170.745 208 184 208C197.255 208 208 218.745 208 232Z" fill="currentColor"/>
<path d="M328 256C341.255 256 352 245.255 352 232C352 218.745 341.255 208 328 208C314.745 208 304 218.745 304 232C304 245.255 314.745 256 328 256Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 32C132.288 32 32 132.288 32 256C32 379.712 132.288 480 256 480C379.712 480 480 379.712 480 256C480 132.288 379.712 32 256 32ZM256 64C362.039 64 448 149.961 448 256C448 362.039 362.039 448 256 448C149.961 448 64 362.039 64 256C64 149.961 149.961 64 256 64Z" fill="currentColor"/>
<path d="M344 308C348.418 308 352 311.582 352 316V333C352 337.418 348.418 341 344 341H168C163.582 341 160 337.418 160 333L160 316C160 311.582 163.582 308 168 308H344Z" fill="currentColor"/>
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
