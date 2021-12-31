<script setup lang="ts">
defineProps({ modelValue: Number });
defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    v-focus
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
