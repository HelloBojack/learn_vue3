import axios from "axios";
axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;

export default axios;
