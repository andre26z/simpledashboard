<template>
   <header class="bg-white p-4 border-b border-gray-200">
     <div class="flex items-center gap-4">
 
       <div class="flex flex-shrink-0 items-center gap-4">
         <button @click="$emit('toggle-sidebar')" class="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none">
           <Icon name="uil:bars" class="w-6 h-6" />
         </button>
         <img src="/images/logo.svg" alt="Logo" class="h-8 w-auto">
       </div>
 
       <div class="flex w-full items-center justify-end gap-4 ml-auto">
 
         <div class="hidden md:flex w-full max-w-sm">
           <div class="relative w-full">
             <span class="absolute inset-y-0 left-0 flex items-center pl-3">
               <Icon name="uil:search" class="w-5 h-5 text-gray-400" />
             </span>
             <input type="text" placeholder="Faça sua busca" class="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
           </div>
         </div>
   
         <button class="p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
           <Icon name="uil:bell" class="w-6 h-6" />
         </button>
 
         <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
               <Icon name="uil:user-circle" class="w-8 h-8 text-gray-500" />
            </div>
            <div class="text-right hidden sm:block">
               <p class="text-sm font-semibold text-gray-800">Olá, Cliente!</p>
               <p class="text-xs text-gray-500">Perfil movimentador</p>
            </div>
         </div>
 
       </div>
       
     </div>
   </header>
 </template>
 
 <script setup>
 defineEmits(['toggle-sidebar']);
 </script>