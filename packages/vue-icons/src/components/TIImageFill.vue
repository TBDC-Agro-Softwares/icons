<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M416 64H96C60.6698 64.0386 32.0386 92.6698 32 128V384C32.0386 419.33 60.6698 447.961 96 448H416C451.33 447.961 479.961 419.33 480 384V128C479.961 92.6698 451.33 64.0386 416 64ZM336 128C362.51 128 384 149.49 384 176C384 202.51 362.51 224 336 224C309.49 224 288 202.51 288 176C288.028 149.502 309.502 128.028 336 128ZM96 416C78.3269 416 64 401.673 64 384V316.37L158.84 232.07C177.833 215.225 206.651 216.058 224.64 233.97L289.59 298.78L172.37 416H96ZM448 384C448 401.673 433.673 416 416 416H217.63L339.05 294.58C356.802 279.484 382.86 279.416 400.69 294.42L448 333.84V384Z" fill="currentColor"/>
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
