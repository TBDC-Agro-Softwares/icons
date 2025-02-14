<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M189.208 60.873C186.739 57.705 182.165 57.1343 178.991 59.5983L117.933 106.996L56.8745 59.5983L56.7468 59.5013C53.5788 57.15 49.0931 57.7472 46.6573 60.873C44.1886 64.0409 44.7604 68.6065 47.9344 71.0705L113.463 121.939L113.599 122.042C116.218 123.979 119.819 123.944 122.403 121.939L187.931 71.0705L188.056 70.9708C191.12 68.485 191.644 63.9987 189.208 60.873Z" fill="currentColor"/>
<path d="M181.815 178.313C179.218 178.313 177.113 180.414 177.113 183.005V183.592C177.113 186.184 179.218 188.285 181.815 188.285V198.843C181.815 201.435 183.92 203.536 186.517 203.536H188.28C190.877 203.536 192.982 201.435 192.982 198.843V188.285C195.578 188.285 197.683 186.184 197.683 183.592V183.005C197.683 180.414 195.578 178.313 192.982 178.313H181.815Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M194.382 29H41.4832C27.4092 29 16 40.3872 16 54.4341V163.437C16 177.484 27.4092 188.871 41.4832 188.871H134.209V220.547C134.209 224.111 137.103 227 140.674 227H233.535C237.105 227 240 224.111 240 220.547V165.994C240 162.43 237.105 159.542 233.535 159.542L230.454 159.542C229.681 150.062 225.815 141.457 219.865 134.731V54.4341C219.865 40.3872 208.456 29 194.382 29ZM205.303 124.002V54.4341C205.303 48.414 200.414 43.5338 194.382 43.5338H41.4832C35.4514 43.5338 30.5618 48.414 30.5618 54.4341V163.437C30.5618 169.457 35.4514 174.338 41.4832 174.338H134.209V165.994C134.209 162.43 137.103 159.542 140.674 159.542L144.931 159.542C146.725 137.538 165.184 120.24 187.692 120.24C193.969 120.24 199.93 121.585 205.303 124.002ZM187.692 129.625C205.003 129.625 219.247 142.73 221.009 159.542H154.375C156.137 142.73 170.382 129.625 187.692 129.625ZM143.613 217.614V168.927H230.596V217.614H143.613Z" fill="currentColor"/>
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
