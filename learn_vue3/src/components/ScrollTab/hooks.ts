import { customRef, ref } from "vue";
export default function () {
  function useThrottlingRef(value: any, delay = 200) {
    let flag = true;
    return customRef((track, trigger) => {
      return {
        get() {
          track();
          return value;
        },
        set(newValue) {
          if (!flag) return;
          flag = false;
          setTimeout(() => {
            value = newValue;
            trigger();
            flag = true;
          }, delay);
        },
      };
    });
  }

  let scrollX = useThrottlingRef(0);
  let scrollY = useThrottlingRef(0);
  document.addEventListener("scroll", () => {
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;
  });
  return { scrollX, scrollY };
}
