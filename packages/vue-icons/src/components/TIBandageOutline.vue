<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M318.366 46.3852L46.3911 318.36C6.13629 358.614 5.73374 423.63 45.1834 464.38L46.3981 465.615C87.0595 506.276 152.985 506.276 193.646 465.615L465.621 193.64C505.875 153.385 506.278 88.3696 466.828 47.6196L465.613 46.3852C424.952 5.72382 359.027 5.7238 318.366 46.3852ZM285.06 124.945L340.993 69.0126C368.876 41.1296 413.91 40.8508 442.136 68.1761L442.993 69.0197C471.158 97.1843 471.158 142.848 442.993 171.013L387.056 226.95C384.763 222.112 381.615 217.579 377.612 213.576L298.416 134.38C294.419 130.383 289.891 127.238 285.06 124.945ZM127.761 282.245L69.0185 340.987C40.8539 369.152 40.8539 414.816 69.0185 442.98L69.8757 443.824C98.1017 471.149 143.136 470.87 171.019 442.987L229.766 384.24C224.928 381.947 220.394 378.799 216.392 374.797L137.196 295.601C133.198 291.603 130.053 287.076 127.761 282.245ZM275.789 157.008L354.985 236.204C361.233 242.452 361.233 252.583 354.985 258.831L261.647 352.169C255.398 358.418 245.268 358.418 239.019 352.169L159.823 272.973C153.575 266.725 153.575 256.594 159.823 250.346L253.161 157.008C259.41 150.759 269.54 150.759 275.789 157.008ZM256 224C264.837 224 272 216.837 272 208C272 199.163 264.837 192 256 192C247.163 192 240 199.163 240 208C240 216.837 247.163 224 256 224ZM320 256C320 264.837 312.837 272 304 272C295.164 272 288 264.837 288 256C288 247.163 295.164 240 304 240C312.837 240 320 247.163 320 256ZM208 272C216.837 272 224 264.837 224 256C224 247.163 216.837 240 208 240C199.163 240 192 247.163 192 256C192 264.837 199.163 272 208 272ZM272 304C272 312.836 264.837 320 256 320C247.163 320 240 312.836 240 304C240 295.163 247.163 288 256 288C264.837 288 272 295.163 272 304Z" fill="currentColor"/>
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
