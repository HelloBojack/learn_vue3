<script setup lang="ts">
import {ref,onMounted} from 'vue'
const contactDiv=ref()
onMounted(()=>{
  console.log('mounted')
  console.log(contactDiv.value)
})
</script>
<template>
  Contact
  <div id='contact' ref='contactDiv'>contact</div>
</template>
