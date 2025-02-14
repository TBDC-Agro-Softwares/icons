<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M400 48H112C76.6538 48 48 76.6538 48 112V400C48 435.346 76.6538 464 112 464H400C435.346 464 464 435.346 464 400V112C464 76.6538 435.346 48 400 48ZM112 80H400C417.673 80 432 94.3269 432 112V400C432 417.673 417.673 432 400 432H112C94.3269 432 80 417.673 80 400V112C80 94.3269 94.3269 80 112 80ZM362.291 163.749C355.525 158.065 345.432 158.943 339.749 165.709L217.183 311.619L171.893 261.297L171.647 261.03C165.705 254.715 155.775 254.277 149.297 260.107C142.728 266.019 142.196 276.135 148.107 282.703L205.707 346.703L205.942 346.958C212.48 353.923 223.674 353.645 229.851 346.291L364.251 186.291L364.478 186.015C369.91 179.253 368.966 169.356 362.291 163.749Z" fill="currentColor"/>
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
