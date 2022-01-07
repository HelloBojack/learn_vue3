<script setup lang="ts">
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
import { computed, reactive, ref } from "vue";
import { useMenuStore } from "@/store/menu";
import MyIcon from "@/components/common/my-icon/index.vue";
import MenuHeader from "./menu-header.vue";

const menuStore = useMenuStore();
const menuList = computed(() => menuStore.menu);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <el-aside width="200px">
    <menu-header />
    <el-menu
      :router="true"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in menuList">
        <el-sub-menu v-if="item.type == 0" :index="item.name">
          <template #title>
            <!-- <my-icon :icon="item.icon"></my-icon> -->
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(item2, index2) in item.children">
            <el-sub-menu v-if="item2.type == 0" :index="item2.name">
              <template #title>
                <!-- <my-icon :icon="item.icon"></my-icon> -->
                <span>{{ item2.name }}</span>
              </template>
              <template v-for="(item3, index2) in item2.children">
                <el-menu-item :index="item3.name" :route="item3.router">
                  {{ item3.name }}
                </el-menu-item>
              </template>
            </el-sub-menu>
            <el-menu-item v-else :index="item2.name" :route="item2.router">
              {{ item2.name }}
            </el-menu-item>
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
