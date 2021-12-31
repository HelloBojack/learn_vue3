<script setup lang="ts"></script>
<template>
  <div v-date="{ format: 'YYYY-MM-DD' }">{{ Date.now() }}</div>
  <div v-date="{ format: 'YYYY-MM-DD hh:mm:ss' }">{{ Date.now() }}</div>
  <div>{{ Date.now() }}</div>
</template>
