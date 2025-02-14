<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M271.999 63.6851C271.831 54.9939 264.733 48 256.002 48C247.165 48 240.002 55.1634 240.002 64V256L240.005 256.315C240.172 265.006 247.27 272 256.002 272C264.838 272 272.002 264.837 272.002 256V64L271.999 63.6851ZM388.15 95.6305C381.319 90.0256 371.237 91.0198 365.632 97.8513C360.027 104.683 361.022 114.765 367.853 120.369C408.467 153.692 432.008 203.464 432.002 255.998C432.002 353.163 353.165 432 256.002 432C158.838 432 80.0008 353.163 80.0008 256C79.8457 203.571 103.03 153.842 143.252 120.286C150.037 114.625 150.948 104.535 145.287 97.7501C139.627 90.9649 129.537 90.0534 122.752 95.7143C75.2174 135.372 47.8176 194.142 48.0009 256.047C48.0008 370.836 141.165 464 256.002 464C370.838 464 464.002 370.837 464.002 256C464.009 193.883 436.174 135.032 388.15 95.6305Z" fill="currentColor"/>
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
