<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M192 346H458C470.15 346 480 355.85 480 368C480 380.15 470.15 390 458 390H390V458C390 470.15 380.15 480 368 480C355.85 480 346 470.15 346 458V390H192C153.358 389.956 122.044 358.642 122 320V166H54C41.8497 166 32 156.15 32 144C32 131.85 41.8497 122 54 122H122V54C122 41.8497 131.85 32 144 32C156.15 32 166 41.8497 166 54V320C166 334.359 177.641 346 192 346ZM320 166H214C201.85 166 192 156.15 192 144C192 131.85 201.85 122 214 122H320C358.642 122.044 389.956 153.358 390 192V298C390 310.15 380.15 320 368 320C355.85 320 346 310.15 346 298V192C346 177.641 334.359 166 320 166Z" fill="currentColor"/>
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
