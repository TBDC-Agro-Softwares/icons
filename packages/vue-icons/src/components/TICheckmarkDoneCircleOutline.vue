<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM378.529 179.953C371.876 174.138 361.768 174.817 355.953 181.471L255.349 296.579L219.5 260.692L219.237 260.435C212.974 254.442 203.037 254.522 196.872 260.68C190.621 266.926 190.615 277.056 196.86 283.308L244.81 331.308L245.064 331.556C251.631 337.85 262.16 337.414 268.177 330.529L380.047 202.529L380.283 202.254C385.843 195.599 385.092 185.688 378.529 179.953ZM132.692 260.68C138.857 254.522 148.794 254.442 155.057 260.435L155.32 260.692L203.27 308.692C209.515 314.944 209.509 325.074 203.258 331.32C197.093 337.478 187.156 337.558 180.893 331.565L180.63 331.308L132.68 283.308C126.435 277.056 126.441 266.926 132.692 260.68ZM316.237 179.951C309.583 174.137 299.475 174.818 293.661 181.473L242.111 240.473L241.876 240.748C236.317 247.403 237.069 257.314 243.633 263.049C250.287 268.863 260.395 268.182 266.209 261.527L317.759 202.527L317.994 202.252C323.553 195.597 322.801 185.686 316.237 179.951Z" fill="currentColor"/>
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
