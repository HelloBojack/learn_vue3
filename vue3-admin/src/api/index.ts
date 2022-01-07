import axios from "@/server/index";

const api = {
  menu: {
    list: () => {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/menu/list")
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },
  },
  user: {
    login: (params) => {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/user/login", params)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },
    info: () => {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/user/info")
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },
  },
};

export default api;
