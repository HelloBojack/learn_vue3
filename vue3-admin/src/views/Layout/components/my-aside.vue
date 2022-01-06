<script setup lang="ts">
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import request from "../server";
import MyIcon from "@/components/common/my-icon/index.vue";
let menuList = reactive([]);
const getMenu = async () => {
  let { menus } = await request.list();
  menus
    .filter((item) => item.type !== 2)
    .forEach((element) => {
      if (element.parentId) {
        let parent = menus.find((item) => item.id + "" === element.parentId);

        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(element);
        }
      } else {
        menuList.push(element);
      }
    });
  console.log(menuList);
};
getMenu();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <el-aside width="200px">
    <el-menu
      :router="true"
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in menuList">
        <el-sub-menu v-if="item.type == 0" :index="String(item.id)">
          <template #title>
            <!-- <my-icon :icon="item.icon"></my-icon> -->
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(item2, index2) in item.children">
            <el-menu-item :index="item2.id">{{ item2.name }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-aside>
</template>
<style>
.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}
.el-menu-vertical {
  height: 100%;
}
</style>
