<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 56C145.553 56 56 145.553 56 256C56 366.447 145.553 456 256 456C366.447 456 456 366.447 456 256C456 145.553 366.447 56 256 56ZM256 88C348.773 88 424 163.227 424 256C424 348.773 348.773 424 256 424C163.227 424 88 348.773 88 256C88 163.227 163.227 88 256 88ZM230 164C230 149.641 241.641 138 256 138C270.359 138 282 149.641 282 164C282 178.359 270.359 190 256 190C241.641 190 230 178.359 230 164ZM260 212C268.731 212 275.829 218.994 275.997 227.685L276 228V332H304C312.837 332 320 339.163 320 348C320 356.731 313.006 363.829 304.315 363.997L304 364H216C207.163 364 200 356.837 200 348C200 339.269 206.994 332.171 215.685 332.003L216 332H244V244H228C219.269 244 212.171 237.006 212.003 228.315L212 228C212 219.269 218.994 212.171 227.685 212.003L228 212H260Z" fill="currentColor"/>
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
