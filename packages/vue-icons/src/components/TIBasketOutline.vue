<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M268.59 63.1248C262.123 54.8677 249.531 54.9594 243.201 63.4L152.001 185H68.4173L67.819 185.004C48.1132 185.302 32.1773 201.277 32.0004 221.057L32 221.756L32.0142 222.456C32.1005 225.254 32.5375 228.05 33.3165 230.761L33.431 231.141L85.108 413.365L85.3186 414.095C92.4182 438.091 114.544 454.595 139.661 454.5L372.401 454.5L373.16 454.496C398.166 454.187 420.087 437.543 427.069 413.454L478.794 231.065L478.932 230.547C479.104 229.852 479.229 229.147 479.307 228.435L479.907 222.935L479.951 222.467C479.988 221.999 480.005 221.529 480 221.059C479.824 201.078 463.566 184.98 443.585 185H360.001L268.801 63.4L268.59 63.1248ZM320.001 185L256.001 99.667L192.001 185H320.001ZM443.601 217H68.3847C65.9788 216.998 64.0206 218.936 63.9988 221.377C63.9966 221.577 64.0254 221.775 64.0836 221.963L64.1939 222.335L115.903 404.666C118.845 415.122 128.323 422.37 139.212 422.499L139.601 422.5L372.415 422.5C383.366 422.51 393.019 415.361 396.197 405.006L396.308 404.635L447.641 223.63L447.955 220.743L447.952 220.716C447.652 218.747 446.042 217.211 444.03 217.02L443.813 217.005L443.601 217ZM320.001 319.076C320.001 286.967 294.061 260.984 262.027 260.931C229.994 260.878 203.968 286.774 203.861 318.807C203.755 350.841 229.608 376.91 261.641 377.07C293.797 377.078 319.849 351.155 320.001 319.076ZM261.974 292.93C247.593 292.907 235.909 304.533 235.861 318.914C235.813 333.295 247.42 344.998 261.725 345.07C276.188 345.074 287.933 333.387 288.001 319C288.001 304.619 276.355 292.954 261.974 292.93Z" fill="currentColor"/>
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
