<script setup lang="ts">
import { ref } from 'vue';

  let counter=ref(0)
</script>
<template>
  Home
  <button @click="counter++" >{{counter}}</button>
</template>
