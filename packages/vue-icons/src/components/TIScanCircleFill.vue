<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM216 368H188C163.711 367.972 144.028 348.289 144 324V296C144 287.163 151.163 280 160 280C168.837 280 176 287.163 176 296V324C176 330.627 181.373 336 188 336H216C224.837 336 232 343.163 232 352C232 360.837 224.837 368 216 368ZM216 176H188C181.373 176 176 181.373 176 188V216C176 224.837 168.837 232 160 232C151.163 232 144 224.837 144 216V188C144.028 163.711 163.711 144.028 188 144H216C224.837 144 232 151.163 232 160C232 168.837 224.837 176 216 176ZM368 324C367.972 348.289 348.289 367.972 324 368H296C287.163 368 280 360.837 280 352C280 343.163 287.163 336 296 336H324C330.627 336 336 330.627 336 324V296C336 287.163 343.163 280 352 280C360.837 280 368 287.163 368 296V324ZM368 216C368 224.837 360.837 232 352 232C343.163 232 336 224.837 336 216V188C336 181.373 330.627 176 324 176H296C287.163 176 280 168.837 280 160C280 151.163 287.163 144 296 144H324C348.289 144.028 367.972 163.711 368 188V216Z" fill="currentColor"/>
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
