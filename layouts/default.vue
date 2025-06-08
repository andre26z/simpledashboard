<template>
  <Header />
  <div class="relative flex h-screen bg-gray-75">
    
    <Sidebar :isOpen="isSidebarOpen" />

    <button
      @click="isSidebarOpen = !isSidebarOpen"
      class="absolute cursor-pointer top-6 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg"
      :class="isSidebarOpen ? 'left-64' : 'left-20'"
      style="transform: translateX(-50%);"
    >
      <Icon :name="isSidebarOpen ? 'uil:angle-left-b' : 'uil:angle-right-b'" class="h-6 w-6 text-gray-600" />
    </button>

    <div class="flex-1 flex flex-col overflow-hidden">

      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(true);
</script>