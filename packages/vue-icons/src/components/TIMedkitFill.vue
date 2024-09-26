<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M432 96H384V80C383.972 53.5018 362.498 32.0276 336 32H176C149.502 32.0276 128.028 53.5018 128 80V96H80C44.6698 96.0386 16.0386 124.67 16 160V416C16 451.346 44.6538 480 80 480H432C467.346 480 496 451.346 496 416V160C495.961 124.67 467.33 96.0386 432 96ZM336 304H272V368C272 376.837 264.837 384 256 384C247.163 384 240 376.837 240 368V304H176C167.163 304 160 296.837 160 288C160 279.163 167.163 272 176 272H240V208C240 199.163 247.163 192 256 192C264.837 192 272 199.163 272 208V272H336C344.837 272 352 279.163 352 288C352 296.837 344.837 304 336 304ZM352 96H160V80C160 71.1634 167.163 64 176 64H336C344.837 64 352 71.1634 352 80V96Z" fill="currentColor"/>
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
