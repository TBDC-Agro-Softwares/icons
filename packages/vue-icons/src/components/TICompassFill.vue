<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM361.07 161.33L314.19 278.53C307.685 294.796 294.796 307.685 278.53 314.19L161.33 361.07C158.358 362.259 154.964 361.563 152.7 359.3C150.437 357.036 149.741 353.642 150.93 350.67L197.81 233.47C204.315 217.204 217.204 204.315 233.47 197.81L350.67 150.93C353.642 149.741 357.036 150.437 359.3 152.7C361.563 154.964 362.259 158.358 361.07 161.33ZM280 256C280 269.255 269.255 280 256 280C242.745 280 232 269.255 232 256C232 242.745 242.745 232 256 232C269.255 232 280 242.745 280 256Z" fill="currentColor"/>
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
