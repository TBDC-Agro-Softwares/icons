<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 256C64 149.961 149.961 64 256 64C306.922 64 355.758 84.2285 391.764 120.235C427.771 156.242 448 205.078 448 256C448 362.039 362.039 448 256 448C149.961 448 64 362.039 64 256ZM369.137 142.863C339.131 112.857 298.435 96 256 96C167.634 96 96 167.634 96 256C96 344.366 167.634 416 256 416C344.366 416 416 344.366 416 256C416 213.565 399.143 172.869 369.137 142.863ZM144 232C144 183.399 183.399 144 232 144C255.339 144 277.722 153.271 294.225 169.775C310.729 186.278 320 208.661 320 232C320 250.52 314.279 267.704 304.508 281.88L347.314 324.686C353.562 330.935 353.562 341.065 347.314 347.314C341.152 353.475 331.215 353.561 324.949 347.57L324.686 347.314L281.88 304.508C267.704 314.279 250.52 320 232 320C183.399 320 144 280.601 144 232ZM271.598 192.402C261.096 181.9 246.852 176 232 176C201.072 176 176 201.072 176 232C176 262.928 201.072 288 232 288C262.928 288 288 262.928 288 232C288 217.148 282.1 202.904 271.598 192.402Z" fill="currentColor"/>
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
