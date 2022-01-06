<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <el-icon>
    <component :is="props.icon" />
  </el-icon>
</template>
