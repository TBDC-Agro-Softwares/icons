<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 32C269.122 32 279.785 42.5313 279.997 55.6031L280 56V96C280 96.5981 279.978 97.1911 279.935 97.7783C349.139 108.159 403.841 162.861 414.222 232.065C414.679 232.031 415.139 232.011 415.603 232.003L416 232H456C469.255 232 480 242.745 480 256C480 269.122 469.469 279.785 456.397 279.997L456 280H416C415.402 280 414.809 279.978 414.222 279.935C403.841 349.139 349.139 403.841 279.935 414.222C279.969 414.679 279.989 415.139 279.997 415.603L280 416V456C280 469.255 269.255 480 256 480C242.878 480 232.215 469.469 232.003 456.397L232 456V416C232 415.402 232.022 414.809 232.065 414.222C162.861 403.841 108.159 349.139 97.7783 279.935C97.3212 279.969 96.8607 279.989 96.3969 279.997L96 280H56C42.7452 280 32 269.255 32 256C32 242.878 42.5313 232.215 55.6031 232.003L56 232H96C96.5981 232 97.1911 232.022 97.7783 232.065C108.159 162.861 162.861 108.159 232.065 97.7783C232.031 97.3212 232.011 96.8607 232.003 96.3969L232 96V56C232 42.7452 242.745 32 256 32ZM256 128C326.692 128 384 185.308 384 256C384 326.692 326.692 384 256 384C185.308 384 128 326.692 128 256C128 185.308 185.308 128 256 128Z" fill="currentColor"/>
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
