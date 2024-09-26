<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M416 168C416 145.909 433.909 128 456 128C478.091 128 496 145.909 496 168C496 190.091 478.091 208 456 208C450.841 208 445.91 207.023 441.382 205.245L357.245 289.382C359.023 293.91 360 298.841 360 304C360 326.091 342.091 344 320 344C297.909 344 280 326.091 280 304C280 298.841 280.977 293.91 282.755 289.382L222.618 229.245C218.09 231.023 213.159 232 208 232C202.841 232 197.91 231.023 193.382 229.245L93.2449 329.382C95.0234 333.91 96 338.841 96 344C96 366.091 78.0914 384 56 384C33.9086 384 16 366.091 16 344C16 321.909 33.9086 304 56 304C61.1589 304 66.0896 304.977 70.6175 306.755L170.755 206.618C168.977 202.09 168 197.159 168 192C168 169.909 185.909 152 208 152C230.091 152 248 169.909 248 192C248 197.159 247.023 202.09 245.245 206.618L305.382 266.755C309.91 264.977 314.841 264 320 264C325.159 264 330.09 264.977 334.618 266.755L418.755 182.618C416.977 178.09 416 173.159 416 168ZM464 168C464 163.582 460.418 160 456 160C451.582 160 448 163.582 448 168C448 172.418 451.582 176 456 176C460.418 176 464 172.418 464 168ZM320 296C324.418 296 328 299.582 328 304C328 308.418 324.418 312 320 312C315.582 312 312 308.418 312 304C312 299.582 315.582 296 320 296ZM216 192C216 187.582 212.418 184 208 184C203.582 184 200 187.582 200 192C200 196.418 203.582 200 208 200C212.418 200 216 196.418 216 192ZM56 336C60.4183 336 64 339.582 64 344C64 348.418 60.4183 352 56 352C51.5817 352 48 348.418 48 344C48 339.582 51.5817 336 56 336Z" fill="currentColor"/>
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
