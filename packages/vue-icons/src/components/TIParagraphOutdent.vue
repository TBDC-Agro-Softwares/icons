<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="516" viewBox="0 0 512 516" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64 258.174L128 322.522V193.826L64 258.174ZM64 408.319H448V365.421H64V408.319ZM64 150.928H448V108.029H64V150.928ZM192 236.725H448V193.826H192V236.725ZM192 322.522H448V279.624H192V322.522Z" fill="currentColor"/>
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
