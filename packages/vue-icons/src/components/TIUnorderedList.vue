<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="516" viewBox="0 0 512 516" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M85.3359 226C68.2693 226 53.3359 241.015 53.3359 258.174C53.3359 275.333 68.2693 290.348 85.3359 290.348C102.403 290.348 117.336 275.333 117.336 258.174C117.336 241.015 102.403 226 85.3359 226ZM85.3359 118.754C68.2693 118.754 53.3359 133.768 53.3359 150.928C53.3359 168.087 68.2693 183.101 85.3359 183.101C102.403 183.101 117.336 168.087 117.336 150.928C117.336 133.768 102.403 118.754 85.3359 118.754ZM85.3359 333.246C68.2693 333.246 53.3359 348.261 53.3359 365.42C53.3359 382.58 68.2693 397.594 85.3359 397.594C102.403 397.594 117.336 382.58 117.336 365.42C117.336 348.261 102.403 333.246 85.3359 333.246ZM160.003 129.478V172.377H458.669V129.478H160.003ZM160.003 386.87H458.669V343.971H160.003V386.87ZM160.003 279.623H458.669V236.725H160.003V279.623Z" fill="currentColor"/>
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
