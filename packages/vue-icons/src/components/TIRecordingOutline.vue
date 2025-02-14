<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 256C16 194.144 66.1441 144 128 144C189.856 144 240 194.144 240 256C240 287.339 227.129 315.672 206.384 336H305.616C284.871 315.672 272 287.339 272 256C272 194.144 322.144 144 384 144C445.856 144 496 194.144 496 256C496 317.856 445.856 368 384 368H128C66.1441 368 16 317.856 16 256ZM384 336C428.183 336 464 300.183 464 256C464 211.817 428.183 176 384 176C339.817 176 304 211.817 304 256C304 300.183 339.817 336 384 336ZM128 336C172.183 336 208 300.183 208 256C208 211.817 172.183 176 128 176C83.8172 176 48 211.817 48 256C48 300.183 83.8172 336 128 336Z" fill="currentColor"/>
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
