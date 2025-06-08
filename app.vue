<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50">
      <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
        <Toast
          v-for="toast in toasts"
          :key="toast.id"
          :message="toast.message"
          @close="removeToast(toast.id)"
        />
      </div>
    </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useToast } from '~/composables/useToast';
import Toast from '~/components/Toast.vue';

const { toasts, removeToast } = useToast();
</script>
