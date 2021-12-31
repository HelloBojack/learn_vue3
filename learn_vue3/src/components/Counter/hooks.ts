import { ref, watch } from "vue";

export const useCounter = function () {
  let count = ref(0);
  const increment = () => count.value++;
  return { count, increment };
};

export const useTitle = () => {
  let titleRef = ref("");
  const setTitle = (title: string) => (titleRef.value = title);
  watch(titleRef, (newTitle) => {
    document.title = newTitle;
  });
  return { titleRef, setTitle };
};
