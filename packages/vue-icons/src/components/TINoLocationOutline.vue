<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="256" height="257" viewBox="0 0 256 257" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M163.465 24.4184C168.092 26.6117 168.762 32.6744 165.141 36.2954L164.818 36.618C162.286 39.1505 158.398 39.6436 155.124 38.1917C146.893 34.5419 137.703 32.5 128 32.5C92.5864 32.5 64 59.7003 64 93C64 101.824 66.2456 112.369 70.4606 124.285C71.5161 127.269 70.8251 130.611 68.587 132.849L68.3709 133.065C64.3564 137.08 57.5531 135.746 55.6372 130.402C50.6676 116.54 48 104.001 48 93C48 50.681 83.9228 16.5 128 16.5C140.724 16.5 152.768 19.3483 163.465 24.4184Z" fill="currentColor"/>
<path d="M127.75 71.5C128.58 71.5 128.95 72.4865 128.363 73.0734L104.573 96.8629C103.986 97.4498 103 97.08 103 96.25C103 82.581 114.081 71.5 127.75 71.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M73.8665 169.947L54.1569 189.657C51.0327 192.781 45.9673 192.781 42.8431 189.657C39.719 186.533 39.719 181.467 42.8431 178.343L201.843 19.3431C204.967 16.219 210.033 16.219 213.157 19.3431C216.281 22.4673 216.281 27.5327 213.157 30.6569L194.021 49.7928C202.836 62.0789 208 76.9545 208 93C208 114.257 198.054 141.237 180.795 172.399C168.839 193.986 154.656 215.301 140.804 234.006L140.697 234.15C137.749 238.072 133.152 240.412 128.246 240.488L128 240.49C122.92 240.49 118.147 238.06 115.157 233.953L114.478 233.034C101.095 214.882 87.442 194.334 75.825 173.498L75.2046 172.382C74.7536 171.567 74.3075 170.756 73.8665 169.947ZM123.226 120.588C124.693 120.858 126.205 121 127.75 121C141.419 121 152.5 109.919 152.5 96.25C152.5 94.7049 152.358 93.1929 152.088 91.7262L182.508 61.3053C188.529 70.5346 192 81.397 192 93C192 110.836 182.842 135.681 166.799 164.647L166.198 165.727C154.955 185.889 141.657 205.896 128.643 223.541L128.055 224.335C128.022 224.38 128.022 224.441 128.055 224.485C114.587 206.291 100.77 185.52 89.2016 164.631C87.9887 162.44 86.8151 160.274 85.6819 158.132L123.226 120.588Z" fill="currentColor"/>
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
