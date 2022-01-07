import axios from "@/server/index";

const api = {
  menu: {
    list: () => {
      return new Promise((resolve, reject) => {
        axios.get("/api/menu/list").then((res) => resolve(res));
      });
    },
  },
};

export default api;
