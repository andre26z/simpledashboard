<template>
   <header class="bg-white p-3 border-b border-gray-200">
     <div class="flex items-center gap-4">
 
       <div class="flex flex-shrink-0 items-center gap-4">
         <NuxtLink to="/">
         <img src="/images/logo.svg" alt="Logo" class="h-8 w-auto cursor-pointer">
        </NuxtLink>
        </div>
 
       <div class="flex w-full items-center justify-end mr-5">
 
         <div class="hidden md:flex w-full max-w-sm">
           <div class="relative w-full">
             <span class="absolute inset-y-0 left-0 flex items-center pl-3">
               <Icon name="uil:search" class="w-5 h-5 text-gray-400" />
             </span>
             <input type="text" placeholder="Faça sua busca" class="w-full pl-10 pr-4 py-2 bg-gray-100 border rounded-full border-transparent **:focus:outline-none focus:ring-2 focus:ring-indigo-500">
           </div>
         </div>
   
         <button class="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none">
           <Icon name="uil:bell" class="w-6 h-6" />
         </button>
 
         <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
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
