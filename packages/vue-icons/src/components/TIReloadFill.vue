<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M397.287 111.168C358.165 70.7473 304.281 47.9304 247.98 48.0003C133.163 48.0003 40 141.164 40 256C40 370.837 133.163 464 248 464C336.156 463.995 414.741 408.442 444.153 325.339C447.101 317.009 442.739 307.866 434.408 304.917C426.078 301.969 416.935 306.332 413.987 314.662L413.228 316.765C387.767 385.921 321.851 431.996 247.999 432C150.837 432 72 353.164 72 256C72 158.837 150.837 80.0003 248 80.0003L249.443 80.0045C296.554 80.3325 341.541 99.5835 374.293 133.423L375.029 134.188L385.001 145.79L334.1 196.69C324.02 206.77 331.16 224 345.42 224H456C464.837 224 472 216.837 472 208V97.4205C472 83.1605 454.77 76.0005 444.69 86.1005L407.693 123.098L398.748 112.692L397.287 111.168Z" fill="currentColor"/>
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
