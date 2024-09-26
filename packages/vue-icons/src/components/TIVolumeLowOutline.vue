<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M300.444 100.755L300.279 100.885L208.666 176H139C125.745 176 115 186.745 115 200V312L115.003 312.397C115.215 325.469 125.878 336 139 336H208.642L300.115 411.003C300.332 411.181 300.554 411.353 300.78 411.519C308.077 416.886 317.775 417.688 325.854 413.591C333.933 409.494 339.017 401.198 339 392.139L339 119.83C339 110.778 333.903 102.498 325.827 98.4156C317.753 94.3339 308.069 95.1401 300.78 100.501L300.444 100.755ZM307 136.752V375.267L228.935 311.257L228.524 310.926C222.879 306.448 215.878 304.004 208.658 304H147V208H208.65C215.849 208.007 222.849 205.577 228.502 201.11L228.935 200.763L307 136.752ZM417.252 184.729C413.236 176.857 403.6 173.732 395.728 177.748C387.857 181.764 384.732 191.4 388.748 199.272C398.235 217.867 403 236.252 403 256C403 275.257 398.081 294.129 388.699 312.824C384.736 320.722 387.926 330.337 395.824 334.301C403.722 338.264 413.337 335.074 417.301 327.176C428.818 304.223 435 280.507 435 256C435 230.989 428.956 207.668 417.252 184.729Z" fill="currentColor"/>
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
