<script setup lang="ts">
import { ref } from "vue";

let text = ref("Child2 Text");
const changeText = () => {
  text.value = text.value + "1";
};
defineExpose({
  text,
  changeText,
});
</script>
<template>
  <div>child2</div>
  <div>{{ text }}</div>
  <button @click="changeText">change</button>
</template>
