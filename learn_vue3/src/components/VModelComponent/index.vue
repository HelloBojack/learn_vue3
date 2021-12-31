<script setup lang='ts'>
import { ref } from 'vue';
import CustomBtn from './components/CustomBtn.vue'
let value = ref(0)
</script>
<template>
<custom-btn v-model.number="value"></custom-btn>
{{value}}
</template>