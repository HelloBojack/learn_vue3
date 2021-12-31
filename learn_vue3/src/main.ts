import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
function dateFormat(fmt = "YYYY-MM-DD", date: string | Date) {
  let ret;
  date = new Date(
    (date as string).length >= 13 ? Number(date) : Number(date) * 1000
  );
  const opt: {
    Y: string;
    M: string;
    D: string;
    h: string;
    m: string;
    s: string;
  } = {
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
      console.log(ret[1], fmt);
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1
          ? opt[k as keyof typeof opt]
          : opt[k as keyof typeof opt].padStart(ret[1].length, "0")
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
