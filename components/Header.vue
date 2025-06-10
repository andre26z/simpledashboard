<template>
  <header class="bg-white p-3">
    <div class="flex items-center gap-4 mr-8">
      <div class="flex flex-shrink-0 items-center gap-4">
        <NuxtLink to="/">
          <img src="/images/logo.svg" alt="Logo" class="h-8 w-auto cursor-pointer" />
        </NuxtLink>
      </div>

      <div class="flex w-full items-center justify-end mr-5">
        <div class="hidden md:flex w-full max-w-sm">
          <div class="relative w-full mr-4">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon name="uil:search" class="w-5 h-5 text-gray-400" />
            </span>
            <input type="text" placeholder="Faça sua busca" class="w-full mr-10 pl-10 pr-2 py-2 bg-gray-100 border rounded-full border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500" />
          </div>
        </div>

        <NotificationDropdown />

        <div class="ml-4">
          <UserProfileDropdown />
        </div>
        
      </div>
    </div>
  </header>
</template>
