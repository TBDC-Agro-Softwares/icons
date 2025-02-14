<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 496H480C488.837 496 496 488.837 496 480C496 471.163 488.837 464 480 464H48V32C48 23.1634 40.8366 16 32 16C23.1634 16 16 23.1634 16 32V464C16 481.673 30.3269 496 48 496ZM116 432H156C175.882 432 192 415.882 192 396V244C192 224.118 175.882 208 156 208H116C96.1178 208 80 224.118 80 244V396C80 415.882 96.1178 432 116 432ZM300 432H260C240.118 432 224 415.882 224 396V196C224 176.118 240.118 160 260 160H300C319.882 160 336 176.118 336 196V396C336 415.882 319.882 432 300 432ZM403.64 432H443.64C463.522 432 479.64 415.882 479.64 396V132C479.64 112.118 463.522 96 443.64 96H403.64C383.758 96 367.64 112.118 367.64 132V396C367.64 415.882 383.758 432 403.64 432Z" fill="currentColor"/>
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
