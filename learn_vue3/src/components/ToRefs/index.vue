<script setup lang='ts'>
import { reactive, toRefs } from 'vue';

const obj = reactive({name:"k",age:18})
let {name,age}=toRefs(obj)
</script>
<template>
  <div>
    <input type="text" v-model="obj.name">
    <input type="text" v-model="obj.age">
  </div>
  <div>
    {{name}}
    {{age}}
  </div>
</template>