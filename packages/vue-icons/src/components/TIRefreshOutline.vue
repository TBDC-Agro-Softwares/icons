<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M267.051 46.4296C260.785 40.4391 250.848 40.5247 244.686 46.6863L244.43 46.9489C238.439 53.2153 238.525 63.1521 244.686 69.3137L294.4 119.027C284.611 118.363 272.756 118.037 258.492 118.003L256 118C158.798 118 80 196.798 80 294C80 391.202 158.798 470 256 470C353.202 470 432 391.202 432 294C432 285.163 424.837 278 416 278C407.163 278 400 285.163 400 294L399.981 296.381C398.709 374.812 334.734 438 256 438C176.471 438 112 373.529 112 294C112 214.471 176.471 150 256 150C275.066 150 289.537 150.566 299.779 151.594L244.686 206.686L244.43 206.949C238.439 213.215 238.525 223.152 244.686 229.314C250.935 235.562 261.065 235.562 267.314 229.314L347.314 149.314L347.57 149.051C353.561 142.785 353.475 132.848 347.314 126.686L267.314 46.6863L267.051 46.4296Z" fill="currentColor"/>
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
