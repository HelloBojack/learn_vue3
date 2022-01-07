import { defineStore } from "pinia";
import api from "@/api";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menu: [],
  }),
  actions: {
    async getMenu() {
      let menuList = [];
      const { menus } = await api.menu.list();
      menus
        .filter((item) => item.type !== 2)
        .forEach((element) => {
          if (element.parentId) {
            let parent = menus.find(
              (item) => item.id + "" === element.parentId
            );
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
      this.updateMenu(menuList);
    },
    updateMenu(payload) {
      this.menu = payload;
    },
  },
});
