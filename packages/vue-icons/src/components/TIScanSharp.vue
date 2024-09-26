<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M422 192H466V124C465.95 80.9423 431.058 46.0496 388 46H320V90H388C406.778 90 422 105.222 422 124V192ZM320 466H388C431.058 465.95 465.95 431.058 466 388V320H422V388C422 406.778 406.778 422 388 422H320V466ZM192 466H124C80.9423 465.95 46.0496 431.058 46 388V320H90V388C90 406.778 105.222 422 124 422H192V466ZM46 192H90V124C90 105.222 105.222 90 124 90H192V46H124C80.9423 46.0496 46.0496 80.9423 46 124V192Z" fill="currentColor"/>
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
