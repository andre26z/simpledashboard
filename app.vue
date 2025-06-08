<template>
  <div class="flex flex-col h-screen bg-gray-100 font-sans">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="container mx-auto px-6 py-8">
          <NuxtPage />
        </div>
      </main>
    </div>
  </div>
</template>


<style>
/* Optional: Add google font for a nicer look */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
</style>