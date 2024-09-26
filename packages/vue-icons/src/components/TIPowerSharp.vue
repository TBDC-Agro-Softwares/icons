<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M277.999 48H233.999V272H277.999V48ZM47.9991 256.18C47.9991 370.77 141.309 464 255.999 464C370.689 464 463.999 370.77 463.999 256.18C463.994 194.123 436.165 135.338 388.169 96L371.169 82L343.169 115.82L360.169 129.82C398.037 160.849 419.995 207.223 419.999 256.18C419.999 346.57 346.429 420.11 255.999 420.11C165.569 420.11 91.9991 346.57 91.9991 256.18C91.8148 207.365 113.423 161.014 150.929 129.77L167.829 115.77L139.659 82.05L122.759 96.05C75.2121 135.611 47.7995 194.327 47.9991 256.18Z" fill="currentColor"/>
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
