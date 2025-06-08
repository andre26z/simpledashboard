<template>
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div class="max-w-sm w-full bg-gray-800 text-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="p-3">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon name="uil:check-circle" class="h-6 w-6 mt-2 text-green-400" />
            </div>
            <div class="ml-1 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium">
                {{ message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button @click="$emit('close')" class="inline-flex rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span class="sr-only">Close</span>
                <Icon name="uil:times" class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  defineProps({
    message: {
      type: String,
      required: true,
    },
  });
  
  defineEmits(['close']);
  </script>