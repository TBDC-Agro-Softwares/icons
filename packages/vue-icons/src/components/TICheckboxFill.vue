<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M400 48H112C76.6698 48.0386 48.0386 76.6698 48 112V400C48.0386 435.33 76.6698 463.961 112 464H400C435.33 463.961 463.961 435.33 464 400V112C463.961 76.6698 435.33 48.0386 400 48ZM364.25 186.29L229.85 346.29C226.867 349.843 222.489 351.926 217.85 352H217.58C213.045 351.998 208.723 350.072 205.69 346.7L148.09 282.7C144.108 278.476 142.726 272.427 144.478 266.893C146.231 261.36 150.843 257.209 156.53 256.047C162.218 254.886 168.088 256.896 171.87 261.3L217.16 311.62L339.75 165.71C345.472 159.095 355.445 158.3 362.142 163.926C368.84 169.551 369.778 179.512 364.25 186.29Z" fill="currentColor"/>
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
