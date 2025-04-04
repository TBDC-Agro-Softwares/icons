<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="256" height="257" viewBox="0 0 256 257" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M74.6667 40.25C55.5208 40.25 40 55.7708 40 74.9167V181.583C40 200.729 55.5208 216.25 74.6667 216.25H181.333C200.479 216.25 216 200.729 216 181.583V117.583C216 113.165 219.582 109.583 224 109.583C228.418 109.583 232 113.165 232 117.583V181.583C232 209.566 209.316 232.25 181.333 232.25H74.6667C46.6842 232.25 24 209.566 24 181.583V74.9167C24 46.9342 46.6842 24.25 74.6667 24.25H138.667C143.085 24.25 146.667 27.8317 146.667 32.25C146.667 36.6683 143.085 40.25 138.667 40.25H74.6667ZM197.333 24.25C201.752 24.25 205.333 27.8317 205.333 32.25V50.9167H224C228.418 50.9167 232 54.4984 232 58.9167C232 63.3349 228.418 66.9167 224 66.9167H205.333V85.5833C205.333 90.0016 201.752 93.5833 197.333 93.5833C192.915 93.5833 189.333 90.0016 189.333 85.5833V66.9167H170.667C166.248 66.9167 162.667 63.3349 162.667 58.9167C162.667 54.4984 166.248 50.9167 170.667 50.9167H189.333V32.25C189.333 27.8317 192.915 24.25 197.333 24.25ZM85.3333 77.5833C89.7516 77.5833 93.3333 81.1651 93.3333 85.5833V170.917C93.3333 175.335 89.7516 178.917 85.3333 178.917C80.9151 178.917 77.3333 175.335 77.3333 170.917V85.5833C77.3333 81.1651 80.9151 77.5833 85.3333 77.5833ZM170.667 109.583C175.085 109.583 178.667 113.165 178.667 117.583V170.917C178.667 175.335 175.085 178.917 170.667 178.917C166.248 178.917 162.667 175.335 162.667 170.917V117.583C162.667 113.165 166.248 109.583 170.667 109.583ZM128 141.583C132.418 141.583 136 145.165 136 149.583V170.917C136 175.335 132.418 178.917 128 178.917C123.582 178.917 120 175.335 120 170.917V149.583C120 145.165 123.582 141.583 128 141.583Z" fill="currentColor"/>
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
