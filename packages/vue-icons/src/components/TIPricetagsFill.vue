<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="513" height="512" viewBox="0 0 513 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M448 183.8V60.8C448.038 48.9225 443.342 37.5194 434.952 29.1123C426.562 20.7052 415.168 15.9866 403.29 16H280.36C272.3 16.0166 264.571 19.2109 258.85 24.89L13.0904 270.58C-4.36087 288.087 -4.36087 316.413 13.0904 333.92L130.09 450.92C147.592 468.376 175.919 468.376 193.42 450.92L439.11 205.31C444.791 199.591 447.986 191.861 448 183.8ZM352 144C334.327 144 320 129.673 320 112C320 94.3269 334.327 80 352 80C369.674 80 384 94.3269 384 112C384 120.487 380.629 128.626 374.628 134.627C368.627 140.629 360.487 144 352 144ZM480 80C480 71.1634 487.164 64 496 64C504.837 64 512 71.1634 512 80V208C512.07 215.98 508.94 223.654 503.31 229.31L241.31 491.31C237.306 495.525 231.33 497.236 225.702 495.779C220.073 494.322 215.678 489.927 214.221 484.299C212.764 478.67 214.475 472.694 218.69 468.69L480 207.37V80Z" fill="currentColor"/>
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
