<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 56C145.72 56 56 145.72 56 256C56 366.28 145.72 456 256 456C366.28 456 456 366.28 456 256C456 145.72 366.28 56 256 56ZM256 138C270.359 138 282 149.641 282 164C282 178.359 270.359 190 256 190C241.641 190 230 178.359 230 164C230 157.104 232.739 150.491 237.615 145.615C242.491 140.739 249.104 138 256 138ZM304 364H216C207.163 364 200 356.837 200 348C200 339.163 207.163 332 216 332H244V244H228C219.163 244 212 236.837 212 228C212 219.163 219.163 212 228 212H260C268.837 212 276 219.163 276 228V332H304C312.837 332 320 339.163 320 348C320 356.837 312.837 364 304 364Z" fill="currentColor"/>
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
