<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="516" viewBox="0 0 512 516" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M85.3163 193.826C85.3163 170.232 104.516 150.928 127.983 150.928V236.725C104.516 236.725 85.3163 217.421 85.3163 193.826ZM356.25 440.493L424.516 481.247L405.316 404.029L469.316 341.826H390.383L360.516 266.754L326.383 343.971H245.316L307.183 406.174L287.983 483.392L356.25 440.493ZM213.316 374V408.319H247.45L213.316 374ZM130.116 108.029C89.583 108.029 53.3163 135.913 44.783 176.667C34.1163 221.71 61.8496 266.754 106.65 277.479H110.916C117.316 279.623 123.716 279.623 127.983 279.623V408.319H170.65V150.928H213.316V301.073H255.983V150.928H298.65V108.029H130.116Z" fill="currentColor"/>
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
