<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M388 161.77C388.212 156.202 386.092 150.798 382.15 146.86L270.15 34.86C264.431 29.1347 255.826 27.4198 248.349 30.5156C240.872 33.6114 235.998 40.9077 236 49V213.52L157 145.81C148.582 138.972 136.247 140.09 129.195 148.33C122.143 156.57 122.944 168.929 131 176.19L225.27 257L131 337.81C125.359 342.392 122.647 349.674 123.918 356.83C125.188 363.986 130.241 369.889 137.114 372.25C143.988 374.61 151.602 373.056 157 368.19L236 300.48V465C236.002 473.088 240.875 480.379 248.347 483.474C255.819 486.568 264.42 484.858 270.14 479.14L382.14 367.14C386.079 363.199 388.194 357.793 387.978 352.226C387.762 346.658 385.233 341.434 381 337.81L286.73 257L381 176.19C385.242 172.569 387.779 167.342 388 161.77ZM338.58 354.13L276 416.72V300.49L338.58 354.13ZM276 213.52V97.28L338.59 159.87L276 213.52Z" fill="currentColor"/>
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
