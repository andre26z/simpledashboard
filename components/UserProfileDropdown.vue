<template>
  <div class="relative" @focusout="closeDropdown">
    <div class="flex items-center gap-2" >
      <div class="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
        <Icon name="uil:user-circle" class="w-8 h-8 text-gray-500" />
      </div>
      <div class="text-right hidden sm:block">
        <p class="text-sm font-semibold text-gray-800">Olá, Andre!</p>
        <p class="text-xs text-gray-500">admin</p>
      </div>
      <button class="p-1 rounded-full hover:bg-gray-100 focus:outline-none">
        <Icon name="uil:angle-down" @click="toggleDropdown" class="w-5 h-5 cursor-pointer text-gray-600" />
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
        <a href="#" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="closeDropdown">
          Conta
        </a>
        <NuxtLink to="/assinaturas/nova" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="closeDropdown">
          Nova Assinatura
        </NuxtLink>
        <button class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="closeDropdown">
          Sair
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};


const closeDropdown = () => {
    setTimeout(() => {
        isDropdownOpen.value = false;
    }, 150);
};
</script>