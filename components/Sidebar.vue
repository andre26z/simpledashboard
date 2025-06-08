<template>
  <div class="relative flex flex-col bg-white shadow-lg transition-all duration-300 ease-in-out"
       :class="isOpen ? 'w-64' : 'w-20'">

    <nav class="flex-1 px-4 py-4">
      <NuxtLink to="/"  class="flex items-center p-2 text-gray-700 bg-gray-100 rounded-md" :class="{'justify-center': !isOpen}">
        <Icon name="uil:apps" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Visão geral</span>
      </NuxtLink>

      <a href="#" class="flex items-center p-2 mt-5 text-gray-600 rounded-md hover:bg-gray-100" :class="{'justify-center': !isOpen}">
         <Icon name="uil:chart-pie" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Análises</span>
      </a>

       <a href="#" class="flex items-center p-2 mt-5 text-gray-600 rounded-md hover:bg-gray-100" :class="{'justify-center': !isOpen}">
         <Icon name="uil:users-alt" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Clientes</span>
      </a>

      <NuxtLink 
        to="/assinaturas/nova" 
        class="flex items-center p-2 mt-5 text-gray-600 rounded-md hover:bg-gray-100" 
        :class="{'justify-center': !isOpen}"
      >
        <Icon name="uil:file-plus-alt" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Assinaturas</span>
      </NuxtLink>

      <a href="#" class="flex items-center p-2 mt-5 text-gray-600 rounded-md hover:bg-gray-100" :class="{'justify-center': !isOpen}">
        <Icon name="uil:cog" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Configurações</span>
      </a>
    </nav>
  </div>
</template>

<script setup>
// The component accepts a prop to determine its state
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>