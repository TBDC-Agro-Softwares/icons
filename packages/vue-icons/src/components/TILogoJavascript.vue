<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 32V480H480V32H32ZM272 380C272 423.61 246.24 444.87 208.95 444.87C175.27 444.87 155.72 427.43 145.8 406.38L180.08 385.63C186.69 397.36 191.71 407.28 206.14 407.28C218.14 407.28 228 401.87 228 380.82V240H272V380ZM371.35 443.87C332.26 443.87 307 426.23 294.67 401.87L329 382C338 396.74 349.75 406.56 370.5 406.56C387.94 406.56 398.07 398.84 398.07 386.81C398.07 372.38 387.64 367.27 368.39 358.81L357.87 354.29C327.49 341.37 307.35 325.13 307.35 290.84C307.35 259.27 331.4 236.21 368.99 236.21C395.76 236.21 414.99 244.53 428.84 268.89L396 290C388.78 277.07 381 272 368.94 272C356.61 272 348.79 279.82 348.79 290C348.79 302.63 356.61 307.74 374.65 315.56L385.17 320.07C420.96 335.41 441.11 351.07 441.11 386.23C441.12 424.13 411.35 443.87 371.35 443.87Z" fill="currentColor"/>
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
