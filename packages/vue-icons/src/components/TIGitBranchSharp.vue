<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M353 96C331.508 96.0028 311.452 106.793 299.606 124.726C287.761 142.66 285.708 165.341 294.14 185.11L193 273.11V151.39C218.086 136.907 230.316 107.38 222.819 79.3999C215.322 51.4202 189.967 31.9644 161 31.9644C132.033 31.9644 106.678 51.4202 99.1807 79.3999C91.6835 107.38 103.914 136.907 129 151.39V360.61C103.914 375.093 91.6835 404.62 99.1807 432.6C106.678 460.58 132.033 480.036 161 480.036C189.967 480.036 215.322 460.58 222.819 432.6C230.316 404.62 218.086 375.093 193 360.61V358L347.25 223.73C349.15 223.9 351.06 224 353 224C388.346 224 417 195.346 417 160C417 124.654 388.346 96 353 96ZM161 64C178.673 64 193 78.3269 193 96C193 113.673 178.673 128 161 128C143.327 128 129 113.673 129 96C129 78.3269 143.327 64 161 64ZM161 448C143.327 448 129 433.673 129 416C129 398.327 143.327 384 161 384C178.673 384 193 398.327 193 416C193 433.673 178.673 448 161 448ZM353 192C335.327 192 321 177.673 321 160C321 142.327 335.327 128 353 128C370.673 128 385 142.327 385 160C385 177.673 370.673 192 353 192Z" fill="currentColor"/>
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
