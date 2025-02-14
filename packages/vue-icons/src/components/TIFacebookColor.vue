<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 383.777 93.6154 489.685 216 508.89V330H151V256H216V199.6C216 135.44 254.219 100 312.695 100C340.704 100 370 105 370 105V168H337.719C305.918 168 296 187.734 296 207.979V256H367L355.65 330H296V508.89C418.385 489.685 512 383.777 512 256Z" fill="#1877F2"/>
<path d="M355.65 330L367 256H296V207.978C296 187.734 305.917 168 337.719 168H370V105C370 105 340.704 100 312.695 100C254.219 100 216 135.44 216 199.6V256H151V330H216V508.89C229.232 510.964 242.606 512.003 256 512C269.608 512 282.966 510.935 296 508.89V330H355.65Z" fill="white"/>
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
