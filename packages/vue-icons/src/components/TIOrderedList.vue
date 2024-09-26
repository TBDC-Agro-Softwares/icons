<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="516" viewBox="0 0 512 516" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.3359 343.971H96.0026V354.696H74.6693V376.145H96.0026V386.87H53.3359V408.319H117.336V322.522H53.3359V343.971ZM74.6693 193.826H96.0026V108.029H53.3359V129.479H74.6693V193.826ZM53.3359 236.725H91.7359L53.3359 281.768V301.073H117.336V279.624H78.9359L117.336 234.58V215.276H53.3359V236.725ZM160.003 129.479V172.377H458.669V129.479H160.003ZM160.003 386.87H458.669V343.971H160.003V386.87ZM160.003 279.624H458.669V236.725H160.003V279.624Z" fill="currentColor"/>
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
