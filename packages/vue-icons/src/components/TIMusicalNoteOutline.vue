<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M356.464 32.7083C363.051 30.9953 370.06 32.4279 375.447 36.5884C380.725 40.6639 383.868 46.9101 383.996 53.5678L384 53.9933L384 111.707C384.042 126.263 374.297 139.009 360.224 142.824L359.796 142.937L268.214 166.052C261.119 167.871 256.132 174.205 256.003 181.553L255.999 181.903L256 423.948C256.058 444.461 243.152 462.746 223.814 469.602L223.227 469.807L201.75 477.039C165.433 489.252 128 462.011 128 423.598C127.941 402.228 141.389 383.18 161.534 376.042L162.147 375.829L212.962 358.728C219.463 356.513 223.865 350.466 223.997 343.59L224 343.233L224 92.0448C223.954 77.5304 233.64 64.8071 247.616 60.9602L248.041 60.8464L356.464 32.7083ZM224 423.993V388.764L223.812 388.833L223.224 389.038L172.402 406.141C164.969 408.669 159.978 415.658 160 423.553C160 440.062 175.742 451.682 191.079 446.861L191.544 446.71L212.965 439.496C219.468 437.284 223.869 431.235 223.997 424.35L224 423.993ZM352 66.9253L256.097 91.8156C256.051 91.8276 256.017 91.8632 256.005 91.9337L256 91.9933L255.999 136.365L256.534 136.177C257.566 135.821 258.616 135.498 259.683 135.209L260.325 135.04L351.903 111.926C351.949 111.914 351.984 111.878 351.996 111.81L352 111.753L352 66.9253Z" fill="currentColor"/>
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
