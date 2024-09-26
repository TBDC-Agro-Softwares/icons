<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="4.55452" cy="15.6302" rx="3.33333" ry="3.33333" fill="#FF4560"/>
<ellipse cx="15.4452" cy="15.9173" rx="3.33333" ry="3.33333" fill="#45B1FF"/>
<ellipse cx="4.55452" cy="5.02669" rx="3.33333" ry="3.33333" fill="#FEB019"/>
<ellipse cx="15.4452" cy="5.02669" rx="3.33333" ry="3.33333" fill="#00DF8F"/>
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
