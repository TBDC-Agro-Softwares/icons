<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M239.18 237.62H305.68L235.3 334.18L222.3 352L199.47 383.13C199.348 383.296 199.207 383.447 199.05 383.58L198.99 383.63C198.624 383.942 198.161 384.118 197.68 384.13H197.55H197.22H197.11C196.463 383.973 195.912 383.552 195.59 382.97C195.533 382.868 195.486 382.761 195.45 382.65V382.59C195.421 382.485 195.397 382.378 195.38 382.27C195.375 382.24 195.375 382.21 195.38 382.18C195.37 382.067 195.37 381.953 195.38 381.84V381.74C195.39 381.579 195.41 381.419 195.44 381.26L225.44 274.26H159L190.13 231.52L225.54 182.92L233.9 171.44L252.72 145.89L265.22 128.74C265.623 128.136 266.294 127.763 267.02 127.74H267.12C267.986 127.783 268.756 128.303 269.12 129.09V129.14C269.133 129.172 269.148 129.203 269.164 129.233L269.164 129.233L269.164 129.233C269.198 129.298 269.23 129.362 269.23 129.43V129.57C269.235 129.65 269.235 129.73 269.23 129.81C269.235 129.887 269.235 129.963 269.23 130.04V130.23C269.219 130.378 269.199 130.525 269.17 130.67L264.88 146L260.94 160L254.51 182.92L239.18 237.62ZM288.64 135.29L288.78 134.55C289.214 132.395 289.332 130.189 289.13 128H448V384H223.72L247.05 352H416V160.02H281.71L288.43 136.02L288.64 135.29ZM48 160H217.49L240.8 128H16V384H175.49C175.274 381.772 175.389 379.524 175.83 377.33L175.98 376.58L176.18 375.85L182.87 352H48V160ZM394.31 329.08H263.76L321.84 249.4L345 217.62H305.68H265.55L275.28 182.92H394.31V329.08ZM159 294.26H119.69L142.84 262.48L200.79 182.92H69.69V329.08H189.29L199.06 294.26H159ZM496 202.67H464V309.34H496V202.67Z" fill="currentColor"/>
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
