<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
  },
});
const emits = defineEmits(["update:text"]);
</script>
<template>
  <input
    type="text"
    :value="props.text"
    @input="(e) => emits('update:text', e.target.value)"
  />
</template>
