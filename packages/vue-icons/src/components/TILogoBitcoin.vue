<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M410.47 279.2C405.47 267.7 397.77 257.6 382.37 249.1C374.41 244.6 365.861 241.234 356.97 239.1C362.952 236.321 368.454 232.608 373.27 228.1C380.35 221.771 385.716 213.757 388.87 204.8C391.774 195.698 392.96 186.136 392.37 176.6C391.27 159.8 387.97 143.5 379.17 131.8C370.37 120.1 357.97 111.1 341.57 104.8C328.97 100 316.07 97 296.07 95.9V32H256.07V96H224.07V32H183.07V96H96V144H123.87C132.57 144 138.47 144.8 141.47 146.3C144.261 147.494 146.557 149.613 147.97 152.3C149.27 154.8 149.87 160.7 149.87 169.8V343C149.87 352 149.27 357.8 147.97 360.4C146.67 363 145.97 365.3 142.87 366.7C139.77 368.1 139.67 368 131.07 368H104.67L96 416H183V480H224V416H256V480H296V415.6C322 414.3 340.5 410.9 355.4 405.3C374.7 398.1 389.5 387.6 400.1 373.8C410.7 360 414.1 338.9 415.03 322.6C415.7 308.1 415 289.4 410.47 279.2ZM224 150H256V224H224V150ZM224 362V272H256V362H224ZM296 153.9C302 156.4 305.9 161.4 309.8 166.6C314.1 172.3 316.3 179.9 316.3 188C316.3 195.8 313.4 202.5 308.8 208.5C305 213.4 302 216.8 296 219.6V153.9ZM324.8 340.6C317 347.5 312.5 350.7 302.7 354.4C300.508 355.172 298.271 355.806 296 356.3V273.5C299.912 274.079 303.718 275.224 307.3 276.9C315.1 280.2 322.5 283.8 327.1 290.1C332.201 297.336 334.99 305.948 335.1 314.8C335.07 325.7 332.27 334 324.77 340.6H324.8Z" fill="currentColor"/>
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
