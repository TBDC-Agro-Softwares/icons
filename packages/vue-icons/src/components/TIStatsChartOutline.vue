<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M216 16H184C170.745 16 160 26.7452 160 40V472C160 485.255 170.745 496 184 496H216C229.255 496 240 485.255 240 472V40C240 26.7452 229.255 16 216 16ZM208 48V464H192V48H208ZM408 96H440C453.255 96 464 106.745 464 120V472C464 485.255 453.255 496 440 496H408C394.745 496 384 485.255 384 472V120C384 106.745 394.745 96 408 96ZM432 464V128H416V464H432ZM328 208H296C282.745 208 272 218.745 272 232V472C272 485.255 282.745 496 296 496H328C341.255 496 352 485.255 352 472V232C352 218.745 341.255 208 328 208ZM320 240V464H304V240H320ZM104 304H72C58.7452 304 48 314.745 48 328V472C48 485.255 58.7452 496 72 496H104C117.255 496 128 485.255 128 472V328C128 314.745 117.255 304 104 304ZM96 336V464H80V336H96Z" fill="currentColor"/>
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
