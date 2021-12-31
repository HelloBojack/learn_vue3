<script setup lang="ts">
import { useCounter, useTitle } from "./hooks";
let { count, increment } = useCounter();
let { setTitle } = useTitle();
</script>
<template>
  <div>
    {{ count }}
  </div>
  <button @click="increment">increment</button>
  <button @click="setTitle('title')">title</button>
</template>
