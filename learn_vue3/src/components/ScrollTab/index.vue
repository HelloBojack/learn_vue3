<script setup lang="ts">
import useScroll from "./hooks";
let { scrollX, scrollY } = useScroll();
</script>
<template>
  <button class="bottom">X: {{ scrollX }} Y: {{ scrollY }}</button>
</template>
<style>
.bottom {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 50px;
  background: #ccc;
}
html {
  height: 10000px;
  width: 10000px;
}
</style>
