<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM352 166C360.837 166 368 173.163 368 182C368 190.731 361.006 197.829 352.315 197.997L352 198H224C215.163 198 208 190.837 208 182C208 173.269 214.994 166.171 223.685 166.003L224 166H352ZM352 238C360.837 238 368 245.163 368 254C368 262.731 361.006 269.829 352.315 269.997L352 270H224C215.163 270 208 262.837 208 254C208 245.269 214.994 238.171 223.685 238.003L224 238H352ZM368 325C368 316.163 360.837 309 352 309H224L223.685 309.003C214.994 309.171 208 316.269 208 325C208 333.837 215.163 341 224 341H352L352.315 340.997C361.006 340.829 368 333.731 368 325ZM168 158C154.745 158 144 168.745 144 182C144 195.255 154.745 206 168 206C181.255 206 192 195.255 192 182C192 168.745 181.255 158 168 158ZM168 174C172.418 174 176 177.582 176 182C176 186.418 172.418 190 168 190C163.582 190 160 186.418 160 182C160 177.582 163.582 174 168 174ZM144 255C144 241.745 154.745 231 168 231C181.255 231 192 241.745 192 255C192 268.255 181.255 279 168 279C154.745 279 144 268.255 144 255ZM176 255C176 250.582 172.418 247 168 247C163.582 247 160 250.582 160 255C160 259.418 163.582 263 168 263C172.418 263 176 259.418 176 255ZM168 302C154.745 302 144 312.745 144 326C144 339.255 154.745 350 168 350C181.255 350 192 339.255 192 326C192 312.745 181.255 302 168 302ZM168 318C172.418 318 176 321.582 176 326C176 330.418 172.418 334 168 334C163.582 334 160 330.418 160 326C160 321.582 163.582 318 168 318Z" fill="currentColor"/>
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
