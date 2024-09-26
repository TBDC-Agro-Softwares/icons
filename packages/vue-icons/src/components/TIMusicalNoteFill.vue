<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M183.83 480C172.202 479.98 160.876 476.287 151.47 469.45C136.742 458.81 128.013 441.749 128 423.58C127.946 401.988 141.689 382.775 162.14 375.85L213 358.73C219.618 356.471 224.048 350.232 224 343.24V92C223.97 77.3323 233.886 64.51 248.09 60.85L356.48 32.71C363.069 31.0021 370.078 32.4404 375.462 36.6055C380.846 40.7705 383.998 47.1931 384 54V111.75C384.039 126.466 374.064 139.322 359.8 142.94L268.15 166.07C260.95 167.944 255.944 174.47 256 181.91V424C256.055 444.728 242.857 463.173 223.22 469.81L201.75 477.04C195.978 478.995 189.925 479.995 183.83 480Z" fill="currentColor"/>
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
