<template>
    <header class="flex items-center justify-between px-6 py-4 bg-white border-b-2">
      <div class="flex items-center">
         <div class="relative mx-4 lg:mx-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
               <Icon name="uil:search" class="w-5 h-5 text-gray-500" />
            </span>
  
            <input class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Faça sua busca">
         </div>
      </div>
  
      <div class="flex items-center">
          <Icon name="uil:bell" class="w-6 h-6 text-gray-600" />
  
         <div class="flex items-center ml-6">
             <Icon name="uil:user-circle" class="w-10 h-10 text-gray-500" />
             <div class="ml-2 text-sm text-right">
                <p class="font-semibold text-gray-800">Olá, Cliente!</p>
                <p class="text-gray-600">Perfil movimentador</p>
             </div>
         </div>
      </div>
    </header>
  </template>