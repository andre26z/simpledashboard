<template>
  <div class="relative flex flex-col bg-white shadow-lg transition-all duration-300 ease-in-out"
       :class="isOpen ? 'w-64' : 'w-20'">

    <nav class="flex-1 px-4 py-4">
      <NuxtLink 
        to="/"  
        class="flex items-center p-2 rounded-md transition-colors" 
        :class="[
          isOpen ? '' : 'justify-center',
          route.path === '/' ? 'text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
        <Icon name="uil:apps" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Visão geral</span>
      </NuxtLink>

      <a 
        href="#" 
        class="flex items-center p-2 mt-5 rounded-md transition-colors"
        :class="[
          isOpen ? '' : 'justify-center',
          route.path.startsWith('/analises') ? 'text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
         <Icon name="uil:chart-pie" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Análises</span>
      </a>

      <a 
      href="#"  
         class="flex items-center p-2 mt-5 rounded-md transition-colors"
         :class="[
           isOpen ? '' : 'justify-center',
           route.path.startsWith('/clientes') ? 'text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
         <Icon name="uil:users-alt" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Clientes</span>
    </a>

      <NuxtLink 
        to="/assinaturas/nova" 
        class="flex items-center p-2 mt-5 rounded-md transition-colors" 
        :class="[
          isOpen ? '' : 'justify-center',
          route.path.startsWith('/assinaturas') ? 'text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
        <Icon name="uil:file-plus-alt" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Assinaturas</span>
      </NuxtLink>

    <a 
      href="#"  
        class="flex items-center p-2 mt-5 rounded-md transition-colors"
        :class="[
          isOpen ? '' : 'justify-center',
          route.path.startsWith('/configuracoes') ? 'text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'
        ]"
      >
        <Icon name="uil:cog" class="w-6 h-6 flex-shrink-0" />
        <span v-if="isOpen" class="mx-4 font-medium">Configurações</span>
    </a>
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'nuxt/app';

// Get the current route object to check the path
const route = useRoute();

// The component accepts a prop to determine its state
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>