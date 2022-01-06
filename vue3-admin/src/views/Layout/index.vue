<script setup lang="ts">
import myAside from "./components/my-aside.vue";
import myHeader from "./components/my-header.vue";
</script>
<template>
  <el-container>
    <my-aside></my-aside>
    <el-container>
      <my-header></my-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container {
  height: 100%;
}
.el-container:nth-child(2) {
  flex-direction: column;
}
</style>
