// composables/useToast.js
import { ref, readonly } from 'vue';

// State should be defined outside the composable function to be a singleton
const toasts = ref([]);

export function useToast() {
  const showToast = (message, duration = 3000) => {
    const id = Date.now() + Math.random();
    toasts.value.push({ id, message });

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    const index = toasts.value.findIndex(toast => toast.id === id);
    if (index > -1) {
      toasts.value.splice(index, 1);
    }
  };

  return {
    toasts: readonly(toasts), // Expose as readonly to prevent external modification
    showToast,
    removeToast,
  };
}