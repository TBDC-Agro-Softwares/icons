<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M463.99 118.809C463.355 79.594 431.367 48 392 48H336L335.685 48.003C326.994 48.1708 320 55.2686 320 64C320 72.8366 327.163 80 336 80H392L392.661 80.0054C414.448 80.3586 432 98.1295 432 120V176L432.003 176.315C432.171 185.006 439.269 192 448 192C456.837 192 464 184.837 464 176V120L463.99 118.809ZM463.997 335.685C463.829 326.994 456.731 320 448 320C439.163 320 432 327.163 432 336V392L431.995 392.661C431.641 414.448 413.87 432 392 432H336L335.685 432.003C326.994 432.171 320 439.269 320 448C320 456.837 327.163 464 336 464H392L393.191 463.99C432.406 463.355 464 431.367 464 392V336L463.997 335.685ZM64 320C72.7314 320 79.8292 326.994 79.997 335.685L80 336V392C80 413.87 97.5522 431.641 119.339 431.995L120 432H176C184.837 432 192 439.163 192 448C192 456.731 185.006 463.829 176.315 463.997L176 464H120C80.6331 464 48.6455 432.406 48.0096 393.191L48 392V336C48 327.163 55.1634 320 64 320ZM192 64C192 55.1634 184.837 48 176 48H120L118.809 48.0096C79.594 48.6455 48 80.6331 48 120V176L48.003 176.315C48.1708 185.006 55.2686 192 64 192C72.8366 192 80 184.837 80 176V120L80.0054 119.339C80.3586 97.5522 98.1295 80 120 80H176L176.315 79.997C185.006 79.8292 192 72.7314 192 64Z" fill="currentColor"/>
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
