<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M256 213.1H227.6V270.2H256V213.1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 156V327.4H142.2V356H256V327.4H512V156H0ZM142.2 298.9H113.8V213.2H85.3V298.9H28.4V184.6H142.2V298.9ZM227.5 298.9H284.4V184.6H170.6V327.5H227.5V298.9ZM455.2 298.9V213.2H426.8V298.9H398.4V213.2H370V298.9H313.1V184.6H483.8V298.9H455.2Z" fill="currentColor"/>
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
