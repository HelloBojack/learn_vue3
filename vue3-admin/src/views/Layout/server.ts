import axios from "@/server/index";

const request = {
  list: () => {
    return new Promise((resolve, reject) => {
      axios.get("/api/menu/list").then((res) => resolve(res));
    });
  },
};

export default request;
