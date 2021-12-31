<script setup lang="ts">
import { ref } from "vue";
let isShow = ref(false);
</script>
<template>
  <button @click="isShow = true">modal!</button>
  <teleport to="body">
    <div v-if="isShow" class="modal">
      <div class="modal-content">I'm teleport modal</div>
    </div>
  </teleport>
</template>
<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}
</style>
