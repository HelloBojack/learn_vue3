import { defineStore } from "pinia";
import storage from "@/util/storage";
import api from "@/api";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menu: storage.get("menu") || [],
  }),
  actions: {
    initMenu() {
      return api.menu.list().then(({ menus }) => {
        menus = menus
          .filter((item) => item.type !== 2)
          .map((element) => {
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
              return element;
            }
          })
          .filter((item) => item);
        this.updateMenu(menus);
      });
    },
    updateMenu(payload) {
      storage.set("menu", payload);
      this.menu = payload;
    },
  },
});
