<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 64C150 64 64 150 64 256C64 362 150 448 256 448C362 448 448 362 448 256C448 150 362 64 256 64ZM266.44 366H236.23C234.815 365.995 233.67 364.845 233.67 363.43V333.23C233.67 331.815 234.815 330.665 236.23 330.66H266.44C267.855 330.665 269 331.815 269 333.23V363.43C269 364.845 267.855 365.995 266.44 366ZM283.44 267C267.23 277.88 265 287.85 265 297V308C265 309.657 263.657 311 262 311H240C238.343 311 237 309.657 237 308V297C237 275.09 247.08 257.67 267.82 243.74C287.1 230.8 298 222.6 298 204.57C298 192.31 291 183 276.51 176.11C273.1 174.49 265.51 172.91 256.17 173.02C244.45 173.17 235.35 175.97 228.34 181.61C215.12 192.25 214 203.84 214 204C213.451 207.399 213.17 210.837 213.16 214.28C213.16 215.937 211.817 217.28 210.16 217.28H188.91C187.367 217.288 186.069 216.125 185.91 214.59C185.55 210.597 185.58 206.578 186 202.59C186.22 200.16 187.8 178.27 210.77 159.79C222.68 150.21 237.83 145.23 255.77 145.01C268.47 144.86 280.4 147.01 288.49 150.83C312.7 162.34 326 181.43 326 204.57C326 238.4 303.39 253.59 283.44 267Z" fill="currentColor"/>
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
