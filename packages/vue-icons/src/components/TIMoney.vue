<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M269.496 242.51C300.215 249.982 333.701 259.669 333.701 298.136C333.701 324.437 315.683 347.374 278.079 353.966C273.236 354.814 269.496 358.886 269.496 363.803V376.557C269.496 381.851 265.205 386.142 259.912 386.142H256.387C251.094 386.142 246.803 381.851 246.803 376.557V364.438C246.803 359.372 242.854 355.213 237.824 354.61C217.199 352.138 197.793 345.64 184.651 336.758C181.152 334.393 180.175 329.815 181.894 325.958L186.351 315.954C188.922 310.185 196.319 308.415 201.789 311.574C214.51 318.92 230.574 324.039 246.803 325.534V270.185C216.084 262.713 183.151 252.75 183.151 214.282C183.151 188.008 200.894 164.85 238.165 158.423C243.031 157.584 246.803 153.503 246.803 148.565V135.584C246.803 130.291 251.094 126 256.387 126H259.912C265.205 126 269.496 130.291 269.496 135.584V147.639C269.496 152.731 273.485 156.898 278.538 157.527C293 159.328 307.151 163.523 318.832 169.621C322.907 171.748 324.425 176.68 322.696 180.94L318.493 191.295C316.297 196.705 309.82 198.881 304.519 196.431C292.864 191.045 280.928 187.902 269.496 186.607V242.51ZM246.803 187.438C227.154 190.482 218.851 200.445 218.851 212.622C218.851 225.905 230.752 231.994 246.803 236.699V187.438ZM269.496 275.997V324.981C289.699 321.936 298.278 312.527 298.278 300.627C298.278 287.066 286.101 280.701 269.496 275.997Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M468 256C468 373.084 373.084 468 256 468C138.916 468 44 373.084 44 256C44 138.916 138.916 44 256 44C373.084 44 468 138.916 468 256ZM432.667 256C432.667 353.57 353.57 432.667 256 432.667C158.43 432.667 79.3333 353.57 79.3333 256C79.3333 158.43 158.43 79.3333 256 79.3333C353.57 79.3333 432.667 158.43 432.667 256Z" fill="currentColor"/>
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
