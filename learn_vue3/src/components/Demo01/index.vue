<script setup lang="ts">
import { onMounted, ref } from "vue";
import Child from "./components/Child.vue";
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
let text = ref("Father Text");
const changeText = (value: string) => {
  console.log("changeText", value);
  text.value = value;
};
const refChild = ref(null);
onMounted(() => {
  console.log(refChild.value.text);
});
const changeChild2Text = () => {
  // refChild.value.text = refChild.value.text + "1";
  refChild.value.changeText();
};
</script>
<template>
  <div>Demo Father</div>
  <button @click="changeChild2Text">changeChild2Text</button>
  <Child :text="text" @changeText="changeText"></Child>
  <Child1 v-model:text="text"></Child1>
  <Child2 ref="refChild"></Child2>
</template>
