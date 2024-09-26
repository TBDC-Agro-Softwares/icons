<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M320 176V16H32V496H160V400H192V496H480V176H320ZM112 432H80V400H112V432ZM80 352H112V320H80V352ZM112 272H80V240H112V272ZM80 192H112V160H80V192ZM112 112H80V80H112V112ZM272 80H240V112H272V80ZM192 352H160V320H192V352ZM160 272H192V240H160V272ZM192 192H160V160H192V192ZM160 112H192V80H160V112ZM272 432H240V400H272V432ZM240 352H272V320H240V352ZM272 272H240V240H272V272ZM240 192H272V160H240V192ZM448 208V464H320V432H352V400H320V352H352V320H320V272H352V240H320V208H448ZM416 400H384V432H416V400ZM384 320H416V352H384V320ZM416 240H384V272H416V240Z" fill="currentColor"/>
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
