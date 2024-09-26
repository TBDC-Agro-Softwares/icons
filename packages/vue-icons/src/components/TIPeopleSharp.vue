<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M428 168C428 216.601 388.601 256 340 256C291.399 256 252 216.601 252 168C252 119.399 291.399 80 340 80C388.601 80 428 119.399 428 168ZM224 184C224 223.764 191.764 256 152 256C112.235 256 80 223.764 80 184C80 144.235 112.235 112 152 112C191.764 112 224 144.235 224 184ZM152 276C174.76 276 205.84 281.7 234 296C214.81 305.55 199.17 317.32 188 330C174 345.88 166 364.93 166 383.93V400H16V358C16 303.34 107.42 276 152 276ZM340 288C287.93 288 184 320.16 184 384V432H496V384C496 320.16 392.07 288 340 288Z" fill="currentColor"/>
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
