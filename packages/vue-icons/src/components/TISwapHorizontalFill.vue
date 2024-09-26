<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M315.051 36.4296C308.785 30.4391 298.848 30.5247 292.686 36.6863L292.43 36.9489C286.439 43.2153 286.525 53.1521 292.686 59.3137L377.373 144H96L95.6851 144.003C86.9939 144.171 80 151.269 80 160C80 168.837 87.1634 176 96 176H377.373L292.686 260.686L292.43 260.949C286.439 267.215 286.525 277.152 292.686 283.314C298.935 289.562 309.065 289.562 315.314 283.314L427.314 171.314L427.57 171.051C433.561 164.785 433.475 154.848 427.314 148.686L315.314 36.6863L315.051 36.4296ZM196.686 228.686C202.935 222.438 213.065 222.438 219.314 228.686C225.475 234.848 225.561 244.785 219.57 251.051L219.314 251.314L134.627 336H416C424.837 336 432 343.163 432 352C432 360.731 425.006 367.829 416.315 367.997L416 368H134.627L219.314 452.686C225.475 458.848 225.561 468.785 219.57 475.051L219.314 475.314C213.152 481.475 203.215 481.561 196.949 475.57L196.686 475.314L84.6863 363.314C78.5247 357.152 78.4391 347.215 84.4296 340.949L84.6863 340.686L196.686 228.686Z" fill="currentColor"/>
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
