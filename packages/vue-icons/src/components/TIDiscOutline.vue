<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 256C32 132.288 132.288 32 256 32C379.712 32 480 132.288 480 256C480 379.712 379.712 480 256 480C132.288 480 32 379.712 32 256ZM448 256C448 149.961 362.039 64 256 64C149.961 64 64 149.961 64 256C64 362.039 149.961 448 256 448C362.039 448 448 362.039 448 256ZM144 256C144 194.144 194.144 144 256 144C317.856 144 368 194.144 368 256C368 317.856 317.856 368 256 368C194.144 368 144 317.856 144 256ZM336 256C336 211.817 300.183 176 256 176C211.817 176 176 211.817 176 256C176 300.183 211.817 336 256 336C300.183 336 336 300.183 336 256ZM288 256C288 273.673 273.673 288 256 288C238.327 288 224 273.673 224 256C224 238.327 238.327 224 256 224C273.673 224 288 238.327 288 256Z" fill="currentColor"/>
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
