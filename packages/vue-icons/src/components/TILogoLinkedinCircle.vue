<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0ZM122.897 212.03H180.912V386.342H122.897V212.03ZM184.734 158.109C184.357 141.018 172.135 128 152.288 128C132.442 128 119.467 141.018 119.467 158.109C119.467 174.846 132.059 188.238 151.535 188.238H151.906C172.135 188.238 184.734 174.846 184.734 158.109ZM323.34 207.937C361.517 207.937 390.138 232.857 390.138 286.397L390.135 386.342H332.123V293.085C332.123 269.661 323.727 253.677 302.725 253.677C286.698 253.677 277.151 264.452 272.958 274.861C271.424 278.59 271.047 283.787 271.047 288.996V386.347H213.025C213.025 386.347 213.79 228.391 213.025 212.035H271.047V236.724C278.747 224.855 292.538 207.937 323.34 207.937Z" fill="currentColor"/>
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
