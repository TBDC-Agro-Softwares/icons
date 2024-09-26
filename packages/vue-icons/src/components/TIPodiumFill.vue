<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M320 32H192C174.327 32 160 46.3269 160 64V476C160 478.209 161.791 480 164 480H348C350.209 480 352 478.209 352 476V64C352 46.3269 337.673 32 320 32ZM464 192H392C387.582 192 384 195.582 384 200V472C384 476.418 387.582 480 392 480H472C485.255 480 496 469.255 496 456V224C496 206.327 481.673 192 464 192ZM16 160C16 142.327 30.3269 128 48 128H120C124.418 128 128 131.582 128 136V472C128 476.418 124.418 480 120 480H40C26.7452 480 16 469.255 16 456V160Z" fill="currentColor"/>
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
