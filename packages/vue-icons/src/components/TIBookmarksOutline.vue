<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="513" viewBox="0 0 512 513" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M463.988 62.9423C463.325 28.1069 434.972 0.10149 400.046 6.74644e-05L176 0L174.942 0.0115948C140.107 0.674645 112.101 29.0283 112 63.9535L112 80H144V64L144.006 63.4721C144.338 46.084 158.546 32.0508 176.046 31.9999L400 32L400.528 32.0058C417.916 32.338 431.949 46.5457 432 64.0465L432 398.71L384 360.31V144C383.897 108.676 355.324 80.1025 320.046 80.0001H111.954C76.6755 80.1025 48.1025 108.676 48.0001 143.954L48 496L48.0047 496.406C48.3175 509.75 64.0043 516.914 74.3062 508.239L216 388.917L357.694 508.239C368.1 517.001 384 509.604 384 496V401.29L438.005 444.494L438.321 444.741C448.79 452.725 464 445.282 464 432V64L463.988 62.9423ZM112 112H320L320.528 112.006C337.916 112.338 351.949 126.546 352 144.046L352 461.609L226.306 355.761L226.016 355.523C220.071 350.747 211.553 350.827 205.694 355.761L80 461.608V144C80.0508 126.545 94.084 112.338 111.517 112.006L112 112Z" fill="currentColor"/>
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
