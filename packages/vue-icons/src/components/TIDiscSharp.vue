<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M414.39 97.61C357.896 40.5575 275.188 18.1048 197.6 38.7581C120.011 59.4114 59.4112 120.012 38.7579 197.6C18.1045 275.188 40.5572 357.896 97.6097 414.39C154.103 471.443 236.811 493.895 314.4 473.242C391.988 452.589 452.588 391.988 473.242 314.4C493.895 236.812 471.442 154.104 414.39 97.61ZM256 336C211.817 336 176 300.183 176 256C176 211.817 211.817 176 256 176C300.183 176 336 211.817 336 256C335.95 300.162 300.162 335.95 256 336ZM288 256C288 273.673 273.673 288 256 288C238.327 288 224 273.673 224 256C224 238.327 238.327 224 256 224C273.673 224 288 238.327 288 256Z" fill="currentColor"/>
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
