<template>
  <span class="roc-icon-plus" :class="classOptions" :style="styleOptions"></span>
</template>

<script lang="ts">
export default {
  name: 'RocIconPlus',
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'fas' | 'far' | 'fab'
    name: string
    size?: number | string
    color?: string
    rotate?: 0 | 90 | 180 | 270 | '0' | '90' | '180' | '270'
    animationType?:
      | ''
      | 'spin'
      | 'pulse'
      | 'beat'
      | 'fade'
      | 'beat-fade'
      | 'bounce'
      | 'flip'
      | 'shake'
  }>(),
  {
    type: 'fas',
    size: 16,
    color: '#606266',
    rotate: 0,
    animationType: '',
  },
)

const classOptions = {
  [`${props.type}`]: true,
  [`fa-${props.name}`]: true,
  [`fa-rotate-${props.rotate}`]: !!props.rotate,
  [`fa-${props.animationType}`]: !!props.animationType,
}
const styleOptions = {
  fontSize: String(props.size).includes('px') ? props.size : `${props.size}px`,
  color: props.color,
}
</script>

<style lang="scss" scoped>
$fa-font-path: 'styles/fonts';
@import 'styles/scss/fontawesome.scss';
@import 'styles/scss/brands.scss';
@import 'styles/scss/solid.scss';
@import 'styles/scss/regular.scss';
</style>
