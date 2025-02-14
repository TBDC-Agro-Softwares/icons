<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M255.83 32C131.97 32 31.6222 130.186 31.9991 251.39C31.999 293.156 44.1453 334.061 66.9483 369.088L67.8946 370.53L68.1682 370.897L68.6 371.493C68.8828 371.893 69.1553 372.301 69.4172 372.716L69.74 373.24L69.8587 373.452C70.6091 374.802 71.1989 376.077 71.5484 377.097L71.626 377.335L52.5203 446.455C51.8864 448.61 51.4823 450.826 51.3146 453.066L51.2787 453.546L51.2717 454.027C51.1719 460.867 53.8139 467.462 58.6084 472.342C63.4029 477.222 69.9509 479.979 76.7917 480L77.6496 480.003L78.5029 479.913L79.1457 479.84C81.6951 479.521 84.196 478.897 86.5946 477.98L87.316 477.694L155.179 453.203L155.578 453.034C157.41 452.258 159.38 451.862 161.369 451.87C163.258 451.872 165.087 452.213 166.809 452.875C175.082 456.069 187.41 460.318 198.628 463.458C216.129 468.356 241.562 472.42 259.41 472.42C382.397 472.42 480 373.698 480 251.49C479.995 236.362 478.394 221.283 475.225 206.497C453.809 105.532 362.433 32 255.83 32ZM255.83 64C347.362 64 425.651 127.001 443.928 213.17C446.633 225.789 447.996 238.624 448 251.496C448 356.106 364.641 440.42 259.41 440.42C244.747 440.42 222.131 436.806 207.252 432.642L205.604 432.174C195.931 429.393 185.334 425.725 178.314 423.014C172.915 420.939 167.207 419.876 161.448 419.87L160.751 419.873C154.944 419.938 149.165 421.1 143.75 423.297L143.557 423.376L86.395 444.007L102.912 384.263C104.416 378.726 103.905 373.313 102.167 367.779C101.12 364.445 99.636 361.158 97.8479 357.94L97.3551 357.067L96.7401 356.055C96.0134 354.883 95.247 353.737 94.4424 352.617L94.164 352.237L94.3575 352.532C74.5544 322.5 63.999 287.316 63.999 251.34C63.6777 147.979 149.506 64 255.83 64Z" fill="currentColor"/>
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
