<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M210.39 73.0352C201.315 67.1414 190.721 64 179.89 64H104L103.074 64.0075C72.5731 64.502 48 89.3813 48 120V178.745C40.7151 181.32 34.082 185.643 28.7315 191.438C19.7821 201.131 15.2226 214.073 16.1062 227.218L16.1629 227.968L32.326 392.852L32.3498 393.846C33.3228 423.882 57.9501 447.947 88.222 448L423.75 448L424.676 447.991C454.556 447.455 478.697 423.566 479.651 393.828L479.673 392.852L495.837 227.968L495.849 227.825C496.915 214.498 492.373 201.33 483.319 191.493C477.961 185.671 471.309 181.328 464 178.744V152L463.992 151.074C463.498 120.573 438.619 96 408 96H252.11L251.603 95.9946C247.042 95.8981 242.598 94.503 238.796 91.968L210.955 73.4072L210.39 73.0352ZM432 176V152C432 138.878 421.469 128.215 408.397 128.003L408 128H252.11C241.278 128 230.684 124.858 221.61 118.965L221.045 118.593L193.204 100.032C189.402 97.4968 184.958 96.1018 180.397 96.0054L179.89 96H104C90.8777 96 80.2151 106.531 80.0032 119.603L80 120V176L432 176ZM64 208H448H448.071C452.52 208.019 456.761 209.89 459.774 213.164L460.044 213.465C462.794 216.608 464.206 220.702 463.978 224.871L463.955 225.203L447.756 390.439C447.722 390.785 447.7 391.132 447.688 391.479L447.68 392C447.68 405.238 436.96 415.977 423.722 416L88.25 416C75.1716 415.977 64.5346 405.452 64.3232 392.396L64.3115 391.479C64.3002 391.132 64.2775 390.785 64.2436 390.439L48.044 225.203L48.0491 225.275C47.6933 220.824 49.2136 216.427 52.2426 213.146C55.2715 209.866 59.5338 208 64 208Z" fill="currentColor"/>
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
