<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM168 350C154.745 350 144 339.255 144 326C144 312.745 154.745 302 168 302C181.255 302 192 312.745 192 326C192 339.255 181.255 350 168 350ZM168 279C154.745 279 144 268.255 144 255C144 241.745 154.745 231 168 231C181.255 231 192 241.745 192 255C192 268.255 181.255 279 168 279ZM168 206C158.293 206 149.542 200.153 145.827 191.184C142.112 182.216 144.165 171.893 151.029 165.029C157.893 158.165 168.216 156.112 177.184 159.827C186.153 163.542 192 172.293 192 182C192 195.255 181.255 206 168 206ZM352 341H224C215.163 341 208 333.837 208 325C208 316.163 215.163 309 224 309H352C360.837 309 368 316.163 368 325C368 333.837 360.837 341 352 341ZM352 270H224C215.163 270 208 262.837 208 254C208 245.163 215.163 238 224 238H352C360.837 238 368 245.163 368 254C368 262.837 360.837 270 352 270ZM352 198H224C215.163 198 208 190.837 208 182C208 173.163 215.163 166 224 166H352C360.837 166 368 173.163 368 182C368 190.837 360.837 198 352 198Z" fill="currentColor"/>
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
