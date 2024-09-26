<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M383.994 95.2062C383.57 69.0627 362.245 48 336 48H176L175.206 48.0064C149.063 48.4303 128 69.7554 128 96V112H80C44.6538 112 16 140.654 16 176V240V400C16 435.346 44.6538 464 80 464H432C467.346 464 496 435.346 496 400V240V176C496 140.654 467.346 112 432 112H384V96L383.994 95.2062ZM48 400V256H176V264L176.003 264.397C176.215 277.469 186.878 288 200 288H312L312.397 287.997C325.469 287.785 336 277.122 336 264V256H464V400C464 417.673 449.673 432 432 432H80C62.3269 432 48 417.673 48 400ZM320 224H464V176C464 158.327 449.673 144 432 144H368H144H80C62.3269 144 48 158.327 48 176V224H192H320ZM352 112V96C352 87.2686 345.006 80.1708 336.315 80.003L336 80H176C167.269 80 160.171 86.9939 160.003 95.6851L160 96V112H352Z" fill="currentColor"/>
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
