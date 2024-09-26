<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M329.444 100.92L329.279 101.051L237.666 176.166H168C154.745 176.166 144 186.911 144 200.166V312.166L144.003 312.562C144.215 325.634 154.878 336.166 168 336.166H237.642L329.115 411.168C329.332 411.346 329.554 411.518 329.78 411.685C337.077 417.052 346.775 417.853 354.854 413.756C362.933 409.66 368.017 401.363 368 392.305L368 119.996C368 110.943 362.903 102.664 354.827 98.5811C346.753 94.4994 337.069 95.3057 329.78 100.666L329.444 100.92ZM336 136.918V375.433L257.935 311.423L257.524 311.092C251.879 306.614 244.878 304.169 237.658 304.166H176V208.166H237.65C244.849 208.173 251.849 205.742 257.502 201.276L257.935 200.928L336 136.918Z" fill="currentColor"/>
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
