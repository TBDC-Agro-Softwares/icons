<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M463.94 48L463.928 48C396.489 48.3025 346.065 56.7555 309.764 74.0994L308.656 74.6337C285.844 85.7357 268.507 100.514 256.456 119.001L256 119.708L255.544 119.001C243.299 100.216 225.596 85.2599 202.237 74.0994C165.936 56.7555 115.512 48.3025 48.072 48C39.5476 47.9681 31.3745 51.3355 25.3551 57.3549C19.3358 63.3742 15.9683 71.5473 16.0002 80.0599L16.0001 366.07C16.0001 384.698 29.0287 400 48.0002 400C107.757 400 151.498 405.733 183.335 416.855C210.216 426.245 228.487 439.241 243.413 457.879C243.556 458.06 243.703 458.239 243.853 458.414C246.256 461.223 249.395 462.972 252.715 463.662C253.775 463.884 254.874 464 256 464C257.123 464 258.219 463.884 259.277 463.664C262.597 462.976 265.736 461.229 268.14 458.423C268.292 458.246 268.439 458.067 268.584 457.883C283.6 439.151 301.859 426.158 328.727 416.786C360.502 405.701 404.188 400 464 400C481.673 400 496 385.673 496 368V80C496.032 71.5473 492.665 63.3742 486.645 57.3549C480.626 51.3355 472.453 47.9681 463.94 48ZM272 410.437C310.946 381.612 368.173 368.34 460.414 368.006L464 368V79.999L462.183 80.0104C400.023 80.438 354.579 88.1524 323.559 102.973C295.601 116.331 279.264 135.399 272 162.065V410.437ZM240 162.065C232.737 135.399 216.4 116.331 188.441 102.973C157.118 88.0074 111.086 80.2877 47.9992 80V79.999L47.9403 79.9998L47.9992 80L48.0001 366.07C48.0001 366.799 48.0993 367.419 48.2609 367.895L48.2982 368L51.583 368.006C143.699 368.341 201.053 381.677 240 410.458V162.065Z" fill="currentColor"/>
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
