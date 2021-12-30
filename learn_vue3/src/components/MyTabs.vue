<script setup lang="ts">

defineProps<{ tabs: Array<{name:string,path:string,component:any}> }>()

</script>

<template>
  <template v-for="item in tabs">
    <slot name="tab" :item="item"></slot>
  </template>
</template>
