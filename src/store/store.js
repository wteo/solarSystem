import { reactive } from 'vue';

export const store = reactive({
    clickHandler(value) {
        value = !value;
      }
});