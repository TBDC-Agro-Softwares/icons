<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM352 280C360.731 280 367.829 286.994 367.997 295.685L368 296V324C368 348.058 348.693 367.606 324.728 367.994L324 368H296C287.163 368 280 360.837 280 352C280 343.269 286.994 336.171 295.685 336.003L296 336H324C330.525 336 335.834 330.791 335.996 324.305L336 324V296C336 287.163 343.163 280 352 280ZM367.994 187.272C367.606 163.307 348.058 144 324 144H296L295.685 144.003C286.994 144.171 280 151.269 280 160C280 168.837 287.163 176 296 176H324L324.305 176.004C330.791 176.166 336 181.475 336 188V216L336.003 216.315C336.171 225.006 343.269 232 352 232C360.837 232 368 224.837 368 216V188L367.994 187.272ZM160 280C168.731 280 175.829 286.994 175.997 295.685L176 296V324C176 330.525 181.209 335.834 187.695 335.996L188 336H216C224.837 336 232 343.163 232 352C232 360.731 225.006 367.829 216.315 367.997L216 368H188C163.942 368 144.394 348.693 144.006 324.728L144 324V296C144 287.163 151.163 280 160 280ZM232 160C232 151.163 224.837 144 216 144H188L187.272 144.006C163.307 144.394 144 163.942 144 188V216L144.003 216.315C144.171 225.006 151.269 232 160 232C168.837 232 176 224.837 176 216V188L176.004 187.695C176.166 181.209 181.475 176 188 176H216L216.315 175.997C225.006 175.829 232 168.731 232 160Z" fill="currentColor"/>
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
