import { defineStore } from "pinia";
import storage from "@/util/storage";
import api from "@/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: [],
  }),
  actions: {
    login(payload) {
      return api.user.login(payload).then(({ token }) => {
        this.setToken(token);
      });
    },
    setToken(token) {
      storage.set("token", token);
    },
    userInfo() {
      return api.user.info().then((res) => {
        this.setUserInfo(res);
      });
    },
    setUserInfo(userInfo) {
      storage.set("userInfo", userInfo);
    },
  },
});
