<template>
    <div class="relative" @focusout="isDropdownOpen = false">
      
      <button 
        @click="isDropdownOpen = !isDropdownOpen" 
        class="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
      >
        <Icon name="uil:bell" class="w-6 h-6 cursor-pointer" />
      </button>
  
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-50 sm:w-80 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div class="p-3">
            <h3 class="text-sm font-semibold text-gray-800">Notificações</h3>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="p-4 text-center">
            <Icon name="uil:comment-alt-exclamation" class="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p class="text-sm text-gray-500">Você não tem novas notificações</p>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State to control dropdown visibility, tied to the bell icon button click
  const isDropdownOpen = ref(false);
  </script>