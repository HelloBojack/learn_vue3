<script setup lang="ts">
import { ref } from "vue";
import Child from "./components/Child.vue";
import Child1 from "./components/Child1.vue";
let text = ref("Father Text");
const changeText = (value: string) => {
  console.log("changeText", value);
  text.value = value;
};
</script>
<template>
  <div>Demo Father</div>
  <Child :text="text" @changeText="changeText"></Child>
  <Child1 v-model:text="text"></Child1>
</template>
