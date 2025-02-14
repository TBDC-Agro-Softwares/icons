<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M479.064 111.339C478.603 103.979 473.173 97.8878 465.914 96.5888C379.884 81.1688 343.684 69.1088 265.994 34.1488C258.234 31.2588 253.424 31.3088 245.994 34.1488C168.304 69.1488 132.104 81.1488 46.0742 96.5888C38.8157 97.8878 33.3849 103.979 32.9242 111.339C29.0742 172.439 37.2642 229.339 57.2842 280.489C73.6544 322.198 97.9063 360.364 128.714 392.899C173.384 440.329 222.914 468.019 248.454 478.499C253.297 480.475 258.721 480.475 263.564 478.499C290.564 467.579 338.254 440.679 383.274 392.879C414.08 360.35 438.332 322.191 454.704 280.489C474.724 229.349 482.914 172.439 479.064 111.339Z" fill="currentColor"/>
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
