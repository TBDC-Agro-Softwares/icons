<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.997 31.6851C47.8292 22.9939 40.7314 16 32 16C23.1634 16 16 23.1634 16 32V464L16.0043 464.529C16.2869 481.958 30.5036 496 48 496H480L480.315 495.997C489.006 495.829 496 488.731 496 480C496 471.163 488.837 464 480 464H48V32L47.997 31.6851ZM156 208H116C96.1178 208 80 224.118 80 244V396C80 415.882 96.1178 432 116 432H156C175.882 432 192 415.882 192 396V244C192 224.118 175.882 208 156 208ZM116 240H156C158.209 240 160 241.791 160 244V396C160 398.209 158.209 400 156 400H116C113.791 400 112 398.209 112 396V244C112 241.791 113.791 240 116 240ZM260 160H300C319.882 160 336 176.118 336 196V396C336 415.882 319.882 432 300 432H260C240.118 432 224 415.882 224 396V196C224 176.118 240.118 160 260 160ZM300 192H260C257.791 192 256 193.791 256 196V396C256 398.209 257.791 400 260 400H300C302.209 400 304 398.209 304 396V196C304 193.791 302.209 192 300 192ZM443.64 96H403.64C383.758 96 367.64 112.118 367.64 132V396C367.64 415.882 383.758 432 403.64 432H443.64C463.522 432 479.64 415.882 479.64 396V132C479.64 112.118 463.522 96 443.64 96ZM403.64 128H443.64C445.849 128 447.64 129.791 447.64 132V396C447.64 398.209 445.849 400 443.64 400H403.64C401.431 400 399.64 398.209 399.64 396V132C399.64 129.791 401.431 128 403.64 128Z" fill="currentColor"/>
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
