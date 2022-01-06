import axios from "axios";
axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (res) => {
    const { code, data, message } = res.data;

    if (!res.data) {
      return res;
    }

    switch (code) {
      case 1000:
        return data;
      default:
        return Promise.reject(message);
    }
  }
  // async (error) => {

  //   if (error.response) {
  //     const { status, config } = error.response;

  //     switch (status) {
  //       case 401:
  //         await store.dispatch("userRemove");
  //         href("/login");
  //         break;

  //       case 403:
  //         if (isDev) {
  //           ElMessage.error(`${config.url} 无权限访问！！`);
  //         } else {
  //           href("/403");
  //         }
  //         break;

  //       case 404:
  //         break;

  //       case 500:
  //         if (!isDev) {
  //           href("/500");
  //         }
  //         break;

  //       case 502:
  //         if (isDev) {
  //           ElMessage.error(`${config.url} 服务异常！！`);
  //         } else {
  //           href("/502");
  //         }
  //         break;

  //       default:
  //         console.error(status, config.url);
  //     }
  //   }

  //   return Promise.reject(error.message);
  // }
);

export default axios;
