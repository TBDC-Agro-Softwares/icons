<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7035 7.27131C20.0364 8.08543 19.6466 9.0154 18.833 9.34845C18.332 9.55355 17.5104 9.98895 16.7921 10.578C16.0418 11.1933 15.6254 11.7933 15.5277 12.2822C15.3553 13.1447 14.5168 13.7041 13.6548 13.5316C12.7928 13.359 12.2338 12.52 12.4062 11.6575C12.7178 10.0986 13.8078 8.90684 14.7743 8.11431C15.7727 7.29554 16.8782 6.70708 17.6277 6.40025C18.4413 6.0672 19.3707 6.45719 19.7035 7.27131Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9149 9.75143C19.0801 9.75143 15.1607 13.6733 15.1607 18.5112V32.959C15.1607 37.7969 19.0801 41.7187 23.9149 41.7187H26.8708C31.7056 41.7187 35.625 37.7969 35.625 32.959V18.5112C35.625 13.6733 31.7056 9.75143 26.8708 9.75143H23.9149ZM27.0982 12.9413V18.7387H32.4417V18.5112C32.4417 15.5087 30.0695 13.0607 27.0982 12.9413ZM32.4417 22.0378H18.3441V32.959C18.3441 36.0377 20.8382 38.5334 23.9149 38.5334H26.8708C29.9475 38.5334 32.4417 36.0377 32.4417 32.959V22.0378ZM18.3441 18.7387H23.8012V12.9379C20.777 12.9985 18.3441 15.4705 18.3441 18.5112V18.7387Z" fill="currentColor"/>
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
