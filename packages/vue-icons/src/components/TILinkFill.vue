<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M199.41 136C212.665 136 223.41 146.745 223.41 160C223.41 173.122 212.879 183.785 199.807 183.997L199.41 184H144C104.235 184 72 216.235 72 256C72 295.367 103.594 327.355 142.809 327.99L144 328H200.66C213.915 328 224.66 338.745 224.66 352C224.66 365.122 214.129 375.785 201.057 375.997L200.66 376H144C77.7258 376 24 322.274 24 256C24 190.389 76.6567 137.076 142.016 136.016L144 136H199.41ZM368 136C434.274 136 488 189.726 488 256C488 321.611 435.343 374.924 369.984 375.984L368 376H311.34C298.085 376 287.34 365.255 287.34 352C287.34 338.878 297.871 328.215 310.943 328.003L311.34 328H368C407.764 328 440 295.764 440 256C440 216.633 408.406 184.645 369.191 184.01L368 184H312.59C299.335 184 288.59 173.255 288.59 160C288.59 146.878 299.121 136.215 312.193 136.003L312.59 136H368ZM368.93 256C368.93 242.745 358.185 232 344.93 232H169.07L168.673 232.003C155.601 232.215 145.07 242.878 145.07 256C145.07 269.255 155.815 280 169.07 280H344.93L345.327 279.997C358.399 279.785 368.93 269.122 368.93 256Z" fill="currentColor"/>
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
