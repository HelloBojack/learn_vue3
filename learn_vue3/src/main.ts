import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
function dateFormat(fmt, date) {
  let ret;
  date = new Date(Number(date));
  const opt = {
    Y: date.getFullYear().toString(), // 年
    M: (date.getMonth() + 1).toString(), // 月
    D: date.getDate().toString(), // 日
    h: date.getHours().toString(), // 时
    m: date.getMinutes().toString(), // 分
    s: date.getSeconds().toString(), // 秒
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + "+)").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
}
app.directive("date", {
  mounted(el, { value }) {
    el.innerHTML = dateFormat(value.format, el.innerHTML);
  },
});
app.mount("#app");
