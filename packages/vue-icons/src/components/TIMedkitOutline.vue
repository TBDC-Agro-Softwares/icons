<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M383.994 79.2062C383.57 53.0627 362.245 32 336 32H176L175.206 32.0064C149.063 32.4303 128 53.7554 128 80V96H80C44.6538 96 16 124.654 16 160V416C16 451.346 44.6538 480 80 480H432C467.346 480 496 451.346 496 416V160C496 124.654 467.346 96 432 96H384V80L383.994 79.2062ZM352 96V80C352 71.2686 345.006 64.1708 336.315 64.003L336 64H176C167.269 64 160.171 70.9939 160.003 79.6851L160 80V96H352ZM144 128H80C62.3269 128 48 142.327 48 160V416C48 433.673 62.3269 448 80 448H432C449.673 448 464 433.673 464 416V160C464 142.327 449.673 128 432 128H368H144ZM256 192C264.731 192 271.829 198.994 271.997 207.685L272 208V272H336C344.837 272 352 279.163 352 288C352 296.731 345.006 303.829 336.315 303.997L336 304H272V368C272 376.837 264.837 384 256 384C247.269 384 240.171 377.006 240.003 368.315L240 368V304H176C167.163 304 160 296.837 160 288C160 279.269 166.994 272.171 175.685 272.003L176 272H240V208C240 199.163 247.163 192 256 192Z" fill="currentColor"/>
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
