<template>
  <Header @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
  <div class="flex h-screen bg-gray-75">
    <Sidebar :isOpen="isSidebarOpen" />

    <div class="flex-1 flex flex-col overflow-hidden">
      

      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const isSidebarOpen = ref(true);
</script>