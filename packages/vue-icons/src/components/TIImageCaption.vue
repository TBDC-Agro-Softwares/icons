<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="513" viewBox="0 0 512 513" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10:170)">
<path d="M302.935 235.014L384.001 341.681H128.001L192.001 258.481L236.801 316.081L298.668 235.014H302.935ZM181.335 235.014C198.401 235.014 213.335 220.081 213.335 203.014C213.335 185.948 198.401 171.014 181.335 171.014C164.268 171.014 149.335 185.948 149.335 203.014C149.335 220.081 164.268 235.014 181.335 235.014ZM469.335 128.348V384.348C469.335 407.814 450.135 427.014 426.668 427.014H85.3346C61.868 427.014 42.668 407.814 42.668 384.348V128.348C42.668 104.881 61.868 85.6809 85.3346 85.6809H426.668C450.135 85.6809 469.335 104.881 469.335 128.348ZM426.668 188.081V128.348H85.3346V384.348H426.668V188.081ZM469.335 469.681H42.668V512.348H469.335V469.681Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_10:170">
<rect width="512" height="512" fill="white" transform="translate(0 0.347656)"/>
</clipPath>
</defs>
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
