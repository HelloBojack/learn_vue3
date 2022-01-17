<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "Father Text",
  },
});
const emits = defineEmits(["changeText"]);
const childInputChange = (e) => {
  console.log("childInputChange", e.target.value);
  emits("changeText", e.target.value);
};
</script>
<template>
  <div style="border: 1px solid skyblue">
    <div>Child</div>
    <div>{{ props.text }}</div>
    <input type="text" :value="props.text" @input="childInputChange" />
  </div>
</template>
