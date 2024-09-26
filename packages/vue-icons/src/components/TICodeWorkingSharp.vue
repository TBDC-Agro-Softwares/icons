<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M161.975 114.367L189.633 145.976L63.8898 256L189.633 366.025L161.975 397.633L0.109375 256L161.975 114.367ZM135 256C135 238.879 148.879 225 166 225C183.121 225 197 238.879 197 256C197 273.121 183.121 287 166 287C148.879 287 135 273.121 135 256ZM256 225C238.879 225 225 238.879 225 256C225 273.121 238.879 287 256 287C273.121 287 287 273.121 287 256C287 238.879 273.121 225 256 225ZM346 225C328.879 225 315 238.879 315 256C315 273.121 328.879 287 346 287C363.121 287 377 273.121 377 256C377 238.879 363.121 225 346 225ZM350.024 114.367L322.367 145.976L448.109 255.999L322.367 366.025L350.024 397.633L511.89 256L350.024 114.367Z" fill="currentColor"/>
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
