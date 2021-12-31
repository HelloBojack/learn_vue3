<script setup lang='ts'>
import useCounter from './hooks'
let { count, increment } = useCounter()
</script>
<template>
  <div>
   {{count}}
  </div>
  <button @click="increment">increment</button>

</template>