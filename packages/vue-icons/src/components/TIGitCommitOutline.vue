<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 272H145.134C152.898 326.277 199.576 368 256 368C312.424 368 359.102 326.277 366.866 272H464L464.315 271.997C473.006 271.829 480 264.731 480 256C480 247.163 472.837 240 464 240H366.866C359.102 185.723 312.424 144 256 144C199.576 144 152.898 185.723 145.134 240H48L47.6851 240.003C38.9939 240.171 32 247.269 32 256C32 264.837 39.1634 272 48 272ZM336 256C336 211.817 300.183 176 256 176C211.817 176 176 211.817 176 256C176 300.183 211.817 336 256 336C300.183 336 336 300.183 336 256Z" fill="currentColor"/>
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
